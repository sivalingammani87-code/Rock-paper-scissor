import React, { useRef, useState } from 'react';
import './App.css';

const copy = {
  en: {
    language: 'Language',
    navLabel: 'Main navigation',
    nav: ['Plan a trip', 'Inspiration', 'How it works'],
    startPlanning: 'Start planning',
    eyebrow: 'A little more you, a lot more out there',
    heroTitle: <>Less planning.<br />More <em>somewhere.</em></>,
    heroDescription: 'Your next favorite place is closer than you think. Let’s make a trip that feels like you.',
    heroCta: 'Find your somewhere',
    heroNote: <>Good trips start with<br />a little curiosity.</>,
    heroCaption: 'A slower kind of Sunday, Positano',
    plannerKicker: 'YOUR NEXT CHAPTER',
    plannerTitle: <>Where to, <em>you?</em></>,
    plannerIntro: 'A few details are all we need to get you on your way.',
    destinationLabel: 'I want to go to',
    destinationPlaceholder: 'A place, a feeling, anywhere...',
    findOnMap: 'Find on map',
    searchingLocations: 'Searching…',
    locationHint: 'Search a city, landmark, or country to choose it on the map.',
    locationQueryRequired: 'Enter at least two characters to search for a place.',
    locationSearchUnavailable: 'Location search is unavailable right now. Check your connection and try again.',
    locationSearchWait: 'Please wait a moment before searching again.',
    locationNotFound: 'No places found. Try a different city or country.',
    chooseLocation: 'Choose location',
    locationMapLabel: (place) => `Map showing ${place}`,
    openMap: 'Open map',
    mapAttribution: 'Map data © OpenStreetMap contributors',
    leaving: 'Leaving',
    returning: 'Coming back',
    crew: 'The crew',
    interests: 'Your kind of trip',
    budget: 'Spend style',
    experiences: ['Culture & history', 'Food & local finds', 'Nature & outdoors', 'Slow & restorative'],
    travelers: ['Solo traveler', '2 travelers', '3 travelers', '4+ travelers'],
    budgets: ['Easygoing', 'Comfort', 'A little extra'],
    plan: 'Make me a plan',
    footnote: 'Thoughtful ideas, made around you. No spreadsheets required.',
    itineraryKicker: 'YOUR LITTLE ESCAPE',
    tripTo: 'A trip to',
    tripPace: 'Your trip, your pace',
    day: 'DAY',
    dayTitles: ['Get your bearings', 'Find your rhythm', 'A little off the map', 'Make it a local day', 'One last wander'],
    arrival: (destination) => `Arrive and settle into ${destination}`,
    activities: [
      ['Explore a historic neighborhood', 'Visit a local museum or gallery', 'Catch a small live performance'],
      ['Start with a neighborhood coffee spot', 'Join a market-to-table food walk', 'Find a tucked-away dinner favorite'],
      ['Take the scenic route to a local viewpoint', 'Spend the afternoon on a nature trail', 'Catch golden hour somewhere green'],
      ['Ease into the day at a nearby café', 'Leave the afternoon open for a spa or stroll', 'Find a quiet spot for sunset'],
    ],
    itineraryNote: 'A thoughtful starting point, ready for your own little detours.',
    inspirationKicker: 'A FEW PLACES TO DAYDREAM ABOUT',
    inspirationTitle: <>Somewhere <em>good.</em></>,
    handwritten: 'the world is wide open',
    categories: ['CITY SOUL', 'QUIET MAGIC', 'TABLE STORIES'],
    closingTitle: <>Not just a trip. <em>A little more you.</em></>,
    closingSubtitle: 'Thoughtful travel starts here.',
    footerTagline: 'Go where you feel most like yourself.',
    backToTop: 'Back to the top',
    dateLocale: 'en',
    aria: { home: 'Wayfarer home', destination: 'Destination', departure: 'Departure date', return: 'Return date', travelers: 'Number of travelers', interests: 'Trip interests', budget: 'Budget' },
  },
  es: {
    language: 'Idioma',
    navLabel: 'Navegación principal',
    nav: ['Planifica un viaje', 'Inspiración', 'Cómo funciona'],
    startPlanning: 'Empieza a planificar',
    eyebrow: 'Un poco más de ti, mucho más por descubrir',
    heroTitle: <>Menos planes.<br />Más <em>horizontes.</em></>,
    heroDescription: 'Tu próximo lugar favorito está más cerca de lo que crees. Hagamos un viaje a tu manera.',
    heroCta: 'Encuentra tu próximo destino',
    heroNote: <>Los buenos viajes empiezan<br />con un poco de curiosidad.</>,
    heroCaption: 'Un domingo sin prisas, Positano',
    plannerKicker: 'TU PRÓXIMA AVENTURA',
    plannerTitle: <>¿Adónde <em>vamos?</em></>,
    plannerIntro: 'Con unos pocos detalles, ya podemos ponerte en camino.',
    destinationLabel: 'Quiero ir a',
    destinationPlaceholder: 'Un lugar, una sensación, donde sea...',
    findOnMap: 'Buscar en el mapa',
    searchingLocations: 'Buscando…',
    locationHint: 'Busca una ciudad, un lugar o un país para elegirlo en el mapa.',
    locationQueryRequired: 'Escribe al menos dos caracteres para buscar un lugar.',
    locationSearchUnavailable: 'La búsqueda de lugares no está disponible. Comprueba tu conexión e inténtalo de nuevo.',
    locationSearchWait: 'Espera un momento antes de volver a buscar.',
    locationNotFound: 'No encontramos lugares. Prueba con otra ciudad o país.',
    chooseLocation: 'Elegir lugar',
    locationMapLabel: (place) => `Mapa de ${place}`,
    openMap: 'Abrir mapa',
    mapAttribution: 'Datos del mapa © colaboradores de OpenStreetMap',
    leaving: 'Salida',
    returning: 'Regreso',
    crew: 'Viajeros',
    interests: 'Tu estilo de viaje',
    budget: 'Presupuesto',
    experiences: ['Cultura e historia', 'Gastronomía local', 'Naturaleza y aire libre', 'Calma y descanso'],
    travelers: ['Una persona', '2 viajeros', '3 viajeros', '4 o más viajeros'],
    budgets: ['Ajustado', 'Cómodo', 'Un capricho'],
    plan: 'Crear mi plan',
    footnote: 'Ideas pensadas para ti. Sin hojas de cálculo.',
    itineraryKicker: 'TU PEQUEÑA ESCAPADA',
    tripTo: 'Un viaje a',
    tripPace: 'A tu ritmo',
    day: 'DÍA',
    dayTitles: ['Toma el pulso al lugar', 'Encuentra tu ritmo', 'Un rincón por descubrir', 'Un día como local', 'Un último paseo'],
    arrival: (destination) => `Llega y acomódate en ${destination}`,
    activities: [
      ['Pasea por un barrio histórico', 'Visita un museo o galería local', 'Disfruta de música en vivo'],
      ['Empieza con un café de barrio', 'Recorre un mercado con sabores locales', 'Descubre un restaurante escondido'],
      ['Sigue la ruta panorámica hasta un mirador', 'Pasa la tarde en un sendero natural', 'Disfruta del atardecer entre árboles'],
      ['Empieza el día sin prisas en una cafetería', 'Reserva la tarde para un spa o paseo', 'Encuentra un rincón tranquilo para el atardecer'],
    ],
    itineraryNote: 'Un buen punto de partida, con espacio para tus propios desvíos.',
    inspirationKicker: 'LUGARES PARA SOÑAR DESPIERTO',
    inspirationTitle: <>Un lugar <em>especial.</em></>,
    handwritten: 'el mundo te espera',
    categories: ['ALMA URBANA', 'MAGIA TRANQUILA', 'SABORES LOCALES'],
    closingTitle: <>No es solo un viaje. <em>Es más tú.</em></>,
    closingSubtitle: 'Viajar con intención empieza aquí.',
    footerTagline: 'Ve adonde más te encuentres.',
    backToTop: 'Volver arriba',
    dateLocale: 'es',
    aria: { home: 'Inicio de Wayfarer', destination: 'Destino', departure: 'Fecha de salida', return: 'Fecha de regreso', travelers: 'Número de viajeros', interests: 'Intereses del viaje', budget: 'Presupuesto' },
  },
  fr: {
    language: 'Langue',
    navLabel: 'Navigation principale',
    nav: ['Planifier un voyage', 'Inspirations', 'Comment ça marche'],
    startPlanning: 'Commencer à planifier',
    eyebrow: 'Un peu plus vous, tant de choses à découvrir',
    heroTitle: <>Moins de plans.<br />Plus de <em>voyages.</em></>,
    heroDescription: 'Votre prochain lieu préféré est plus proche que vous ne le pensez. Imaginons un voyage à votre image.',
    heroCta: 'Trouver votre prochaine escale',
    heroNote: <>Les beaux voyages commencent<br />par un peu de curiosité.</>,
    heroCaption: 'Un dimanche tout en douceur, Positano',
    plannerKicker: 'VOTRE PROCHAINE AVENTURE',
    plannerTitle: <>On part <em>où ?</em></>,
    plannerIntro: 'Quelques détails suffisent pour vous mettre en route.',
    destinationLabel: 'Je veux aller à',
    destinationPlaceholder: 'Un lieu, une envie, peu importe...',
    findOnMap: 'Chercher sur la carte',
    searchingLocations: 'Recherche…',
    locationHint: 'Cherchez une ville, un lieu ou un pays pour le choisir sur la carte.',
    locationQueryRequired: 'Saisissez au moins deux caractères pour rechercher un lieu.',
    locationSearchUnavailable: 'La recherche de lieux est momentanément indisponible. Vérifiez votre connexion et réessayez.',
    locationSearchWait: 'Patientez un instant avant de relancer la recherche.',
    locationNotFound: 'Aucun lieu trouvé. Essayez une autre ville ou un autre pays.',
    chooseLocation: 'Choisir ce lieu',
    locationMapLabel: (place) => `Carte de ${place}`,
    openMap: 'Ouvrir la carte',
    mapAttribution: 'Données cartographiques © contributeurs OpenStreetMap',
    leaving: 'Départ',
    returning: 'Retour',
    crew: 'Voyageurs',
    interests: 'Votre style de voyage',
    budget: 'Budget',
    experiences: ['Culture et histoire', 'Cuisine et bonnes adresses', 'Nature et plein air', 'Détente et douceur'],
    travelers: ['En solo', '2 voyageurs', '3 voyageurs', '4 voyageurs ou plus'],
    budgets: ['Petit budget', 'Confort', 'Un petit extra'],
    plan: 'Créer mon itinéraire',
    footnote: 'Des idées pensées pour vous. Sans tableur.',
    itineraryKicker: 'VOTRE PETITE ESCAPADE',
    tripTo: 'Voyage à',
    tripPace: 'À votre rythme',
    day: 'JOUR',
    dayTitles: ['Prendre ses repères', 'Trouver son rythme', 'Un détour inattendu', 'Une journée comme un local', 'Une dernière balade'],
    arrival: (destination) => `Arrivée et installation à ${destination}`,
    activities: [
      ['Flânez dans un quartier historique', 'Visitez un musée ou une galerie locale', 'Assistez à un petit concert'],
      ['Commencez par un café de quartier', 'Découvrez les saveurs au marché local', 'Dénichez une adresse confidentielle'],
      ['Empruntez la route jusqu’à un beau panorama', 'Parcourez un sentier en pleine nature', 'Admirez le coucher du soleil au vert'],
      ['Commencez la journée dans un café voisin', 'Gardez l’après-midi pour un spa ou une balade', 'Trouvez un coin tranquille au coucher du soleil'],
    ],
    itineraryNote: 'Un point de départ inspirant, avec de la place pour vos détours.',
    inspirationKicker: 'QUELQUES ENVIES D’AILLEURS',
    inspirationTitle: <>Un endroit <em>à part.</em></>,
    handwritten: 'le monde vous attend',
    categories: ['ÂME CITADINE', 'MAGIE SEREINE', 'SAVEURS LOCALES'],
    closingTitle: <>Pas juste un voyage. <em>Un peu plus vous.</em></>,
    closingSubtitle: 'Le voyage commence ici.',
    footerTagline: 'Allez là où vous vous sentez vous-même.',
    backToTop: 'Retour en haut',
    dateLocale: 'fr',
    aria: { home: 'Accueil Wayfarer', destination: 'Destination', departure: 'Date de départ', return: 'Date de retour', travelers: 'Nombre de voyageurs', interests: 'Envies de voyage', budget: 'Budget' },
  },
  hi: {
    language: 'भाषा',
    navLabel: 'मुख्य नेविगेशन',
    nav: ['यात्रा की योजना', 'प्रेरणा', 'यह कैसे काम करता है'],
    startPlanning: 'योजना शुरू करें',
    eyebrow: 'थोड़ा और आप, देखने के लिए बहुत कुछ',
    heroTitle: <>कम योजना।<br />ज़्यादा <em>सफ़र।</em></>,
    heroDescription: 'आपकी अगली पसंदीदा जगह सोच से भी क़रीब है। चलिए, आपकी पसंद की यात्रा बनाते हैं।',
    heroCta: 'अपनी अगली जगह खोजें',
    heroNote: <>अच्छी यात्राएँ शुरू होती हैं<br />थोड़ी जिज्ञासा से।</>,
    heroCaption: 'धीमा-सा इतवार, पोसितानो',
    plannerKicker: 'आपका अगला सफ़र',
    plannerTitle: <>कहाँ <em>चलें?</em></>,
    plannerIntro: 'आपको सफ़र पर भेजने के लिए बस कुछ जानकारियाँ चाहिए।',
    destinationLabel: 'मैं यहाँ जाना चाहता/चाहती हूँ',
    destinationPlaceholder: 'कोई जगह, कोई एहसास, कहीं भी...',
    findOnMap: 'नक्शे पर खोजें',
    searchingLocations: 'खोज रहे हैं…',
    locationHint: 'नक्शे पर जगह चुनने के लिए शहर, स्थल या देश खोजें।',
    locationQueryRequired: 'जगह खोजने के लिए कम से कम दो अक्षर लिखें।',
    locationSearchUnavailable: 'अभी जगह की खोज उपलब्ध नहीं है। कनेक्शन जाँचकर फिर कोशिश करें।',
    locationSearchWait: 'दोबारा खोजने से पहले एक पल रुकें।',
    locationNotFound: 'कोई जगह नहीं मिली। कोई दूसरा शहर या देश खोजें।',
    chooseLocation: 'यह जगह चुनें',
    locationMapLabel: (place) => `${place} का नक्शा`,
    openMap: 'नक्शा खोलें',
    mapAttribution: 'नक्शे का डेटा © OpenStreetMap योगदानकर्ता',
    leaving: 'रवाना',
    returning: 'वापसी',
    crew: 'यात्री',
    interests: 'आपकी पसंद की यात्रा',
    budget: 'खर्च का अंदाज़',
    experiences: ['संस्कृति और इतिहास', 'खाना और स्थानीय स्वाद', 'प्रकृति और बाहर', 'आराम और सुकून'],
    travelers: ['अकेले यात्री', '2 यात्री', '3 यात्री', '4 या अधिक यात्री'],
    budgets: ['किफ़ायती', 'आरामदायक', 'थोड़ा ख़ास'],
    plan: 'मेरी योजना बनाएँ',
    footnote: 'आपके लिए ख़ास सुझाव। किसी स्प्रेडशीट की ज़रूरत नहीं।',
    itineraryKicker: 'आपकी छोटी-सी छुट्टी',
    tripTo: 'यात्रा',
    tripPace: 'आपकी यात्रा, आपकी रफ़्तार',
    day: 'दिन',
    dayTitles: ['जगह को जानें', 'अपनी रफ़्तार पाएँ', 'कुछ नया खोजें', 'स्थानीय अंदाज़ में दिन', 'एक आख़िरी सैर'],
    arrival: (destination) => `${destination} पहुँचें और आराम से ठहरें`,
    activities: [
      ['पुराने मोहल्ले में घूमें', 'स्थानीय संग्रहालय या कला दीर्घा देखें', 'छोटी-सी लाइव प्रस्तुति का आनंद लें'],
      ['मोहल्ले के कैफ़े से दिन शुरू करें', 'स्थानीय बाज़ार के स्वाद चखें', 'छिपा हुआ पसंदीदा रेस्टोरेंट खोजें'],
      ['नज़ारे तक जाने वाला सुंदर रास्ता चुनें', 'प्रकृति की पगडंडी पर दोपहर बिताएँ', 'हरियाली में सुनहरी शाम देखें'],
      ['पास के कैफ़े में आराम से सुबह बिताएँ', 'स्पा या सैर के लिए दोपहर खाली रखें', 'शाम के लिए कोई शांत जगह खोजें'],
    ],
    itineraryNote: 'एक बढ़िया शुरुआत, जिसमें आपके अपने रास्तों के लिए भी जगह है।',
    inspirationKicker: 'कुछ जगहें जिनके सपने देख सकते हैं',
    inspirationTitle: <>कोई <em>ख़ूबसूरत जगह।</em></>,
    handwritten: 'दुनिया खुली है',
    categories: ['शहर की रौनक', 'शांत जादू', 'स्थानीय स्वाद'],
    closingTitle: <>सिर्फ़ यात्रा नहीं। <em>कुछ और आप।</em></>,
    closingSubtitle: 'सोच-समझकर की गई यात्रा यहीं से शुरू होती है।',
    footerTagline: 'वहाँ जाएँ जहाँ आप ख़ुद जैसे महसूस करें।',
    backToTop: 'ऊपर जाएँ',
    dateLocale: 'hi-IN',
    aria: { home: 'Wayfarer का होम', destination: 'गंतव्य', departure: 'रवाना होने की तारीख़', return: 'वापसी की तारीख़', travelers: 'यात्रियों की संख्या', interests: 'यात्रा की पसंद', budget: 'बजट' },
  },
};

const destinations = [
  { name: 'Lisbon, Portugal', value: 'Lisbon', className: 'destination-lisbon' },
  { name: 'Kyoto, Japan', value: 'Kyoto', className: 'destination-kyoto' },
  { name: 'Oaxaca, Mexico', value: 'Oaxaca', className: 'destination-oaxaca' },
];

function formatDate(date, locale) {
  return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(date);
}

function followingDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

function createMapUrl(location) {
  const latitude = Number(location.lat);
  const longitude = Number(location.lon);
  const bounds = Array.isArray(location.boundingbox) ? location.boundingbox.map(Number) : [];
  const [south, north, west, east] = bounds.length === 4
    ? bounds
    : [latitude - 0.02, latitude + 0.02, longitude - 0.02, longitude + 0.02];
  const params = new URLSearchParams({
    bbox: [west, south, east, north].join(','),
    layer: 'mapnik',
    marker: `${latitude},${longitude}`,
  });
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`;
}

function createItinerary(destination, startDate, endDate, experience, language) {
  const nights = Math.max(
    1,
    Math.ceil((new Date(`${endDate}T12:00:00`) - new Date(`${startDate}T12:00:00`)) / 86400000)
  );
  const dayCount = Math.min(nights, 5);
  const text = copy[language];
  const activities = text.activities[['culture', 'food', 'nature', 'relax'].indexOf(experience)] || text.activities[0];
  const start = new Date(`${startDate}T12:00:00`);

  return Array.from({ length: dayCount }, (_, index) => {
    const date = new Date(start);
    date.setDate(date.getDate() + index);
    return {
      day: index + 1,
      date: date.getTime(),
      title: text.dayTitles[index],
      activities: [
        index === 0 ? text.arrival(destination) : activities[index % activities.length],
        activities[(index + 1) % activities.length],
        activities[(index + 2) % activities.length],
      ],
    };
  });
}

function App() {
  const [language, setLanguage] = useState('en');
  const [destination, setDestination] = useState('');
  const [locationResults, setLocationResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState(1);
  const [experience, setExperience] = useState('culture');
  const [itinerary, setItinerary] = useState(null);
  const lastLocationSearch = useRef(0);
  const text = copy[language];
  const today = new Date().toISOString().slice(0, 10);

  async function handleLocationSearch() {
    const query = destination.trim();
    if (query.length < 2) {
      setLocationError(text.locationQueryRequired);
      return;
    }

    if (Date.now() - lastLocationSearch.current < 1000) {
      setLocationError(text.locationSearchWait);
      return;
    }

    lastLocationSearch.current = Date.now();
    setLocationLoading(true);
    setLocationError('');
    setLocationResults([]);
    setSelectedLocation(null);

    const params = new URLSearchParams({
      q: query,
      format: 'jsonv2',
      limit: '5',
      addressdetails: '1',
      'accept-language': language,
    });

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`Location lookup failed with status ${response.status}`);
      }

      const results = await response.json();
      if (!Array.isArray(results)) {
        throw new Error('Location lookup returned an unexpected response');
      }

      if (results.length === 0) {
        setLocationError(text.locationNotFound);
      } else {
        setLocationResults(results);
      }
    } catch (error) {
      console.error('Unable to search OpenStreetMap locations:', error);
      setLocationError(text.locationSearchUnavailable);
    } finally {
      setLocationLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setItinerary({
      destination: destination.trim(),
      startDate,
      endDate,
      travelers,
      budget,
      experience,
    });
  }

  return (
    <div className="app-shell" lang={language}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={text.aria.home}>
          <span className="brand-mark" aria-hidden="true">w.</span>
          <span>wayfarer</span>
        </a>
        <nav className="main-nav" aria-label={text.navLabel}>
          <a className="nav-active" href="#planner">{text.nav[0]}</a>
          <a href="#inspiration">{text.nav[1]}</a>
          <a href="#how-it-works">{text.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <label className="language-picker">
            <span aria-hidden="true">◎</span>
            <span className="visually-hidden">{text.language}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={text.language}>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="hi">हिं</option>
            </select>
          </label>
          <a className="header-link" href="#planner">{text.startPlanning} <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="sparkle" aria-hidden="true">✳</span> {text.eyebrow}</div>
            <h1>{text.heroTitle}</h1>
            <p>{text.heroDescription}</p>
            <a className="hero-cta" href="#planner">{text.heroCta} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>{text.heroNote}</span>
          </div>
          <div className="hero-caption"><span className="caption-dot" /> {text.heroCaption}</div>
        </section>

        <section className="planner-section" id="planner">
          <div className="section-heading">
            <div>
              <span className="section-kicker">{text.plannerKicker}</span>
              <h2>{text.plannerTitle}</h2>
            </div>
            <p>{text.plannerIntro}</p>
          </div>

          <form className="planner-form" onSubmit={handleSubmit}>
            <div className="field destination-field">
              <label className="field-label" htmlFor="destination-input"><span aria-hidden="true">⌖</span> {text.destinationLabel}</label>
              <input
                id="destination-input"
                type="text"
                placeholder={text.destinationPlaceholder}
                value={destination}
                onChange={(event) => {
                  setDestination(event.target.value);
                  setSelectedLocation(null);
                  setLocationResults([]);
                  setLocationError('');
                }}
                required
                minLength={2}
                aria-label={text.aria.destination}
              />
              <div className="location-search-row">
                <p>{text.locationHint}</p>
                <button className="location-search-button" type="button" onClick={handleLocationSearch} disabled={locationLoading}>
                  <span aria-hidden="true">⌖</span> {locationLoading ? text.searchingLocations : text.findOnMap}
                </button>
              </div>
              {locationError && <p className="location-error" role="alert">{locationError}</p>}
              {locationResults.length > 0 && (
                <div className="location-results" aria-label={text.chooseLocation}>
                  {locationResults.map((location) => (
                    <button
                      className="location-result"
                      type="button"
                      key={location.place_id}
                      aria-label={`${text.chooseLocation}: ${location.display_name}`}
                      onClick={() => {
                        setSelectedLocation(location);
                        setDestination(location.display_name);
                        setLocationResults([]);
                        setLocationError('');
                      }}
                    >
                      <span aria-hidden="true">⌖</span>{location.display_name}
                    </button>
                  ))}
                </div>
              )}
              {selectedLocation && (
                <div className="location-map">
                  <iframe
                    title={text.locationMapLabel(selectedLocation.display_name)}
                    src={createMapUrl(selectedLocation)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="map-caption">
                    <span>{text.mapAttribution}</span>
                    <a href={`https://www.openstreetmap.org/?mlat=${encodeURIComponent(selectedLocation.lat)}&mlon=${encodeURIComponent(selectedLocation.lon)}#map=13/${encodeURIComponent(selectedLocation.lat)}/${encodeURIComponent(selectedLocation.lon)}`} target="_blank" rel="noreferrer">
                      {text.openMap} ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="form-row">
              <label className="field">
                <span className="field-label"><span aria-hidden="true">↗</span> {text.leaving}</span>
                <input
                  type="date"
                  min={today}
                  value={startDate}
                  onChange={(event) => {
                    const nextStartDate = event.target.value;
                    setStartDate(nextStartDate);
                    if (endDate && endDate <= nextStartDate) setEndDate('');
                  }}
                  required
                  aria-label={text.aria.departure}
                />
              </label>
              <label className="field">
                <span className="field-label"><span aria-hidden="true">↙</span> {text.returning}</span>
                <input type="date" min={startDate ? followingDate(startDate) : today} value={endDate} onChange={(event) => setEndDate(event.target.value)} required aria-label={text.aria.return} />
              </label>
              <label className="field">
                <span className="field-label"><span aria-hidden="true">♧</span> {text.crew}</span>
                <select value={travelers} onChange={(event) => setTravelers(Number(event.target.value))} aria-label={text.aria.travelers}>
                  {text.travelers.map((label, index) => <option value={index} key={label}>{label}</option>)}
                </select>
              </label>
            </div>
            <div className="form-row preferences-row">
              <label className="field">
                <span className="field-label"><span aria-hidden="true">♡</span> {text.interests}</span>
                <select value={experience} onChange={(event) => setExperience(event.target.value)} aria-label={text.aria.interests}>
                  {['culture', 'food', 'nature', 'relax'].map((value, index) => <option value={value} key={value}>{text.experiences[index]}</option>)}
                </select>
              </label>
              <label className="field">
                <span className="field-label"><span aria-hidden="true">◎</span> {text.budget}</span>
                <select value={budget} onChange={(event) => setBudget(Number(event.target.value))} aria-label={text.aria.budget}>
                  {text.budgets.map((label, index) => <option value={index} key={label}>{label}</option>)}
                </select>
              </label>
              <button className="plan-button" type="submit">{text.plan} <span aria-hidden="true">↗</span></button>
            </div>
            <p className="form-footnote"><span aria-hidden="true">✳</span> {text.footnote}</p>
          </form>
        </section>

        {itinerary && (
          <section className="itinerary-section" aria-live="polite">
            <div className="itinerary-header">
              <div>
                <span className="section-kicker">{text.itineraryKicker}</span>
                <h2>{text.tripTo} <em>{itinerary.destination}</em></h2>
                <p>{formatDate(new Date(`${itinerary.startDate}T12:00:00`), text.dateLocale)} – {formatDate(new Date(`${itinerary.endDate}T12:00:00`), text.dateLocale)} <span>·</span> {text.travelers[itinerary.travelers]} <span>·</span> {text.budgets[itinerary.budget]}</p>
              </div>
              <span className="plan-badge"><span aria-hidden="true">✳</span> {text.tripPace}</span>
            </div>
            <div className="itinerary-days">
              {createItinerary(itinerary.destination, itinerary.startDate, itinerary.endDate, itinerary.experience, language).map((day) => (
                <article className="day-card" key={day.day}>
                  <div className="day-topline"><span>{text.day} {String(day.day).padStart(2, '0')}</span><span>{formatDate(new Date(day.date), text.dateLocale)}</span></div>
                  <h3>{day.title}</h3>
                  <ul>{day.activities.map((activity, index) => <li key={`${day.day}-${index}`}><span className="activity-dot" />{activity}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="itinerary-note">{text.itineraryNote}</p>
          </section>
        )}

        <section className="inspiration-section" id="inspiration">
          <div className="inspiration-heading">
            <div><span className="section-kicker">{text.inspirationKicker}</span><h2>{text.inspirationTitle}</h2></div>
            <span className="handwritten">{text.handwritten} <span aria-hidden="true">↗</span></span>
          </div>
          <div className="destination-grid">
            {destinations.map((place, index) => (
              <a className={`destination-card ${place.className}`} href="#planner" onClick={() => {
                setDestination(place.value);
                setSelectedLocation(null);
                setLocationResults([]);
              }} key={place.value}>
                <span className="destination-index">0{index + 1} / {text.categories[index]}</span><span className="destination-name">{place.name}</span><span className="destination-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="closing-note" id="how-it-works">
          <span className="closing-star" aria-hidden="true">✳</span>
          <p>{text.closingTitle}</p>
          <span>{text.closingSubtitle}</span>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">w.</span><span>wayfarer</span></a><span>{text.footerTagline}</span><a href="#home">{text.backToTop} ↑</a></footer>
    </div>
  );
}

export default App;
