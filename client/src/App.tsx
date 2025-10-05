import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState<string>('loading...');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((data) => setStatus(JSON.stringify(data)))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Phocusflow</h1>
      <pre>{status}</pre>
    </div>
  );
}

export default App;
