FROM node:alpine3.11

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]