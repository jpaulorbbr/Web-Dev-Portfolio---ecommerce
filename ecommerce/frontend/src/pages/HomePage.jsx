import { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState(null);   // ← Correto em JS

  useEffect(() => {
    // Temporário: só para testar se a página carrega
    console.log("HomePage carregada!");
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-4 fw-bold text-center mb-4">
        Bem-vindo ao Department Store
      </h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <p className="lead mb-5">
            Página inicial convertida para React com sucesso!
          </p>
          
          <div className="p-5 bg-light rounded-3">
            <h2>✅ Tudo funcionando</h2>
            <p>Agora você pode começar a colocar o conteúdo da antiga <code>home.html</code> aqui.</p>
          </div>
        </div>
      </div>
    </div>
  );
}