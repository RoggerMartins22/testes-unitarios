import React, { useState } from 'react';
import './index.css';

function SuccessPage() {
  return (
    <div className="container">
      <div className="login-form">
        <h2 className="login-title">Login bem-sucedido ✅</h2>
        <p>Bem-vindo! Você foi autenticado com sucesso.</p>
      </div>
    </div>
  );
}

function LoginForm({ onSubmit, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">Login</h2>

      <label htmlFor="email" className="login-label">E-mail</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
        placeholder="Digite seu e-mail"
      />

      <label htmlFor="password" className="login-label">Senha</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
        placeholder="Digite sua senha"
      />

      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}

      <button type="submit" className="login-button">Entrar</button>
    </form>
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = ({ email, password }) => {
    if (email === 'admin@gmail.com' && password === '123456') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="container">
      {authenticated ? (
        <SuccessPage />
      ) : (
        <LoginForm onSubmit={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
