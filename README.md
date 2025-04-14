# **SIT737-2025-Prac5P - Dockerized Node.js Microservice**  

**GitHub Repository:** [https://github.com/Qasimnasi/sit737-2025-prac5p](https://github.com/Qasimnasi/sit737-2025-prac5p)  
**Docker Hub Image:** [qasimmasir/sit737-arithmetic-service](https://hub.docker.com/r/qasimmasir/sit737-arithmetic-service)  

---

## **📌 Overview**  
This project demonstrates the containerization of a **Node.js arithmetic microservice** using **Docker**, featuring:  
✅ **REST API** for arithmetic operations  
✅ **Docker Compose** for multi-container management  
✅ **Health checks** for automatic recovery  
✅ **Lightweight Alpine-based** container  

---

## **🚀 Quick Start**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/Qasimnasi/sit737-2025-prac5p.git
cd sit737-2025-prac5p
```

### **2. Build & Run with Docker**  
```bash
docker-compose build
docker-compose up
```

### **3. Access the API**  
🔹 **Base URL:** `http://localhost:3000`  
🔹 **Health Check:** `GET /health`  
🔹 **Division Endpoint:**  
```bash
curl -X POST http://localhost:3000/divide \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 2}'
```
**Response:**  
```json
{ "result": 5 }
```
**Error Handling (Division by Zero):**  
```json
{ "error": "Division by zero is not allowed." }
```

---

## **🔧 Features**  
✔ **Arithmetic Microservice** – Supports division with proper error handling  
✔ **Docker Optimizations** – Multi-stage builds, Alpine base image  
✔ **Health Monitoring** – Auto-restart on failure  
✔ **Logging** – Winston for structured logs  

---

## **📂 Project Structure**  
```
sit737-2025-prac5p/
├── app.js                # Main Express.js server
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Orchestration setup
├── package.json          # Node.js dependencies
├── package-lock.json     # Lockfile for dependencies
└── logs/                 # Application logs
```

---

## **⚙️ Configuration**  

### **Dockerfile**  
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p logs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "app.js"]
```

### **docker-compose.yml**  
```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

---

## **📦 Pushing to Docker Hub**  
1. **Tag the Image:**  
```bash
docker tag sit737-2025-prac5p-web qasimmasir/sit737-arithmetic-service
```
2. **Push to Docker Hub:**  
```bash
docker push qasimmasir/sit737-arithmetic-service
```

---

## **🛠 Troubleshooting**  
🔹 **Port Conflict?** → Ensure `3000` is free or modify `docker-compose.yml`  
🔹 **Build Issues?** → Run `docker system prune` to clear cache  
🔹 **Health Check Failing?** → Verify `/health` endpoint is working  

---


### **🔗 Useful Links**  
- **[GitHub Repo](https://github.com/Qasimnasi/sit737-2025-prac5p)**  
- **[Docker Hub Image](https://hub.docker.com/r/qasimmasir/sit737-arithmetic-service)**  

---

**Made for SIT737 - Cloud Native Application Development** 🚀
