
# Reorganizando Componentes e Criando Páginas no React

Neste tutorial, vamos reorganizar os componentes `Header` e `Main`, criar um novo componente `MainHome` e adicionar uma página `Home` ao nosso projeto React. Também vamos discutir o conceito de componentes comuns e páginas.

## Conceito de Páginas e Componentes Comuns

### Páginas
No contexto de desenvolvimento web, **páginas** (ou "pages") são componentes responsáveis por representar diferentes rotas da aplicação. Elas geralmente contêm a estrutura geral da interface e organizam os **componentes comuns** dentro delas, como cabeçalhos, rodapés e seções de conteúdo. As páginas podem ser acessadas por meio de um roteador, representando URLs específicas da aplicação.

### Componentes Comuns
Os **componentes comuns** são unidades reutilizáveis da interface que podem ser inseridas em várias páginas ou outros componentes. Eles são focados em uma única responsabilidade, como exibir um cabeçalho (`Header`) ou uma seção de conteúdo (`Main`). Esses componentes são feitos para serem flexíveis e reutilizados em várias partes do projeto.

## Passo a Passo

### 1. Criar as pastas `Header` e `Main`
- Navegue até o diretório onde seus componentes `Header` e `Main` estão localizados.
- Crie duas novas pastas chamadas `Header` e `Main`.

### 2. Mover arquivos para as respectivas pastas
- Mova os arquivos `Header.tsx` e `Header.css` para dentro da pasta `Header`.
- Mova os arquivos `Main.tsx` e `Main.css` para dentro da pasta `Main`.

### 3. Renomear os arquivos
- Dentro da pasta `Header`, renomeie os seguintes arquivos:
  - `Header.tsx` para `index.tsx`.
  - `Header.css` para `style.css`.

- Dentro da pasta `Main`, renomeie os seguintes arquivos:
  - `Main.tsx` para `index.tsx`.
  - `Main.css` para `style.css`.

### 4. Alterar o conteúdo do `index.tsx` na pasta `Main`
Substitua o conteúdo do arquivo `index.tsx` na pasta `Main` pelo seguinte código para tornar o componente reutilizável:

```tsx
import React from "react";
import "./style.css";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="main-content">
      <div className="background-image" />
      <div className="content">{children}</div>
    </main>
  );
};

export default Main;
```

### 5. Criar o novo componente `MainHome`
Na pasta `MainHome`, crie um arquivo `index.tsx` e adicione o seguinte código:

```tsx
import React from "react";
import "./style.css";
import Main from "../Main";

const MainHome: React.FC = () => {
  return (
    <Main>
      <h1>SLOGAN EM CAIXA ALTA</h1>
      <p>Nós oferecemos soluções inovadoras para melhorar a sua empresa.</p>
      <button className="cta-button">Faça um Orçamento</button>
    </Main>
  );
};

export default MainHome;
```

### 6. Criar a pasta `pages` e o componente `Home`
- Dentro do diretório `src`, crie uma nova pasta chamada `pages`.
- Dentro da pasta `pages`, crie uma pasta chamada `Home` e um arquivo `index.tsx` com o seguinte conteúdo:

```tsx
import React from "react";
import Header from "../../components/Header";
import MainHome from "../../components/MainHome";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainHome />
    </>
  );
};

export default Home;
```

### 7. Observação sobre o VSCode
- **Ao renomear os arquivos no VSCode**, uma mensagem aparecerá perguntando se deseja **atualizar as importações automaticamente**.
  - **É muito importante que você clique em "Aceitar"**. Isso garantirá que todas as importações dos componentes `Header`, `Main`, `MainHome` e `Home` sejam automaticamente ajustadas para refletir as alterações feitas.

### 8. Modificar o arquivo `App.tsxx`
- No diretório `src`, encontre o arquivo `App.tsxx` e substitua seu conteúdo pelo seguinte código:

```tsx
import React from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
```

### 9. Rodar o comando no terminal
- Abra o terminal no diretório raiz do seu projeto.
- Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

### 10. Verificar o funcionamento no terminal
- Após rodar o comando, o terminal deve exibir algo assim:

```bash
VITE v5.4.3  ready in 803 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- **Segure \`Ctrl\` e clique no link** \`http://localhost:5173/\` para abrir a aplicação no navegador.

### 11. Verificar no navegador
- Verifique se a página `Home` está sendo exibida corretamente com o `Header` e o `MainHome`.

### Estrutura final

Após seguir os passos, a estrutura dos componentes e páginas ficará assim:

```
src/
│
└───components/
│   └───Header/
│   │   │   index.tsx
│   │   │   style.css
│   └───Main/
│   │   │   index.tsx
│   │   │   style.css
│   └───MainHome/
│       │   index.tsx
│
└───pages/
    └───Home/
        │   index.tsx
```

Agora, os componentes `Header`, `Main`, `MainHome` e a página `Home` estão organizados de forma eficiente e prontos para serem reutilizados.

---
