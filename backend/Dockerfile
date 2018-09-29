FROM node:8-slim

WORKDIR /usr/src/backend-app
ENV PATH /usr/src/backend-app/node_modules/.bin:$PATH

LABEL maintainer="Jonathan Gros-Dubois"
LABEL version="14.3.0"
LABEL description="Docker file for SocketCluster with support for clustering."

COPY . ./

RUN npm install .

EXPOSE 3001

CMD ["npm", "run", "start:docker"]
