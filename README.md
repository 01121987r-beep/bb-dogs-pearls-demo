# B B Dogs Pearls — sito in sviluppo

Landing page statica in italiano per il sito B B Dogs Pearls. Le sei sezioni attuali sono Home, Chi sono, Artigianalità, Materiali, Shop e Contatti. Le informazioni sui materiali e sui prodotti saranno convalidate con la cliente.

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
- Menu mobile, navigazione ad ancore e undici categorie di creazioni selezionabili anche con la tastiera. Le miniature scorrono in un ciclo continuo su desktop e mobile, restano scorribili manualmente con mouse, trackpad o dito e rispettano `prefers-reduced-motion`; l'avanzamento automatico si ferma durante l'interazione. Su mobile la selezione porta la scheda sotto l'header e mostra la fotografia intera. Ogni scheda ha inoltre un carosello di fotografie con pallini cliccabili. Le immagini attuali sono provvisorie e vengono riutilizzate tra categorie in attesa degli scatti specifici.
- La sezione Materiali presenta Paracord, Corda premium, BioThane®, PawTex / HEXA, Minuterie e Borchie con selezione interattiva. Tutti i testi restano leggibili senza JavaScript; le fotografie sono temporanee e non attestano il materiale mostrato. Le caratteristiche generali dei nastri rivestiti sono state confrontate con i siti dei produttori [BioThane](https://www.biothane.us/applications/animal/faqs/biothane-faqs/) e [PawTex](https://www.pawtex.com/), e la distinzione da HEXA con il [fornitore Paracord.eu](https://www.paracord.eu/blog/everything-you-should-know-about-pawtex-2). Verificare con Belinda la composizione e le finiture effettivamente usate prima del lancio.
- Il pulsante “Ordina” apre WhatsApp con un messaggio riferito al prodotto selezionato. Il pulsante WhatsApp fluttuante apre la chat. Il form di contatto e il popup “Voglio saperne di più” includono un telefono facoltativo e una casella di consenso obbligatoria, non preselezionata. Entrambi restano dimostrativi finché non vengono definiti la modalità di invio e l'informativa privacy da collegare prima dell'attivazione.
- Testi narrativi dimostrativi da validare con l'artigiana prima della pubblicazione.
- Icone Instagram e Facebook collegate ai profili ufficiali nell'header, nella sezione Contatti e in fondo alla Mappa del sito. Le icone di telefono ed email nella sezione Contatti e nel footer aprono rispettivamente la chiamata al numero +39 378 091 3974 e un messaggio a info@bbdogspearls.com. Nel footer la Mappa del sito precede Contatti e l'indirizzo non compare.

Il sito è una vetrina orientata agli ordini via WhatsApp, senza carrello o pagamenti online. Prima della pubblicazione sul dominio definitivo restano da confermare testi, informazioni su materiali e prodotti, recapiti aggiuntivi e gestione dei due moduli.

## SEO e pubblicazione

La demo GitHub ha `<meta name="robots" content="noindex">` per evitare che l'anteprima competa con il dominio definitivo. Titolo, descrizione, canonical, dati strutturati, favicon e metadati di condivisione sono predisposti per `https://www.bbdogspearls.com/`, destinazione del redirect dal dominio senza `www`. Le risorse `robots.txt` e `sitemap.xml` sono pronte per la radice del dominio definitivo.

Prima di pubblicare il sito completo su `bbdogspearls.com`: rimuovere **solo allora** il meta tag `noindex`, confermare l'URL canonico e le immagini usate nei metadati, verificare che `robots.txt` e `sitemap.xml` rispondano dalla radice del dominio, poi registrare il sito in Google Search Console e inviare la sitemap. Il Google tag di Analytics non è installato: misura le visite, ma non determina il titolo o la descrizione nei risultati di ricerca. Non aggiungerlo senza un ID reale e una gestione adeguata del consenso.
