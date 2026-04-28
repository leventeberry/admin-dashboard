-- Separate database for n8n on the same Postgres instance as the app.
-- Runs only on first cluster init (new volume). If you already had a volume
-- before this file existed, create the DB once:
-- docker compose -f docker-compose.dev.yml exec db psql -U "$POSTGRES_USER" -d postgres -c 'CREATE DATABASE n8n;'

CREATE DATABASE n8n;
