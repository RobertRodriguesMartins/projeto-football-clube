#Bem Vindo ao Football Clube!

Como rodar a aplicação localmente?

#Via Docker:
  Na sua máquina você deve ter:

  Docker
  Docker-compose versão >=1.29.2

  utilizar o arquivo docker-compose-dev.yml em /app
  comando: docker-compose up -d

#Via NODEJS:
  Também é possível iniciar utilizando o NODEJS da sua máquina,
  os requisitos são node >= 16 e o MYSQL instalados na sua máquina.

  banco de dados:
    inicie o deamon do MYSQL,
    por default ele rodará na porta 3306,
    então altere o .env no backend apontando DB_PORT=3306

  backend:
    depende do banco de dados já ativo, e a alteração na variável de
    ambiente DB_PORT.
    npm install em /backend;
    npm run dev
    (O sequelize iniciará a criação do banco de dados)

  frontend:
    npm install em /frontend
    npm start
  
Acesse localhost:3000 e o projeto deverá ser exibido!
