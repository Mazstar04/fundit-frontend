FROM node:21-alpine3.18
RUN mkdir -p /app
WORKDIR /app
COPY . .
COPY ./env.sample /app/.env
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]