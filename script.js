// Lista de toques militares - FÁCIL DE ADICIONAR NOVOS TOQUES
const militaryTracks = [
    { name: "Sentido", file: "audio/sentido.mp3", icon: "fas fa-user-tie" },
    { name: "Descansar", file: "audio/descansar.mp3", icon: "fas fa-pause" },
    { name: "Cobrir", file: "audio/cobrir.mp3", icon: "fas fa-shield-alt" },
    { name: "Firme", file: "audio/firme.mp3", icon: "fas fa-exclamation" },
    { name: "Direita Volver", file: "audio/direita-volver.mp3", icon: "fas fa-arrow-right" },
    { name: "Esquerda Volver", file: "audio/esquerda-volver.mp3", icon: "fas fa-arrow-left" },
    { name: "Meia Volta Volver", file: "audio/meia-volta-volver.mp3", icon: "fas fa-undo" },
    //{ name: "Voltas Volver", file: "audio/voltas-volver.mp3", icon: "fas fa-sync" },
    { name: "Cruzar Arma", file: "audio/cruzar-arma.mp3", icon: "fas fa-times" },
    { name: "Ombro Arma", file: "audio/ombro-arma.mp3", icon: "fas fa-hand-paper" },
    { name: "Apresentar Arma", file: "audio/apresentar-arma.mp3", icon: "fas fa-hand-point-up" },
    { name: "Descansar Arma", file: "audio/descansar-arma.mp3", icon: "fas fa-hand-point-down" },
    { name: "Ordinário Marche", file: "audio/ordinario-marche.mp3", icon: "fas fa-walking" },
    // falta { name: "Olhar à Direita", file: "audio/olhar-direita.mp3", icon: "fas fa-eye" },
    // falta { name: "Olhar Frente", file: "audio/olhar-frente.mp3", icon: "fas fa-eye" },
    { name: "Alto", file: "audio/alto.mp3", icon: "fas fa-stop-circle" },
    { name: "Armar Baioneta", file: "audio/armar-baioneta.mp3", icon: "fas fa-sword" },
    { name: "Desarmar Baioneta", file: "audio/desarmar-baioneta.mp3", icon: "fas fa-shield" }
];

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
const tracksGrid = document.getElementById('tracksGrid');
const loading = document.getElementById('loading');

// Estado do player
let currentTrackIndex = -1;
let isPlaying = false;

// Inicializar a aplicação
function init() {
    generateTrackCards();
    setupEventListeners();
    setupAudioEvents();
    setVolume(70);
}

// Gerar cards dos toques
function generateTrackCards() {
    tracksGrid.innerHTML = '';
    militaryTracks.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'track-card';
        // dps eu melhoro os icons
        card.innerHTML = `
            <div class="track-icon">
                <!--
                <i class="${track.icon}"></i>
                -->
            </div>
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
    audioPlayer.addEventListener('ended', nextTrack);
    
    audioPlayer.addEventListener('error', (e) => {
        console.error('Erro ao carregar áudio:', e);
        alert('Erro ao carregar o arquivo de áudio. Verifique se o arquivo existe.');
        loading.style.display = 'none';
    });
}

// Selecionar toque
function selectTrack(index) {
    if (currentTrackIndex === index && isPlaying) {
        togglePlayPause();
        return;
    }

    currentTrackIndex = index;
    const track = militaryTracks[index];
    
    // Atualizar interface
    updateTrackCards();
    currentTrackName.textContent = track.name;
    
    // Carregar áudio
    audioPlayer.src = track.file;
    audioPlayer.load();
    
    // Auto-play
    setTimeout(() => {
        playAudio();
    }, 100);
}

// Atualizar cards visuais
function updateTrackCards() {
    const cards = document.querySelectorAll('.track-card');
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTrackIndex);
    });
}

// Controles de reprodução
function togglePlayPause() {
    if (currentTrackIndex === -1) {
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
    if (currentTrackIndex > 0) {
        selectTrack(currentTrackIndex - 1);
    } else {
        selectTrack(militaryTracks.length - 1);
    }
}

function nextTrack() {
    if (currentTrackIndex < militaryTracks.length - 1) {
        selectTrack(currentTrackIndex + 1);
    } else {
        selectTrack(0);
    }
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
            previousTrack();
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