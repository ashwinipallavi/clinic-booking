pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ashwinipallavi/clinic-booking.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t clinic-booking-website .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker stop clinic-booking-container || true'
                sh 'docker rm clinic-booking-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name clinic-booking-container clinic-booking-website'
            }
        }
    }
}
