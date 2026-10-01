// ============================================
// LOST CIVILIZATIONS EXPLORER
// ============================================

const civilizations = [
    {
        id: "egypt",
        name: "Ancient Egypt",
        region: "Africa",
        period: "c. 3100 BC – 30 BC",
        symbol: "𓂀",
        location: "Nile Valley",
        short: "A remarkable civilization famous for pyramids, pharaohs, writing, engineering, and a rich religious culture.",
        overview: "Ancient Egypt developed along the Nile River and became one of the world's longest-lasting civilizations. Its people built enormous monuments, developed hieroglyphic writing, created sophisticated systems of government, and made important advances in mathematics, medicine, engineering, and astronomy.",
        history: "The civilization began with the unification of Upper and Lower Egypt around 3100 BC. Egyptian history is traditionally divided into periods including the Old Kingdom, Middle Kingdom, and New Kingdom. During these periods, powerful pharaohs ruled the land and commissioned temples, tombs, statues, and other monumental structures. Egypt eventually came under foreign rule and became part of the Roman world in 30 BC.",
        achievements: "Egyptians developed hieroglyphic writing, large-scale stone construction, a calendar based partly on astronomical observations, mathematical techniques, medical knowledge, irrigation systems, and highly organized administration. The pyramids demonstrate their ability to organize enormous construction projects.",
        disappearance: "Ancient Egyptian civilization did not suddenly vanish. Egyptian culture changed over many centuries as the region came under Persian, Greek, and Roman influence. Many traditional Egyptian practices eventually declined, while the civilization's monuments and written records remained.",
        facts: [
            "The Nile was central to Egyptian agriculture and transportation.",
            "The Great Pyramid was built during the Old Kingdom.",
            "Egyptians used hieroglyphic writing.",
            "Pharaohs were central figures in Egyptian government and religion."
        ]
    },

    {
        id: "mesopotamia",
        name: "Mesopotamia",
        region: "Middle East",
        period: "c. 3500 BC – 539 BC",
        symbol: "𒀭",
        location: "Tigris & Euphrates",
        short: "The ancient land between the Tigris and Euphrates rivers where some of the earliest cities and writing systems developed.",
        overview: "Mesopotamia means 'land between the rivers' and refers to the region around the Tigris and Euphrates. Several civilizations developed there, including the Sumerians, Akkadians, Babylonians, and Assyrians. The region is especially important in human history because of its early cities, writing, laws, and organized government.",
        history: "Sumerian city-states such as Uruk and Ur developed thousands of years ago. Later, rulers such as Sargon of Akkad created larger political kingdoms. Babylon became famous under rulers including Hammurabi, while Assyria developed a powerful empire. The region was eventually incorporated into the Persian Empire.",
        achievements: "Mesopotamian societies developed cuneiform writing, large cities, irrigation systems, mathematics, astronomy, trade networks, and written legal traditions. The Code of Hammurabi is one of the best-known surviving collections of ancient laws.",
        disappearance: "Mesopotamia was never simply abandoned. Different kingdoms and peoples rose and fell across the region. Political changes, warfare, migration, and the growth of larger empires transformed its cities and cultures over thousands of years.",
        facts: [
            "Cuneiform is one of the earliest known writing systems.",
            "Uruk became one of the world's earliest major cities.",
            "The Tigris and Euphrates supported agriculture.",
            "Babylon became an important ancient center."
        ]
    },

    {
        id: "indus",
        name: "Indus Valley Civilization",
        region: "Asia",
        period: "c. 3300 BC – 1300 BC",
        symbol: "☸",
        location: "Indus River Valley",
        short: "An advanced Bronze Age civilization known for carefully planned cities, drainage systems, trade, and distinctive seals.",
        overview: "The Indus Valley Civilization developed across parts of present-day Pakistan and northwestern India. Major cities included Harappa and Mohenjo-daro. Its people created carefully planned settlements with streets, wells, drainage systems, storage facilities, and impressive brick architecture.",
        history: "The civilization developed from earlier farming communities and reached a major urban phase around 2600 BC. Harappa, Mohenjo-daro, Dholavira, and other settlements were connected through trade and shared cultural practices. After about 1900 BC, many large urban centers declined and populations became more dispersed.",
        achievements: "Indus cities demonstrate advanced urban planning. Standardized bricks, sophisticated drainage, wells, craft production, seals, and long-distance trade show a highly organized society. Archaeologists have discovered evidence of trade with regions including Mesopotamia.",
        disappearance: "The decline appears to have involved several factors rather than one single event. Changes in river systems, climate, trade patterns, and settlement organization may all have contributed. The civilization's people did not simply disappear; communities continued living in the broader region.",
        facts: [
            "Mohenjo-daro is one of the best-known Indus cities.",
            "Many buildings used standardized fired bricks.",
            "The civilization had extensive drainage systems.",
            "Its writing system has not been conclusively deciphered."
        ]
    },

    {
        id: "maya",
        name: "Maya Civilization",
        region: "Americas",
        period: "c. 2000 BC – AD 1500s",
        symbol: "☀",
        location: "Mesoamerica",
        short: "A Mesoamerican civilization known for cities, mathematics, astronomy, writing, architecture, and complex calendars.",
        overview: "The Maya civilization developed across parts of present-day Mexico, Guatemala, Belize, Honduras, and El Salvador. Maya societies built impressive cities and temples and developed sophisticated systems of writing, mathematics, astronomy, and calendar keeping.",
        history: "Maya civilization developed over many centuries. During the Classic Period, cities such as Tikal, Palenque, and Copán became major centers. Different Maya city-states often had their own rulers and political relationships. Many southern lowland cities declined during the eighth and ninth centuries, but Maya communities continued to flourish elsewhere.",
        achievements: "The Maya developed a writing system capable of recording detailed historical information. They used advanced mathematical ideas, including a concept of zero, and carefully observed astronomical cycles. Their architecture included pyramids, plazas, temples, palaces, and ball courts.",
        disappearance: "The Maya civilization did not completely disappear. Many Classic Period cities declined, probably because of a combination of environmental, political, economic, and social pressures. Maya peoples and communities remain present today and continue to preserve their languages and traditions.",
        facts: [
            "Maya civilization developed sophisticated calendars.",
            "Maya mathematics included the concept of zero.",
            "Tikal was an important Maya city.",
            "Millions of Maya people live today."
        ]
    },

    {
        id: "rome",
        name: "Ancient Rome",
        region: "Europe",
        period: "c. 753 BC – AD 476",
        symbol: "🏛️",
        location: "Mediterranean",
        short: "A powerful ancient civilization whose roads, laws, architecture, language, and government influenced later societies.",
        overview: "Rome began as a city in central Italy and eventually grew into one of the largest empires of the ancient world. Roman society developed sophisticated systems of law, government, engineering, architecture, military organization, and trade.",
        history: "Rome traditionally dates its foundation to 753 BC. It developed from a monarchy into a republic and later became an empire. Roman territories eventually stretched across much of Europe, North Africa, and western Asia. The western Roman Empire formally ended in AD 476, while the Eastern Roman Empire continued for centuries.",
        achievements: "Romans built extensive road networks, bridges, aqueducts, amphitheaters, baths, and other infrastructure. Roman law influenced many later legal systems. Latin also became an important language in European history.",
        disappearance: "The western Roman Empire declined through a long process involving political instability, economic difficulties, military pressures, and other factors. Roman culture and institutions continued in many forms after the western empire ended.",
        facts: [
            "Roman roads connected many parts of the empire.",
            "Aqueducts carried water to cities.",
            "Latin influenced many modern languages.",
            "The Colosseum was built in ancient Rome."
        ]
    },

    {
        id: "persia",
        name: "Achaemenid Persia",
        region: "Middle East",
        period: "c. 550 BC – 330 BC",
        symbol: "𐎠",
        location: "Persian Empire",
        short: "A vast ancient empire known for administration, roads, royal cities, cultural diversity, and an organized imperial system.",
        overview: "The Achaemenid Persian Empire was founded by Cyrus the Great and became one of the largest empires of the ancient world. It stretched across a huge area of western and central Asia and included peoples with many different languages and cultures.",
        history: "Cyrus the Great established the empire in the sixth century BC. Later rulers expanded its territory and developed systems for governing distant regions. Darius I reorganized administration and supported major construction projects. The empire was conquered by Alexander of Macedon in the fourth century BC.",
        achievements: "Persian rulers developed provincial administration, roads, royal communication networks, and large ceremonial centers. Persepolis became one of the empire's most famous royal sites.",
        disappearance: "The Achaemenid Empire ended after Alexander's campaigns. However, Persian languages, traditions, art, and political ideas continued to influence later civilizations across the region.",
        facts: [
            "Cyrus the Great founded the Achaemenid Empire.",
            "Persepolis was an important royal center.",
            "The empire covered a vast territory.",
            "Royal roads helped connect distant regions."
        ]
    },

    {
        id: "inca",
        name: "Inca Civilization",
        region: "Americas",
        period: "c. AD 1400 – 1530s",
        symbol: "⛰️",
        location: "Andes Mountains",
        short: "A powerful Andean civilization famous for mountain engineering, roads, terraces, and remarkable stone construction.",
        overview: "The Inca civilization developed in the Andes of South America and created a large empire centered in the region of present-day Peru. Its people built roads, terraces, bridges, storage facilities, and stone structures across difficult mountainous terrain.",
        history: "The Inca Empire expanded rapidly during the fifteenth century. Cusco became its political center. Inca rulers connected different regions through roads and administrative systems. Spanish forces arrived in the sixteenth century, and the empire was eventually conquered.",
        achievements: "The Incas created an enormous road network and developed agricultural terraces that helped farming in mountainous environments. Their stone construction at places such as Machu Picchu remains famous for its precision.",
        disappearance: "The Inca political empire ended after the Spanish conquest. However, descendants of the Inca and other Andean peoples continue to live in the region and preserve many cultural traditions.",
        facts: [
            "Cusco was the center of the Inca Empire.",
            "Machu Picchu is an important Inca site.",
            "The Incas built extensive mountain roads.",
            "Terrace farming helped use steep land."
        ]
    },

    {
        id: "aztec",
        name: "Aztec Civilization",
        region: "Americas",
        period: "c. AD 1300 – 1521",
        symbol: "🌞",
        location: "Central Mexico",
        short: "A powerful Mesoamerican civilization centered on Tenochtitlan and known for markets, temples, farming, and complex society.",
        overview: "The Aztec Empire, commonly associated with the Mexica people, developed in central Mexico. Its capital, Tenochtitlan, became a large and impressive city built around the waters of Lake Texcoco.",
        history: "The Mexica established Tenochtitlan in the fourteenth century. The city grew into the center of a powerful alliance and empire. Agriculture, trade, tribute, military organization, and religious institutions were important parts of Aztec society. Spanish forces and their Indigenous allies conquered Tenochtitlan in 1521.",
        achievements: "The Aztecs developed sophisticated agricultural techniques, including chinampas, and maintained large markets. Tenochtitlan contained temples, palaces, causeways, canals, and busy commercial areas.",
        disappearance: "The Aztec Empire ended after the Spanish conquest. Epidemic diseases, warfare, political alliances, and internal conflicts all played roles in the collapse of the empire.",
        facts: [
            "Tenochtitlan was the Aztec capital.",
            "Chinampas were used for intensive agriculture.",
            "Large markets supported trade.",
            "The empire fell in 1521."
        ]
    },

    {
        id: "minoan",
        name: "Minoan Civilization",
        region: "Europe",
        period: "c. 3000 BC – 1100 BC",
        symbol: "🐂",
        location: "Crete",
        short: "An ancient Aegean civilization famous for palace complexes, maritime trade, colorful art, and mysterious writing systems.",
        overview: "The Minoan civilization developed on the island of Crete in the Aegean Sea. It is especially known for palace complexes such as Knossos, elaborate artwork, pottery, trade, and connections with other Mediterranean societies.",
        history: "Minoan society developed over several thousand years. Large palace centers became important administrative and economic hubs. Around the middle of the second millennium BC, major changes affected Minoan centers, and later Mycenaean influence became stronger.",
        achievements: "Minoans produced detailed frescoes, pottery, jewelry, seals, and architecture. Their position in the Mediterranean allowed them to participate in extensive maritime trade.",
        disappearance: "The decline of Minoan palace centers likely involved several factors, including earthquakes, volcanic events, political changes, and increasing Mycenaean influence. The exact sequence remains an area of archaeological study.",
        facts: [
            "Knossos is the best-known Minoan palace site.",
            "Minoan art often depicts natural scenes.",
            "Crete was important for Mediterranean trade.",
            "Linear A remains largely undeciphered."
        ]
    },

    {
        id: "sumer",
        name: "Sumer",
        region: "Middle East",
        period: "c. 4500 BC – 1900 BC",
        symbol: "𒀭",
        location: "Southern Mesopotamia",
        short: "One of the earliest urban civilizations, famous for city-states, cuneiform writing, temples, and organized administration.",
        overview: "Sumer developed in southern Mesopotamia and is associated with some of the earliest known cities in human history. Sumerian city-states such as Uruk, Ur, and Lagash developed complex political and economic systems.",
        history: "Sumerian communities grew around irrigation agriculture. City-states competed and interacted through trade, diplomacy, and warfare. Eventually, Sumerian political independence declined as Akkadian and later Babylonian powers gained control of the region.",
        achievements: "Sumerians used cuneiform writing for administration, trade, literature, and record keeping. They developed irrigation agriculture, large temples, mathematical systems, and organized urban institutions.",
        disappearance: "Sumerian political independence eventually ended, but the Sumerian language and cultural traditions influenced later Mesopotamian civilizations for centuries.",
        facts: [
            "Uruk was one of the earliest major cities.",
            "Cuneiform developed in Mesopotamia.",
            "Sumerian cities were often independent city-states.",
            "Irrigation supported farming."
        ]
    },

    {
        id: "khmer",
        name: "Khmer Empire",
        region: "Asia",
        period: "c. AD 802 – 1431",
        symbol: "🛕",
        location: "Southeast Asia",
        short: "A major Southeast Asian empire famous for Angkor, monumental temples, reservoirs, roads, and sophisticated water management.",
        overview: "The Khmer Empire dominated much of mainland Southeast Asia for centuries. Its capital region around Angkor became home to enormous temples, reservoirs, roads, canals, and densely populated settlements.",
        history: "Jayavarman II is traditionally associated with the foundation of the Khmer Empire in the early ninth century. Later rulers expanded the kingdom and built major monuments. Angkor Wat and other temple complexes became symbols of Khmer architecture.",
        achievements: "Khmer engineers developed large reservoirs and water-management systems that supported agriculture and urban life. Architects created monumental temples decorated with detailed carvings and sculptures.",
        disappearance: "Angkor's political importance declined over time because of changing political conditions, environmental pressures, and shifts in trade and settlement patterns. Khmer civilization continued beyond the decline of Angkor.",
        facts: [
            "Angkor Wat is one of the world's most famous temples.",
            "Water management was important to Khmer society.",
            "Angkor was a major urban center.",
            "Khmer architecture contains detailed stone carvings."
        ]
    },

    {
        id: "nubia",
        name: "Kingdom of Kush",
        region: "Africa",
        period: "c. 1070 BC – AD 350",
        symbol: "☀️",
        location: "Nile Valley",
        short: "An ancient African kingdom south of Egypt known for trade, pyramids, powerful rulers, and the city of Meroë.",
        overview: "The Kingdom of Kush developed along the Nile south of Egypt, mainly in the region of modern Sudan. Kush became a major political and trading power and maintained close connections with Egypt and other neighboring regions.",
        history: "Kush developed important centers at Napata and later Meroë. During the eighth century BC, Kushite rulers controlled Egypt for a period and established the Twenty-Fifth Dynasty. Later, Meroë became a major center.",
        achievements: "Kush developed its own artistic traditions, ironworking industries, trade networks, and distinctive pyramids. Meroë became particularly known for its large collection of pyramids.",
        disappearance: "The Kingdom of Kush declined during the first centuries AD. Changing trade routes, environmental pressures, and competition from neighboring powers contributed to its eventual decline.",
        facts: [
            "Kush was located south of ancient Egypt.",
            "Meroë was an important Kushite center.",
            "Kushite rulers controlled Egypt for a period.",
            "Kush built distinctive pyramids."
        ]
    }
];


// ============================================
// ELEMENTS
// ============================================

const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-btn");

const featuredGrid = document.getElementById("featuredGrid");
const exploreGrid = document.getElementById("exploreGrid");
const favoritesGrid = document.getElementById("favoritesGrid");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noResults = document.getElementById("noResults");
const emptyFavorites = document.getElementById("emptyFavorites");

const detailsContent = document.getElementById("detailsContent");


// ============================================
// FAVORITES
// ============================================

let favorites = JSON.parse(
    localStorage.getItem("lostCivilizationFavorites")
) || [];

function saveFavorites() {
    localStorage.setItem(
        "lostCivilizationFavorites",
        JSON.stringify(favorites)
    );
}

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {

    if (isFavorite(id)) {
        favorites = favorites.filter(item => item !== id);
        showToast("Removed from favorites");
    } else {
        favorites.push(id);
        showToast("Added to favorites");
    }

    saveFavorites();

    renderFeatured();
    renderExplore();
    renderFavorites();

    const currentDetails = document.querySelector(".detail-header");

    if (currentDetails) {
        showDetails(id);
    }
}


// ============================================
// NAVIGATION
// ============================================

function showSection(sectionId) {

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const target = document.getElementById(sectionId);

    if (target) {
        target.classList.add("active");
    }

    navButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.section === sectionId
        );
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

navButtons.forEach(button => {

    button.addEventListener("click", () => {
        showSection(button.dataset.section);
    });

});


// ============================================
// CARD CREATION
// ============================================

function createCard(civ) {

    const saved = isFavorite(civ.id);

    return `
        <article class="civ-card">

            <div class="card-top">
                <div class="card-symbol">
                    ${civ.symbol}
                </div>

                <button
                    class="favorite-btn ${saved ? "saved" : ""}"
                    onclick="toggleFavorite('${civ.id}')"
                    title="Favorite"
                >
                    ${saved ? "★" : "☆"}
                </button>
            </div>

            <div class="card-body">

                <h3>${civ.name}</h3>

                <div class="card-meta">
                    <span class="tag">${civ.region}</span>
                    <span class="tag">${civ.period}</span>
                </div>

                <p>${civ.short}</p>

                <button
                    class="details-btn"
                    onclick="showDetails('${civ.id}')"
                >
                    View Details →
                </button>

            </div>

        </article>
    `;
}


// ============================================
// FEATURED
// ============================================

function renderFeatured() {

    const featured = civilizations.slice(0, 6);

    featuredGrid.innerHTML = featured
        .map(createCard)
        .join("");
}


// ============================================
// EXPLORE
// ============================================

function renderExplore() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    const category = categoryFilter.value;

    const filtered = civilizations.filter(civ => {

        const matchesSearch =
            civ.name.toLowerCase().includes(query) ||
            civ.region.toLowerCase().includes(query) ||
            civ.location.toLowerCase().includes(query);

        const matchesCategory =
            category === "all" ||
            civ.region === category;

        return matchesSearch && matchesCategory;
    });

    exploreGrid.innerHTML = filtered
        .map(createCard)
        .join("");

    noResults.classList.toggle(
        "hidden",
        filtered.length !== 0
    );
}

searchInput.addEventListener(
    "input",
    renderExplore
);

categoryFilter.addEventListener(
    "change",
    renderExplore
);


// ============================================
// FAVORITES PAGE
// ============================================

function renderFavorites() {

    const favoriteCivilizations =
        civilizations.filter(civ =>
            favorites.includes(civ.id)
        );

    favoritesGrid.innerHTML =
        favoriteCivilizations
            .map(createCard)
            .join("");

    emptyFavorites.classList.toggle(
        "hidden",
        favoriteCivilizations.length !== 0
    );
}


// ============================================
// DETAILS
// ============================================

function showDetails(id) {

    const civ = civilizations.find(
        item => item.id === id
    );

    if (!civ) return;

    const saved = isFavorite(civ.id);

    detailsContent.innerHTML = `

        <div class="detail-header">

            <div class="detail-symbol">
                ${civ.symbol}
            </div>

            <h2>${civ.name}</h2>

            <p class="detail-subtitle">
                ${civ.region} • ${civ.period} • ${civ.location}
            </p>

            <div class="detail-actions">

                <button
                    class="primary-btn"
                    onclick="toggleFavorite('${civ.id}')"
                >
                    ${saved ? "★ Remove Favorite" : "☆ Add Favorite"}
                </button>

            </div>

        </div>

        <div class="detail-content">

            <h3>Overview</h3>
            <p>${civ.overview}</p>

            <h3>History</h3>
            <p>${civ.history}</p>

            <h3>Achievements</h3>
            <p>${civ.achievements}</p>

            <h3>What Happened to the Civilization?</h3>
            <p>${civ.disappearance}</p>

            <h3>Important Facts</h3>
            <p>
                ${civ.facts.join(" • ")}
            </p>

        </div>
    `;

    showSection("details");
}


// ============================================
// RANDOM CIVILIZATION
// ============================================

function randomCivilization() {

    const randomIndex =
        Math.floor(
            Math.random() * civilizations.length
        );

    const random =
        civilizations[randomIndex];

    showDetails(random.id);
}

document
    .getElementById("randomBtn")
    .addEventListener(
        "click",
        randomCivilization
    );

document
    .getElementById("randomExploreBtn")
    .addEventListener(
        "click",
        randomCivilization
    );


// ============================================
// OTHER BUTTONS
// ============================================

document
    .getElementById("exploreBtn")
    .addEventListener("click", () => {
        showSection("explore");
    });

document
    .getElementById("viewAllBtn")
    .addEventListener("click", () => {
        showSection("explore");
    });

document
    .getElementById("discoverBtn")
    .addEventListener("click", () => {
        showSection("explore");
    });

document
    .getElementById("backBtn")
    .addEventListener("click", () => {
        showSection("explore");
    });


// ============================================
// TOAST
// ============================================

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


// ============================================
// INITIALIZE APP
// ============================================

renderFeatured();
renderExplore();
renderFavorites();
showSection("home");
```
