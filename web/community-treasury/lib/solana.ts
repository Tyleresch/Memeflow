import { AnchorProvider, Wallet } from '@coral-xyz/anchor'
import { Connection } from '@solana/web3.js'

export function getProvider(wallet: Wallet) {
  const connection = new Connection(process.env.NEXT_PUBLIC_RPC_URL!)
  return new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions())
}
