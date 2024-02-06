FROM node:15.4 as build
WORKDIR /whslack
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8081
RUN npm run build

FROM node:15.4
WORKDIR /whslack
COPY package.json .
RUN npm install --only-production
COPY --from=build /whslack/dist ./dist
EXPOSE 3333
CMD [ "npm", "run", "start" ]