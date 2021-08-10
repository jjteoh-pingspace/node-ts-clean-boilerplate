FROM node:12
WORKDIR /home/app
COPY ./ /home/app
RUN yarn
CMD yarn start:prod


