# API Nest.js

Este repositório contém a API do projeto de gestão de associados, desenvolvida com Nest.js. Siga as instruções abaixo para clonar, configurar e executar o projeto localmente.

## Requisitos
Certifique-se de ter os seguintes itens instalados em sua máquina:
- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Banco de dados (ver instruções abaixo)

## Clonando o Repositório

```sh
# Clone o repositório
git clone https://github.com/Katielly-Scherbatsky/app_gestao_associados.git

# Acesse o diretório do projeto
cd app_gestao_associados
```

## Instalando Dependências

```sh
yarn install
```

## Configuração do Banco de Dados

O projeto inclui um arquivo SQL com a estrutura do banco de dados. Para configurar:

1. Crie um banco de dados em seu gerenciador (MySQL, PostgreSQL, etc.).
2. Execute o arquivo SQL presente no repositório para criar as tabelas necessárias.
3. As credenciais do banco já estão configuradas diretamente no projeto.

## Executando a API

```sh
yarn start:dev
```

```
[http://localhost:3001/api](http://localhost:3001/auth/login)
```

## Considerações Finais
Caso encontre algum problema, verifique se todas as dependências estão corretamente instaladas e se o banco de dados está configurado corretamente. Para dúvidas ou sugestões, entre em contato ou abra uma issue no repositório.

