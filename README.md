# B B Dogs Pearls — demo visuale

Landing page statica in italiano per presentare una possibile direzione visiva del brand. Le cinque sezioni sono Home, Chi sono, Artigianalità, Shop e Contatti.

## Aprire la demo

Aprire `index.html` in un browser moderno. HTML, CSS, JavaScript e immagini sono nella stessa cartella di progetto e funzionano offline. Per provarla tramite server locale:

```sh
python3 -m http.server 4173
```

Quindi aprire `http://127.0.0.1:4173/`.

## Contenuti e funzioni

- Logo estratto dal PDF fornito, salvato come PNG trasparente. Il PDF originale è conservato in `assets/source/`.
- Fotografie dei prodotti fornite dall'utente, convertite in WebP per ridurre il peso della pagina.
- Le due immagini illustrative della sezione materiali provengono da Pexels: [Diana Onfilm, mani che annodano un cordino](https://www.pexels.com/photo/woman-doing-knots-on-a-rope-8771036/) e [Pixabay, dettaglio di cordino blu e bianco](https://www.pexels.com/photo/blue-and-white-rope-in-bundle-on-white-table-45873/). Non raffigurano il laboratorio o i materiali effettivi di B B Dogs Pearls.
- Introduzione animata con possibilità di saltarla e rispetto di `prefers-reduced-motion`.
- Menu mobile, navigazione ad ancore e cinque schede prodotto selezionabili anche con la tastiera. Su mobile le miniature scorrono in un ciclo continuo e restano scorribili con il dito; l'avanzamento automatico si ferma durante l'interazione e rispetta `prefers-reduced-motion`. Ogni scheda ha inoltre un carosello di fotografie con pallini cliccabili.
- Il pulsante “Ordina”, il form di contatto e il popup “Voglio saperne di più” sono pronti nell'interfaccia. L'invio richiede ancora il numero WhatsApp e un indirizzo email di destinazione per i moduli.
- Testi narrativi dimostrativi da validare con l'artigiana prima della pubblicazione.
- Icone social nell'header; icone social, WhatsApp, telefono ed email nei Contatti e nel footer; pulsante WhatsApp fluttuante. Le icone reagiscono al passaggio del mouse e al focus e, al clic, mostrano un avviso: i collegamenti esterni e i recapiti restano in preparazione finché non vengono forniti quelli del cliente.

Questa è una proposta visuale, non uno shop operativo. La versione finale richiederà contenuti approvati, recapiti, link social e l'eventuale implementazione delle funzioni di vendita.
