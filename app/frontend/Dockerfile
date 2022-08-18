FROM node:16.14-alpine AS build

WORKDIR /app-frontend

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]