# Atividade Thiago

```markdown
# Exercício - Componentes do React - Parte 1

## Objetivos e Resultados

Neste exercício, você irá adicionar o primeiro componente ao seu aplicativo React e atualizar sua visualização usando JSX. Ao final deste exercício, você será capaz de:

- Adicionar componentes ao seu aplicativo React.
- Usar JSX para definir as exibições do seu componente.

## Adição de um Componente de Menu

### Passos:

1. **Baixar e descompactar o arquivo de imagens:**
   - Faça o download do arquivo `images.zip` fornecido e descompacte-o.
   - Crie uma pasta chamada `assets` dentro da pasta `public` do seu projeto React.
   - Mova a pasta de imagens, que contém alguns arquivos PNG, para a pasta `public/assets` do projeto. Esses arquivos de imagem serão úteis nos exercícios subsequentes.

2. **Criação do componente de menu:**
   - Crie uma nova pasta chamada `components` dentro da pasta `src` do projeto.
   - Dentro da pasta `components`, crie um arquivo chamado `MenuComponent.js`.
   - Adicione o seguinte código ao `MenuComponent.js`:

   ```js
   import React, { useState } from 'react';
   import { Media } from 'reactstrap';

   const Menu = () => {
     const [dishes] = useState([
       {
         id: 0,
         name: 'Uthappizza',
         image: 'assets/images/uthappizza.png',
         category: 'mains',
         label: 'Hot',
         price: '4.99',
         description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
       },
       {
         id: 1,
         name: 'Zucchipakoda',
         image: 'assets/images/zucchipakoda.png',
         category: 'appetizer',
         label: '',
         price: '1.99',
         description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.'
       },
       {
         id: 2,
         name: 'Vadonut',
         image: 'assets/images/vadonut.png',
         category: 'appetizer',
         label: 'New',
         price: '1.99',
         description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
       },
       {
         id: 3,
         name: 'ElaiCheese Cake',
         image: 'assets/images/elaicheesecake.png',
         category: 'dessert',
         label: '',
         price: '2.99',
         description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.'
       }
     ]);

     const menu = dishes.map((dish) => {
       return (
         <div key={dish.id} className="col-12 mt-5">
           <Media tag="li">
             <Media left middle>
               <Media object src={dish.image} alt={dish.name} />
             </Media>
             <Media body className="ml-5">
               <Media heading>{dish.name}</Media>
               <p>{dish.description}</p>
             </Media>
           </Media>
         </div>
       );
     });

     return (
       <div className="container">
         <div className="row">
           <Media list>
             {menu}
           </Media>
         </div>
       </div>
     );
   };

   export default Menu;
   ```

3. **Atualizar o arquivo `App.js`:**
   - Abra o arquivo `App.js` e adicione a importação do componente `MenuComponent`:
   
   ```js
   import Menu from './components/MenuComponent';
   ```

   - Em seguida, adicione o componente `<Menu />` no JSX da função `App`:

   ```js
   <Menu />
   ```

4. **Atualizar o arquivo `App.css`:**
   - Abra o arquivo `App.css` e **exclua todo o seu conteúdo**. Isso é feito para remover qualquer estilo indesejado que possa interferir no layout do seu componente.

5. **Commit no Git:**
   - Salve todas as alterações feitas.
   - Faça um commit no Git com a seguinte mensagem:

   ```bash
   git commit -m "Components Part 1"
   ```

## Como Funciona o Código

### 1. **Estrutura do Componente `Menu`**

- **Importações**: No início do arquivo `MenuComponent.js`, importamos o React e o hook `useState` de `react` para gerenciar o estado local do componente. Também importamos o componente `Media` do `reactstrap`, que é um conjunto de componentes de UI baseados no Bootstrap, para ajudar a estruturar a exibição do menu.
  
- **useState e Dados do Menu**: Dentro do componente, usamos o hook `useState` para armazenar o estado do menu. O estado é um array de objetos, onde cada objeto representa um prato do menu com suas propriedades como `id`, `name`, `image`, `category`, `price`, `description`, etc.

   ```js
   const [dishes] = useState([...]);
   ```

   Cada objeto no array representa um prato, com dados como nome, imagem e descrição.

- **Renderizando os Pratos**: O `menu` é criado com a função `map()`, que itera sobre cada item do array `dishes`. Para cada prato, ele cria um novo bloco de HTML que usa o componente `Media` para exibir a imagem do prato, seu nome e sua descrição.

   ```js
   const menu = dishes.map((dish) => {
     return (
       <div key={dish.id} className="col-12 mt-5">
         <Media tag="li">
           <Media left middle>
             <Media object src={dish.image} alt={dish.name} />
           </Media>
           <Media body className="ml-5">
             <Media heading>{dish.name}</Media>
             <p>{dish.description}</p>
           </Media>
         </Media>
       </div>
     );
   });
   ```

- **Estrutura Final**: O JSX que é retornado pelo componente inclui um contêiner `div` com a classe `container`, dentro do qual há uma `row` que envolve todos os pratos listados. O componente `Media` é usado para criar a estrutura visual.

   ```js
   return (
     <div className="container">
       <div className="row">
         <Media list>
           {menu}
         </Media>
       </div>
     </div>
   );
   ```

### 2. **Atualizando o Componente `App`**

No arquivo `App.js`, o componente `MenuComponent` é importado e adicionado ao JSX da função `App` com a tag `<Menu />`. Isso permite que o componente de menu seja exibido dentro do layout principal do aplicativo.

### 3. **Alterações no `App.css`**

No arquivo `App.css`, você é instruído a excluir todo o conteúdo para garantir que estilos não desejados não afetem o layout do componente. Isso pode ser útil quando estamos começando a trabalhar com componentes de UI externos, como o `reactstrap`, que pode ter seus próprios estilos.

## Conclusão

Neste exercício, adicionamos um novo componente ao nosso aplicativo React, fornecemos dados para o componente e, em seguida, atualizamos o aplicativo para exibir as informações na página da web. Esse exercício ajuda a consolidar os conceitos sobre como criar e usar componentes em React e como trabalhar com JSX para renderizar conteúdo dinâmico na interface.

Ao final deste exercício, você terá aprendido a:

- Criar componentes funcionais em React.
- Usar o hook `useState` para gerenciar dados dentro de um componente.
- Renderizar conteúdo dinâmico usando o `map()` e JSX.
- Integrar dados com componentes de UI como o `reactstrap`.

```

### Explicação

A estrutura do código e a lógica explicada no `README.md` ajudam a entender como cada parte do componente React funciona. A explicação abrange desde a criação de um estado para armazenar os dados do menu, até a forma como a exibição é organizada usando o `Media` do `reactstrap` para tornar a interface mais limpa e interativa. Isso é importante para quem está aprendendo a usar o React e seus hooks para construir componentes dinâmicos.
