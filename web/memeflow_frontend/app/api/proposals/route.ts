// app/api/proposals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PublicKey } from '@solana/web3.js';
import { prisma } from '@/lib/prisma';
// import { getProvider } from '@/lib/solana'   // ←‑‑ re‑enable when Anchor is live
// import idl from '@/lib/treasury_idl.json';
// import { Program, BN } from '@coral-xyz/anchor';
// import { SystemProgram } from '@solana/web3.js';

/* -----------------------------------------------------------------------
   Helpers
------------------------------------------------------------------------ */
function bad(msg: string, code = 400) {
  return NextResponse.json({ error: msg }, { status: code });
}

/* -----------------------------------------------------------------------
   POST /api/proposals
------------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* 1 ·  validate input --------------------------------------------- */
    const { title, amount, wallet } = (await req.json()) as {
      title?: string;
      amount?: number | string;
      wallet?: string;
    };

    if (!title?.trim())          return bad('Missing title');
    if (amount == null)          return bad('Missing amount');
    if (!wallet)                 return bad('Missing wallet');

    const lamports = Number(amount);
    if (Number.isNaN(lamports) || lamports <= 0)
      return bad('Amount must be a positive number');

    let walletKey: PublicKey;
    try {
      walletKey = new PublicKey(wallet);
    } catch {
      return bad('Invalid wallet address');
    }

    /* 2 ·  (Anchor logic – commented until you deploy a program) ------ */
    /*
    const provider = getProvider({ publicKey: walletKey } as any);
    const program  = new Program(
      idl as any,
      process.env.NEXT_PUBLIC_TREASURY_PROGRAM!,
      provider
    );

    const [pda] = PublicKey.findProgramAddressSync(
      [Buffer.from('proposal'), provider.wallet.publicKey.toBuffer(), Buffer.from(title)],
      program.programId
    );

    await program.methods
      .createProposal(title, new BN(lamports))
      .accounts({
        treasuryState: pda,
        proposal:      pda,
        creator:       provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    const onChainKey = pda.toBase58();
    */

    /* 3 ·  off‑chain record ------------------------------------------- */
    const proposal = await prisma.proposal.create({
      data: {
        onChainKey: 'OFF_CHAIN_PLACEHOLDER', // replace with onChainKey later
        title:       title.trim(),
        amount:      lamports,
        creator: {
          connectOrCreate: {
            where:  { wallet: walletKey.toBase58() },
            create: { wallet: walletKey.toBase58() },
          },
        },
      },
    });

    return NextResponse.json(proposal, { status: 201 });
  } catch (err) {
    console.error('[POST /api/proposals] ', err);
    return bad('Server error', 500);
  }
}
