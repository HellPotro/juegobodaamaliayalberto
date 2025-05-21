let invitadosMesaActual = [];
let ultimaRespuesta = "";
let personasPendientes = [];

const barajas = 
{
  musica: [],
  cine: [],
  geografia: [],
  historia: [],
  deporte: [],
  misc: []
};

function cargarOpcionesMesa() 
{
  const select = document.getElementById("mesaSelect");
  
  Object.keys(mesas).forEach(nombreMesa => 
    {
      const option = document.createElement("option");
      option.value = nombreMesa;
      option.textContent = nombreMesa;
      select.appendChild(option);
    });
}

function cargarMesa() 
{
  const mesa = document.getElementById("mesaSelect").value;
  invitadosMesaActual = mesas[mesa] || [];
  
  // Actualiza el número máximo automáticamente
  document.getElementById("maxNumber").value = invitadosMesaActual.length;
  
  // Reinicia la baraja
  personasPendientes = [];
} 

function siguientePregunta(categoria) 
{
  if (barajas[categoria].length === 0) 
  {
    barajas[categoria] = [...preguntas[categoria]];
    shuffleArray(barajas[categoria]);
  }
  
  return barajas[categoria].pop();
}

function generarNumero() 
{
  const mesaSeleccionada = document.getElementById("mesaSelect").value;
  if (!mesaSeleccionada) 
  {
    document.getElementById("numeroOutput").textContent = "⚠️ Por favor, selecciona una mesa primero.";
    return;
  }
  
  const max = parseInt(document.getElementById("maxNumber").value, 10);
  if (max < 2) 
  {
    document.getElementById("numeroOutput").textContent = "Debe haber al menos 2 personas en la mesa.";
    return;
  }
  
  if (personasPendientes.length < 2 || personasPendientes.length > max) 
  {
    personasPendientes = Array.from({ length: max }, (_, i) => i + 1);
    shuffleArray(personasPendientes);
  }
  
  const num1 = personasPendientes.pop();
  const num2 = personasPendientes.pop();
  
  const nombre1 = invitadosMesaActual[num1 - 1] || `Nº ${num1}`;
  const nombre2 = invitadosMesaActual[num2 - 1] || `Nº ${num2}`;
  
  document.getElementById("numeroOutput").textContent = `Participan: ${nombre1} y ${nombre2}`;

  if (personasPendientes.length < 2) 
  {
    document.getElementById("numeroOutput").textContent += " (Nueva ronda a continuación)";
  }
}

function shuffleArray(array) 
{
  for (let i = array.length - 1; i > 0; i--) 
  {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function preguntaAleatoria() 
{
  const cat = document.getElementById("categoria").value;
  const pregunta = siguientePregunta(cat);
  document.getElementById("preguntaOutput").textContent = pregunta.q;
  ultimaRespuesta = pregunta.a;
  document.getElementById("respuestaOutput").style.display = "none";
}

function mostrarRespuesta() 
{
  const respuestaDiv = document.getElementById("respuestaOutput");
  respuestaDiv.textContent = `Respuesta: ${ultimaRespuesta}`;
  respuestaDiv.style.display = "block";
}

 const mesas = {
    "Principal": [
"Amalita",
"Alberto",
"Jaelita",
"Raúl",
"Pedro Padre",
"Jael",
"Pedro",
"Marina",
"Amalia",
"Pedro",
"Ana",
"Antonio"
    ],
    "ACEFAM": [
"Sylvia",
"Ricky",
"Isaac",
"Marian",
"Marta",
"Álvaro",
"Miki",
"Marta",
"Palomera",
"Álvaro Herrero"
    ],
    "Fantásticas": [
"Paloma",
"Juan",
"Yoly",
"Alfredo",
"Beli",
"Floren",
"Ana Rosa",
"Jose Ramón",
"Maribel",
"Miguel Ángel"
    ],
   "Los Escolapios": [
"Gon",
"Carmen",
"Manel",
"Laura",
"Piris",
"Irene",
"Jaime",
"Chis",
"López",
"Miriam"
    ],
   "La Lupe": [
"Lore",
"Javi",
"Dimas",
"Arteye",
"Iglesias",
"Jacobo",
"Mikel",
"Rosales",
"More",
"Marina"
    ]
  };
      
      const preguntas = {
        musica: [{
          q: "¿Quién canta la canción 'Bohemian Rhapsody'?",
          a: "Queen"
        }, {
          q: "¿Qué cantante es conocido como 'El Rey del Pop'?",
          a: "Michael Jackson"
        }, {
          q: "¿Qué instrumento toca Slash?",
          a: "Guitarra"
        }, {
          q: "¿De qué país es la banda ABBA?",
          a: "Suecia"
        }, {
          q: "¿Cuál es el nombre real de Lady Gaga?",
          a: "Stefani Joanne Angelina Germanotta"
        }, {
          q: "¿Qué banda compuso 'Smells Like Teen Spirit'?",
          a: "Nirvana"
        }, {
          q: "¿En qué año se celebró el primer festival de Woodstock?",
          a: "1969"
        }, {
          q: "¿Qué grupo español canta 'La Flaca'?",
          a: "Jarabe de Palo"
        }, {
          q: "¿Quién es el autor de la canción 'Imagine'?",
          a: "John Lennon"
        }, {
          q: "¿Qué cantante lanzó el álbum '1989'?",
          a: "Taylor Swift"
        }, {
          q: "¿Quién canta 'Shape of You'?",
          a: "Ed Sheeran"
        }, {
          q: "¿Qué banda canta 'Hotel California'?",
          a: "Eagles"
        }, {
          q: "¿Cuál es el nombre artístico de Benito Antonio Martínez Ocasio?",
          a: "Bad Bunny"
        }, {
          q: "¿Qué artista canta 'Rolling in the Deep'?",
          a: "Adele"
        }, {
          q: "¿Quién fue el vocalista de Linkin Park?",
          a: "Chester Bennington"
        }, {
          q: "¿Qué dúo cantó 'Shallow' en 'A Star is Born'?",
          a: "Lady Gaga y Bradley Cooper"
        }, {
          q: "¿Qué cantante española lanzó 'Lo Malo' junto a Aitana?",
          a: "Ana Guerra"
        }, {
          q: "¿Qué grupo canta 'Wonderwall'?",
          a: "Oasis"
        }, {
          q: "¿Quién compuso 'Clocks'?",
          a: "Coldplay"
        }, {
          q: "¿Qué grupo tiene un álbum llamado 'The Dark Side of the Moon'?",
          a: "Pink Floyd"
        }, {
          q: "¿Quién canta 'Rayando el sol'?",
          a: "Maná"
        }, {
          q: "¿Qué banda está liderada por Chris Martin?",
          a: "Coldplay"
        }, {
          q: "¿Quién es la voz de 'Tusa' junto a Karol G?",
          a: "Nicki Minaj"
        }, {
          q: "¿Qué artista popularizó 'Despacito'?",
          a: "Luis Fonsi (con Daddy Yankee)"
        }, {
          q: "¿Qué banda canta 'Livin' on a Prayer'?",
          a: "Bon Jovi"
        }, {
          q: "¿Quién canta 'As it Was'?",
          a: "Harry Styles"
        }, {
          q: "¿Qué grupo británico es conocido por 'Radio Ga Ga'?",
          a: "Queen"
        }, {
          q: "¿Quién es conocido como 'El Sol de México'?",
          a: "Luis Miguel"
        }, {
          q: "¿Qué artista cantó 'Blinding Lights'?",
          a: "The Weeknd"
        }, {
          q: "¿Quién compuso 'Let it Be'?",
          a: "The Beatles"
        }, {
          q: "¿Qué grupo canta 'Take on Me'?",
          a: "a-ha"
        }, {
          q: "¿Qué banda española canta '20 de abril'?",
          a: "Celtas Cortos"
        }, {
          q: "¿Qué cantante lanzó 'Mujer Contra Mujer' con Nacho Cano?",
          a: "Ana Torroja (Mecano)"
        }, {
          q: "¿Qué cantante canta 'Se Fue' y 'En Cambio No'?",
          a: "Laura Pausini"
        }, {
          q: "¿Quién interpreta 'Bailando' con Enrique Iglesias?",
          a: "Gente de Zona"
        }, {
          q: "¿Qué cantante murió en 2016 y es conocido por 'Heroes' y 'Space Oddity'?",
          a: "David Bowie"
        }, {
          q: "¿Quién fue el líder de Nirvana?",
          a: "Kurt Cobain"
        }, {
          q: "¿Qué cantante lanzó el tema 'Monotonía' con Ozuna?",
          a: "Shakira"
        }, {
          q: "¿Qué canción comienza con 'Is this the real life? Is this just fantasy'?",
          a: "Bohemian Rhapsody"
        }, {
          q: "¿Qué artista ganó Eurovisión en 2012 con 'Euphoria'?",
          a: "Loreen"
        }, {
          q: "¿Qué grupo español es autor de 'La Raja de Tu Falda'?",
          a: "Estopa"
        }, {
          q: "¿Quién canta 'Ojitos Lindos' junto a Bad Bunny?",
          a: "Bomba Estéreo"
        }, {
          q: "¿Qué cantante es conocido como 'El Potrillo'?",
          a: "Alejandro Fernández"
        }, {
          q: "¿Qué grupo canta 'Fix You'?",
          a: "Coldplay"
        }, {
          q: "¿Quién es el cantante de 'Peaches' y 'Baby'?",
          a: "Justin Bieber"
        }, {
          q: "¿Qué banda popularizó 'Smells Like Teen Spirit'?",
          a: "Nirvana"
        }, {
          q: "¿Qué artista española canta 'Con Altura' con J. Balvin?",
          a: "Rosalía"
        }, {
          q: "¿Quién interpreta 'Dance Monkey'?",
          a: "Tones and I"
        }, {
          q: "¿Qué artista canta 'Easy on Me'?",
          a: "Adele"
        }],
        cine: [{
          q: "¿Quién dirigió 'Pulp Fiction'?",
          a: "Quentin Tarantino"
        }, {
          q: "¿Qué actor interpretó a Forrest Gump?",
          a: "Tom Hanks"
        }, {
          q: "¿En qué año se estrenó 'Titanic'?",
          a: "1997"
        }, {
          q: "¿Quién interpretó a Batman en 'El Caballero Oscuro'?",
          a: "Christian Bale"
        }, {
          q: "¿Qué película ganó el Oscar a mejor película en 2020?",
          a: "Parásitos"
        }, {
          q: "¿Cómo se llama el hobbit protagonista de 'El Señor de los Anillos'?",
          a: "Frodo"
        }, {
          q: "¿Cuál es la película más taquillera de la historia?",
          a: "Avatar (2009)"
        }, {
          q: "¿Qué actriz protagoniza 'La La Land'?",
          a: "Emma Stone"
        }, {
          q: "¿Quién es el villano en 'Avengers: Endgame'?",
          a: "Thanos"
        }, {
          q: "¿Qué película dice la frase 'Yo soy tu padre'?",
          a: "Star Wars: Episodio V"
        }, {
          q: "¿Quién interpretó a Jack Sparrow?",
          a: "Johnny Depp"
        }, {
          q: "¿Qué película española ganó el Oscar en 1999?",
          a: "Todo sobre mi madre"
        }, {
          q: "¿Qué director es famoso por 'Psicosis'?",
          a: "Alfred Hitchcock"
        }, {
          q: "¿Quién protagoniza 'Pretty Woman'?",
          a: "Julia Roberts"
        }, {
          q: "¿Qué película protagoniza un tiburón asesino?",
          a: "Tiburón (Jaws)"
        }, {
          q: "¿Qué saga tiene personajes como Legolas, Gandalf y Gollum?",
          a: "El Señor de los Anillos"
        }, {
          q: "¿Qué película se basa en un naufragio y una tabla?",
          a: "Titanic"
        }, {
          q: "¿Qué película de animación presenta a una familia de superhéroes?",
          a: "Los Increíbles"
        }, {
          q: "¿Quién interpreta a Hermione Granger?",
          a: "Emma Watson"
        }, {
          q: "¿Qué actor ganó un Oscar por 'The Revenant'?",
          a: "Leonardo DiCaprio"
        }, {
          q: "¿Qué película tiene la frase 'Hasta el infinito y más allá'?",
          a: "Toy Story"
        }, {
          q: "¿Qué película española está basada en ETA y ganó 10 Goyas en 2015?",
          a: "La isla mínima"
        }, {
          q: "¿En qué película canta Elsa 'Let It Go'?",
          a: "Frozen"
        }, {
          q: "¿Qué actor protagoniza 'Gladiator'?",
          a: "Russell Crowe"
        }, {
          q: "¿Qué película se ambienta en Pandora?",
          a: "Avatar"
        }, {
          q: "¿Quién dirigió 'Roma'?",
          a: "Alfonso Cuarón"
        }, {
          q: "¿Qué película española trata de un secuestro y una llamada?",
          a: "El desconocido"
        }, {
          q: "¿Qué actriz interpreta a Harley Quinn?",
          a: "Margot Robbie"
        }, {
          q: "¿Qué película trata de un matemático y el número π?",
          a: "Una mente maravillosa"
        }, {
          q: "¿Qué película musical tiene a Rizzo y Danny Zuko?",
          a: "Grease"
        }, {
          q: "¿Qué director español ganó un Oscar por 'Mar adentro'?",
          a: "Alejandro Amenábar"
        }, {
          q: "¿Qué película de animación trata sobre emociones como Alegría y Tristeza?",
          a: "Inside Out (Del revés)"
        }, {
          q: "¿Qué película está protagonizada por un oso peruano con sombrero rojo?",
          a: "Paddington"
        }, {
          q: "¿Qué actor protagonizó 'Top Gun'?",
          a: "Tom Cruise"
        }, {
          q: "¿Qué película se basa en el naufragio de un carguero y un tigre?",
          a: "La vida de Pi"
        }, {
          q: "¿Qué película ganó el Oscar a mejor película en 2023?",
          a: "Todo a la vez en todas partes"
        }, {
          q: "¿Qué actriz ganó el Oscar por 'La habitación' en 2016?",
          a: "Brie Larson"
        }, {
          q: "¿Qué película protagoniza Joaquin Phoenix como un payaso?",
          a: "Joker"
        }, {
          q: "¿Quién dirigió 'La forma del agua'?",
          a: "Guillermo del Toro"
        }, {
          q: "¿Qué película francesa trata de un cuidador y un millonario tetrapléjico?",
          a: "Intocable"
        }, {
          q: "¿Quién interpreta a Deadpool?",
          a: "Ryan Reynolds"
        }, {
          q: "¿Qué película trata de sueños dentro de sueños?",
          a: "Origen (Inception)"
        }, {
          q: "¿Qué director dirigió 'Kill Bill'?",
          a: "Quentin Tarantino"
        }, {
          q: "¿Qué película muestra la historia del matemático Alan Turing?",
          a: "The Imitation Game"
        }, {
          q: "¿Qué actor es famoso por interpretar a Rocky y Rambo?",
          a: "Sylvester Stallone"
        }, {
          q: "¿Qué película de terror tiene a Pennywise como villano?",
          a: "It"
        }, {
          q: "¿Qué actor protagoniza 'Piratas del Caribe'?",
          a: "Johnny Depp"
        }, {
          q: "¿Qué película musical tiene lugar en una isla griega con canciones de ABBA?",
          a: "Mamma Mia!"
        }],
        geografia: [{
          q: "¿Cuál es la capital de Australia?",
          a: "Canberra"
        }, {
          q: "¿Cuál es el río más largo del mundo?",
          a: "Amazonas"
        }, {
          q: "¿Qué país tiene forma de bota?",
          a: "Italia"
        }, {
          q: "¿Dónde se encuentra el monte Everest?",
          a: "Nepal"
        }, {
          q: "¿Cuál es el país más grande del mundo?",
          a: "Rusia"
        }, {
          q: "¿Qué país tiene más islas?",
          a: "Suecia"
        }, {
          q: "¿Cuál es el desierto más grande del mundo?",
          a: "Antártida"
        }, {
          q: "¿Qué océano baña las costas de Perú?",
          a: "Océano Pacífico"
        }, {
          q: "¿Cuál es la ciudad más poblada del mundo?",
          a: "Tokio"
        }, {
          q: "¿Cuál es el continente más pequeño?",
          a: "Oceanía"
        }, {
          q: "¿Qué país africano tiene forma de triángulo?",
          a: "Egipto"
        }, {
          q: "¿Qué país limita con más países?",
          a: "Rusia"
        }, {
          q: "¿Qué océano está entre África y Australia?",
          a: "Océano Índico"
        }, {
          q: "¿Cuál es el país más pequeño del mundo?",
          a: "Ciudad del Vaticano"
        }, {
          q: "¿Cuál es el mar que conecta Europa con Asia?",
          a: "Mar Negro"
        }, {
          q: "¿En qué país está el desierto del Sáhara?",
          a: "Varios (principalmente Argelia y Libia)"
        }, {
          q: "¿Qué montaña es la más alta de América?",
          a: "Aconcagua"
        }, {
          q: "¿Cuál es el país más poblado del mundo?",
          a: "India"
        }, {
          q: "¿Qué país tiene más volcanes activos?",
          a: "Indonesia"
        }, {
          q: "¿Dónde se encuentra el Machu Picchu?",
          a: "Perú"
        }, {
          q: "¿Qué cordillera separa Europa de Asia?",
          a: "Montes Urales"
        }, {
          q: "¿Qué país tiene una hoja de arce en su bandera?",
          a: "Canadá"
        }, {
          q: "¿Cuál es el lago más grande de África?",
          a: "Lago Victoria"
        }, {
          q: "¿Cuál es la capital de Sudáfrica?",
          a: "Pretoria (ejecutiva), Ciudad del Cabo (legislativa), Bloemfontein (judicial)"
        }, {
          q: "¿En qué país está Transilvania?",
          a: "Rumanía"
        }, {
          q: "¿Qué país asiático es un archipiélago de más de 7.000 islas?",
          a: "Filipinas"
        }, {
          q: "¿Qué país europeo tiene más fronteras terrestres?",
          a: "Alemania"
        }, {
          q: "¿Cuál es la capital de Nueva Zelanda?",
          a: "Wellington"
        }, {
          q: "¿Qué país es conocido por los fiordos?",
          a: "Noruega"
        }, {
          q: "¿Dónde están las Cataratas del Iguazú?",
          a: "Argentina y Brasil"
        }, {
          q: "¿Qué isla pertenece a tres países diferentes?",
          a: "Borneo"
        }, {
          q: "¿Qué país tiene el mayor número de lagos?",
          a: "Canadá"
        }, {
          q: "¿Qué capital europea está dividida por el río Danubio?",
          a: "Budapest"
        }, {
          q: "¿Cuál es el país más montañoso del mundo?",
          a: "Nepal"
        }, {
          q: "¿Qué país es conocido por su forma de lágrima?",
          a: "Sri Lanka"
        }, {
          q: "¿Qué capital se encuentra a mayor altitud?",
          a: "La Paz (Bolivia)"
        }, {
          q: "¿Cuál es el país más joven del mundo?",
          a: "Sudán del Sur"
        }, {
          q: "¿Dónde se encuentra el estrecho de Gibraltar?",
          a: "Entre España y Marruecos"
        }, {
          q: "¿Qué país europeo tiene más islas?",
          a: "Suecia"
        }, {
          q: "¿Cuál es la capital de Marruecos?",
          a: "Rabat"
        }, {
          q: "¿Qué país es conocido como la Tierra del Sol Naciente?",
          a: "Japón"
        }, {
          q: "¿Qué país tiene como capital a Ulan Bator?",
          a: "Mongolia"
        }, {
          q: "¿En qué país está el río Ganges?",
          a: "India"
        }, {
          q: "¿Dónde está el Mar Muerto?",
          a: "Entre Israel, Cisjordania y Jordania"
        }, {
          q: "¿Cuál es la capital de Corea del Sur?",
          a: "Seúl"
        }],
        historia: [{
          q: "¿En qué año cayó el Muro de Berlín?",
          a: "1989"
        }, {
          q: "¿Qué guerra duró del 1939 al 1945?",
          a: "Segunda Guerra Mundial"
        }, {
          q: "¿Quién fue el primer emperador romano?",
          a: "Augusto"
        }, {
          q: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
          a: "1776"
        }, {
          q: "¿Qué batalla perdió Napoleón en 1815?",
          a: "Waterloo"
        }, {
          q: "¿Quién lideró la independencia de la India?",
          a: "Mahatma Gandhi"
        }, {
          q: "¿Qué gran peste azotó Europa en el siglo XIV?",
          a: "La peste negra"
        }, {
          q: "¿Quién fue el primer presidente de Estados Unidos?",
          a: "George Washington"
        }, {
          q: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
          a: "Tratado de Versalles"
        }, {
          q: "¿Qué imperio dominaba México antes de la llegada de los españoles?",
          a: "Azteca"
        }, {
          q: "¿En qué año comenzó la Revolución Francesa?",
          a: "1789"
        }, {
          q: "¿Qué famoso filósofo fue maestro de Alejandro Magno?",
          a: "Aristóteles"
        }, {
          q: "¿Quién pintó el techo de la Capilla Sixtina?",
          a: "Miguel Ángel"
        }, {
          q: "¿En qué país tuvo lugar la Revolución de los Claveles?",
          a: "Portugal"
        }, {
          q: "¿Qué evento inició la Primera Guerra Mundial?",
          a: "El asesinato del archiduque Francisco Fernando"
        }, {
          q: "¿Qué ciudad fue destruida por el Vesubio en el año 79?",
          a: "Pompeya"
        }, {
          q: "¿En qué siglo se firmó la Constitución Española?",
          a: "Siglo XX (1978)"
        }, {
          q: "¿Quién fue conocido como el Libertador de América del Sur?",
          a: "Simón Bolívar"
        }, {
          q: "¿Qué civilización antigua inventó la escritura cuneiforme?",
          a: "Sumeria"
        }, {
          q: "¿Qué imperio fue liderado por Genghis Khan?",
          a: "Imperio Mongol"
        }, {
          q: "¿Qué era la URSS?",
          a: "Unión de Repúblicas Socialistas Soviéticas"
        }, {
          q: "¿Qué reina inglesa tuvo seis esposos?",
          a: "Ninguna, fue Enrique VIII quien tuvo seis esposas"
        }, {
          q: "¿Qué guerra civil tuvo lugar en España entre 1936 y 1939?",
          a: "Guerra Civil Española"
        }, {
          q: "¿Quién escribió 'El Príncipe'?",
          a: "Nicolás Maquiavelo"
        }, {
          q: "¿Qué imperio construyó el Coliseo?",
          a: "Imperio Romano"
        }, {
          q: "¿En qué siglo vivió Leonardo da Vinci?",
          a: "Siglo XV-XVI"
        }, {
          q: "¿Quién fue el primer hombre en caminar sobre la Luna?",
          a: "Neil Armstrong"
        }, {
          q: "¿Qué guerra enfrentó a Atenas y Esparta?",
          a: "La guerra del Peloponeso"
        }, {
          q: "¿Qué líder soviético inició la Perestroika?",
          a: "Mijaíl Gorbachov"
        }, {
          q: "¿Quién fue Juana de Arco?",
          a: "Heroína francesa y santa"
        }, {
          q: "¿Qué famosa revolución comenzó en 1917?",
          a: "La Revolución Rusa"
        }, {
          q: "¿Qué país usó la bomba atómica en 1945?",
          a: "Estados Unidos"
        }, {
          q: "¿Qué presidente estadounidense abolió la esclavitud?",
          a: "Abraham Lincoln"
        }, {
          q: "¿Qué tratado dividió América entre España y Portugal?",
          a: "Tratado de Tordesillas"
        }, {
          q: "¿Qué era la Inquisición?",
          a: "Tribunal eclesiástico para castigar la herejía"
        }, {
          q: "¿Qué país fue invadido para iniciar la Segunda Guerra Mundial?",
          a: "Polonia"
        }, {
          q: "¿Qué filósofo murió bebiendo cicuta?",
          a: "Sócrates"
        }, {
          q: "¿Qué monarca español instauró la Armada Invencible?",
          a: "Felipe II"
        }, {
          q: "¿En qué ciudad fue asesinado Julio César?",
          a: "Roma"
        }, {
          q: "¿Qué nombre recibió el muro que dividía Berlín?",
          a: "El Muro de Berlín"
        }, {
          q: "¿Qué país colonizó India durante siglos?",
          a: "Reino Unido"
        }, {
          q: "¿Quién fue el primer faraón de Egipto?",
          a: "Narmer (o Menes)"
        }],
        deporte: [
  { q: "¿Qué país ganó el Mundial de Fútbol de 2010?", a: "España" },
  { q: "¿Cuántos jugadores hay en un equipo de baloncesto en cancha?", a: "5" },
  { q: "¿Quién tiene más títulos de Grand Slam en tenis masculino?", a: "Novak Djokovic" },
  { q: "¿En qué deporte compite Usain Bolt?", a: "Atletismo" },
  { q: "¿Qué equipo de fútbol es conocido como 'Los Red Devils'?", a: "Manchester United" },
  { q: "¿Dónde se celebraron los Juegos Olímpicos de 1992?", a: "Barcelona" },
  { q: "¿Qué piloto español ha sido campeón de Fórmula 1?", a: "Fernando Alonso" },
  { q: "¿Qué deporte se practica en Wimbledon?", a: "Tenis" },
  { q: "¿Cuántos anillos tiene el logo de los Juegos Olímpicos?", a: "5" },
  { q: "¿En qué deporte se gana por ippon?", a: "Judo" },
  { q: "¿Qué selección ha ganado más Mundiales de fútbol?", a: "Brasil" },
  { q: "¿Qué país ganó el Mundial de Qatar 2022?", a: "Argentina" },
  { q: "¿En qué ciudad está el estadio Maracaná?", a: "Río de Janeiro" },
  { q: "¿Qué deporte practica Marc Márquez?", a: "Motociclismo" },
  { q: "¿Qué país ganó el oro en fútbol en los JJ.OO. de 2021?", a: "Brasil" },
  { q: "¿Qué deporte se juega con un puck?", a: "Hockey sobre hielo" },
  { q: "¿Qué equipo ha ganado más Champions League?", a: "Real Madrid" },
  { q: "¿Qué ciclista ganó 5 Tours de Francia?", a: "Miguel Induráin" },
  { q: "¿Qué nadador ganó 23 oros olímpicos?", a: "Michael Phelps" },
  { q: "¿Qué país es potencia en béisbol?", a: "Estados Unidos" },
  { q: "¿Qué es la NFL?", a: "Liga de fútbol americano" },
  { q: "¿Qué tenista española ganó Roland Garros en 2016?", a: "Garbiñe Muguruza" },
  { q: "¿Qué país es famoso por el sumo?", a: "Japón" },
  { q: "¿En qué deporte se dan saltos mortales y se puntúa por estilo?", a: "Gimnasia artística" },
  { q: "¿Qué jugador fue apodado 'El Pelusa'?", a: "Diego Maradona" },
  { q: "¿Qué equipo tiene más anillos de la NBA?", a: "Boston Celtics" },
  { q: "¿En qué ciudad se celebraron los JJ.OO. de 2008?", a: "Pekín" },
  { q: "¿Qué significa 'KO' en boxeo?", a: "Knockout (noqueo)" },
  { q: "¿Qué deporte se juega con raquetas y volantes?", a: "Bádminton" },
  { q: "¿Qué es el VAR en fútbol?", a: "Asistencia arbitral por video" },
  { q: "¿Qué deportista fue apodado 'La Bestia' en rugby?", a: "Jonah Lomu" },
  { q: "¿Qué país inventó el fútbol?", a: "Inglaterra" },
  { q: "¿Cuántos sets se necesitan para ganar un partido de tenis femenino?", a: "2" },
  { q: "¿Quién es Simone Biles?", a: "Gimnasta estadounidense" },
  { q: "¿Qué equipo ganó la Eurocopa 2008?", a: "España" },
  { q: "¿Qué país ganó el Mundial de Baloncesto FIBA en 2019?", a: "España" }
],

        misc: [{
          q: "¿Cuántos colores tiene el arcoíris?",
          a: "Siete"
        }, {
          q: "¿Cuál es el animal más rápido del mundo?",
          a: "Guepardo"
        }, {
          q: "¿Cuál es el planeta más grande del sistema solar?",
          a: "Júpiter"
        }, {
          q: "¿Qué instrumento mide los terremotos?",
          a: "Sismógrafo"
        }, {
          q: "¿Cuál es el símbolo químico del oro?",
          a: "Au"
        }, {
          q: "¿En qué deporte se usa un birdie?",
          a: "Bádminton"
        }, {
          q: "¿Qué parte del cuerpo produce insulina?",
          a: "Páncreas"
        }, {
          q: "¿Cuál es el símbolo químico del agua?",
          a: "H2O"
        }, {
          q: "¿Qué número romano representa el 50?",
          a: "L"
        }, {
          q: "¿Qué instrumento tiene teclas, cuerdas y martillos?",
          a: "Piano"
        }, {
          q: "¿Cuántas patas tiene una araña?",
          a: "Ocho"
        }, {
          q: "¿Qué vitamina se obtiene con el sol?",
          a: "Vitamina D"
        }, {
          q: "¿Cuál es el metal más ligero?",
          a: "Litio"
        }, {
          q: "¿Cuántos huesos tiene el cuerpo humano adulto?",
          a: "206"
        }, {
          q: "¿Quién utiliza una batuta?",
          a: "Director de orquesta"
        }, {
          q: "¿Cuál es el continente con más países?",
          a: "África"
        }, {
          q: "¿Qué significa 'www' en las direcciones web?",
          a: "World Wide Web"
        }, {
          q: "¿Qué aparato usamos para ver estrellas?",
          a: "Telescopio"
        }, {
          q: "¿Cuántos planetas hay en el sistema solar?",
          a: "Ocho"
        }, {
          q: "¿Cuál es el país de origen de LEGO?",
          a: "Dinamarca"
        }, {
          q: "¿Qué fruta tiene semillas por fuera?",
          a: "Fresa"
        }, {
          q: "¿Qué animal pone huevos y da leche?",
          a: "Ornitorrinco"
        }, {
          q: "¿Qué gas es más abundante en la atmósfera?",
          a: "Nitrógeno"
        }, {
          q: "¿Cuál es la capital de los videojuegos (por industria)?",
          a: "Japón"
        }, {
          q: "¿Cuántos colores tiene un cubo Rubik clásico?",
          a: "Seis"
        }, {
          q: "¿Qué unidad se usa para medir la potencia eléctrica?",
          a: "Vatio"
        }, {
          q: "¿Qué planeta es el más cercano al Sol?",
          a: "Mercurio"
        }, {
          q: "¿Cómo se llama el triángulo con dos lados iguales?",
          a: "Isósceles"
        }, {
          q: "¿Qué día se celebra el Día de los Inocentes en España?",
          a: "28 de diciembre"
        }, {
          q: "¿Cuál es el número pi con dos decimales?",
          a: "3,14"
        }, {
          q: "¿Cuál es el océano más profundo?",
          a: "Océano Pacífico"
        }, {
          q: "¿Qué país ganó el Mundial de Fútbol 2010?",
          a: "España"
        }, {
          q: "¿Qué país produce más café en el mundo?",
          a: "Brasil"
        }, {
          q: "¿Cuál es el símbolo químico del hierro?",
          a: "Fe"
        }, {
          q: "¿Qué red social fue famosa antes de Facebook?",
          a: "MySpace"
        }, {
          q: "¿Qué es más grande: una ballena azul o un autobús?",
          a: "Ballena azul"
        }, ]
      };
      

window.onload = function () 
{
  cargarOpcionesMesa();
};  
