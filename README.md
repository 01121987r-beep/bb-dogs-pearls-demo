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
- Fotografie fornite dall'utente, convertite in WebP per ridurre il peso della pagina.
- Introduzione animata con possibilità di saltarla e rispetto di `prefers-reduced-motion`.
- Menu mobile, navigazione ad ancore e cinque schede prodotto selezionabili anche con la tastiera.
- Testi narrativi dimostrativi da validare con l'artigiana prima della pubblicazione.
- Icone social nell'header e pulsante WhatsApp fluttuante come elementi di progetto, senza collegamenti esterni attivi per ora. Il pulsante mostra un avviso al tocco.

Questa è una proposta visuale, non uno shop operativo. La versione finale richiederà contenuti approvati, recapiti, link social e l'eventuale implementazione delle funzioni di vendita.
