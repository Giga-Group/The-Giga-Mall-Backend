#!/bin/sh
set -e

echo "=========================================="
echo "Starting application startup..."
echo "=========================================="

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "ERROR: DATABASE_URL environment variable is not set!"
  exit 1
fi

echo "DATABASE_URL is set (connection string provided)"
echo "PORT: ${PORT:-not set, will use default 3001}"

# Wait for database to be ready (with timeout)
echo "Waiting for database connection..."
MAX_ATTEMPTS=30
ATTEMPT=0
until node -e "const { Client } = require('pg'); const client = new Client({ connectionString: process.env.DATABASE_URL }); client.connect().then(() => { console.log('✓ Database is ready'); client.end(); process.exit(0); }).catch((err) => { console.log('Database connection attempt failed:', err.message); process.exit(1); });" 2>&1; do
  ATTEMPT=$((ATTEMPT + 1))
  if [ $ATTEMPT -ge $MAX_ATTEMPTS ]; then
    echo "ERROR: Could not connect to database after $MAX_ATTEMPTS attempts"
    echo "Please check your DATABASE_URL connection string"
    exit 1
  fi
  echo "Waiting for database... (attempt $ATTEMPT/$MAX_ATTEMPTS)"
  sleep 2
done

# Run migrations using the migration runner script
echo "Running database migrations..."
if node dist/database/run-migrations.js; then
  echo "✓ Migrations completed successfully"
else
  echo "WARNING: Migration failed, but continuing..."
fi

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
echo "=========================================="
echo "Starting NestJS application..."
echo "=========================================="
exec node dist/main.js
