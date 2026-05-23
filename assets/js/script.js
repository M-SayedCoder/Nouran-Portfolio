window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 40);
});

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function handleForm(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  ['f-name','f-email','f-message'].forEach(id => document.getElementById(id).value = '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}