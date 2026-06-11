# 🏥 MediCare Plus — Clinic Booking

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![Status](https://img.shields.io/badge/Status-Deployed-brightgreen?style=flat-square)

A hospital appointment booking website built and deployed using a full CI/CD pipeline with GitHub, Docker, and Jenkins.

---

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Backend | Python, FastAPI, MongoDB |
| Frontend | HTML5, CSS, Vanilla JS |
| DevOps | Docker, Jenkins, GitHub, Nginx |

---

## ✨ Features

- Book appointments by department, doctor, date & time
- Browse doctors with ratings and specializations
- 6 medical departments (Neurology, Cardiology, Orthopedics, and more)
- Instant booking confirmation
- Responsive UI

---

## ⚙️ CI/CD Flow

```
git push → Jenkins detects change → Build Docker image
→ Stop old container → Deploy new container → Live on :8081
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/ashwinipallavi/clinic-booking.git
cd clinic-booking
docker build -t clinic-booking .
docker run -d -p 8081:80 --name clinic-booking clinic-booking
```
Open `http://localhost:8081`

---

## 👩‍💻 Team

| Name | USN |
|---|---|
| Pallavi S E | 4NI24CS421 |
| Syeda Mizba | 4NI24CS427 |

**Guide:** Mr. Joyan Prajwal Alvares, Dept. of CS&E, NIE Mysuru
