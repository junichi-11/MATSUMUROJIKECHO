const hero = document.getElementById('heroImage');
document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    hero.style.opacity = 0;
    setTimeout(() => { hero.src = btn.dataset.img; hero.style.opacity = 1; }, 160);
  });
});
hero.style.transition = 'opacity .35s ease';
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }});
},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
