import { NextRequest, NextResponse } from 'next/server'
import idl from '@/lib/treasury_idl.json'
import { getProvider } from '@/lib/solana'
import { prisma } from '@/lib/prisma'
import { Program, BN } from '@coral-xyz/anchor'
import { PublicKey, SystemProgram } from '@solana/web3.js'

export async function POST(req: NextRequest) {
  const { title, amount, wallet } = await req.json()

  const provider = getProvider({ publicKey: new PublicKey(wallet) } as any)
  const program  = new Program(idl as any,
    process.env.NEXT_PUBLIC_TREASURY_PROGRAM!, provider)

  // PDA derivation (simplified)
  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from('proposal'), provider.wallet.publicKey.toBuffer(), Buffer.from(title)],
    program.programId
  )

  await program.methods
    .createProposal(title, new BN(amount))
    .accounts({
      treasuryState: pda,                    // temporary placeholder
      proposal:      pda,
      creator:       provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc()

  const record = await prisma.proposal.create({
    data: {
      onChainKey: pda.toBase58(),
      title,
      amount,
      creator: { connectOrCreate: {
        where: { wallet },
        create: { wallet },
      }},
    },
  })

  return NextResponse.json(record)
}
