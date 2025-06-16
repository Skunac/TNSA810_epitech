# back_student/Dockerfile
FROM node:11-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

# Wait for database before starting
CMD ["sh", "-c", "sleep 10 && yarn migration:start && yarn start"]