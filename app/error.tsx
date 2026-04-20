'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log('[v0] Page error caught:', error.message)
    console.log('[v0] Error stack:', error.stack)
    console.log('[v0] Error digest:', error.digest)
  }, [error])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff4444', fontSize: '1.5rem', marginBottom: '1rem' }}>Runtime Error Caught</h1>
      <p style={{ marginBottom: '0.5rem' }}><strong>Message:</strong> {error.message}</p>
      {error.digest && <p style={{ marginBottom: '0.5rem' }}><strong>Digest:</strong> {error.digest}</p>}
      <pre style={{ background: '#2a2a2a', padding: '1rem', overflow: 'auto', fontSize: '0.75rem', marginTop: '1rem' }}>
        {error.stack}
      </pre>
      <button
        onClick={reset}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  )
}
