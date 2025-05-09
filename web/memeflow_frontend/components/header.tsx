// app/components/header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Upload } from 'lucide-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const outlineBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.25rem',
    height: '2.25rem',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem',
    background: 'var(--secondary)',
    color: 'var(--muted-foreground)',
  };

  const primaryBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    height: '2.25rem',
    padding: '0 1rem',
    borderRadius: '0.5rem',
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    fontWeight: 500,
    border: 0,
  };

  const srOnly: React.CSSProperties = {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    border: 0,
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        borderBottom: '1px solid var(--border)',
        background: 'var(--background)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          height: '4rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem',
        }}
      >
        {/* logo + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Button
            variant="ghost"
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
            <span style={srOnly}>Toggle menu</span>
          </Button>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image
              src="/memeflow.png"
              alt="MemeFlow Logo"
              width={40}
              height={40}
              style={{ borderRadius: '0.375rem' }}
            />
            <span style={{ fontWeight: 700 }}>MemeFlow</span>
          </Link>
        </div>

        {/* desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {['Explore', 'Create', 'Profile', 'About'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* utilities */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={outlineBtn}>
            <ModeToggle />
          </div>

          <button type="button" style={outlineBtn}>
            <Search style={{ width: '1rem', height: '1rem' }} />
            <span style={srOnly}>Search</span>
          </button>

          <WalletMultiButton />

          <Link href="/create" style={primaryBtn}>
            <Upload style={{ width: '1rem', height: '1rem' }} />
            Create
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            width: '100%',
            background: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Home', 'Explore', 'Create', 'Profile', 'About'].map((label) => (
              <Link
                key={label}
                href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--foreground)' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
