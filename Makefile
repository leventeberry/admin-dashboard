# Prerequisites: Docker with Compose v2 (`docker compose`). Dev stack requires `.env` (copy `.env.example` and fill values).
.PHONY: dev dev-detached prod down-dev down-prod build-prod logs-prod db-seed

dev:
	docker compose -f docker-compose.dev.yml up --build

dev-detached:
	docker compose -f docker-compose.dev.yml up --build -d

prod:
	docker compose -f docker-compose.prod.yml up --build -d

down-dev:
	docker compose -f docker-compose.dev.yml down

down-prod:
	docker compose -f docker-compose.prod.yml down

build-prod:
	docker compose -f docker-compose.prod.yml build

logs-prod:
	docker compose -f docker-compose.prod.yml logs -f web

db-seed:
	docker compose -f docker-compose.dev.yml exec web npm run db:seed
