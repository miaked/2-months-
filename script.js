function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  if (pageId === 'page3') spawnDancingHearts();
  if (pageId === 'page4') spawnDancingHearts4();
  window.scrollTo(0, 0);
}

const floatEmojis = ['🩷','🐻','🍬','💕','🩷','🧸','🍭','💗','🐰','🩷'];
const positions = [
  {left:'5%',top:'8%'},{left:'15%',top:'60%'},{left:'80%',top:'10%'},{left:'88%',top:'55%'},
  {left:'50%',top:'5%'},{left:'3%',top:'40%'},{left:'70%',top:'75%'},{left:'40%',top:'80%'},
  {left:'25%',top:'15%'},{left:'60%',top:'30%'}
];
const container = document.getElementById('floatingIcons');
floatEmojis.forEach((emoji, i) => {
  const el = document.createElement('div');
  el.className = 'float-item';
  el.textContent = emoji;
  el.style.left = positions[i].left;
  el.style.top = positions[i].top;
  el.style.animationDelay = (i * 0.5) + 's';
  el.style.animationDuration = (4 + Math.random() * 3) + 's';
  container.appendChild(el);
});

const gameItems = ['🩷','💕','💗','🐻','🍬','🍭','🧸','🌸'];
let score = 0;
let gameInterval;

function spawnItem() {
  const area = document.getElementById('gameArea');
  if (!area) return;
  const el = document.createElement('div');
  el.className = 'catch-item';
  el.textContent = gameItems[Math.floor(Math.random() * gameItems.length)];
  const leftPct = Math.random() * 85;
  el.style.left = leftPct + '%';
  const duration = 2.5 + Math.random() * 2.5;
  el.style.animationDuration = duration + 's';
  area.appendChild(el);

  el.addEventListener('click', (e) => {
    score++;
    document.getElementById('scoreDisplay').textContent = 'Score: ' + score + ' 💕';
    const pop = document.createElement('div');
    pop.className = 'pop-text';
    pop.textContent = '+1 🩷';
    pop.style.left = e.clientX - area.getBoundingClientRect().left - 20 + 'px';
    pop.style.top = e.clientY - area.getBoundingClientRect().top - 20 + 'px';
    area.appendChild(pop);
    setTimeout(() => pop.remove(), 700);
    el.remove();
  });

  setTimeout(() => { if (el.parentNode) el.remove(); }, duration * 1000);
}

const observer = new MutationObserver(() => {
  if (document.getElementById('page2').classList.contains('active')) {
    clearInterval(gameInterval);
    gameInterval = setInterval(spawnItem, 900);
  } else {
    clearInterval(gameInterval);
  }
});
observer.observe(document.getElementById('page2'), { attributes: true, attributeFilter: ['class'] });

function spawnDancingHearts() {
  const bg = document.getElementById('heartsBg');
  bg.innerHTML = '';
  const items = ['🩷','💕','🐻','🍬','💗','🌸','🍭','🧸'];
  for (let i = 0; i < 25; i++) {
    const el = document.createElement('div');
    el.className = 'dance-heart';
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (6 + Math.random() * 8) + 's';
    el.style.animationDelay = (Math.random() * 6) + 's';
    el.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
    bg.appendChild(el);
  }
}

function spawnDancingHearts4() {
  const bg = document.getElementById('heartsBg4');
  bg.innerHTML = '';
  const items = ['🩷','💕','🐻','🍬','💗','🌸','🍭','🧸'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'dance-heart';
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (5 + Math.random() * 7) + 's';
    el.style.animationDelay = (Math.random() * 5) + 's';
    el.style.opacity = '0.22';
    bg.appendChild(el);
  }
}
