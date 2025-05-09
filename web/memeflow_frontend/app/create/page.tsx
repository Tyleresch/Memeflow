// app/create/page.tsx
'use client';

import { useRef, useState, FormEvent } from 'react';
import { Upload, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** VERY light helper so we don’t repeat default styles */
const inputBox: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
  fontSize: '1rem',
};

export default function CreatePage() {
  /* ------------------------------------------------------------------ */
  /* state                                                              */
  /* ------------------------------------------------------------------ */
  const [file, setFile]             = useState<File | null>(null);
  const [caption, setCaption]       = useState('');
  const [nftName, setNftName]       = useState('');
  const [royalty, setRoyalty]       = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage]       = useState<'ok' | string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ------------------------------------------------------------------ */
  /* handlers                                                           */
  /* ------------------------------------------------------------------ */
  const chooseFile = () => fileInputRef.current?.click();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!file) return setMessage('Please select an image first');

    try {
      setSubmitting(true);
      setMessage(null);

      const body = new FormData();
      body.append('image',    file);
      body.append('title',    nftName || file.name);
      body.append('caption',  caption);
      body.append('royalty',  royalty.toString());

      // ◀️ changed endpoint here to match your API route
      const res = await fetch('/api/proposals', { method: 'POST', body });
      if (!res.ok) throw new Error(await res.text());

      setMessage('ok');
      // reset form
      setFile(null);
      setCaption('');
      setNftName('');
      setRoyalty(5);
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Upload failed');
    } finally {
      setSubmitting(false);
    }
  }

  /* ------------------------------------------------------------------ */
  /* UI                                                                 */
  /* ------------------------------------------------------------------ */
  return (
    <main style={{
      display: 'flex',
      minHeight: 'calc(100vh - 4rem)',
      flexDirection: 'column',
      backgroundColor: 'var(--background)',
      padding: '2rem 0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', width: '100%' }}>
        <form
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--foreground)' }}>
              Create Your Meme NFT
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--muted-foreground)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              Upload an image, add a caption, and mint your meme as an NFT on Solana.
            </p>
          </div>

          {/* 1 ·  UPLOAD */}
          <div style={{
            border: '2px dashed var(--border)',
            borderRadius: '1rem',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            backgroundColor: 'var(--card)',
            cursor: 'pointer',
          }}
          onClick={chooseFile}
          >
            <div style={{
              width: '5rem', height: '5rem',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              opacity: 0.1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Upload size={40} style={{ color: 'var(--primary)' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                {file ? file.name : 'Drag and drop your meme'}
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }}>
                or click to browse your files (PNG/JPG/GIF ≤ 10 MB)
              </p>
            </div>
            <Button type="button" onClick={chooseFile} style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 500,
              border: 'none',
            }}>
              Choose File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          {/* 2 ·  CAPTION */}
          <div style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--foreground)' }}>
                Add a Caption
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }}>
                Make your meme stand out with a catchy caption.
              </p>
            </div>

            <textarea
              placeholder="Enter your caption here…"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              style={{ ...inputBox, minHeight: '100px', resize: 'vertical' }}
            />

            {/* stub for AI caption */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--muted)',
              cursor: 'pointer',
            }}>
              <Sparkles size={20} style={{ color: 'var(--primary)' }} />
              <div>
                <p style={{ fontWeight: 500, color: 'var(--foreground)' }}>
                  Generate AI Caption
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                  Let AI suggest a funny caption based on your image
                </p>
              </div>
            </div>
          </div>

          {/* 3 ·  NFT SETTINGS */}
          <div style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--foreground)' }}>
                NFT Settings
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }}>
                Configure your NFT properties and royalties.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
                  NFT Name
                </label>
                <input
                  type="text"
                  placeholder="My Awesome Meme"
                  value={nftName}
                  onChange={(e) => setNftName(e.target.value)}
                  style={inputBox}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
                  Royalty Percentage (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={15}
                  value={royalty}
                  onChange={(e) => setRoyalty(Number(e.target.value))}
                  style={inputBox}
                />
              </div>
            </div>
          </div>

          {/* 4 ·  SUBMIT */}
          <Button
            type="submit"
            disabled={submitting}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: submitting ? 0.6 : 1,
            }}
          >
            {submitting ? 'Uploading…' : <>Mint Your Meme NFT <ArrowRight size={20} /></>}
          </Button>

          {/* tiny status line –- no layout shift */}
          {message && (
            <p style={{
              textAlign: 'center',
              fontSize: '0.875rem',
              color: message === 'ok' ? 'var(--primary)' : 'var(--destructive)',
            }}>
              {message === 'ok' ? 'Upload complete!' : message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
