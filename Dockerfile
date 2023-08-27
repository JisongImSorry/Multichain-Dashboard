# builder
FROM node:18-alpine AS builder
WORKDIR /builder
COPY . .
RUN npm install
RUN npm run build:dev

# app
FROM nginx:alpine
WORKDIR /app
COPY --from=builder /builder/dist /usr/share/nginx/html
COPY --from=builder /builder/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/*