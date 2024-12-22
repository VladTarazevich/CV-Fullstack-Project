FROM python:3.12.7-slim

# Install PostgreSQL development libraries
RUN apt-get update && apt-get install -y \
    libpq-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY app/ ./

ENV PYTHONPATH=/app

CMD ["python", "main.py"]