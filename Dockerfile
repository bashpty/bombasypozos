ARG NODE_VERSION=21.6.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=8.14.3
RUN npm install -g pnpm@$PNPM_VERSION

COPY . .
ENV NODE_ENV=production
ENV NITRO_PORT=80
ENV HOST=0.0.0.0


EXPOSE 3000
EXPOSE 80
EXPOSE 443
CMD [ "npm", "start"]
