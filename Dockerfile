# Use Node.js 18 Alpine como base
FROM node:18-alpine AS base

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY bun.lockb* ./

# Instalar dependências
RUN npm install --omit=dev

# Build stage
FROM base AS builder
WORKDIR /app

# Copiar código fonte
COPY . .

# Instalar todas as dependências (incluindo dev) para o build
RUN npm install

# Build da aplicação
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copiar arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
