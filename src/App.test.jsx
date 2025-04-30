import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('Login Component', () => {
  test('renderiza o formulário de login', () => {
    render(<App />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  test('exibe erro com credenciais inválidas', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: 'usuario@email.com' },
    });
    fireEvent.change(screen.getByLabelText(/Senha/i), {
      target: { value: 'senhaerrada' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    expect(screen.getByText(/Credenciais inválidas/i)).toBeInTheDocument();
  });

  test('mostra tela de sucesso com credenciais válidas', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: 'admin@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText(/Senha/i), {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    expect(screen.getByText(/Login bem-sucedido/i)).toBeInTheDocument();
  });
});
