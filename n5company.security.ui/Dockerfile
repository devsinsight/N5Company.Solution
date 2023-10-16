FROM node:19.5.0-alpine
WORKDIR /src
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 5173
CMD ["npm", "run", "dev"]