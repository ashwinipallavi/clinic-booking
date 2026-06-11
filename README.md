# 🏥 MediCare Plus — Clinic Booking Website

> A full-stack hospital appointment booking web application deployed via an automated CI/CD pipeline using **GitHub**, **Docker**, and **Jenkins**.

![MediCare Plus](https://img.shields.io/badge/Status-Deployed-brightgreen?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115.0-009688?style=flat-square&logo=fastapi&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [System Architecture](#system-architecture)
- [CI/CD Pipeline](#cicd-pipeline)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Team](#team)

---

## 📖 About the Project

**MediCare Plus** is a responsive clinic appointment booking website that demonstrates modern **DevOps practices** through a fully automated deployment pipeline. The project integrates GitHub for version control, Docker for containerization, and Jenkins for continuous integration and deployment.

Developed as a **DevOps Mini Project** at The National Institute of Engineering (NIE), Mysuru — Dept. of CS&E, 2025–26.

---

## 🛠 Tech Stack

### Backend
| Technology | Version |
|---|---|
| Python | 3.11 |
| FastAPI | 0.115.0 |
| Uvicorn | 0.30.6 |
| Motor (async MongoDB driver) | 3.5.1 |
| PyMongo | 4.8.0 |
| Pydantic v2 | 2.8.2 |
| Jinja2 | 3.1.2 |

### Frontend
| Technology | Detail |
|---|---|
| HTML5 | Jinja2 server-side rendered templates |
| CSS | Vanilla CSS with custom design system |
| JavaScript | Vanilla ES6+ |
| Icons | Lucide Icons (CDN, SVG-based) |
| Typography | Inter (Google Fonts) |

### Database
| Technology | Version |
|---|---|
| MongoDB | 7.0 |

### DevOps & Infrastructure
| Tool | Role |
|---|---|
| Docker | Application & database containerization |
| Docker Compose | Local multi-container orchestration |
| Jenkins | CI/CD pipeline automation |
| GitHub | Source control & webhook trigger |
| Nginx | Web server inside Docker container |
| pytest + httpx | Automated testing |

---

## ✨ Features

- 📅 **Appointment Booking** — Book appointments by selecting department, doctor, date, and time slot
- 👨‍⚕️ **Expert Doctors** — Browse doctors with ratings, specializations, and availability
- 🏥 **Medical Services** — Neurology, Cardiology, Orthopedics, Pediatrics, Ophthalmology, Dentistry
- ⭐ **Patient Reviews** — Real testimonials section
- 📞 **Contact Page** — Location, phone, email, and working hours
- ✅ **Appointment Confirmation** — Instant booking confirmation with details
- 📱 **Responsive Design** — Works across all screen sizes

---

## 🏗 System Architecture

```
Developer
   │
   │  git push
   ▼
GitHub Repository
   │
   │  Webhook / Poll SCM
   ▼
Jenkins CI/CD Server
   ├── 1. Checkout Code
   ├── 2. Build Docker Image
   ├── 3. Stop & Remove Old Container
   └── 4. Run New Container
              │
              ▼
         Docker Host
              │
              ▼
    Docker Container (Nginx)
              │
              ▼
         End Users (Browser)
```

---

## ⚙️ CI/CD Pipeline

Every `git push` to the `main` branch automatically triggers the following pipeline in Jenkins:

```
Push Code → Jenkins Detects Change → Clone Repo → Build Docker Image
→ Stop Old Container → Run New Container → App Live on Port 8081
```

**Jenkins Pipeline Steps:**
1. Fetch latest source code from GitHub
2. Build Docker image using `Dockerfile`
3. Stop and remove the existing running container
4. Deploy new container and expose on port `8081`
5. Run `pytest` test suite to verify build integrity

---

## 🚀 Getting Started

### Prerequisites

- Docker Desktop installed
- Jenkins running (locally or via Docker)
- Git

### Run Locally with Docker

```bash
# Clone the repository
git clone https://github.com/ashwinipallavi/clinic-booking.git
cd clinic-booking

# Build Docker image
docker build -t clinic-booking .

# Run container
docker run -d -p 8081:80 --name clinic-booking clinic-booking

# Open in browser
http://localhost:8081
```

### Run with Docker Compose

```bash
docker-compose up --build
```

### Run Tests

```bash
pip install pytest httpx pytest-asyncio
pytest
```

---

## 📁 Project Structure

```
clinic-booking/
│
├── index.html          # Main frontend page
├── style.css           # Custom CSS styling
├── script.js           # Frontend JavaScript logic
├── Dockerfile          # Docker build configuration
├── Jenkinsfile         # Jenkins CI/CD pipeline definition
└── README.md           # Project documentation
```

---

## 📸 Screenshots

| Page | Preview |
|---|---|
| 🏠 Home Page | Hero section with booking CTA and stats |
| 🏥 Medical Services | Neurology, Cardiology, Orthopedics, and more |
| 👨‍⚕️ Expert Doctors | Doctor cards with ratings and Book button |
| 📋 Booking Form | Full appointment form with department & doctor selection |
| ✅ Confirmation | Appointment booked confirmation screen |
| ⭐ Patient Reviews | Testimonials from real patients |
| 📞 Contact Us | Location, phone, email, and hours |


## 📚 References

- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Docker Documentation](https://www.docker.com)
- [Jenkins Documentation](https://www.jenkins.io)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [Kubernetes Documentation](https://kubernetes.io/docs)

---

> *"Your Health Is Our Top Priority"* — MediCare Plus
