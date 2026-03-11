const sections = document.querySelectorAll('section');
const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
    { threshold: 0.1 }
);
sections.forEach(s => io.observe(s));

const nav = document.getElementById('sideNav');
sections.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = 'sn-btn';
    btn.textContent = sec.dataset.label;
    btn.onclick = () => sec.scrollIntoView({ behavior: 'smooth' });
    nav.appendChild(btn);
});

const btns = [...nav.querySelectorAll('.sn-btn')];
const io2 = new IntersectionObserver(
    entries => entries.forEach(e => {
        if (e.isIntersecting) {
            const i = [...sections].indexOf(e.target);
            btns.forEach((b, j) => b.classList.toggle('on', i === j));
        }
    }),
    { threshold: 0.4 }
);
sections.forEach(s => io2.observe(s));