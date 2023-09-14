import { useEffect } from "react"

function App() {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://aulas.devclub.com.br');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return <>Você será redicionado em 3 segundos...</>;
}

export default App
