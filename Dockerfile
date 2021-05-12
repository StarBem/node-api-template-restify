## this is the stage one , also know as the build step

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

## this is stage two , where the app actually runs

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install ts-node -g

RUN npm install

COPY --from=0 /usr/src/app/dist ./dist

EXPOSE 4006

CMD yarn start:prod
