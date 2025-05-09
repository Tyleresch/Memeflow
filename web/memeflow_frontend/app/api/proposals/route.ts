// app/api/proposals/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PublicKey } from '@solana/web3.js';
import { prisma } from '@/lib/prisma';

/* helpers ------------------------------------------------------------- */
const bad = (msg: string, code = 400) =>
  NextResponse.json({ error: msg }, { status: code });

/* POST /api/proposals -------------------------------------------------- */
export async function POST(req: NextRequest) {
  if (req.method !== 'POST') return bad('Method not allowed', 405);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return bad('Invalid JSON');
  }

  const { title, amount, wallet } = body as {
    title?: string;
    amount?: number | string;
    wallet?: string;
  };

  /* validate ---------------------------------------------------------- */
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

  /* write to your Meme table instead of non-existent Proposal --------- */
  try {
    const meme = await prisma.meme.create({
      data: {
        title:       title.trim(),
        // map amount (e.g. percentage) to basis points:
        royaltyBps:  lamports * 100,
        // placeholder since no image upload here:
        imageUrl:    'OFF_CHAIN_PLACEHOLDER',
        creator: {
          connectOrCreate: {
            where:  { wallet: walletKey.toBase58() },
            create: { wallet: walletKey.toBase58() },
          },
        },
      },
    });

    return NextResponse.json(meme, { status: 201 });
  } catch (err) {
    console.error('[POST /api/proposals]', err);
    return bad('Server error', 500);
  }
}
