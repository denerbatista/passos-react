
# Criação de Componentes: `Card` e `Utility` no React

Neste tutorial, vamos criar o componente `Card` e o componente `Utility` dentro da pasta `pages` do projeto React.

## Passo a Passo

### 1. Criar o componente `Card`
- Dentro da pasta `components`, crie uma pasta chamada `Card`.
- Dentro da pasta `Card`, crie os arquivos `index.tsx` e `style.css` com o seguinte conteúdo:

#### Arquivo `index.tsx`:

```tsx
import React from "react";
import "./style.css";

const Card: React.FC = () => {
  return (
    <div className="card">
      <img
        className="img-card"
        src="src\\assets\\escolta.png"
        alt="representação escolta armada"
      />
      <span className="span-card">Escolta Armada</span>
      <p className="p-card">
        Serviço de escolta armada para seu evento ou empresa
      </p>
    </div>
  );
};

export default Card;
```

#### Arquivo `style.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Jomhuria&display=swap");

.card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-height: 20rem;
  background-color: #ffffff8f;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
}

.img-card {
  max-width: 15rem;
}

.span-card {
  font-family: Jomhuria;
  font-size: 4rem;
  color: #063b00;
  align-self: flex-start;
  white-space: nowrap;
}

.p-card {
  font-family: Jomhuria;
  font-size: 2.5rem;
  color: #736666;
  text-align: left;
  margin: 0;
  padding: 0;
}
```

### 2. Criar o componente `Utility`
- Dentro da pasta `pages`, crie uma pasta chamada `Utility`.
- Dentro da pasta `Utility`, crie o arquivo `index.tsx` com o seguinte conteúdo:

#### Arquivo `index.tsx`:

```tsx
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";

const Utility: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Card />
      </Main>
    </>
  );
};

export default Utility;
```

### 3. Testando a nova página `Utility`

#### Modificar o arquivo `App.tsx`
- No diretório `src`, encontre o arquivo `App.tsx` e substitua seu conteúdo pelo seguinte código:

```tsx
import React from "react";
import Utility from "./pages/Utility";

const App: React.FC = () => {
  return (
    <>
      <Utility />
    </>
  );
};

export default App;
```

#### Rodar o comando no terminal
- Abra o terminal no diretório raiz do seu projeto.
- Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

#### Verificar o funcionamento no terminal
- Após rodar o comando, o terminal deve exibir algo assim:

```
VITE v5.4.3  ready in 803 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- **Segure \`Ctrl\` e clique no link** \`http://localhost:5173/\` para abrir a aplicação no navegador.

#### Verificar no navegador
- Verifique se a página `Utility` está sendo exibida corretamente com o `Header`, `Main`, e o `Card`.

---

Com esses componentes, você está adicionando o `Card` dentro do layout do `Utility`, garantindo uma integração entre o `Main` e o `Header`.
