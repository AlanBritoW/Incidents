FROM node:18 AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM node:18-slim
WORKDIR /app

run npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]
