FROM node:latest as build-deps
WORKDIR /usr/src/frontend-app

ENV PATH /usr/src/frontend-app/node_modules/.bin:$PATH

COPY package*.json yarn.lock ./
RUN npm install --g yarn
RUN yarn
COPY . ./
RUN yarn build

# web server NGINX
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/frontend-app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
