FROM node:14

COPY ["package.json", "package-lock.json","/usr/src/"]


WORKDIR /usr/src

RUN npm install

COPY [".","/usr/src/"]

EXPOSE 8080

CMD ["node", "index.js"]