// Lista de toques militares - FÁCIL DE ADICIONAR NOVOS TOQUES
const militaryTracks = [
    { name: "Sentido", file: "audio/toques_corneta/sentido.mp3", icon: "fas fa-user-tie" },
    { name: "Descansar", file: "audio/toques_corneta/descansar.mp3", icon: "fas fa-pause" },
    { name: "Cobrir", file: "audio/toques_corneta/cobrir.mp3", icon: "fas fa-shield-alt" },
    { name: "Firme", file: "audio/toques_corneta/firme.mp3", icon: "fas fa-exclamation" },
    { name: "Direita Volver", file: "audio/toques_corneta/direita-volver.mp3", icon: "fas fa-arrow-right" },
    { name: "Esquerda Volver", file: "audio/toques_corneta/esquerda-volver.mp3", icon: "fas fa-arrow-left" },
    { name: "Meia Volta Volver", file: "audio/toques_corneta/meia-volta-volver.mp3", icon: "fas fa-undo" },
    //{ name: "Voltas Volver", file: "audio/toques_corneta/voltas-volver.mp3", icon: "fas fa-sync" },
    { name: "Cruzar Arma", file: "audio/toques_corneta/cruzar-arma.mp3", icon: "fas fa-times" },
    { name: "Ombro Arma", file: "audio/toques_corneta/ombro-arma.mp3", icon: "fas fa-hand-paper" },
    { name: "Apresentar Arma", file: "audio/toques_corneta/apresentar-arma.mp3", icon: "fas fa-hand-point-up" },
    { name: "Descansar Arma", file: "audio/toques_corneta/descansar-arma.mp3", icon: "fas fa-hand-point-down" },
    { name: "Ordinário Marche", file: "audio/toques_corneta/ordinario-marche.mp3", icon: "fas fa-walking" },
    // falta { name: "Olhar à Direita", file: "audio/toques_corneta/olhar-direita.mp3", icon: "fas fa-eye" },
    // falta { name: "Olhar Frente", file: "audio/toques_corneta/olhar-frente.mp3", icon: "fas fa-eye" },
    { name: "Alto", file: "audio/toques_corneta/alto.mp3", icon: "fas fa-stop-circle" },
    { name: "Armar Baioneta", file: "audio/toques_corneta/armar-baioneta.mp3", icon: "fas fa-sword" },
    { name: "Desarmar Baioneta", file: "audio/toques_corneta/desarmar-baioneta.mp3", icon: "fas fa-shield" },
    { name: "Superior", file: "audio/toques_corneta/superior.mp3", icon: "fas fa-shield" }
];

// Ao selecionar uma música militar, mostrar as suas letras ao lado. (pode ser por grid view)
const militaryMusics = [
    { name: "Canção do Exército", file: "audio/musicas/cancao-do-exercito.mp3", lyric_id: 1 },
    { name: "Fibra de Heroi", file: "audio/musicas/fibra-de-heroi.mp3", lyric_id: 2 },
    { name: "Hino Nacional", file: "audio/musicas/hino-nacional.mp3", lyric_id: 3 },
    //{ name: "Avante Camaradas", file: "audio/musicas/avante-camaradas.mp3", lyric_id: 4 }
];
const militaryLyrics = [
    { innerHTML: "<p>Letras não implementadas</p>"},
    { innerHTML: `<div style="display: flex; justify-content: space-evenly; gap: 1.5rem; text-align: left;">
        <p>Nós somos da Pátria a guarda<br>
Fiéis soldados<br>
Por ela amados<br>
Nas cores de nossa farda<br>
Rebrilha a glória<br>
Fulge a vitória<br><br>

Em nosso valor se encerra<br>
Toda a esperança<br>
Que um povo alcança<br>
Quando altiva for a Terra<br>
Rebrilha a glória<br>
Fulge a vitória<br><br>

A paz queremos com fervor<br>
A guerra só nos causa dor<br>
Porém, se a Pátria amada<br>
For um dia ultrajada<br>
Lutaremos sem temor<br>
</p>
<p>
A paz queremos com fervor<br>
A guerra só nos causa dor<br>
Porém, se a Pátria amada<br>
For um dia ultrajada<br>
Lutaremos sem temor<br><br>

Como é sublime<br>
Saber amar<br>
Com a alma adorar<br>
A terra onde se nasce!<br>
Amor febril<br>
Pelo Brasil<br>
No coração<br>
Nosso que passe<br><br>

E quando a nação querida<br>
Frente ao inimigo<br>
Correr perigo<br>
Se dermos por ela a vida<br>
Rebrilha a glória<br>
Fulge a vitória<br>
</p>
<p>
Assim ao Brasil faremos<br>
Oferta igual<br>
De amor filial<br>
E a ti, Pátria, salvaremos!<br>
Rebrilha a glória<br>
Fulge a vitória<br><br>

A paz queremos com fervor<br>
A guerra só nos causa dor<br>
Porém, se a Pátria amada<br>
For um dia ultrajada<br>
Lutaremos sem temor<br><br>

A paz queremos com fervor<br>
A guerra só nos causa dor<br>
Porém, se a Pátria amada<br>
For um dia ultrajada<br>
Lutaremos sem temor</p>
</div>`
    },
    { innerHTML: `<div style="display: flex; justify-content: space-evenly; gap: 1.5rem; text-align: left;">
  <p>
    Se a Pátria querida<br>
    For envolvida pelo inimigo<br>
    Na paz ou na guerra<br>
    Defende a terra contra o perigo<br><br>

    Com ânimo forte, se for preciso<br>
    Enfrenta a morte<br>
    Afronta se lava com fibra de herói<br>
    De gente brava<br><br>

    Bandeira do Brasil<br>
    Ninguém te manchará<br>
    Teu povo varonil<br>
    Isso não consentirá<br><br>

    Bandeira idolatrada<br>
    Altiva a tremular<br>
    Onde a liberdade é mais uma estrela a brilhar<br>
  </p>
  <p>
    Bandeira do Brasil<br>
    Ninguém te manchará<br>
    Teu povo varonil<br>
    Isso não consentirá<br><br>

    Bandeira idolatrada<br>
    Altiva a tremular<br>
    Onde a liberdade é mais uma estrela a brilhar<br><br>

    Se a Pátria querida<br>
    For envolvida pelo inimigo<br>
    Na paz ou na guerra<br>
    Defende a terra contra o perigo<br><br>

    Com ânimo forte, se for preciso<br>
    Enfrenta a morte<br>
    Afronta se lava com fibra de herói<br>
    De gente brava<br>
  </p>
  <p>
    Bandeira do Brasil<br>
    Ninguém te manchará<br>
    Teu povo varonil<br>
    Isso não consentirá<br><br>

    Bandeira idolatrada<br>
    Altiva a tremular<br>
    Onde a liberdade é mais uma estrela a brilhar<br><br>

    Bandeira do Brasil<br>
    Ninguém te manchará<br>
    Teu povo varonil<br>
    Isso não consentirá<br><br>

    Bandeira idolatrada<br>
    Altiva a tremular<br>
    Onde a liberdade é mais uma estrela a brilhar
  </p>
</div>`
    },
    { innerHTML: `<div style="display: flex; justify-content: space-evenly; gap: 1.5rem; text-align: left;">
  <p>
    <strong>Parte I</strong><br><br>

    Ouviram do Ipiranga as margens plácidas<br>
    De um povo heróico o brado retumbante,<br>
    E o sol da liberdade, em raios fúlgidos,<br>
    Brilhou no céu da pátria nesse instante.<br><br>

    Se o penhor dessa igualdade<br>
    Conseguimos conquistar com braço forte,<br>
    Em teu seio, ó liberdade,<br>
    Desafia o nosso peito a própria morte!<br><br>

    Ó Pátria amada,<br>
    Idolatrada,<br>
    Salve! Salve!<br><br>

    Brasil, um sonho intenso, um raio vívido<br>
    De amor e de esperança à terra desce,<br>
    Se em teu formoso céu, risonho e límpido,<br>
    A imagem do Cruzeiro resplandece.<br><br>

    Gigante pela própria natureza,<br>
    És belo, és forte, impávido colosso,<br>
    E o teu futuro espelha essa grandeza.<br><br>

    Terra adorada,<br>
    Entre outras mil,<br>
    És tu, Brasil,<br>
    Ó Pátria amada!<br><br>

    Dos filhos deste solo és mãe gentil,<br>
    Pátria amada,<br>
    Brasil!
  </p>
  <p>
    <strong>Parte II</strong><br><br>

    Deitado eternamente em berço esplêndido,<br>
    Ao som do mar e à luz do céu profundo,<br>
    Fulguras, ó Brasil, florão da América,<br>
    Iluminado ao sol do Novo Mundo!<br><br>

    Do que a terra, mais garrida,<br>
    Teus risonhos, lindos campos têm mais flores;<br>
    "Nossos bosques têm mais vida",<br>
    "Nossa vida" no teu seio "mais amores."<br><br>

    Ó Pátria amada,<br>
    Idolatrada,<br>
    Salve! Salve!<br><br>

    Brasil, de amor eterno seja símbolo<br>
    O lábaro que ostentas estrelado,<br>
    E diga o verde-louro dessa flâmula<br>
    – "Paz no futuro e glória no passado."<br><br>

    Mas, se ergues da justiça a clava forte,<br>
    Verás que um filho teu não foge à luta,<br>
    Nem teme, quem te adora, a própria morte.<br><br>

    Terra adorada,<br>
    Entre outras mil,<br>
    És tu, Brasil,<br>
    Ó Pátria amada!<br><br>

    Dos filhos deste solo és mãe gentil,<br>
    Pátria amada,<br>
    Brasil!
  </p>
</div>
        `
    }
,
]

const tabs = [
    { id: 0, htmlGridId: 'tracksGrid', name: "Toques de Corneta", audiosLength: militaryTracks.length, isActive: true},
    { id: 1, htmlGridId: 'musicsGrid', name: "Musicas Militares", audiosLength: militaryMusics.length, isActive: false},
]
// Elementos DOM
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const volumeDisplay = document.getElementById('volumeDisplay');
const currentTrackName = document.getElementById('currentTrackName');
const loading = document.getElementById('loading');

// Adicionar botões ao tab selector referente ao Toques Militares (tracksGrid) e Musicas Militares (musicsGrid)
const tabSelector = document.getElementById('tabSelector');
const tracksGrid = document.getElementById('tracksGrid');
const musicsGrid = document.getElementById('musicsGrid');

// Adicionais
const lyricsCard = document.getElementById('lyricsCard');

// Estado do player
const noTrackSelectedId = -1;
let currentTrackMatrix = new Array(tabs.length).fill(noTrackSelectedId);

let currentTabId = 0;
let isPlaying = false;

// Inicializa a aplicação
function init() {
    createTabs();
    generateTrackCards();
    generateMusicCards()
    setupEventListeners();
    setupAudioEvents();
    setVolume(70);

    tracksGrid.style.display = tabs[0].isActive ? 'grid' : 'none';
    musicsGrid.style.display = tabs[1].isActive ? 'grid' : 'none';
}

// Gera botões de abas
function createTabs() {
    const container = document.createElement('div');
    container.className = 'tab-buttons';
    tabSelector.appendChild(container);

    tabs.forEach((tab, index) => {
        const btn = document.createElement('div');
        btn.className = 'tab-card' + (tab.isActive ? ' active' : '');

        btn.innerHTML = `
            <h5>${tab.name}</h5>
            <small>Aba de Sons</small>
        `;

        btn.addEventListener('click', () => selectTab(tab, tab.id));
        container.appendChild(btn);
    });
}

function selectTab(tab, index) {
    currentTabId = index;

    // toggle active
    document.querySelectorAll('.tab-card').forEach((b, index) => b.classList.toggle('active', index === currentTabId));

    // alterna grids
    tabs.forEach(t => {
        document.getElementById(t.htmlGridId).style.display = t.name === tab.name ? 'grid' : 'none';
    });
}

// Gerar cards das musicas
function generateMusicCards() {
    const container = document.createElement('div')
    container.className = 'music-cards';
    musicsGrid.appendChild(container);

    militaryMusics.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        // dps eu melhoro os icons
        card.innerHTML = `
            <h5>${track.name}</h5>
            <small>Música Militar</small>
        `;
        card.addEventListener('click', () => selectTrack(index));
        container.appendChild(card);
    });
}

// Gerar cards dos toques
function generateTrackCards() {
    tracksGrid.innerHTML = '';
    militaryTracks.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'track-card';
        // dps eu melhoro os icons
        card.innerHTML = `
            <h5>${track.name}</h5>
            <small>Toque Militar</small>
        `;
        card.addEventListener('click', () => selectTrack(index));
        tracksGrid.appendChild(card);
    });
}

// Configurar event listeners
function setupEventListeners() {
    playPauseBtn.addEventListener('click', togglePlayPause);
    stopBtn.addEventListener('click', stopAudio);
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    volumeSlider.addEventListener('input', handleVolumeChange);
    progressBar.addEventListener('click', handleProgressClick);
}

// Configurar eventos do áudio
function setupAudioEvents() {
    audioPlayer.addEventListener('loadstart', () => {
        loading.style.display = 'block';
    });

    audioPlayer.addEventListener('canplay', () => {
        loading.style.display = 'none';
    });

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    //audioPlayer.addEventListener('ended', nextTrack);
    
    audioPlayer.addEventListener('error', (e) => {
        console.error('Erro ao carregar áudio:', e);
        alert('Erro ao carregar o arquivo de áudio. Verifique se o arquivo existe.');
        loading.style.display = 'none';
    });
}

// Selecionar toque
function selectTrack(index) {
    if (currentTrackMatrix[currentTabId] === index && isPlaying) {
        togglePlayPause();
        return;
    }

    currentTrackMatrix[currentTabId] = index;
    
    let track;

    switch (currentTabId) {
        case 0:
            track = militaryTracks[index];
            // Atualizar interface
            updateCardsFromClass('.track-card');
            currentTrackName.textContent = track.name;
            break;
        case 1:
            track = militaryMusics[index];
            // Atualizar interface
            updateMusicCards(track);
            currentTrackName.textContent = track.name;
            break;
    }
    
    // Carregar áudio
    audioPlayer.src = track.file;
    audioPlayer.load();

    // Auto-play
    setTimeout(() => {
        playAudio();
    }, 100);
}

// Atualizar cards visuais de qualquer aba
function updateCardsFromClass(className){
    const cards = document.querySelectorAll(className);
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTrackMatrix[currentTabId]);
    });
}

function updateMusicCards(track) {
    updateCardsFromClass('.music-card');
    
    let selectedLyric = militaryLyrics[track.lyric_id]
    if (selectedLyric == null){
        selectedLyric = militaryLyrics[0]
    }

    lyricsCard.innerHTML = `
        <h5>${track.name}</h5>
        ${selectedLyric.innerHTML}
    `;
}

// Controles de reprodução
function togglePlayPause() {
    if (currentTrackMatrix[currentTabId] === -1) {
        selectTrack(0);
        return;
    }

    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    audioPlayer.play().then(() => {
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(e => {
        console.error('Erro ao reproduzir:', e);
    });
}

function pauseAudio() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    updateProgress();
}

function previousTrack() {
    if (currentTrackMatrix[currentTabId] > 0) {
        selectTrack(currentTrackMatrix[currentTabId] - 1);
    } else {
        selectTrack(tabs[currentTabId].audiosLength - 1);
    }
}

function nextTrack() {
    
    if (currentTrackMatrix[currentTabId] < tabs[currentTabId].audiosLength - 1) {
        selectTrack(currentTrackMatrix[currentTabId] + 1);
    } else {
        selectTrack(0);
    }
}

function restartTrack() {
    selectTrack(currentTrackMatrix[currentTabId])
}

// Controle de volume
function handleVolumeChange() {
    const volume = volumeSlider.value;
    setVolume(volume);
}

function setVolume(volume) {
    audioPlayer.volume = volume / 100;
    volumeDisplay.textContent = volume + '%';
    volumeSlider.value = volume;
}

// Controle de progresso
function updateProgress() {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = progress + '%';
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    }
}

function updateDuration() {
    if (audioPlayer.duration) {
        durationSpan.textContent = formatTime(audioPlayer.duration);
    }
}

function handleProgressClick(e) {
    if (audioPlayer.duration) {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        audioPlayer.currentTime = percentage * audioPlayer.duration;
    }
}

// Utilitários
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}


// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            const secondsPlayed = audioPlayer.currentTime;
            if (secondsPlayed >= 2){ 
                audioPlayer.currentTime = 0
            }
            else {
                previousTrack();
            }
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextTrack();
            break;
        case 'ArrowUp':
            e.preventDefault();
            setVolume(Math.min(100, parseInt(volumeSlider.value) + 10));
            break;
        case 'ArrowDown':
            e.preventDefault();
            setVolume(Math.max(0, parseInt(volumeSlider.value) - 10));
            break;
    }
});

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', init);