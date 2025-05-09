'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useCallback, useState } from 'react';

export function useLogin() {
  const { publicKey, signMessage } = useWallet();
  const [user, setUser] = useState<any>(null);

  const login = useCallback(async () => {
    if (!publicKey || !signMessage) return;

    const { nonce } = await fetch('/api/nonce').then((r) => r.json());

    const msg = new TextEncoder().encode('memeflow-login-' + nonce);
    const sigBytes = await signMessage(msg);

    const resp = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wallet: publicKey.toBase58(),
        signature: bs58.encode(sigBytes),
        nonce,
      }),
    }).then((r) => r.json());

    setUser(resp.user);
  }, [publicKey, signMessage]);

  return { login, user };
}
