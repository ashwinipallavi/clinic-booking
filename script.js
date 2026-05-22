// script.js - MediCare Plus Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // 4. Set minimum date for appointment to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // 5. Appointment Form Submission
    const form = document.getElementById('appointmentForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('patientName').value;
            const doctor = document.getElementById('doctor').value;
            const department = document.getElementById('department').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Show success message
            form.style.display = 'none';
            const successDiv = document.getElementById('booking-success');
            successDiv.style.display = 'block';
            document.getElementById('success-details').textContent =
                `${name}, your appointment with ${doctor} (${department}) is confirmed for ${formatDate(date)} at ${time}. You will receive a confirmation email shortly.`;
        });
    }
});

// Format date nicely
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Select doctor from doctor card
function selectDoctor(doctorName, department) {
    document.getElementById('doctor').value = doctorName;
    document.getElementById('department').value = department;
    const bookingSection = document.getElementById('booking');
    const offset = bookingSection.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

// Reset form after booking
function resetForm() {
    document.getElementById('booking-success').style.display = 'none';
    document.getElementById('appointmentForm').style.display = 'block';
    document.getElementById('appointmentForm').reset();
}
