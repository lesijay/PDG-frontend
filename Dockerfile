FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app/
RUN npm install --silent
RUN npm run build
# start app
CMD ["npm", "start"]
