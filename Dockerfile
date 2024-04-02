#Base Stage
FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


#Development Stage
FROM base AS development

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]


#Production Stage
FROM base AS production

#Change directory ownership
RUN chown -R node /app

USER node

ENV NODE_ENV=production

CMD ["npm", "start"]