FROM node:16.14-alpine

WORKDIR /app-backend

COPY . .

RUN ["sh", "-c", "npm install && npm run build"]

EXPOSE 3001

ENTRYPOINT ["npm", "start"]