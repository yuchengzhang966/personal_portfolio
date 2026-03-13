export async function register() {
  // Node 21+ adds a broken localStorage global that crashes Next.js SSR.
  // Replace it with a no-op shim on the server side.
  if (typeof window === 'undefined' && typeof globalThis.localStorage !== 'undefined') {
    const noop = () => {};
    (globalThis as any).localStorage = {
      getItem: noop,
      setItem: noop,
      removeItem: noop,
      clear: noop,
      key: noop,
      length: 0,
    };
  }
}
