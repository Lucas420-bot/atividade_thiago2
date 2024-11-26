# Atividade Thiago # Aula: 10

```markdown
# Projeto de Menu Interativo

## 📋 Alterações feitas na aula:
- Revisão do componente `MenuComponent.js`.
- Implementação de funções como `onDishSelect` e `renderDish`.
- Configuração de propriedades e mapeamento em `dishes.js`.
- Integração do componente `Menu` no `App.js`.

---

## 📂 Arquivos e Componentes

### `MenuComponent.js`
**Descrição:** Este arquivo define o menu principal exibido na interface do projeto.

#### 📦 Imports utilizados:
- **React:** Biblioteca principal para construir a interface.
- **Propriedades ou componentes adicionais:** Possivelmente incluem estilos, hooks ou utilitários.

#### 📌 Componentes:
- O componente exibe uma lista de itens (`dishes`) em formato interativo.
- Inclui métodos para lidar com a seleção e exibição de informações dos pratos.

#### ⚙️ Funções importantes:
- **`onDishSelect`:**  
  Define o prato selecionado, ajudando a atualizar o estado quando o usuário clica em um item.

- **`renderDish`:**  
  Renderiza os detalhes do prato selecionado, como nome, descrição e imagem.

- **`props.dishes.map`:**  
  Itera sobre a lista de pratos (`dishes`) para gerar elementos individuais dinamicamente.

---

### `dishes.js`
**Descrição:** Este arquivo contém os dados sobre os pratos disponíveis no menu.

#### 📌 Propriedades:
- Cada prato possui propriedades como:
  - `id`
  - `name`
  - `image`
  - `description`

#### 🔢 Tipo de dados utilizado:
- **Array de objetos:** Cada objeto representa um prato com as propriedades acima.

---

### `App.js`
**Descrição:** É o ponto central do projeto, onde os componentes principais são integrados.

#### ⚙️ Funções importantes:
- **`const [dishes]`:**  
  Define o estado que contém a lista de pratos (`dishes`) importados de `dishes.js`.

- **`<Menu dishes={dishes} />`:**  
  Passa a lista de pratos como propriedade para o componente `Menu`, permitindo que ele exiba os pratos dinamicamente.

---

## 🛠️ Tecnologias Utilizadas
- **React.js**
- **JavaScript (ES6+)**
- **CSS (se aplicável)**

---

## 📖 Como Executar
1. Certifique-se de ter o Node.js instalado.
2. Clone o repositório:
   ```bash
   git clone https://github.com/Lucas420-bot/atividade_thiago2.git
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd atividade_thiago2
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Execute o projeto:
   ```bash
   npm start
   ```

