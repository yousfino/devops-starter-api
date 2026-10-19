cat << 'EOF' > README.md

# DevOps Starter API

A lightweight containerized REST API with an automated CI/CD pipeline and cloud deployment.

## Tech Stack

- **Runtime:** Node.js / Express (or Python / FastAPI)
- **Containerization:** Docker (multi-stage build)
- **CI/CD:** GitHub Actions
- **Registry:** GitHub Container Registry (`ghcr.io`)
- **Deployment:** Managed Container Cloud Service

## Endpoints

- `GET /health` - Service health verification
- `GET /api/items` - Sample resource listing
  EOF
