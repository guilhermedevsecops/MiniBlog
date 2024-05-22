# MiniBlog

O **MiniBlog** é um software projetado para reproduzir um miniblog, onde é possível fazer postagens recentes e visualizar as postagens mais recentes feitas pelos usuários.

## Descrição

O MiniBlog permite que os usuários façam postagens de texto e visualizem as postagens mais recentes de outros usuários. É uma plataforma simples e eficiente para compartilhar pensamentos e ideias.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Firebase**: Plataforma para desenvolvimento de aplicativos móveis e web, utilizada para autenticação e armazenamento de dados.
- **React Router DOM**: Biblioteca para roteamento em aplicações React.
- **HTML**: Linguagem de marcação para estruturação da página.
- **CSS**: Linguagem de estilos para estilização da página.

## Funcionalidades

- **Postagens Recentes**: Visualize as postagens mais recentes feitas pelos usuários.
- **Criação de Postagens**: Faça novas postagens de texto.
- **Autenticação de Usuários**: Login e registro de usuários utilizando Firebase.
- **Roteamento Dinâmico**: Navegação entre diferentes páginas do MiniBlog.

## Como Usar

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/guilhermedevsecops/MiniBlog.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd miniblog
    ```

3. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Configuração do Firebase**:
    - Crie um projeto no [Firebase](https://firebase.google.com/).
    - Adicione um aplicativo web ao projeto Firebase.
    - Copie as credenciais de configuração do Firebase.
    - Insira as credenciais no arquivo firebase/config.js

5. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
    ```

O MiniBlog estará disponível em `http://localhost:3000`.

## Licença

MIT License

Copyright (c) 2024 Guilherme Henrique de Sousa Jesus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
