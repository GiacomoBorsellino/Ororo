Ororo - a web weather app

Ororo è una single page application creata con lo scopo di dare informazioni relative lo stato dell'aria (AQI) e lo stato meteorologico di una determinata zona/città.

Indice
⦁	Tecnologie/Argomenti
⦁	API e utilizzo
⦁	Installazione
⦁	Contatti
______________________________________________________________

Tecnologie/Argomenti
⦁	HTML5
⦁	CSS3
⦁	Javascript vanilla
⦁	Webpack
⦁	NPM
⦁	dotenv
⦁	API
⦁	Environment variable
______________________________________________________________

API e utilizzo
Per la creazione di Ororo ho utilizzato 2 API: 
la AQICN e la OpenWeather.

La prima estrapola le informazioni relative lo stato dell'aria, definendo la presenza di particolato nocivo
La seconda restituisce parametri quali temperatura, pressione, umidità, ecc...

L'uso è semplice: basta inserire il nome di una città, o cliccare sul tasto gps, per avere informazioni su questi parametri.
Se la città non è corretta o non esiste un disclaimer avvertirà dell'errore.

É possibile provare l'app in modalità produzione a questo link: https://ororo-giacomo-borsellino.netlify.app/
O provarla in modalità dev, seguendo la sezione Installazione

N.b. É possibile che certe località dispongano dello stato meteorologico e non di quello dell'aria.
______________________________________________________________

Installazione
Prerequisiti: 
⦁	Installare l'ambiente Node.js per poter amministrare gli npm
⦁	Git CLI

1.	git clone https://github.com/GiacomoBorsellino/Ororo
2.	Cd in cartella
3.	npm install npm@latest -g
4.	npm install 
5.	Cambia file .env.example in .env e inserisci le tue keys*
6.	npm run build
7.	npm run dev

* Le API richiednoo 2 keys per funzionare, puoi riechiederle qui.
______________________________________________________________

Contatti

⦁	Profilo Linkedin, per contatti o proposte di lavoro:
⦁		https://www.linkedin.com/in/giacomo-borsellino-4039071b7/
⦁	Email: giacomoborsellino at gmail dot it
⦁	Link Progetto: https://ororo-giacomo-borsellino.netlify.app/
 