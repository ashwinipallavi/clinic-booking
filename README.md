# 🏥 MediCare Plus — Clinic Booking Website

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/Status-Deployed-brightgreen?style=flat-square)

> A responsive hospital appointment booking web application deployed using a fully automated **CI/CD pipeline** with GitHub, Docker, and Jenkins.

---

## 📖 About

MediCare Plus allows patients to book clinic appointments online by selecting a department, doctor, date, and time slot. The project focuses on implementing **DevOps best practices** — the entire build and deployment process is automated, meaning every code change pushed to GitHub is automatically built and deployed without any manual steps.

Built as part of a DevOps course project at **The National Institute of Engineering (NIE), Mysuru** — Dept. of CS&E, 2025–26.

---

## 🛠 Tech Stack

### Backend
| Technology | Version |
|---|---|
| Python | 3.11 |
| FastAPI | 0.115.0 |
| Uvicorn | 0.30.6 |
| Motor (async MongoDB driver) | 3.5.1 |
| Pydantic v2 | 2.8.2 |
| Jinja2 | 3.1.2 |

### Frontend
| Technology | Detail |
|---|---|
| HTML5 | Server-side rendered via Jinja2 |
| CSS | Vanilla CSS, custom design system |
| JavaScript | Vanilla ES6+ |
| Icons | Lucide Icons (CDN) |
| Font | Inter (Google Fonts) |

### Database
| Technology | Version |
|---|---|
| MongoDB | 7.0 |

### DevOps
| Tool | Purpose |
|---|---|
| GitHub | Source code management & version control |
| Docker | Containerize the application |
| Docker Compose | Multi-container local orchestration |
| Jenkins | Automate build & deployment (CI/CD) |
| Nginx | Web server inside Docker container |
| pytest | Automated test runner |

---

## ✨ Features

- 📅 **Appointment Booking** — Select department, doctor, date, and time slot
- 👨‍⚕️ **Expert Doctors** — View doctor profiles with ratings and specializations
- 🏥 **Medical Departments** — Neurology, Cardiology, Orthopedics, Pediatrics, Ophthalmology, Dentistry
- ✅ **Booking Confirmation** — Instant confirmation screen after booking
- ⭐ **Patient Reviews** — Testimonials section
- 📞 **Contact Page** — Location, phone, email, and working hours
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🏗 System Architecture

```
Developer
    │
    │  git push
    ▼
GitHub Repository
    │
    │  Webhook triggers Jenkins
    ▼
Jenkins CI/CD Server
    ├── Step 1: Checkout latest code
    ├── Step 2: Build Docker image
    ├── Step 3: Stop & remove old container
    └── Step 4: Run new container
                    │
                    ▼
           Docker Container
          (Nginx serves the app)
                    │
                    ▼
             http://localhost:8081
```

---

## ⚙️ CI/CD Pipeline

Every `git push` to the `main` branch automatically triggers Jenkins to:

1. Pull the latest code from GitHub
2. Build a fresh Docker image using the `Dockerfile`
3. Stop and remove the previously running container
4. Start the new container on port `8081`
5. Run the `pytest` test suite to confirm everything works

This eliminates all manual deployment steps and ensures consistent, error-free delivery every time.

---

## 🚀 Getting Started

### Prerequisites
- Docker Desktop
- Git

### Run with Docker

```bash
# Clone the repo
git clone https://github.com/ashwinipallavi/clinic-booking.git
cd clinic-booking

# Build the image
docker build -t clinic-booking .

# Run the container
docker run -d -p 8081:80 --name clinic-booking clinic-booking
```

Open your browser at **http://localhost:8081**

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
├── index.html        # Main frontend page
├── style.css         # Styling
├── script.js         # Frontend logic
├── Dockerfile        # Docker build instructions
├── Jenkinsfile       # Jenkins pipeline definition
└── README.md
```

---

## 📸 Screenshots

### Home Page
![Home]("C:\Users\User\OneDrive\画像\Screenshots\Screenshot 2026-05-22 155457.png")

### Medical Services
![Services](screenshots/services.png)

### Expert Doctors
![Doctors](screenshots/doctors.png)

### Appointment Booking Form
![Form](screenshots/form.png)

### Booking Confirmation
![Confirmation](screenshots/confirmation.png)

### Patient Reviews
![Reviews](screenshots/reviews.png)

### Contact Page
![Contact](screenshots/contact.png)



---

## 👩‍💻 Developer

**Pallavi S E**  
Dept. of Computer Science & Engineering  
The National Institute of Engineering, Mysuru



> *"Your Health Is Our Top Priority"* — MediCare Plus
