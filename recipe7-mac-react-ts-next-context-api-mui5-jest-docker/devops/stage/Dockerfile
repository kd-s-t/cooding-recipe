FROM node:20-alpine

WORKDIR /app

COPY ../../package*.json ./
RUN npm install

COPY ../../ ./

ENV NODE_ENV=staging

EXPOSE 3000

CMD ["npm", "run", "dev"]