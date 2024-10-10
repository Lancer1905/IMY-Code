#Pieter Venter u23896257
FROM node:20
WORKDIR /app
COPY . .
RUN npm i
ENV PORT=3000
CMD [ "npm", "start" ]
EXPOSE 3000