# Configuração do Projeto com React e Vite

## Passo 1: Abra o visual Studio Code clique em file e open Folder e abra a pasta projetos:

![](./passo%201.png)

![](./passo%201.2.png)

## Passo 2: Abra o terminal com o atalho Ctrl + “  e  digite o seguinte comando:

![](./passo%202.png)

### Com as setas do teclado escolha React:

![](./passo%202.2.png)

### Depois Typscript:

![](./passo%202.3.png)

## Passo 3: Estrutura Inicial de Componentes

1. Dentro da pasta `src`, crie uma pasta chamada `components`.
2. Dentro de `components`, crie os arquivos:
   - `Header.tsx` para o cabeçalho (logo + menu hambúrguer).
   - `Main.tsx` para o conteúdo principal (imagem em blur, slogan, descrição e botão).
   - `App.css` para estilização global.

## Passo 4: Criação do Header (Logo e Menu Hambúrguer)

1. No arquivo `Header.tsx`, adicione o seguinte código:

   ```tsx
   import React, { useState } from 'react';
   import './Header.css';

   const Header: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
       setIsOpen(!isOpen);
     };

     return (
       <header className="header">
         <div className="logo">LOGO</div>
         <div className="menu-hamburger" onClick={toggleMenu}>
           ☰
         </div>
         <nav className={`menu ${isOpen ? 'open' : ''}`}>
           <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#services">Serviços</a></li>
             <li><a href="#contact">Contato</a></li>
           </ul>
         </nav>
       </header>
     );
   };

   export default Header;
   ```

2. No arquivo `Header.css`, estilize o menu hambúrguer e a logo:

   ```css
   .header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 1rem;
     background-color: #333;
     color: white;
   }

   .logo {
     font-size: 1.5rem;
   }

   .menu-hamburger {
     font-size: 2rem;
     cursor: pointer;
   }

   .menu {
     display: none;
   }

   .menu.open {
     display: block;
   }

   @media (min-width: 768px) {
     .menu {
       display: block;
     }

     .menu-hamburger {
       display: none;
     }
   }
   ```

## Passo 5: Criação do Main (Slogan, Imagem e Botão)

1. No arquivo `Main.tsx`, crie o conteúdo principal da página:

   ```tsx
   import React from 'react';
   import './Main.css';

   const Main: React.FC = () => {
     return (
       <main className="main-content">
         <div className="background-image"></div>
         <div className="content">
           <h1>SLOGAN EM CAIXA ALTA</h1>
           <p>Nós oferecemos soluções inovadoras para melhorar a sua empresa.</p>
           <button className="cta-button">Faça um Orçamento</button>
         </div>
       </main>
     );
   };

   export default Main;
   ```

2. No arquivo `Main.css`, estilize o conteúdo principal com a imagem de fundo e o texto sobreposto:

   ```css
   .main-content {
     position: relative;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     color: white;
   }

   .background-image {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-image: url('/path-to-your-image.jpg');
     background-size: cover;
     background-position: center;
     filter: blur(8px);
     z-index: -1;
   }

   .content {
     z-index: 1;
     padding: 1rem;
   }

   h1 {
     font-size: 3rem;
     text-transform: uppercase;
   }

   p {
     font-size: 1.25rem;
     margin: 1rem 0;
   }

   .cta-button {
     padding: 0.75rem 1.5rem;
     background-color: #007BFF;
     color: white;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     font-size: 1rem;
   }

   @media (max-width: 768px) {
     h1 {
       font-size: 2rem;
     }

     p {
       font-size: 1rem;
     }

     .cta-button {
       font-size: 0.875rem;
     }
   }
   ```

## Passo 6: Importação e Uso dos Componentes no App

1. No arquivo `App.tsx`, importe os componentes e organize a página:

   ```tsx
   import React from 'react';
   import Header from './components/Header';
   import Main from './components/Main';
   import './App.css';

   const App: React.FC = () => {
     return (
       <div className="App">
         <Header />
         <Main />
       </div>
     );
   };

   export default App;
   ```

## Passo 7: Testando Responsividade

1. Abra a página no navegador e utilize as ferramentas de desenvolvedor (F12) para testar o design em diferentes tamanhos de tela, como celulares, tablets e desktops.
2. Ajuste a estilização conforme necessário para garantir que o layout se adapte bem a todos os dispositivos.
