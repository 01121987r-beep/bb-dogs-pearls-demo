const intro = document.querySelector('#intro');
const skipIntro = document.querySelector('#intro-skip');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const whatsappNumber = '';

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

const whatsappFloat = document.querySelector('#whatsapp-float');
const whatsappButton = document.querySelector('#whatsapp-button');
const whatsappNote = document.querySelector('#whatsapp-note');
const channelToast = document.querySelector('#channel-toast');
let channelToastTimer;

function hideChannelToast() {
  window.clearTimeout(channelToastTimer);
  channelToast.hidden = true;
}

document.querySelectorAll('.channel-icon[data-channel]').forEach(button => {
  button.addEventListener('click', () => {
    const channel = button.dataset.channel;
    const kind = channel === 'Telefono' || channel === 'Email' ? 'recapito' : 'collegamento';
    window.clearTimeout(channelToastTimer);
    channelToast.textContent = `${channel}: ${kind} in preparazione.`;
    channelToast.hidden = false;
    channelToastTimer = window.setTimeout(hideChannelToast, 3200);
  });
});

function closeWhatsAppNote() {
  whatsappNote.hidden = true;
  whatsappButton.setAttribute('aria-expanded', 'false');
}

function openWhatsApp(message) {
  const phone = whatsappNumber.replace(/\D/g, '');
  if (!phone) return false;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  return true;
}

whatsappButton?.addEventListener('click', () => {
  if (openWhatsApp('Ciao Belinda, vorrei avere informazioni sulle tue creazioni.')) return;
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
    hideChannelToast();
  }
});

const products = {
  collari: {
    overline: 'Un dettaglio da indossare',
    title: 'Collari intrecciati',
    description: 'Intrecci e accostamenti di colore danno a ogni collare un carattere tutto suo. Un piccolo segno distintivo per le passeggiate di ogni giorno.',
    gallery: ['collare-sabbia', 'set-oceano', 'set-terracotta', 'set-fucsia']
  },
  guinzagli: {
    overline: 'Per camminare insieme',
    title: 'Guinzagli artigianali',
    description: 'Le trame e i colori diventano parte del vostro stile. Un accessorio da scegliere pensando a tutte le strade che percorrerete insieme.',
    gallery: ['guinzaglio-celeste', 'guinzaglio-montagna', 'set-terracotta', 'set-celeste']
  },
  set: {
    overline: 'Tutto si abbina',
    title: 'Set coordinati',
    description: 'Collare e guinzaglio dialogano tra loro con intrecci e tonalità coordinate. Per chi ama curare anche i dettagli della passeggiata.',
    gallery: ['set-terracotta', 'set-oceano', 'set-celeste', 'set-fucsia']
  },
  colori: {
    overline: 'Un tocco di personalità',
    title: 'Colori da scegliere',
    description: 'Dalle sfumature delicate a quelle più vivaci: le combinazioni di cordini rendono ogni creazione una piccola espressione di carattere.',
    gallery: ['set-fucsia', 'set-terracotta', 'set-oceano', 'set-celeste']
  },
  medagliette: {
    overline: 'Il dettaglio che completa',
    title: 'Medagliette e accessori',
    description: 'Piccole forme e sfumature da abbinare a collari e guinzagli, per aggiungere un dettaglio allegro e personale.',
    gallery: ['medagliette', 'set-celeste', 'set-oceano']
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

const tabs = [...document.querySelectorAll('.product-tab')];
const productPicker = document.querySelector('.product-picker');
const panel = document.querySelector('#product-panel');
const productPhoto = document.querySelector('#product-photo');
const productImage = document.querySelector('#product-image');
const productDots = document.querySelector('#product-dots');
let selectedProduct = 'collari';
let currentSlide = 0;
let carouselTimer;
let carouselVisible = false;
let carouselPaused = false;

function stopCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = undefined;
}

function startCarousel() {
  stopCarousel();
  if (!carouselVisible || carouselPaused || reducedMotion.matches || document.hidden) return;
  carouselTimer = window.setInterval(() => showSlide((currentSlide + 1) % products[selectedProduct].gallery.length), 4200);
}

function showSlide(index) {
  const gallery = products[selectedProduct].gallery;
  currentSlide = index;
  const photo = gallery[index];
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

function selectProduct(tab, focus = false) {
  const product = products[tab.dataset.product];
  if (!product) return;
  tabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  productPicker.querySelectorAll('[data-carousel-copy]').forEach(item => {
    item.classList.toggle('is-active', item.dataset.product === tab.dataset.product);
  });
  panel.setAttribute('aria-labelledby', tab.id);
  document.querySelector('#product-overline').textContent = product.overline;
  document.querySelector('#product-title').textContent = product.title;
  document.querySelector('#product-description').textContent = product.description;
  selectedProduct = tab.dataset.product;
  productPhoto.setAttribute('aria-label', `Fotografie: ${product.title}`);
  currentSlide = 0;
  renderDots();
  showSlide(0);
  startCarousel();
  panel.classList.remove('is-switching');
  void panel.offsetWidth;
  panel.classList.add('is-switching');
  if (focus) tab.focus();
}

renderDots();
if ('IntersectionObserver' in window) {
  const carouselObserver = new IntersectionObserver(([entry]) => {
    carouselVisible = entry.isIntersecting;
    if (carouselVisible) startCarousel();
    else stopCarousel();
  }, { threshold: .15 });
  carouselObserver.observe(productPhoto);
} else {
  carouselVisible = true;
  startCarousel();
}
productPhoto.addEventListener('mouseenter', () => { carouselPaused = true; stopCarousel(); });
productPhoto.addEventListener('mouseleave', () => { carouselPaused = false; startCarousel(); });
productPhoto.addEventListener('focusin', () => { carouselPaused = true; stopCarousel(); });
productPhoto.addEventListener('focusout', () => { carouselPaused = false; startCarousel(); });
document.addEventListener('visibilitychange', startCarousel);

const mobilePicker = window.matchMedia('(max-width: 760px)');
let pickerCopies = [];
let pickerCycleWidth = 0;
let pickerStepWidth = 0;
let pickerVisible = false;
let pickerPaused = false;
let pickerTimer;
let pickerResumeTimer;

function stopPickerCarousel() {
  window.clearInterval(pickerTimer);
  pickerTimer = undefined;
}

function normalizePickerScroll() {
  if (!pickerCycleWidth) return;
  if (productPicker.scrollLeft < pickerCycleWidth * .5) productPicker.scrollLeft += pickerCycleWidth;
  if (productPicker.scrollLeft > pickerCycleWidth * 1.5) productPicker.scrollLeft -= pickerCycleWidth;
}

function startPickerCarousel() {
  stopPickerCarousel();
  if (!mobilePicker.matches || !pickerVisible || pickerPaused || reducedMotion.matches || document.hidden) return;
  pickerTimer = window.setInterval(() => {
    productPicker.scrollBy({ left: pickerStepWidth, behavior: 'smooth' });
  }, 4300);
}

function pausePickerCarousel(delay = 0) {
  stopPickerCarousel();
  window.clearTimeout(pickerResumeTimer);
  pickerPaused = true;
  if (delay) pickerResumeTimer = window.setTimeout(() => {
    pickerPaused = false;
    normalizePickerScroll();
    startPickerCarousel();
  }, delay);
}

function setupPickerCarousel() {
  stopPickerCarousel();
  pickerCopies.forEach(copy => copy.remove());
  pickerCopies = [];
  pickerCycleWidth = 0;
  pickerStepWidth = 0;
  if (!mobilePicker.matches) {
    productPicker.scrollLeft = 0;
    return;
  }
  const makeCopy = tab => {
    const copy = tab.cloneNode(true);
    copy.removeAttribute('id');
    copy.removeAttribute('role');
    copy.removeAttribute('aria-selected');
    copy.removeAttribute('aria-controls');
    copy.setAttribute('aria-hidden', 'true');
    copy.setAttribute('tabindex', '-1');
    copy.dataset.carouselCopy = '';
    copy.addEventListener('click', () => {
      selectProduct(tab);
      pausePickerCarousel(2500);
    });
    pickerCopies.push(copy);
    return copy;
  };
  const before = tabs.map(makeCopy);
  const after = tabs.map(makeCopy);
  productPicker.prepend(...before);
  productPicker.append(...after);
  pickerCycleWidth = tabs[0].offsetLeft - before[0].offsetLeft;
  pickerStepWidth = tabs[1].offsetLeft - tabs[0].offsetLeft;
  productPicker.scrollLeft = pickerCycleWidth;
  startPickerCarousel();
}

productPicker.addEventListener('scroll', normalizePickerScroll, { passive: true });
productPicker.addEventListener('pointerdown', () => pausePickerCarousel(), { passive: true });
productPicker.addEventListener('pointerup', () => pausePickerCarousel(2500), { passive: true });
productPicker.addEventListener('pointercancel', () => pausePickerCarousel(2500), { passive: true });
productPicker.addEventListener('wheel', () => pausePickerCarousel(2500), { passive: true });
productPicker.addEventListener('focusin', () => pausePickerCarousel());
productPicker.addEventListener('focusout', () => pausePickerCarousel(2500));
mobilePicker.addEventListener('change', setupPickerCarousel);
reducedMotion.addEventListener('change', startPickerCarousel);
document.addEventListener('visibilitychange', startPickerCarousel);
window.addEventListener('resize', () => {
  if (mobilePicker.matches && pickerCopies.length) {
    pickerCycleWidth = tabs[0].offsetLeft - pickerCopies[0].offsetLeft;
    pickerStepWidth = tabs[1].offsetLeft - tabs[0].offsetLeft;
  }
}, { passive: true });
if ('IntersectionObserver' in window) {
  const pickerObserver = new IntersectionObserver(([entry]) => {
    pickerVisible = entry.isIntersecting;
    if (pickerVisible) startPickerCarousel();
    else stopPickerCarousel();
  }, { threshold: .15 });
  pickerObserver.observe(productPicker);
} else {
  pickerVisible = true;
}
setupPickerCarousel();

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
const infoDeliveryNote = document.querySelector('.info-delivery-note');

infoOpen?.addEventListener('click', () => {
  infoFormStatus.hidden = true;
  infoDeliveryNote.hidden = false;
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
  infoDeliveryNote.hidden = true;
  infoFormStatus.hidden = false;
});

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
