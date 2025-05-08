import { NextRequest, NextResponse } from 'next/server'
import { getProvider } from '@/lib/solana'
import { prisma } from '@/lib/prisma'
// ---------------------------------------------------------------------------
// ⚠ Anchor‑specific code below is commented out for now.
//    When you deploy a Solana program and have a real IDL, uncomment these.
// ---------------------------------------------------------------------------
// import idl from '@/lib/treasury_idl.json'
// import { Program, BN } from '@coral-xyz/anchor'
import { PublicKey /*, SystemProgram */ } from '@solana/web3.js'

export async function POST(req: NextRequest) {
  const { title, amount, wallet } = await req.json()

  // -----------------------------------------------------------------------
  // Provider is still useful for client‑side signature checks, keep it.
  // -----------------------------------------------------------------------
  const provider = getProvider({ publicKey: new PublicKey(wallet) } as any)

  // -----------------------------------------------------------------------
  // Anchor logic—disabled until you have an on‑chain program + IDL.
  // -----------------------------------------------------------------------
  /*
  const program  = new Program(
    idl as any,
    process.env.NEXT_PUBLIC_TREASURY_PROGRAM!,
    provider
  )

  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from('proposal'), provider.wallet.publicKey.toBuffer(), Buffer.from(title)],
    program.programId
  )

  await program.methods
    .createProposal(title, new BN(amount))
    .accounts({
      treasuryState: pda,
      proposal:      pda,
      creator:       provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc()
  */

  // -----------------------------------------------------------------------
  // Temporary off‑chain record (keeps the API working without Anchor).
  // -----------------------------------------------------------------------
  const record = await prisma.proposal.create({
    data: {
      onChainKey: 'OFF_CHAIN_PLACEHOLDER', // replace with pda.toBase58() later
      title,
      amount,
      creator: {
        connectOrCreate: {
          where:  { wallet },
          create: { wallet },
        },
      },
    },
  })

  return NextResponse.json(record)
}
