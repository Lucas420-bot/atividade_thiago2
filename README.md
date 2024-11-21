<<<<<<< HEAD
# atividade_thiago2

=======
# **Atividade Thiago 2**

## **Descrição do Projeto**
Este repositório foi criado para a atividade proposta pelo professor Thiago e tem como objetivo consolidar conhecimentos em **Git**, **GitHub** e no desenvolvimento de um aplicativo React básico. O projeto aborda práticas de versionamento de código, configuração inicial de projetos React e gerenciamento de repositórios remotos.

---

## **Estrutura do Repositório**
A organização do repositório é a seguinte:

atividade_thiago2/ │ ├── README.md # Documentação principal do projeto. ├── .gitignore # Arquivo para ignorar certos arquivos no versionamento. ├── uc13_exerc_roteiro_aula05.md # Roteiro com as instruções do exercício React. └── <outros arquivos principais> # Ex.: index.js, App.js, etc.

markdown
Copiar código

### **Descrição dos arquivos principais**
- `README.md`: Este arquivo contém a documentação detalhada do repositório.
- `.gitignore`: Define arquivos ou diretórios que devem ser ignorados pelo Git.
- `uc13_exerc_roteiro_aula05.md`: Roteiro detalhado para a criação de um aplicativo React básico.

---

## **Histórico de Alterações**

### **1. Inicialização do Repositório**
O projeto foi iniciado localmente com os seguintes comandos:

1. Criação do repositório:
   ```bash
   git init
Adição dos primeiros arquivos ao controle de versão:
bash
Copiar código
git add .
Realização do primeiro commit:
bash
Copiar código
git commit -m "Initial commit"
2. Configuração do Repositório Remoto
Após a inicialização local, o repositório foi conectado ao GitHub com os comandos:

Adição do repositório remoto:
bash
Copiar código
git remote add origin https://github.com/Lucas420-bot/atividade_thiago2.git
Envio inicial dos arquivos:
bash
Copiar código
git push -u origin main
3. Resolução de Conflitos
Ao tentar fazer o push, foi exibido o erro de rejeição devido à existência de alterações no repositório remoto. Para resolver, foi realizado o seguinte:

Sincronização com o repositório remoto:
bash
Copiar código
git pull origin main --rebase
Resolução manual de conflitos:
Arquivos conflitantes foram corrigidos e marcados como resolvidos:
bash
Copiar código
git add <arquivo_conflitante>
Continuação do rebase:
bash
Copiar código
git rebase --continue
Após resolver os conflitos, foi feito o push final:
bash
Copiar código
git push origin main
Exercício: Primeiros Passos com React
Objetivos e Resultados
Este exercício tem como objetivo instalar e configurar um aplicativo React básico usando a ferramenta create-react-app. Após a realização, você será capaz de:

Instalar o create-react-app.
Criar um aplicativo React básico.
Executar o aplicativo no navegador.
Inicializar e sincronizar o projeto com um repositório Git.
Passos Realizados
1. Instalação do Yarn ou npm
O Yarn foi recomendado por ser mais rápido e adequado para aplicativos React.
Instalação do Yarn:
bash
Copiar código
npm install -g yarn
Caso prefira, você pode continuar usando o npm.
2. Instalando o create-react-app
Para instalar a CLI create-react-app, utilizamos:

bash
Copiar código
npm install -g create-react-app
ou

bash
Copiar código
yarn global add create-react-app
3. Gerando e Servindo um Projeto React
Criação do projeto:
bash
Copiar código
npx create-react-app confusion
ou
bash
Copiar código
yarn create react-app confusion
Navegando para a pasta do projeto e iniciando o servidor:
bash
Copiar código
cd confusion
npm start
ou
bash
Copiar código
yarn start
O navegador padrão abriu o endereço http://localhost:3000, exibindo o aplicativo React inicial.
4. Inicialização do Repositório Git
O projeto foi configurado para Git com os comandos:

bash
Copiar código
git init
git add .
git commit -m "Initial Setup"
O repositório foi então sincronizado com o GitHub.

Como Clonar e Usar o Projeto
Siga os passos abaixo para clonar este repositório e configurá-lo em sua máquina:

Clone o repositório para sua máquina local:
bash
Copiar código
git clone https://github.com/Lucas420-bot/atividade_thiago2.git
Navegue até o diretório do projeto:
bash
Copiar código
cd atividade_thiago2
Execute os arquivos ou configure o ambiente de acordo com as instruções fornecidas.
Ferramentas Utilizadas
Git: Para controle de versão.
GitHub: Para hospedagem e colaboração no código.
React: Framework utilizado para o desenvolvimento do aplicativo.
npm/Yarn: Gerenciadores de pacotes para instalação e execução.
Contribuição
Se você deseja contribuir com este projeto, siga os passos abaixo:

Faça um fork deste repositório clicando no botão "Fork" no GitHub.
Clone o seu fork para a sua máquina local:
bash
Copiar código
git clone https://github.com/<seu-usuario>/atividade_thiago2.git
Crie um novo branch para suas alterações:
bash
Copiar código
git checkout -b minha-feature
Faça as alterações necessárias e commit:
bash
Copiar código
git add .
git commit -m "Descrição das alterações"
Envie suas alterações para o seu fork:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request no repositório original.
Possíveis Problemas e Soluções
Erro: rejected -> main (fetch first)
Causa: O repositório remoto contém alterações que não estão na sua cópia local.
Solução:

Sincronize sua branch local com a remota:
bash
Copiar código
git pull origin main --rebase
Resolva conflitos, se houverem, e envie novamente:
bash
Copiar código
git push origin main
Erro: src refspec refs/heads/master does not match any
Causa: O nome da branch está incorreto (ex.: tentando usar master em vez de main).
Solução:

###Verifique o nome da branch atual:
bash
Copiar código
git branch
Use o nome correto ao realizar o push:
bash
Copiar código
git push origin main
Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

###Autores
Lucas França
Desenvolvedor principal do projeto.
GitHub: Lucas420-bot

>>>>>>> 3c5e2a661bad3b37f24e473bbc4a678911ef3d05
