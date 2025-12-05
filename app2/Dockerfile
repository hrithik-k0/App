# Dockerfile
# builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .

# runtime
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app . 
ENV NODE_ENV=production
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=2s CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "src/index.js"]