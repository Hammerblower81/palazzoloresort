# Modificare camere e fotografie

I dati di questa parte del sito sono in `src/data/stay.ts`. I contatti sono in `src/data/site.ts`; per i testi editoriali e le esperienze vedi la sezione Pagine più sotto.

## Camere

Ogni elemento di `rooms` contiene nome, superficie, tipologia di letto, vista, descrizione e dettaglio caratteristico. I testi sono disponibili in `it` e `en`: aggiorna entrambi.

`photoId` sceglie una fotografia dall'elenco `photos`. Non occorre modificare il componente per cambiare la foto di una camera. Le quattro schede sono incluse nella proposta dell'intero casolare: non sono annunci di camere prenotabili separatamente.

Superfici, letti e viste sono stati ripresi dalla pagina originale `https://www.palazzoloresort.it/our-rooms/`. Confermali se la disposizione della casa è cambiata. In particolare, la Superior Room conserva il dato originale «due letti singoli», mentre le foto disponibili mostrano soprattutto camino e arredi.

## Aggiungere una fotografia

1. Inserisci il file in `src/assets/`, con un nome descrittivo.
2. Importalo in cima a `src/data/stay.ts`, come gli altri.
3. Aggiungi un elemento a `photos`, con un `id` unico.
4. Scegli la categoria: `interiors`, `outdoors` o `pool`.
5. Compila `caption` e `alt` in entrambe le lingue. La didascalia racconta la foto; il testo alternativo descrive ciò che si vede.

Esempio, dopo aver aggiunto il file e l'import `newPhoto`:

```ts
{
  id: 'cucina-dettaglio',
  image: newPhoto,
  category: 'interiors',
  caption: {
    it: 'La cucina · Un nuovo dettaglio',
    en: 'The kitchen · A closer look',
  },
  alt: {
    it: 'Descrizione precisa di ciò che mostra la foto',
    en: 'An accurate description of what the photograph shows',
  },
}
```

La galleria prende ordine e contenuti da questo elenco. Genera automaticamente anteprime WebP, immagini ingrandibili e filtri. Mostra inizialmente fino a otto foto per categoria, con un pulsante per le successive. Senza JavaScript mostra tutte le immagini e i link aprono direttamente la foto grande.

Le foto nuove di questa revisione sono state recuperate dalla pagina originale delle camere. Non vengono caricate da WordPress durante la visita al nuovo sito: fanno parte del progetto.

## Componenti

| File                             | Funzione                                            |
| -------------------------------- | --------------------------------------------------- |
| `src/components/Interiors.astro` | Restauro, cucina e dettagli della Suite             |
| `src/components/Rooms.astro`     | Le quattro schede camera                            |
| `src/components/Gallery.astro`   | Filtri, altre foto e visualizzatore a tutto schermo |
| `src/styles/stay.css`            | Impaginazione e stile di queste sezioni             |

Il visualizzatore supporta frecce, tasto Esc e ritorno del focus alla foto di partenza. I filtri valgono anche per le foto sfogliabili nel visualizzatore; una foto aperta dalle schede camera consente invece di sfogliare l'intero album.

## Pagine, esperienze e recensioni

Il sito ha sei pagine per lingua: Home, Il casolare, Esperienze, Galleria, Recensioni e Contatti. `src/data/pages.ts` contiene percorsi, etichette ed esperienze. `Home.astro` e `DetailPage.astro` contengono i testi editoriali, `Layout.astro` intestazione, contatti e piè di pagina. Le immagini del bagno, della piscina e di Anghiari provengono dalla libreria del sito originale. `public/palazzolo-logo.svg` è una conversione vettoriale del PDF originale fornito dal proprietario.

I dati fondamentali confermati dal proprietario sono **quattro camere, quattro bagni, una sola prenotazione alla volta, casa, piscina e giardino a uso esclusivo**. Mantieni le due lingue coerenti quando aggiorni questi dati.

### Valutazioni

Modifica `src/data/reviews.ts`. Per ciascuna piattaforma inserisci `score`, `scale`, `count` e `checked` (AAAA-MM-GG) solo dopo una verifica sulla fonte o conferma del proprietario. Senza tutti i dati il sito mostra il collegamento alla piattaforma, senza numeri. Airbnb: 5/5 e 11 recensioni, verificati nei dati strutturati dell'annuncio pubblico il 10 novembre 2026. Il link Google proviene dalla pagina Contatti del sito originale. Google: 4,9/5 su 29 recensioni, verificato nella scheda pubblica Google. Booking: 9,8/10 su 8 recensioni, verificato nella pagina pubblica della struttura. Tutti i dati sono del 10 novembre 2026.

`guestReviews` contiene estratti autentici con autore, piattaforma, data, URL, nota di traduzione e testo IT/EN. Le quattro testimonianze Google provengono dai link selezionati dal proprietario; sono estratti brevi delle traduzioni visualizzate da Google, con collegamento alla singola recensione. La data indicata è quella di consultazione, non di pubblicazione. Le testimonianze Airbnb di Elke e Laura provengono dall’HTML fornito dal proprietario. Il testo inglese era già indicato da Airbnb come tradotto; il sito lo segnala in entrambe le lingue. Non sono presenti testimonianze inventate. Le valutazioni non si aggiornano da sole: ogni modifica richiede una nuova build.

### Esperienze ed eventi

I suggerimenti non promettono noleggi, guide o degustazioni incluse. Non sono indicati tempi di percorrenza non verificati. Una futura sezione eventi può seguire un elenco con date e fonti: per nascondere automaticamente eventi scaduti in build serve anche una ricostruzione programmata del sito.

## Revisione e pubblicazione

Per vedere le modifiche usa `npm run dev`. Per verificare la build usa `npm run build`.

Questa revisione è solo locale. Un successivo commit e push su `main` farà partire la pubblicazione automatica di Cloudflare Pages. Attendi la revisione prima del push.
