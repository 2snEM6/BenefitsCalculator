### STAGE 1 BUILD

FROM node:latest as build-deps
WORKDIR /usr/src/frontend-app

ENV PATH /usr/src/frontend-app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --g yarn
RUN yarn
COPY . ./
RUN yarn build

### STAGE 2 PRODUCTION ENVIRONMENT
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/frontend-app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
