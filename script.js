const intro = document.querySelector('#intro');
const skipIntro = document.querySelector('#intro-skip');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function closeIntro() {
  if (!intro || intro.classList.contains('is-hidden')) return;
  intro.classList.add('is-hidden');
  intro.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('intro-active');
  window.setTimeout(() => { intro.hidden = true; }, 700);
}

if (reducedMotion.matches) {
  closeIntro();
} else {
  window.setTimeout(closeIntro, 2200);
}
skipIntro?.addEventListener('click', closeIntro);

const menuToggle = document.querySelector('#menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const siteHeader = document.querySelector('#site-header');

function updateHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 36);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Apri il menu');
  primaryNav.classList.remove('is-open');
  siteHeader.classList.remove('is-menu-open');
}

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  primaryNav.classList.toggle('is-open', open);
  siteHeader.classList.toggle('is-menu-open', open);
});
primaryNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const whatsappFloat = document.querySelector('#whatsapp-float');
const whatsappButton = document.querySelector('#whatsapp-button');
const whatsappNote = document.querySelector('#whatsapp-note');

function closeWhatsAppNote() {
  whatsappNote.hidden = true;
  whatsappButton.setAttribute('aria-expanded', 'false');
}

whatsappButton?.addEventListener('click', () => {
  const open = whatsappNote.hidden;
  whatsappNote.hidden = !open;
  whatsappButton.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', event => {
  if (!whatsappFloat.contains(event.target)) closeWhatsAppNote();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    closeWhatsAppNote();
  }
});

const products = {
  collari: {
    overline: 'Un dettaglio da indossare',
    title: 'Collari intrecciati',
    description: 'Intrecci e accostamenti di colore danno a ogni collare un carattere tutto suo. Un piccolo segno distintivo per le passeggiate di ogni giorno.',
    image: 'assets/images/collare-sabbia.webp',
    alt: 'Collare intrecciato in cordini color sabbia, bianco e azzurro'
  },
  guinzagli: {
    overline: 'Per camminare insieme',
    title: 'Guinzagli artigianali',
    description: 'Le trame e i colori diventano parte del vostro stile. Un accessorio da scegliere pensando a tutte le strade che percorrerete insieme.',
    image: 'assets/images/guinzaglio-celeste.webp',
    alt: 'Guinzaglio celeste intrecciato con dettagli blu scuro'
  },
  set: {
    overline: 'Tutto si abbina',
    title: 'Set coordinati',
    description: 'Collare e guinzaglio dialogano tra loro con intrecci e tonalità coordinate. Per chi ama curare anche i dettagli della passeggiata.',
    image: 'assets/images/set-terracotta.webp',
    alt: 'Collare e guinzaglio coordinati in tonalità terracotta e borgogna'
  },
  colori: {
    overline: 'Un tocco di personalità',
    title: 'Colori da scegliere',
    description: 'Dalle sfumature delicate a quelle più vivaci: le combinazioni di cordini rendono ogni creazione una piccola espressione di carattere.',
    image: 'assets/images/set-fucsia.webp',
    alt: 'Collare e guinzaglio intrecciati in rosa, fucsia, viola e azzurro'
  },
  medagliette: {
    overline: 'Il dettaglio che completa',
    title: 'Medagliette e accessori',
    description: 'Piccole forme e sfumature da abbinare a collari e guinzagli, per aggiungere un dettaglio allegro e personale.',
    image: 'assets/images/medagliette.webp',
    alt: 'Medagliette decorative per cani in varie forme e sfumature di blu'
  }
};

const tabs = [...document.querySelectorAll('.product-tab')];
const panel = document.querySelector('#product-panel');
const productImage = document.querySelector('#product-image');

function selectProduct(tab, focus = false) {
  const product = products[tab.dataset.product];
  if (!product) return;
  tabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('#product-overline').textContent = product.overline;
  document.querySelector('#product-title').textContent = product.title;
  document.querySelector('#product-description').textContent = product.description;
  productImage.src = product.image;
  productImage.alt = product.alt;
  panel.classList.remove('is-switching');
  void panel.offsetWidth;
  panel.classList.add('is-switching');
  if (focus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectProduct(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectProduct(tabs[next], true);
    }
  });
});

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .09, rootMargin: '0px 0px 40px 0px' });
  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add('is-visible'));
}
