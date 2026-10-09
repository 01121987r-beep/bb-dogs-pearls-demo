# B B Dogs Pearls — sito in sviluppo

Landing page statica in italiano per il sito B B Dogs Pearls. Le cinque sezioni attuali sono Home, Chi sono, Artigianalità, Shop e Contatti. Le sezioni dedicate a prodotti e materiali saranno riviste con la cliente.

## Aprire il sito in locale

Aprire `index.html` in un browser moderno. HTML, CSS, JavaScript e immagini sono nella stessa cartella di progetto e funzionano offline. Per provarla tramite server locale:

```sh
python3 -m http.server 4173
```

Quindi aprire `http://127.0.0.1:4173/`.

## Contenuti e funzioni

- Logo estratto dal PDF fornito, salvato come PNG trasparente. Il PDF originale è conservato in `assets/source/`.
- Fotografie dei prodotti fornite dall'utente, convertite in WebP per ridurre il peso della pagina.
- Le due immagini illustrative della sezione materiali provengono da Pexels: [Diana Onfilm, mani che annodano un cordino](https://www.pexels.com/photo/woman-doing-knots-on-a-rope-8771036/) e [Pixabay, dettaglio di cordino blu e bianco](https://www.pexels.com/photo/blue-and-white-rope-in-bundle-on-white-table-45873/). Non raffigurano il laboratorio o i materiali effettivi di B B Dogs Pearls.
- Introduzione animata con possibilità di saltarla e rispetto di `prefers-reduced-motion`. Le parole compaiono una alla volta senza ritagliare i caratteri del font manoscritto.
- Menu mobile, navigazione ad ancore e undici categorie di creazioni selezionabili anche con la tastiera. Su mobile le miniature scorrono in un ciclo continuo e restano scorribili con il dito; l'avanzamento automatico si ferma durante l'interazione e rispetta `prefers-reduced-motion`. La selezione porta la scheda sotto l'header e mostra la fotografia intera. Ogni scheda ha inoltre un carosello di fotografie con pallini cliccabili. Le immagini attuali sono provvisorie e vengono riutilizzate tra categorie in attesa degli scatti specifici.
- Il pulsante “Ordina” apre WhatsApp con un messaggio riferito al prodotto selezionato. Il pulsante WhatsApp fluttuante apre la chat. Il form di contatto e il popup “Voglio saperne di più” includono un telefono facoltativo e una casella di consenso obbligatoria, non preselezionata. Entrambi restano dimostrativi finché non vengono definiti la modalità di invio e l'informativa privacy da collegare prima dell'attivazione.
- Testi narrativi dimostrativi da validare con l'artigiana prima della pubblicazione.
- Icone Instagram e Facebook collegate ai profili ufficiali nell'header, nella sezione Contatti e in fondo alla Mappa del sito. Nel footer, sotto Contatti, restano solo telefono ed email; questi due recapiti mostrano ancora un avviso in attesa dei riferimenti ufficiali.

Il sito è una vetrina orientata agli ordini via WhatsApp, senza carrello o pagamenti online. Prima della pubblicazione sul dominio definitivo restano da confermare testi, informazioni su materiali e prodotti, recapiti aggiuntivi e gestione dei due moduli.
