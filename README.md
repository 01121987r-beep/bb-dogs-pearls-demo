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
- Menu mobile, navigazione ad ancore e cinque schede prodotto selezionabili anche con la tastiera. Ogni scheda ha un carosello di fotografie con pallini cliccabili; lo scorrimento automatico si ferma quando il carosello è in uso e rispetta `prefers-reduced-motion`.
- Il pulsante “Ordina” e il form di contatto sono pronti nell'interfaccia, ma l'invio richiede ancora il numero WhatsApp e la scelta del canale di recapito del form.
- Testi narrativi dimostrativi da validare con l'artigiana prima della pubblicazione.
- Icone social nell'header e pulsante WhatsApp fluttuante come elementi di progetto, senza collegamenti esterni attivi per ora. Il pulsante mostra un avviso al tocco finché non viene inserito il numero.

Questa è una proposta visuale, non uno shop operativo. La versione finale richiederà contenuti approvati, recapiti, link social e l'eventuale implementazione delle funzioni di vendita.
