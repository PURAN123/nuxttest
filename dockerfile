# Dockerfile for Nuxt 3 app
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Production image
FROM node:20-alpine AS production
WORKDIR /app

COPY --from=build /app .
ENV NODE_ENV=production

EXPOSE 3000
CMD ["npm", "run", "preview"]