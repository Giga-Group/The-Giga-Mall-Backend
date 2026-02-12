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
echo ""

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
echo ""

# Run migrations using the migration runner script
echo "=========================================="
echo "Running database migrations..."
echo "=========================================="
if node dist/database/run-migrations.js; then
  echo "✓ Migrations completed successfully"
else
  echo "WARNING: Migration failed, but continuing..."
fi
echo ""

# Optionally run seeders if RUN_SEEDERS environment variable is set
# WARNING: Only set this to "true" on first deployment or when you want to reseed
# Setting this will reseed the database, potentially overwriting existing data
echo "=========================================="
echo "Checking RUN_SEEDERS environment variable..."
echo "RUN_SEEDERS value: '${RUN_SEEDERS:-not set}'"
echo "=========================================="

if [ "$RUN_SEEDERS" = "true" ]; then
  echo "✓ RUN_SEEDERS is set to 'true' - seeders will run"
  echo "=========================================="
  echo "Running database seeders..."
  echo "=========================================="
  
  if [ ! -f "dist/database/seeder/seed.js" ]; then
    echo "ERROR: Seed file not found at dist/database/seeder/seed.js"
    echo "Checking if dist/database/seeder directory exists..."
    ls -la dist/database/seeder/ 2>&1 || echo "Directory does not exist"
  else
    echo "✓ Seed file found at dist/database/seeder/seed.js"
    echo "Executing seed script..."
    
    if node dist/database/seeder/seed.js; then
      echo "=========================================="
      echo "✓ Seeding completed successfully!"
      echo "=========================================="
    else
      EXIT_CODE=$?
      echo "=========================================="
      echo "ERROR: Seeding failed with exit code $EXIT_CODE"
      echo "=========================================="
      # Don't exit - let the app start even if seeding fails
      # This allows you to debug the issue while the app is running
    fi
  fi
else
  echo "Skipping seeders (RUN_SEEDERS is not set to 'true')"
  echo "To run seeders, set RUN_SEEDERS=true in Railway environment variables"
fi
echo ""

# Start the application
echo "=========================================="
echo "Starting NestJS application..."
echo "=========================================="
exec node dist/main.js
