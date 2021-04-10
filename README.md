[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/GiacomoBorsellino/Ororo">
    <img src="/build/images/ororo-logo.png" alt="Logo" width="200">
  </a>

  <h3 align="center">Ororo</h3>

  <p align="center">
    Ororo è una single page application creata con lo scopo di dare informazioni relative lo stato dell'aria (AQI) e lo stato meteorologico di una determinata zona/città.

  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Indice</h2></summary>
  <ol>
    <li><a href="#Tecnologie/Argomenti">Tecnologie/Argomenti</a></li>
    <li><a href="#API e utilizzo">API e utilizzo</a></li>
    <li><a href="#Prerequisiti">Prerequisiti</a></li>
    <li><a href="#Installazione">Installazione</a></li>
    <li><a href="#Contatti">Contatti</a></li>
  </ol>
</details>

### Tecnologie/Argomenti

* HTML5
* CSS
* Javascript
* Webpack
* NPM
* dotenv
* API
* Environment&nbsp;variable

## API e utilizzo
Per la creazione di Ororo ho utilizzato 2 API: 
la AQICN e la OpenWeather.

La prima estrapola le informazioni relative lo stato dell'aria, definendo la presenza di particolato nocivo.
La seconda restituisce parametri quali temperatura, pressione, umidità, ecc...

L'uso è semplice: basta inserire il nome di una città, o cliccare sul tasto gps, per avere informazioni su questi parametri.
Se la città non è corretta o non esiste un disclaimer avvertirà dell'errore.

É possibile provare l'app in modalità produzione a questo link: https://ororo-giacomo-borsellino.netlify.app/
o provarla in modalità dev, seguendo la sezione Installazione

N.b. É possibile che certe località dispongano dello stato meteorologico e non di quello dell'aria.

### Prerequisiti

* Installare l'ambiente Node.js per poter amministrare npm
* Git CLI

### Installazione

1. Clona il repository

   ```sh
   git clone https://github.com/GiacomoBorsellino/Ororo
   ```

2. Entra nella cartella

   ```sh
   Cd nella cartella
   ```

3. Installa NPM

   ```sh
   npm install npm@latest -g
   npm install 
   ```

4. Cambia file .env.example in .env e inserisci le tue keys
   (Le API richiedono 2 keys per funzionare.)
[Air Quality Open Data Platform](https://aqicn.org/data-platform/token/#/)
[Open Weather](https://home.openweathermap.org/)

5. Crea la build

   ```sh
   npm run build
   ```

6. Avvia il progetto in modalità dev

   ```sh
   npm run dev
   ```

## Licenza

Distribuito con licenza MIT

## Contatti

Giacomo Borsellino - giacomoborsellino at gmail dot it

Profilo Linkedin: [Linkedin](https://www.linkedin.com/in/giacomo-borsellino-4039071b7/)

## Crediti

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Air Pollution: Real-time Air Quality Index (AQI)](https://aqicn.org/)
* [Open Weather](https://home.openweathermap.org/)


[contributors-shield]: https://img.shields.io/github/contributors/fabio-mancin/city-pollution?style=for-the-badge
[contributors-url]: https://github.com/GiacomoBorsellino/Ororo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GiacomoBorsellino/Ororo?style=for-the-badge
[forks-url]: https://github.com/GiacomoBorsellino/Ororo/network/members
[stars-shield]: https://img.shields.io/github/stars/GiacomoBorsellino/Ororo?style=for-the-badge
[stars-url]: https://github.com/GiacomoBorsellino/Ororo/stargazers
[issues-shield]: https://img.shields.io/github/issues/GiacomoBorsellino/Ororo?style=for-the-badge
[issues-url]: https://github.com/GiacomoBorsellino/Ororo/issues
[license-shield]: https://img.shields.io/github/license/GiacomoBorsellino/Ororo?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedincolorB=555
[linkedin-url]: https://www.linkedin.com/in/giacomo-borsellino-4039071b7/