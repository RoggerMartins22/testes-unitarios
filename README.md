# Projeto de Testes Unitários com React, Vite e Vitest

Este projeto é um exemplo de aplicação React com um formulário de login simples, utilizando **Vite** para o ambiente de desenvolvimento e **Vitest** + **Testing Library** para testes unitários.


Clone o repositório e instale as dependências:

```bash
git clone https://github.com/RoggerMartins22/testes-unitarios.git.git
cd testes-unitarios
npm install
```

## 💻 Executando o Projeto

Para rodar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 🧪 Executando os Testes

O projeto utiliza o **Vitest** com ambiente `jsdom` para simular o navegador.

Para rodar os testes uma vez:

```bash
npx vitest run
```

## ✅ Testes Implementados

- Verifica renderização do formulário de login
- Testa mensagem de erro com credenciais inválidas
- Testa tela de sucesso com credenciais válidas

---