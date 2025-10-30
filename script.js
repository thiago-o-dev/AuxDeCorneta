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

var playlistTracks = []; // já existe (reuso)
let playlistIndex = 0;
let isPlaylistPlaying = false;
let playlistWaitTimeout = null;
let playlistWaitStart = null;
let playlistWaitRemaining = null;

const tabs = [
    { id: 0, htmlGridId: 'tracksGrid', name: "Toques de Corneta", audiosLength: militaryTracks.length, isActive: true},
    { id: 1, htmlGridId: 'musicsGrid', name: "Musicas Militares", audiosLength: militaryMusics.length, isActive: false},
    { id: 2, htmlGridId: 'playlistGrid', name: "Montar Formatura", audiosLength: playlistTracks.length, isActive: false},
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
        
        if (index == 2)
            btn.innerHTML = `
                <h5>${tab.name}</h5>
                <small>Aba de Organização</small>
            `;
        else
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

    // SE for a aba Montar Formatura, renderizar playlist
    if (tab.id === 2) {
        renderPlaylist();
    }
}

// Gerar cards das musicas
function generateMusicCards() {
    const container = document.createElement('div')
    container.className = 'music-cards';
    musicsGrid.appendChild(container);

    militaryMusics.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <button class="add-to-playlist-btn" title="Adicionar à playlist">+</button>
            <div class="music-card-main" data-index="${index}">
                <h5>${track.name}</h5>
                <small>Música Militar</small>
            </div>
        `;
        card.addEventListener('click', () => selectTrack(index));
        card.querySelector('.add-to-playlist-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            addToPlaylist({ type: 'audio', ...track });
        });
        container.appendChild(card);
    });
}


// Gerar cards dos toques
function generateTrackCards() {
    tracksGrid.innerHTML = '';
    militaryTracks.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'track-card';
        card.innerHTML = `
            <button class="add-to-playlist-btn" title="Adicionar à playlist">+</button>
            <div class="track-card-main" data-index="${index}">
                <h5>${track.name}</h5>
                <small>Toque Militar</small>
            </div>
        `;
        card.addEventListener('click', () => selectTrack(index));
        card.querySelector('.add-to-playlist-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            addToPlaylist({ type: 'audio', ...track });
        });
        tracksGrid.appendChild(card);
    });
}

// PLAYLIST
function addToPlaylist(item) {
    // item será um objeto {type:'audio', name, file, icon?, lyric_id?} ou {type:'wait', seconds}
    playlistTracks.push(item);
    renderPlaylist();
    // ao adicionar, atualiza o contador/length do tab
    tabs[2].audiosLength = playlistTracks.length;
}
function playPlaylist(startIndex = 0) {
    if (playlistTracks.length === 0) {
        alert('Playlist vazia. Adicione itens antes de reproduzir.');
        return;
    }
    playlistIndex = Math.max(0, Math.min(startIndex, playlistTracks.length - 1));
    isPlaylistPlaying = true;
    isPlaying = true; // mantém compatibilidade com UI global
    playPlaylistItem(playlistIndex);
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}
function playPlaylistItem(index) {
    if (!playlistTracks[index]) {
        stopPlaylist();
        return;
    }
    const item = playlistTracks[index];

    // destaque visual (simple)
    const blocks = document.querySelectorAll('.playlist-block');
    blocks.forEach(b => b.classList.toggle('active', parseInt(b.dataset.index) === index));

    if (item.type === 'audio') {
        // carregar no audioPlayer e tocar
        audioPlayer.src = item.file;
        audioPlayer.load();
        audioPlayer.play().then(() => {
            isPlaying = true;
            isPlaylistPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            currentTrackName.textContent = item.name;
        }).catch((e) => {
            console.error('Erro ao reproduzir item da playlist:', e);
            nextPlaylistItem();
        });
    } else if (item.type === 'wait') {
        // lógica de espera com possibilidade de pause/resume
        playlistWaitRemaining = item.seconds * 1000;
        startWaitCountdown();
    }
}

function addWaitBlock(seconds = 5) {
    playlistTracks.push({ type: 'wait', seconds: seconds });
    renderPlaylist();
    tabs[2].audiosLength = playlistTracks.length;
}
function startWaitCountdown() {
    // inicia countdown com controle de pause/resume
    playlistWaitStart = Date.now();
    playlistWaitTimeout = setTimeout(() => {
        playlistWaitTimeout = null;
        playlistWaitStart = null;
        playlistWaitRemaining = null;
        // depois da espera, avança
        nextPlaylistItem();
    }, playlistWaitRemaining);
    // mostrar timer no nome atual
    currentTrackName.textContent = `Esperando ${Math.ceil(playlistWaitRemaining/1000)}s...`;
}
function pauseWaitCountdown() {
    if (playlistWaitTimeout) {
        clearTimeout(playlistWaitTimeout);
        playlistWaitTimeout = null;
        // calcula o restante
        const elapsed = Date.now() - playlistWaitStart;
        playlistWaitRemaining = Math.max(0, playlistWaitRemaining - elapsed);
        playlistWaitStart = null;
    }
}
function resumeWaitCountdown() {
    if (playlistWaitRemaining != null && playlistWaitRemaining > 0) {
        startWaitCountdown();
    }
}
function resumeWaitCountdown() {
    if (playlistWaitRemaining != null && playlistWaitRemaining > 0) {
        startWaitCountdown();
    }
}

function nextPlaylistItem() {
    playlistIndex++;
    if (playlistIndex >= playlistTracks.length) {
        // fim da playlist — parar ou reiniciar? vamos parar por padrão
        stopPlaylist();
        return;
    }
    playPlaylistItem(playlistIndex);
}

function previousPlaylistItem() {
    if (playlistIndex > 0) {
        playlistIndex--;
        playPlaylistItem(playlistIndex);
    } else {
        // voltar ao início do primeiro item
        playPlaylistItem(0);
    }
}

function pausePlaylist() {
    // pausa audio ou timeout
    if (playlistWaitTimeout) {
        pauseWaitCountdown();
    }
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
    isPlaylistPlaying = false;
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function stopPlaylist() {
    // limpa tudo
    if (playlistWaitTimeout) {
        clearTimeout(playlistWaitTimeout);
        playlistWaitTimeout = null;
    }
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaylistPlaying = false;
    isPlaying = false;
    playlistIndex = 0;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    currentTrackName.textContent = '';
    // remove destaque
    document.querySelectorAll('.playlist-block').forEach(b => b.classList.remove('active'));
}

function renderPlaylist() {
    playlistGrid.innerHTML = ''; // limpa

    if (playlistTracks.length === 0) {
        playlistGrid.innerHTML = `<div class="empty-playlist">Playlist vazia — adicione toques, músicas ou um bloco de espera.</div>`;
        return;
    }

    const list = document.createElement('div');
    list.className = 'playlist-list';
    playlistTracks.forEach((item, idx) => {
        const block = document.createElement('div');
        block.className = 'playlist-block';
        block.draggable = true;
        block.dataset.index = idx;

        let innerHtml = '';
        if (item.type === 'audio') {
            //const iconHtml = item.icon ? `<i class="${item.icon} block-icon"></i>` : '';
            innerHtml = `
                <div class="block-left">
                    <div class="block-meta">
                        <strong>${item.name}</strong>
                        <small>${item.lyric_id ? 'Música' : 'Toque'}</small>
                    </div>
                </div>
                <div class="block-right">
                    <button class="move-up" title="Mover para cima">↑</button>
                    <button class="move-down" title="Mover para baixo">↓</button>
                    <button class="remove-block" title="Remover">✕</button>
                </div>
            `;
        } else if (item.type === 'wait') {
            innerHtml = `
                <div class="block-left">
                    <i class="fas fa-clock block-icon"></i>
                    <div class="block-meta">
                        <strong>Esperar</strong>
                        <small><input class="wait-seconds" type="number" min="0" value="${item.seconds}" style="width:60px;"> segundos</small>
                    </div>
                </div>
                <div class="block-right">
                    <button class="move-up" title="Mover para cima">↑</button>
                    <button class="move-down" title="Mover para baixo">↓</button>
                    <button class="remove-block" title="Remover">✕</button>
                </div>
            `;
        }

        block.innerHTML = innerHtml;
        list.appendChild(block);

        // eventos dos botões internos
        block.querySelectorAll('.move-up')[0].addEventListener('click', () => reorderPlaylist(idx, idx - 1));
        block.querySelectorAll('.move-down')[0].addEventListener('click', () => reorderPlaylist(idx, idx + 1));
        block.querySelectorAll('.remove-block')[0].addEventListener('click', () => {
            playlistTracks.splice(idx, 1);
            renderPlaylist();
            tabs[2].audiosLength = playlistTracks.length;
        });

        if (item.type === 'wait') {
            const input = block.querySelector('.wait-seconds');
            input.addEventListener('change', (e) => {
                const v = parseFloat(e.target.value) || 0;
                playlistTracks[idx].seconds = v;
            });
        }

        // Drag events
        block.addEventListener('dragstart', (ev) => {
            ev.dataTransfer.setData('text/plain', idx);
            block.classList.add('dragging');
        });
        block.addEventListener('dragend', (ev) => {
            block.classList.remove('dragging');
        });
    });

    // container drop events
    list.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        const afterElem = getDragAfterElement(list, ev.clientY);
        const dragging = document.querySelector('.dragging');
        if (!dragging) return;
        if (afterElem == null) {
            list.appendChild(dragging);
        } else {
            list.insertBefore(dragging, afterElem);
        }
    });

    list.addEventListener('drop', (ev) => {
        ev.preventDefault();
        // recompute playlistTracks order a partir do DOM
        const nodes = Array.from(list.children);
        const newOrder = nodes.map(node => parseInt(node.dataset.index));
        // newOrder é a ordem antiga dos índices; basta construir nova lista:
        const newList = newOrder.map(oldIdx => playlistTracks[oldIdx]);
        playlistTracks = newList;
        renderPlaylist(); // re-render com índices corretos
    });

    playlistGrid.appendChild(list);
}
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.playlist-block:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
function reorderPlaylist(fromIndex, toIndex) {
    if (toIndex < 0 || toIndex >= playlistTracks.length) return;
    const item = playlistTracks.splice(fromIndex, 1)[0];
    playlistTracks.splice(toIndex, 0, item);
    renderPlaylist();
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
    audioPlayer.addEventListener('loadstart', () => { loading.style.display = 'block'; });
    audioPlayer.addEventListener('canplay', () => { loading.style.display = 'none'; });
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);

    audioPlayer.addEventListener('ended', () => {
        // se estivermos na aba playlist E tocando playlist -> ir para próximo item
        if (currentTabId === 2 && isPlaylistPlaying) {
            nextPlaylistItem();
        } else {
            togglePlayPause();
        }
    });

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
    // se estamos na aba playlist, controlar modo playlist
    if (currentTabId === 2) {
        if (!isPlaylistPlaying) {
            // começar do playlistIndex atual (se a playlist estiver vazia, avisar)
            playPlaylist(playlistIndex);
        } else {
            pausePlaylist();
        }
        return;
    }

    // comportamento normal (fora da aba playlist)
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
    // se estiver na aba playlist, para playlist
    if (currentTabId === 2 && (isPlaylistPlaying || playlistWaitTimeout)) {
        stopPlaylist();
        return;
    }

    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    updateProgress();
}

function previousTrack() {
    if (currentTabId === 2) {
        if (isPlaylistPlaying) {
            previousPlaylistItem();
        } else {
            playlistIndex = Math.max(0, playlistIndex - 1);
            renderPlaylist();
        }
        return;
    }

    // comportamento original do player
    if (currentTrackMatrix[currentTabId] > 0) {
        selectTrack(currentTrackMatrix[currentTabId] - 1);
    } else {
        selectTrack(tabs[currentTabId].audiosLength - 1);
    }
}


function nextTrack() {
    if (currentTabId === 2) {
        // controla a playlist
        if (isPlaylistPlaying) {
            nextPlaylistItem();
        } else {
            // se não tocando, avança índice para quando iniciar
            playlistIndex = Math.min(playlistIndex + 1, playlistTracks.length - 1);
            // destacar visual
            renderPlaylist();
        }
        return;
    }

    // Comportamento original
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