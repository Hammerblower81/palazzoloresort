# Palazzolo Resort

Prima proposta del nuovo sito vetrina, in italiano e inglese. Astro genera pagine statiche: non serve un server Node in produzione, un database o un pannello WordPress.

Questa versione è locale. Nessun dominio è stato modificato, nessun account creato e nessun sito pubblicato.

## Avvio

Usa una versione di Node compatibile con `package.json` (il progetto suggerisce Node 24 tramite `.nvmrc`).

```sh
nvm use
npm ci
npm run dev
```

Apri l'indirizzo locale stampato dal terminale. La home italiana è `/`, quella inglese `/en/`.

```sh
npm run build
npm run preview
```

La build produce `dist/`, pubblicabile su un servizio per siti statici. Non caricare `node_modules` sul server.

## Dove modificare le cose

| Contenuto                                                 | File                        |
| --------------------------------------------------------- | --------------------------- |
| Testi italiani e inglesi, contatti, link Booking e Airbnb | `src/data/site.ts`          |
| Struttura della pagina e componenti visuali               | `src/components/Home.astro` |
| Colori, tipografia, spazi e adattamento mobile            | `src/styles/site.css`       |
| Foto originali, scaricate dal sito della struttura        | `src/assets/`               |
| Caratteri serviti localmente e relative licenze OFL       | `public/fonts/`             |
| Indirizzo finale e configurazione Astro                   | `astro.config.mjs`          |
| Reindirizzamenti dalle vecchie pagine WordPress           | `public/_redirects`         |

Le immagini sono importate da Astro, che le ottimizza e genera WebP in più risoluzioni durante la build. Testi e foto non dipendono dal sito WordPress una volta pubblicati. Il sito non incorpora mappe, widget di prenotazione o analytics di terzi: i visitatori aprono i servizi esterni solo seguendo i relativi link.

L'indirizzo Airbnb è quello pubblico `/rooms/49747673`, verificato come Palazzolo Resort. Il link Booking non include parametri di tracciamento o identificativi della sessione fornita in chat.

## Il percorso di pubblicazione

Il flusso previsto è:

`modifica locale → commit e push → build Cloudflare Pages → sito aggiornato`

### 1. Repository

Crea un repository GitHub o GitLab nel tuo account e carica il contenuto di questa cartella, compreso `package-lock.json`. `.gitignore` esclude dipendenze, build, file locali e variabili d'ambiente.

Non è ancora stato inizializzato un repository né collegato un account: lo faremo insieme quando scegli dove tenerlo.

### 2. Prima pubblicazione su Cloudflare Pages

Nel tuo account Cloudflare, apri Workers & Pages e crea un progetto Pages collegato al repository.

Impostazioni previste:

| Impostazione       | Valore                                                    |
| ------------------ | --------------------------------------------------------- |
| Branch             | Il branch scelto, per esempio `main`                      |
| Framework          | Astro                                                     |
| Comando di build   | `npm run build`                                           |
| Cartella di output | `dist`                                                    |
| `NODE_VERSION`     | `24`                                                      |
| `PUBLIC_INDEXABLE` | `false` durante le prove                                  |
| `SITE_URL`         | L'indirizzo effettivo dell'anteprima, una volta assegnato |

Questo è un progetto statico: non richiede l'adapter Cloudflare né funzioni server.

Cloudflare assegna un indirizzo del tipo `nome-progetto.pages.dev`. Basta per la prima revisione e non richiede modifiche su Aruba. Il nome è esemplificativo, non un indirizzo già creato.

Documentazione: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

### 3. Anteprima sul dominio .com

Proposta: `anteprima.palazzoloresort.com`. Puoi anche scegliere `www.palazzoloresort.com`; il sottodominio rende più esplicito lo scopo dell'ambiente.

1. Aggiungi il sottodominio in Pages → Custom domains.
2. Solo dopo l'associazione, configura presso il gestore DNS il CNAME indicato da Cloudflare, verso l'indirizzo `pages.dev` del progetto.
3. Attendi l'attivazione del dominio e del certificato HTTPS e verifica entrambi gli indirizzi delle lingue.

Per un sottodominio Cloudflare Pages supporta un CNAME mantenendo la gestione DNS presso un altro provider. La disponibilità delle modifiche va controllata nel piano Aruba effettivo del `.com`. Per il dominio nudo `palazzoloresort.com`, Pages richiede invece che la zona DNS sia su Cloudflare: non è necessario trasferire la registrazione del dominio.

Non inserire valori DNS inventati: il CNAME esatto arriverà dal progetto creato. Il `.it` resta su WordPress per tutta questa fase.

Documentazione: https://developers.cloudflare.com/pages/configuration/custom-domains/

### 4. Indicizzazione e accesso

Per impostazione predefinita le pagine contengono `noindex,nofollow`, la sitemap è vuota e non vengono emessi canonical e alternate di produzione. Questo riduce il rischio di indicizzazione delle copie di prova, ma non rende il sito privato. Se vuoi un'anteprima riservata, configureremo il controllo accessi anche sull'hostname personalizzato e verificheremo gli altri indirizzi raggiungibili.

Per il sito definitivo, imposta `SITE_URL` al dominio principale e `PUBLIC_INDEXABLE=true`, quindi ricostruisci. La build emette canonical, alternate IT/EN e sitemap. Mantieni `PUBLIC_INDEXABLE=false` sulle build di anteprima: non ereditarlo dalla produzione.

### 5. Passaggio al sito definitivo e ritorno alla versione precedente

Prima del cambio sul `.it`, conserva una copia completa di WordPress (file e database) e della configurazione DNS attuale. Mantieni attivo il vecchio hosting durante il passaggio.

Poi colleghiamo il dominio principale al sito statico, verifichiamo HTTPS, pagine e reindirizzamenti, e facciamo puntare il `.com` alla pagina inglese del dominio principale. La regola tra domini va configurata sul servizio che riceve le richieste del `.com`; non è già attiva nel progetto.

`public/_redirects` conserva i quattro percorsi informativi WordPress conosciuti tramite redirect verso le sezioni della nuova home. Funziona su Cloudflare Pages; altri host richiedono una configurazione equivalente. Prima del passaggio vanno verificati altri eventuali percorsi indicizzati.

Per una modifica di codice problematica puoi ripristinare un commit e ripubblicare, oppure usare una versione precedente di Pages. Per tornare a WordPress durante la migrazione, ripristina i DNS conservati: il cambio può richiedere tempo per la propagazione e dipende dal vecchio hosting ancora attivo.

## Revisione prima della pubblicazione definitiva

- Confermare testi, traduzione, foto e informazioni della struttura: i contenuti riprendono il sito pubblico e la proposta grafica è nuova.
- Confermare la proposta di marchio tipografico: il logo originale è conservato in `public/logo.png` ed è disponibile per sostituirla.
- Integrare le informazioni identificative e i documenti che il titolare vuole pubblicare. Il link ai Termini punta ancora al sito attuale: prima di sostituire il `.it` occorre portare nel nuovo sito i documenti effettivi, senza lasciare quel collegamento dipendente dal vecchio WordPress.
- Verificare le condizioni della piscina e la composizione massima del gruppo: non sono stati inventati orari, capienza totale, prezzi o servizi aggiuntivi.
- Verificare i recapiti: è utilizzato il primo numero coerente sul sito originale, evitando quello scritto in modo diverso tra testo e collegamento.

Le foto provengono dal sito della struttura. Il riutilizzo è predisposto per il suo rifacimento; non sono state aggiunte foto di altre proprietà o recensioni inventate.
