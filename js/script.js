let msgText = `¡Feliz Cumpleaños, mi amor! 🎂✨

Alondra, mi princesa hermosa...
Hoy el universo celebra el día en que nació
la persona más maravillosa de mi vida. 🌙

Cada uno de tus abrazos es mi refugio,
cada una de tus sonrisas ilumina mis días
y hace que el mundo entero valga la pena.

Gracias por ser mi alegría, mi paz y mi inspiración.
Prometo amarte, cuidarte y hacerte sonreír hoy
y todos los días de nuestras vidas. 💖

¡Eres y siempre serás el amor de mi vida!
Te amo infinitamente. 🎉🌹`;

// ── Floating Words Background ──────────────────────────────────────
const words = [
  { t: "Amor", s: "2.8rem", x: 8, y: 12, c: "#e040fb", d: 0 },
  { t: "Feliz Cumpleaños", s: "2.0rem", x: 65, y: 8, c: "#ffd700", d: 0.5 },
  { t: "Ternura", s: "1.9rem", x: 55, y: 18, c: "#b388ff", d: 1 },
  { t: "Alondra", s: "2.5rem", x: 5, y: 35, c: "#ff4081", d: 1.5 },
  { t: "Princesa", s: "2.2rem", x: 78, y: 30, c: "#d500f9", d: 0.8 },
  { t: "Cariño", s: "1.2rem", x: 18, y: 55, c: "#ce93d8", d: 2 },
  { t: "Dulzura", s: "2.3rem", x: 62, y: 52, c: "#cc66ff", d: 0.3 },
  { t: "Te Amo", s: "2.8rem", x: 38, y: 5, c: "#f48fb1", d: 1.8 },
  { t: "Luz", s: "3.0rem", x: 85, y: 60, c: "#bf5fff", d: 0.6 },
  { t: "Mi Vida", s: "2.2rem", x: 3, y: 72, c: "#ff6b9d", d: 2.2 },
  { t: "Sueños", s: "1.8rem", x: 50, y: 72, c: "#ea80fc", d: 0.9 },
  { t: "Magia", s: "2.4rem", x: 22, y: 82, c: "#e91e8c", d: 1.3 },
  { t: "Corazón", s: "1.5rem", x: 75, y: 80, c: "#ff80ff", d: 1.7 },
  { t: "Hermosa", s: "2.0rem", x: 88, y: 15, c: "#9c27b0", d: 2.5 },
  { t: "Especial", s: "1.6rem", x: 40, y: 88, c: "#ff4dff", d: 0.4 },
  { t: "Siempre Juntos", s: "2.1rem", x: 65, y: 88, c: "#ff3366", d: 1.1 }
];

const wordsEl = document.getElementById('wordsEl');
if (wordsEl) {
  words.forEach(w => {
    const el = document.createElement('span');
    el.className = 'bg-word';
    el.textContent = w.t;
    el.style.cssText = `font-size:${w.s}; left:${w.x}%; top:${w.y}%; color:${w.c}; animation-delay:${w.d}s`;
    wordsEl.appendChild(el);
  });
}

// ── Petals & Floating Emoticons ──────────────────────────────────────
const emojis = ["🌸", "🌺", "🌹", "🌷", "💖", "✨", "🎂", "🎈", "💝", "🎁"];
const petalsEl = document.getElementById('petalsEl');
if (petalsEl) {
  for (let i = 0; i < 16; i++) {
    const el = document.createElement('div');
    el.className = 'floating-petal';
    el.textContent = emojis[i % emojis.length];
    el.style.cssText = `left:${((i * 6 + 4) % 92 + 3)}%; animation-delay:${((i * 0.8) % 7)}s; animation-duration:${(7 + (i * 1.2) % 6)}s; font-size:${(1.2 + (i * 0.3) % 1.2)}rem`;
    petalsEl.appendChild(el);
  }
}

// ── Floating Birthday Balloons ───────────────────────────────────────
const balloonsEl = document.getElementById('balloonsEl');
const balloonEmojis = ["🎈", "🎈", "💖", "🎂", "🎉", "✨", "🎈"];
if (balloonsEl) {
  for (let i = 0; i < 8; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.textContent = balloonEmojis[i % balloonEmojis.length];
    b.style.cssText = `left:${((i * 12 + 5) % 90 + 3)}%; animation-delay:${((i * 1.5) % 9)}s; animation-duration:${(11 + (i * 1.1) % 6)}s; font-size:${(1.8 + (i * 0.3) % 1.2)}rem`;
    balloonsEl.appendChild(b);
  }
}

// ── Interactive Heart Spawn on Click/Tap ────────────────────────────
const tapHeartEmojis = ["💖", "💗", "💕", "💞", "💓", "✨", "🌸", "❤️"];
document.addEventListener('click', (e) => {
  if (e.target.closest('button') || e.target.closest('.envelope-wrapper') || e.target.closest('.letter-card') || e.target.closest('.wishes-card')) return;

  const heart = document.createElement('div');
  heart.className = 'floating-tap-heart';
  heart.textContent = tapHeartEmojis[Math.floor(Math.random() * tapHeartEmojis.length)];
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
});

// ── Typewriter Effect ────────────────────────────────────────────────
const parts = ["Alondra Lucía", "Mi Princesa", "El Amor de Mi Vida", "¡Feliz Cumpleaños! 🎂"];
const textEl = document.getElementById('textEl');
const cursorEl = document.getElementById('cursorEl');
let pi = 0, shown = '', ti = 0;

function tick() {
  if (!textEl) return;
  shown = parts[pi].slice(0, ++ti);
  textEl.textContent = shown;
  if (cursorEl) cursorEl.style.display = 'inline-block';

  if (ti >= parts[pi].length) {
    setTimeout(() => { erase(); }, 1800);
  } else {
    setTimeout(tick, 100);
  }
}

function erase() {
  if (!textEl) return;
  if (shown.length === 0) {
    if (cursorEl) cursorEl.style.display = 'none';
    pi = (pi + 1) % parts.length;
    ti = 0;
    setTimeout(() => {
      if (cursorEl) cursorEl.style.display = 'inline-block';
      tick();
    }, 300);
    return;
  }
  shown = shown.slice(0, -1);
  textEl.textContent = shown;
  setTimeout(erase, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  tick();
});

// ── Letter Modal Interactions ────────────────────────────────────────
const envelopeWrapper = document.getElementById('envelopeWrapper');
const letterOverlay = document.getElementById('letterOverlay');
const letterContent = document.getElementById('letterContent');
const btnCloseLetter = document.getElementById('btnCloseLetter');
let lineTimer = null;

function animateLetterLines(text) {
  if (!letterContent) return;
  letterContent.innerHTML = '';
  const lines = text.split('\n');
  let i = 0;

  function nextLine() {
    if (i < lines.length) {
      const line = lines[i++];
      if (line === '') {
        letterContent.appendChild(document.createElement('br'));
      } else {
        const p = document.createElement('p');
        p.className = 'letter-line';
        p.style.animationDelay = `${i * 0.05}s`;
        p.textContent = line;
        letterContent.appendChild(p);
      }
      lineTimer = setTimeout(nextLine, line === '' ? 150 : 350);
    }
  }
  nextLine();
}

function openLoveLetter() {
  if (envelopeWrapper) envelopeWrapper.classList.add('open');
  setTimeout(() => {
    if (letterOverlay) letterOverlay.classList.add('active');
    animateLetterLines(msgText);
  }, 600);
}

function closeLoveLetter() {
  if (lineTimer) clearTimeout(lineTimer);
  if (letterOverlay) letterOverlay.classList.remove('active');
  setTimeout(() => {
    if (envelopeWrapper) envelopeWrapper.classList.remove('open');
  }, 400);
}

if (envelopeWrapper) {
  envelopeWrapper.addEventListener('click', openLoveLetter);
}

if (btnCloseLetter) {
  btnCloseLetter.addEventListener('click', closeLoveLetter);
}

if (letterOverlay) {
  letterOverlay.addEventListener('click', (e) => {
    if (e.target === letterOverlay) {
      closeLoveLetter();
    }
  });
}

// ── Birthday Wishes Modal Interactions ───────────────────────────────
const wishesBtn = document.getElementById('wishesBtn');
const wishesOverlay = document.getElementById('wishesOverlay');
const btnCloseWishes = document.getElementById('btnCloseWishes');

if (wishesBtn && wishesOverlay) {
  wishesBtn.addEventListener('click', () => {
    wishesOverlay.classList.add('active');
  });
}

if (btnCloseWishes && wishesOverlay) {
  btnCloseWishes.addEventListener('click', () => {
    wishesOverlay.classList.remove('active');
  });
}

if (wishesOverlay) {
  wishesOverlay.addEventListener('click', (e) => {
    if (e.target === wishesOverlay) {
      wishesOverlay.classList.remove('active');
    }
  });
}

// ── Cross-Platform Audio Playback Logic ─────────────────────────────
const bgAudio = document.getElementById('bgAudio');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');
const musicIcon = document.getElementById('musicIcon');
const audioToast = document.getElementById('audioToast');

let isPlaying = false;
let userHasInteracted = false;

function showAudioToast(text) {
  if (!audioToast) return;
  if (text) audioToast.textContent = text;
  audioToast.classList.add('show');
  setTimeout(() => {
    audioToast.classList.remove('show');
  }, 3500);
}

function updateMusicUI(playing) {
  isPlaying = playing;
  if (!musicBtn || !musicText || !musicIcon) return;

  if (playing) {
    musicBtn.classList.add('playing');
    musicIcon.textContent = '🎶';
    musicText.textContent = 'Música: Sonando 💕';
  } else {
    musicBtn.classList.remove('playing');
    musicIcon.textContent = '🎵';
    musicText.textContent = 'Música: Pausada';
  }
}

async function startPlayback() {
  if (!bgAudio) return;
  try {
    bgAudio.muted = false;
    bgAudio.volume = 1.0;
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      await playPromise;
      updateMusicUI(true);
      showAudioToast('🎶 Reproduciendo "Seremos" 💕');
    }
  } catch (err) {
    console.log("Autoplay blocked or playback error:", err);
    updateMusicUI(false);
  }
}

function pausePlayback() {
  if (!bgAudio) return;
  bgAudio.pause();
  updateMusicUI(false);
  showAudioToast('⏸️ Música pausada');
}

function toggleMusic(e) {
  if (e) e.stopPropagation();
  if (isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
}

// Global user interaction trigger for mobile (iOS Safari & Android Chrome autoplay policy)
function handleFirstUserInteraction() {
  if (!userHasInteracted) {
    userHasInteracted = true;
    startPlayback();
    document.removeEventListener('touchstart', handleFirstUserInteraction);
    document.removeEventListener('click', handleFirstUserInteraction);
  }
}

document.addEventListener('touchstart', handleFirstUserInteraction, { passive: true, once: true });
document.addEventListener('click', handleFirstUserInteraction, { once: true });

if (musicBtn) {
  musicBtn.addEventListener('click', toggleMusic);
}
