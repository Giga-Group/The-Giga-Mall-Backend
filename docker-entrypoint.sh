#!/bin/sh
set -e

echo "Starting application startup..."

# Wait for database to be ready (with timeout)
echo "Waiting for database connection..."
MAX_ATTEMPTS=30
ATTEMPT=0
until node -e "const { Client } = require('pg'); const client = new Client({ connectionString: process.env.DB_URL }); client.connect().then(() => { console.log('Database is ready'); client.end(); process.exit(0); }).catch(() => { process.exit(1); });" 2>/dev/null; do
  ATTEMPT=$((ATTEMPT + 1))
  if [ $ATTEMPT -ge $MAX_ATTEMPTS ]; then
    echo "Error: Could not connect to database after $MAX_ATTEMPTS attempts"
    exit 1
  fi
  echo "Waiting for database... (attempt $ATTEMPT/$MAX_ATTEMPTS)"
  sleep 2
done

# Run migrations using the migration runner script
echo "Running database migrations..."
node dist/database/run-migrations.js

# Optionally run seeders if RUN_SEEDERS environment variable is set
# WARNING: Only set this to "true" on first deployment or when you want to reseed
# Setting this will reseed the database, potentially overwriting existing data
if [ "$RUN_SEEDERS" = "true" ]; then
  echo "Running database seeders..."
  node dist/database/seeder/seed.js || {
    echo "Warning: Seeding failed, but continuing..."
  }
fi

# Start the application
echo "Starting NestJS application..."
exec node dist/main.js
