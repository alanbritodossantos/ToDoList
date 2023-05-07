# TO DO LIST

Este projeto é uma aplicação de lista de tarefas (To Do List) que permite adicionar, editar, filtrar e excluir tarefas. Ele foi desenvolvido utilizando ReactJs + Typescript no frontend, ASP.NET Core no backend e persistência SQL com Entity Framework.

## Requisitos

- Node.js (https://nodejs.org/)
- .NET SDK (https://dotnet.microsoft.com/download)
- Um banco de dados SQL suportado pelo Entity Framework Core (SQL Server)

## Configuração do Projeto

1. Clone o repositório:


2. Navegue até o diretório do projeto:


### Backend

3. Navegue até o diretório do backend:


4. Atualize a string de conexão do banco de dados no arquivo `appsettings.json`:

5. Execute as migrações para criar o banco de dados:
	dotnet ef database update

6. Inicie o servidor de desenvolvimento do backend:
	dotnet run

O servidor de desenvolvimento do backend será iniciado na porta 7210 (ou na porta definida em seu arquivo launchSettings.json).


### Frontend

7. Em um novo terminal, navegue até o diretório do frontend:
	cd ../frontend


8. Instale as dependências do projeto:
	npm install

9. Inicie o servidor de desenvolvimento do frontend:
	npm start


O servidor de desenvolvimento do frontend será iniciado na porta 3000. Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.
