FROM node:8.11.3
RUN mkdir /welp-sidebar
WORKDIR  /welp-sidebar
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm", "start"]