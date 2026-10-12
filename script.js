const intro = document.querySelector('#intro');
const skipIntro = document.querySelector('#intro-skip');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const whatsappNumber = '393780913974';

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
  window.setTimeout(closeIntro, 4300);
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

function openWhatsApp(message) {
  const phone = whatsappNumber.replace(/\D/g, '');
  if (!phone) return false;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  return true;
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

const materialsSection = document.querySelector('#materiali');
const materialTabs = [...document.querySelectorAll('.material-tab')];
const materialPanels = [...document.querySelectorAll('.material-panel')];

if (materialsSection && materialTabs.length === materialPanels.length) {
  materialsSection.classList.add('is-enhanced');
  const selectMaterial = activeTab => {
    materialTabs.forEach(tab => {
      const selected = tab === activeTab;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-pressed', String(selected));
      document.querySelector(`#${tab.getAttribute('aria-controls')}`).hidden = !selected;
    });
  };
  materialTabs.forEach(tab => tab.addEventListener('click', () => selectMaterial(tab)));
  selectMaterial(materialTabs[0]);
}

const products = {
  'collari-intrecciati': {
    overline: 'Un dettaglio da indossare',
    title: 'Collari intrecciati',
    description: 'Intrecci e accostamenti di colore danno a ogni collare un carattere tutto suo. Un piccolo segno distintivo per le passeggiate di ogni giorno.',
    gallery: ['collare-sabbia', 'set-oceano', 'set-terracotta', 'set-fucsia']
  },
  'collari-fiore': {
    overline: 'Un tocco floreale',
    title: 'Collari fiore',
    description: 'Un collare con un dettaglio a fiore da immaginare nei colori che preferisci. Scrivi a Belinda per definire insieme la tua versione.',
    gallery: ['set-fucsia', 'collare-sabbia', 'set-oceano', 'set-terracotta']
  },
  'collari-biothane-rivestito': {
    overline: 'Da creare insieme',
    title: 'Collari in biothane rivestito',
    description: 'Una proposta in biothane rivestito da personalizzare su richiesta. Contatta Belinda per parlare di colori, misura e dettagli.',
    gallery: ['guinzaglio-montagna', 'set-celeste', 'set-fucsia', 'collare-sabbia']
  },
  'collari-corda': {
    overline: 'Per ogni passeggiata',
    title: 'Collari in corda',
    description: 'Collari in corda pensati per accompagnare le passeggiate di ogni giorno. Colori e misura si scelgono insieme prima della realizzazione.',
    gallery: ['set-oceano', 'collare-sabbia', 'set-terracotta', 'set-celeste']
  },
  'guinzagli-corda': {
    overline: 'Per camminare insieme',
    title: 'Guinzagli in corda',
    description: 'Un guinzaglio in corda da scegliere in base ai colori che ami. Racconta a Belinda come lo immagini e definite insieme i dettagli.',
    gallery: ['guinzaglio-celeste', 'guinzaglio-montagna', 'set-terracotta', 'set-celeste']
  },
  'guinzagli-intrecciati': {
    overline: 'Trame da scegliere',
    title: 'Guinzagli intrecciati',
    description: 'Gli intrecci danno carattere al guinzaglio. Per colori e combinazioni, ogni richiesta parte da una conversazione con Belinda.',
    gallery: ['set-terracotta', 'set-oceano', 'set-celeste', 'set-fucsia']
  },
  'collari-guinzagli-biothane': {
    overline: 'Insieme, nei dettagli',
    title: 'Collari e guinzagli in biothane',
    description: 'Collare e guinzaglio in biothane possono essere scelti insieme. Scrivi per concordare colori, misure e finiture su richiesta.',
    gallery: ['set-celeste', 'guinzaglio-montagna', 'set-terracotta', 'set-oceano']
  },
  portamedagliette: {
    overline: 'Un piccolo dettaglio',
    title: 'Portamedagliette',
    description: 'Un accessorio dedicato alla medaglietta del tuo cane. Chiedi a Belinda quali colori e dettagli sono disponibili.',
    gallery: ['medagliette', 'set-celeste', 'set-oceano']
  },
  medagliette: {
    overline: 'Il dettaglio che completa',
    title: 'Medagliette',
    description: 'Piccole forme e sfumature da abbinare a collari e guinzagli. Contatta Belinda per conoscere le possibilità di personalizzazione.',
    gallery: ['medagliette', 'set-celeste', 'set-oceano']
  },
  'targhette-fisse': {
    overline: 'Sempre con sé',
    title: 'Targhette fisse',
    description: 'Una targhetta da pensare insieme al collare. Scrivi a Belinda per scegliere la soluzione e i dettagli più adatti.',
    gallery: ['medagliette', 'set-oceano', 'collare-sabbia']
  },
  portasacchetti: {
    overline: 'Pratico da portare',
    title: 'Portasacchetti',
    description: 'Un accessorio da avere con sé durante la passeggiata. Colori e dettagli si concordano con Belinda prima della realizzazione.',
    gallery: ['set-fucsia', 'set-terracotta', 'guinzaglio-celeste']
  }
};

const photos = {
  'collare-sabbia': 'Collare intrecciato in cordini color sabbia, bianco e azzurro',
  'guinzaglio-celeste': 'Guinzaglio celeste intrecciato con dettagli blu scuro',
  'guinzaglio-montagna': 'Collare e guinzaglio azzurri fotografati all’aperto',
  'set-terracotta': 'Collare e guinzaglio coordinati in tonalità terracotta e borgogna',
  'set-oceano': 'Collare e guinzaglio intrecciati nelle sfumature del blu',
  'set-celeste': 'Collare e guinzaglio celesti con piccola medaglietta',
  'set-fucsia': 'Collare e guinzaglio intrecciati in rosa, fucsia, viola e azzurro',
  'medagliette': 'Medagliette decorative per cani in varie forme e sfumature di blu'
};

const productChoices = [...document.querySelectorAll('.product-choice')];
const productDialog = document.querySelector('#product-dialog');
const productClose = document.querySelector('#product-close');
const productPhoto = document.querySelector('#product-photo');
const productImage = document.querySelector('#product-image');
const productDots = document.querySelector('#product-dots');
const mobilePicker = window.matchMedia('(max-width: 760px)');
let selectedProduct = 'collari-intrecciati';
let currentSlide = 0;
let carouselTimer;
let carouselPaused = false;
let lastProductChoice;

function stopCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = undefined;
}

function startCarousel() {
  stopCarousel();
  if (!productDialog.open || carouselPaused || reducedMotion.matches || document.hidden) return;
  const gallery = products[selectedProduct].gallery;
  if (gallery.length < 2) return;
  carouselTimer = window.setInterval(() => showSlide((currentSlide + 1) % gallery.length), 4200);
}

function showSlide(index) {
  const photo = products[selectedProduct].gallery[index];
  currentSlide = index;
  productImage.src = `assets/images/${photo}.webp`;
  productImage.alt = photos[photo];
  productDots.querySelectorAll('button').forEach((dot, dotIndex) => dot.setAttribute('aria-pressed', String(dotIndex === index)));
  productPhoto.classList.remove('is-changing');
  void productPhoto.offsetWidth;
  productPhoto.classList.add('is-changing');
}

function renderDots() {
  const gallery = products[selectedProduct].gallery;
  productDots.replaceChildren();
  gallery.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Mostra foto ${index + 1} di ${gallery.length}`);
    dot.setAttribute('aria-pressed', String(index === currentSlide));
    dot.addEventListener('click', () => {
      showSlide(index);
      startCarousel();
    });
    productDots.append(dot);
  });
}

function openProduct(choice) {
  const product = products[choice.dataset.product];
  if (!product) return;
  selectedProduct = choice.dataset.product;
  lastProductChoice = choice;
  document.querySelector('#product-overline').textContent = product.overline;
  document.querySelector('#product-title').textContent = product.title;
  document.querySelector('#product-description').textContent = product.description;
  productPhoto.setAttribute('aria-label', `Fotografie: ${product.title}`);
  currentSlide = 0;
  renderDots();
  showSlide(0);
  document.querySelector('#order-status').hidden = true;
  productDialog.showModal();
  document.body.classList.add('modal-open');
  productClose.focus({ preventScroll: true });
  startCarousel();
}

productChoices.forEach(choice => choice.addEventListener('click', () => openProduct(choice)));
productClose.addEventListener('click', () => productDialog.close());
productDialog.addEventListener('click', event => {
  if (event.target !== productDialog) return;
  const box = productDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) productDialog.close();
});
productDialog.addEventListener('close', () => {
  stopCarousel();
  document.body.classList.remove('modal-open');
  lastProductChoice?.focus({ preventScroll: true });
});
productPhoto.addEventListener('mouseenter', () => { carouselPaused = true; stopCarousel(); });
productPhoto.addEventListener('mouseleave', () => { carouselPaused = false; startCarousel(); });
productPhoto.addEventListener('focusin', () => { carouselPaused = true; stopCarousel(); });
productPhoto.addEventListener('focusout', () => { carouselPaused = false; startCarousel(); });
document.addEventListener('visibilitychange', startCarousel);
reducedMotion.addEventListener('change', startCarousel);

const orderButton = document.querySelector('#order-button');
const orderStatus = document.querySelector('#order-status');
orderButton?.addEventListener('click', () => {
  const product = products[selectedProduct];
  if (openWhatsApp(`Ciao Belinda, vorrei ordinare ${product.title.toLowerCase()}. Possiamo parlarne?`)) {
    orderStatus.hidden = true;
    return;
  }
  orderStatus.textContent = 'Il numero WhatsApp sarà collegato appena disponibile.';
  orderStatus.hidden = false;
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  formStatus.textContent = 'Il form è pronto. Per attivare l’invio manca ancora il recapito di destinazione.';
  formStatus.hidden = false;
});

const infoOpen = document.querySelector('#info-open');
const infoDialog = document.querySelector('#info-dialog');
const infoClose = document.querySelector('#info-close');
const infoForm = document.querySelector('#info-form');
const infoFormStatus = document.querySelector('#info-form-status');

infoOpen?.addEventListener('click', () => {
  infoFormStatus.hidden = true;
  infoDialog.showModal();
  document.body.classList.add('modal-open');
  if (mobilePicker.matches) infoDialog.focus({ preventScroll: true });
  else document.querySelector('#info-name').focus();
});
infoClose?.addEventListener('click', () => infoDialog.close());
infoDialog?.addEventListener('click', event => {
  if (event.target !== infoDialog) return;
  const box = infoDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) infoDialog.close();
});
infoDialog?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  infoOpen.focus();
});
infoForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!infoForm.reportValidity()) return;
  infoFormStatus.textContent = 'La richiesta è pronta. Per inviarla manca ancora l’indirizzo email di destinazione.';
  infoFormStatus.hidden = false;
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
