# ==========================================
# Stage 1: Build & Dependencies
# ==========================================
FROM node:20-alpine AS dependencies

WORKDIR /app

# Copy package descriptors first to maximize Docker layer cache
COPY package*.json ./

# Install only production dependencies cleanly
RUN npm ci --only=production

# ==========================================
# Stage 2: Lean Production Runtime
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=8080

# Copy node_modules from the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./

# Copy application source code
COPY src ./src

# Security best practice: switch from root to the non-root 'node' user provided by Alpine
USER node

# Expose the application port
EXPOSE 8080

# Container entry point
CMD ["node", "src/server.js"]