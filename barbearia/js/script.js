// 1. Verificar Status de Funcionamento
function verificarStatus() {
    const elementoStatus = document.getElementById('status-loja');
    const agora = new Date();
    const diaSemana = agora.getDay(); 
    const horaAtual = agora.getHours();
    
    let aberto = false;

    // Seg a Sex: 09h às 19h | Sáb: 09h às 14h
    if (diaSemana >= 1 && diaSemana <= 5) {
        if (horaAtual >= 9 && horaAtual < 19) aberto = true;
    } else if (diaSemana === 6) {
        if (horaAtual >= 9 && horaAtual < 14) aberto = true;
    }

    if (aberto) {
        elementoStatus.innerHTML = "● Aberto Agora";
        elementoStatus.style.color = "#c5a059";
    } else {
        elementoStatus.innerHTML = "○ Fechado Agora";
        elementoStatus.style.color = "#ff4b2b";
    }
}

// 2. Navbar e Scroll Reveal
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    verificarStatus();
    
    // Ativa scroll reveal em todos os elementos com a classe
    const reveals = document.querySelectorAll('.reveal-effect');
    reveals.forEach(el => observer.observe(el));
});

// 3. Mudança da Navbar ao Rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo img');
    
    if (window.scrollY > 80) {
        nav.style.padding = "10px 0";
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.backgroundColor = "rgba(10, 10, 10, 0.8)";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            console.log("Menu clicado!"); // Se aparecer isso no F12, o JS está ok
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});