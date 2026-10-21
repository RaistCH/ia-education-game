// Base de données unifiée : Lexique + Architecture + Définitions longues
const unifiedDatabase = {
    lexique: [
        {
            id: "llm",
            word: "LLM (Large Language Model)",
            def: "Réseau de neurones géant entraîné sur du texte pour prédire le mot suivant et générer du texte fluide.",
            category: "Technologie de base",
            longDef: "Un grand modèle de langage (Large Language Model) est un algorithme d'apprentissage profond capable de comprendre, résumer, traduire, prédire et générer du contenu textuel. Il est basé sur l'architecture 'Transformer' inventée en 2017.",
            details: "Ces modèles contiennent des milliards de paramètres ajustés lors de leur phase de pré-entraînement sur de gigantesques volumes de serveurs internet (Wikipedia, livres, articles). Ils ne pensent pas mais effectuent des calculs probabilistes ultra-rapides pour deviner l'unité de texte suivante.",
            example: "Exemples connus : GPT-4 (OpenAI), Claude 3 (Anthropic), Llama 3 (Meta)."
        },
        {
            id: "prompt",
            word: "Prompt",
            def: "Instruction ou question formulée par l'utilisateur pour guider la génération de l'IA.",
            category: "Interaction",
            longDef: "Le prompt est la commande textuelle, l'image ou le bloc de code fourni en entrée à un système d'IA générative pour lui ordonner d'exécuter une tâche précise.",
            details: "La qualité du résultat dépend intimement de la précision du prompt (c'est l'art du 'Prompt Engineering'). Donner un contexte, assigner un rôle au modèle, et lui spécifier des contraintes de format permet d'obtenir de bien meilleures réponses.",
            example: "Prompt optimisé : 'Agis en tant que développeur expert Python. Écris une fonction optimisée pour trier une liste de dictionnaires par date. Explique brièvement ta logique.'"
        },
        {
            id: "hallucination",
            word: "Hallucination",
            def: "Génération par l'IA d'affirmations fausses présentées avec une assurance trompeuse.",
            category: "Limitation",
            longDef: "Une hallucination désigne le comportement d'un modèle d'IA qui génère une réponse factuellement incorrecte, absurde ou sans rapport avec la réalité, tout en conservant un ton extrêmement convaincant.",
            details: "Cela survient parce que les modèles de langage cherchent d'abord la cohérence linguistique et la probabilité plutôt que la vérité historique objective. Ils combinent des fragments de mémoire de manière erronée s'ils manquent de données précises sur un sujet.",
            example: "Un LLM affirmant avec assurance que le premier homme à avoir marché sur la Lune en 1969 était Jacques Chirac."
        },
        {
            id: "rlhf",
            word: "RLHF (Reinforcement Learning)",
            def: "Apprentissage par renforcement basé sur les préférences humaines pour aligner l'IA avec nos valeurs.",
            category: "Alignement",
            longDef: "Le RLHF (Reinforcement Learning from Human Feedback) est une technique de dressage qui ajuste le comportement d'une IA pour qu'elle réponde de manière utile, polie, inoffensive et alignée avec les intentions humaines.",
            details: "À la sortie de l'entraînement brut, un modèle produit du texte chaotique ou dangereux. Des humains évaluent et notent ensuite des dizaines de milliers de variantes de réponses. Un algorithme de récompense s'en sert pour corriger le modèle de langage.",
            example: "C'est grâce au RLHF que ChatGPT refuse de vous donner la recette d'un produit illégal mais accepte de vous aider à faire vos devoirs."
        },
        {
            id: "rag",
            word: "RAG (Retrieval-Augmented Generation)",
            def: "Méthode connectant un LLM à une base de connaissances externe pour répondre avec des faits à jour.",
            category: "Architecture",
            longDef: "Le RAG (Génération Augmentée par Récupération) est un pattern d'architecture logicielle permettant d'optimiser la pertinence d'un modèle en croisant sa mémoire générale avec un dictionnaire ou une base documentaire privée et dynamique.",
            details: "Au lieu d'entraîner à nouveau un modèle coûteux avec vos données d'entreprise, le RAG extrait d'abord les bons extraits de vos documents de façon autonome, les injecte en toute sécurité dans le prompt, et demande au LLM d'y rédiger sa synthèse.",
            example: "Un robot de support client connecté aux manuels techniques d'une entreprise via un RAG pour ne jamais inventer de fausses instructions."
        },
        {
            id: "finetuning",
            word: "Fine-tuning",
            def: "Entraînement secondaire d'un modèle généraliste sur un jeu de données ciblées pour le spécialiser.",
            category: "Entraînement",
            longDef: "Le Fine-Tuning (ou réglage fin) consiste à prendre un grand modèle de langage déjà entraîné, et à poursuivre l'ajustement de ses paramètres internes sur un volume plus restreint mais ultra-spécifique de documents de haute qualité.",
            details: "Le modèle adapte ainsi son style, sa terminologie technique interne et sa structure logique aux besoins précis sans perdre ses connaissances linguistiques de base.",
            example: "Prendre Llama 3 et l'entraîner sur des milliers de comptes rendus médicaux pour en faire un assistant spécialisé en oncologie."
        },
        {
            id: "tokens",
            word: "Tokens",
            def: "Fragments de mots (syllabes ou caractères) que le modèle utilise comme unités de base pour calculer.",
            category: "Technologie de base",
            longDef: "Les tokens sont les briques élémentaires de texte manipulées par les IA. Un modèle ne lit pas les lettres une à une et ne lit pas non plus les mots complets. Il découpe le langage en morceaux appelés tokens.",
            details: "En moyenne, 1 token équivaut à environ 4 caractères ou 0,75 mot en anglais. C'est l'unité de mesure utilisée pour la facturation des API d'IA et pour calculer la mémoire d'un modèle.",
            example: "Le mot 'intelligence' peut être découpé en 3 tokens par le tokenizer du modèle : ['intel', 'li', 'gence']."
        },
        {
            id: "embeddings",
            word: "Embeddings (Vecteurs)",
            def: "Traduction mathématique de mots ou concepts sous forme de coordonnées numériques pour mesurer leur proximité.",
            category: "Technologie de base",
            longDef: "Un embedding est la conversion d'un mot, d'une phrase ou d'un document complet sous la forme d'un vecteur (une suite de centaines ou de milliers de coordonnées numériques précises).",
            details: "Ces coordonnées définissent la position du concept dans un espace multidimensionnel géant. Deux concepts sémantiquement proches (ex: 'Roi' et 'Reine', ou 'Chien' et 'Chiot') se retrouveront géographiquement très proches mathématiquement.",
            example: "Code de génération d'un vecteur (conceptuel) :\nconst vector = await openai.embeddings.create({ model: 'text-embedding-3-small', input: 'IA' });"
        },
        {
            id: "agents",
            word: "Agents IA",
            def: "Systèmes autonomes capables d'utiliser des outils (calculatrice, web) pour accomplir une suite d'objectifs.",
            category: "Architecture",
            longDef: "Un Agent IA est un programme informatique doté d'une autonomie de prise de décision, qui utilise un LLM comme moteur de réflexion afin d'accomplir des workflows complexes de bout en bout.",
            details: "Contrairement à un simple chatbot passif, un agent exécute une boucle d'actions : Planifier -> Choisir un outil (lancer une recherche web, interroger une base SQL, exécuter du code Python) -> Évaluer le résultat -> Recommencer jusqu'à résolution de l'objectif.",
            example: "Un agent à qui on confie la consigne 'Trouve le meilleur vol pour Nice vendredi, réserve-le s'il est à moins de 100€ et envoie la confirmation par email à mon manager.'"
        },
        {
            id: "context",
            word: "Fenêtre de contexte",
            def: "Quantité maximale d'informations (historique + documents) qu'un modèle peut lire et garder en mémoire en une fois.",
            category: "Limitation",
            longDef: "La fenêtre de contexte correspond à la capacité de mémoire de travail à court terme d'un modèle d'IA au cours d'une seule session de chat.",
            details: "Elle englobe à la fois les documents joints, l'historique de la conversation actuelle et la réponse attendue. Si cette limite de tokens est dépassée, le modèle commence à oublier les premiers échanges de la discussion.",
            example: "Un modèle avec 128k tokens de contexte peut traiter l'équivalent d'un livre de 300 pages en une seule fois."
        }
    ],
    layers: [
        {
            id: "layer1",
            word: "Couche 1 : Le Prompt (Interface)",
            def: "L'utilisateur interagit avec l'application et formule sa requête.",
            category: "Architecture (Niveau 1)",
            longDef: "La porte d'entrée de toute application d'IA. C'est l'interface web, le plugin de chat ou l'application mobile sur laquelle l'utilisateur va entrer son texte ou soumettre ses documents.",
            details: "À cette étape, l'application peut nettoyer le texte, faire de la détection de mots inappropriés (modération) et mettre en forme la requête graphique de l'utilisateur.",
            example: "Un champ de recherche intelligent pour un collaborateur d'une entreprise : 'Quelles sont nos règles de télétravail ?'"
        },
        {
            id: "layer2",
            word: "Couche 2 : L'Orchestrateur (Agent)",
            def: "La logique applicative (ex: LangChain) qui reçoit le prompt et décide de la stratégie à adopter.",
            category: "Architecture (Niveau 2)",
            longDef: "L'orchestrateur est le chef d'orchestre de l'application (écrit en Python ou en JavaScript/Node). Il reçoit la question de l'utilisateur et gère la logique de traitement.",
            details: "Il va décider de faire appel à un service de RAG si la réponse nécessite des données à jour, puis assembler le tout pour le passer au LLM, tout en sauvegardant l'historique dans la mémoire de discussion.",
            example: "L'utilisation de frameworks célèbres comme LangChain ou LlamaIndex pour coordonner les appels API."
        },
        {
            id: "layer3",
            word: "Couche 3 : Le Système RAG",
            def: "Le mécanisme qui va chercher les documents pertinents liés au prompt dans la base de connaissances.",
            category: "Architecture (Niveau 3)",
            longDef: "C'est l'algorithme intermédiaire chargé de chercher des réponses concrètes. Le système RAG prend la question de l'utilisateur, l'envoie vers la base vectorielle pour retrouver les textes clés, et enrichit le prompt initial.",
            details: "Le RAG évite que le LLM n'invente des informations en lui soumettant des sources réelles. Il transforme une question ouverte en exercice de synthèse de texte pour l'IA.",
            example: "Requête enrichie envoyée au cerveau de l'IA :\n'Voici les documents officiels : [Extrait RH 1 : Le télétravail est limité à 2 jours par semaine]. En te basant sur ces documents uniquement, réponds à la question : Combien de jours puis-je télétravailler ?'"
        },
        {
            id: "layer4",
            word: "Couche 4 : Le LLM (Le Cerveau)",
            def: "Le modèle de langage qui reçoit le prompt enrichi par le RAG et rédige la réponse finale.",
            category: "Architecture (Niveau 4)",
            longDef: "Le modèle d'IA lui-même (comme GPT-4 ou un modèle local). Il reçoit la requête hautement qualifiée et enrichie par l'orchestrateur et le RAG.",
            details: "Son rôle est purement cognitif : lire les documents fournis, comprendre la consigne, structurer la pensée et rédiger de manière claire et impeccable la réponse finale pour l'utilisateur.",
            example: "Appel API classique au modèle pour finaliser le texte :\nopenai.chat.completions.create({ model: 'gpt-4o', messages: [...] })"
        },
        {
            id: "layer5",
            word: "Couche 5 : La Base de Données Vectorielle",
            def: "L'index ultra-rapide qui stocke et recherche les informations sous forme mathématique (vecteurs).",
            category: "Architecture (Niveau 5)",
            longDef: "Une base de données optimisée pour stocker les documents de l'entreprise qui ont été traduits en coordonnées numériques (vecteurs).",
            details: "Contrairement à une base SQL classique qui cherche des correspondances de mots exacts, la base vectorielle cherche par ressemblance de sens sémantique. Elle est capable de comprendre que 'vélo' et 'bicyclette' désignent le concept.",
            example: "Exemples de bases vectorielles populaires : Pinecone, Milvus, Chroma, pgvector."
        },
        {
            id: "layer6",
            word: "Couche 6 : La Source de Données",
            def: "L'origine brute de l'information (fichiers PDF de l'entreprise, base SQL, sites web).",
            category: "Architecture (Niveau 6)",
            longDef: "Le socle d'origine de tout le savoir de l'application. Ce sont les fichiers réels, les bases de données SQL ou les répertoires cloud partagés par l'entreprise.",
            details: "Ces documents sont découpés en petits morceaux de texte (chunks), puis passés dans un convertisseur vectoriel (embeddings) pour alimenter périodiquement la base de données vectorielle afin d'être tenus à jour.",
            example: "Vos répertoires SharePoint, des fichiers PDF internes, vos e-mails de support client ou vos wikis Notion."
        }
    ]
};

// État de l'application
let currentMode = "lexique"; // "lexique", "layers" ou "knowledge"
let selectedLeft = null;
let selectedRight = null;
let score = 0;
let currentDataset = [];

// Éléments du DOM (Menus et Conteneurs)
const leftListEl = document.getElementById("left-list");
const rightListEl = document.getElementById("right-list");
const scoreEl = document.getElementById("score");
const totalPairsEl = document.getElementById("total-pairs");
const victoryMessage = document.getElementById("victory-message");
const resetBtn = document.getElementById("reset-btn");
const instructionsEl = document.getElementById("game-instructions");
const scoreBoardEl = document.getElementById("score-board");

const btnModeLexique = document.getElementById("btn-mode-lexique");
const btnModeLayers = document.getElementById("btn-mode-layers");
const btnModeKnowledge = document.getElementById("btn-mode-knowledge");

const mainBoard = document.getElementById("main-board");
const knowledgeBoard = document.getElementById("knowledge-board");

const leftTitle = document.getElementById("left-title");
const rightTitle = document.getElementById("right-title");
const knowledgeListEl = document.getElementById("knowledge-list");
const knowledgeDetailEl = document.getElementById("knowledge-detail");

// Outil de mélange (Fisher-Yates)
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

// Initialisation générale / Jeux
function initGame() {
    selectedLeft = null;
    selectedRight = null;
    score = 0;
    scoreEl.textContent = score;
    victoryMessage.classList.add("hidden");
    leftListEl.innerHTML = "";
    rightListEl.innerHTML = "";
    
    mainBoard.classList.remove("hidden");
    knowledgeBoard.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    scoreBoardEl.classList.remove("hidden");

    if (currentMode === "lexique") {
        currentDataset = unifiedDatabase.lexique;
        instructionsEl.textContent = "Reliez chaque concept d'intelligence artificielle à sa définition correcte !";
        leftTitle.textContent = "Concepts";
        rightTitle.textContent = "Définitions";
    } else if (currentMode === "layers") {
        currentDataset = unifiedDatabase.layers;
        instructionsEl.textContent = "Reconstituez la pile technique en liant chaque niveau à sa description !";
        leftTitle.textContent = "Étapes de l'Architecture (Mélangées)";
        rightTitle.textContent = "Rôles techniques (Mélangés)";
    }

    totalPairsEl.textContent = currentDataset.length;

    const shuffledLeft = shuffle(currentDataset);
    const shuffledRight = shuffle(currentDataset);

    shuffledLeft.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        if (currentMode === "layers") div.classList.add("layer-style");
        div.dataset.id = item.id;
        div.textContent = item.word;
        div.addEventListener("click", () => handleSelectLeft(div));
        leftListEl.appendChild(div);
    });

    shuffledRight.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.dataset.id = item.id;
        div.textContent = item.def;
        div.addEventListener("click", () => handleSelectRight(div));
        rightListEl.appendChild(div);
    });
}

// Gestionnaires de clic (Jeux)
function handleSelectLeft(element) {
    if (element.classList.contains("matched")) return;
    document.querySelectorAll("#left-list .item").forEach(el => el.classList.remove("selected"));
    selectedLeft = element;
    element.classList.add("selected");
    checkMatch();
}

function handleSelectRight(element) {
    if (element.classList.contains("matched")) return;
    document.querySelectorAll("#right-list .item").forEach(el => el.classList.remove("selected"));
    selectedRight = element;
    element.classList.add("selected");
    checkMatch();
}

function checkMatch() {
    if (selectedLeft && selectedRight) {
        const leftId = selectedLeft.dataset.id;
        const rightId = selectedRight.dataset.id;

        if (leftId === rightId) {
            selectedLeft.classList.remove("selected");
            selectedRight.classList.remove("selected");
            selectedLeft.classList.add("matched");
            selectedRight.classList.add("matched");

            score++;
            scoreEl.textContent = score;

            selectedLeft = null;
            selectedRight = null;

            if (score === currentDataset.length) {
                victoryMessage.classList.remove("hidden");
            }
        } else {
            const tempLeft = selectedLeft;
            const tempRight = selectedRight;

            tempLeft.classList.add("wrong");
            tempRight.classList.add("wrong");

            selectedLeft.classList.remove("selected");
            selectedRight.classList.remove("selected");
            selectedLeft = null;
            selectedRight = null;

            setTimeout(() => {
                tempLeft.classList.remove("wrong");
                tempRight.classList.remove("wrong");
            }, 800);
        }
    }
}

// Base de Connaissances (Mode 3)
function initKnowledgeBase() {
    mainBoard.classList.add("hidden");
    knowledgeBoard.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    scoreBoardEl.classList.add("hidden");
    instructionsEl.textContent = "Explorez notre encyclopédie embarquée pour approfondir les notions clés de l'IA moderne.";

    knowledgeListEl.innerHTML = "";
    knowledgeDetailEl.innerHTML = `<div class="placeholder-text">💡 Sélectionnez un concept à gauche pour afficher sa fiche détaillée.</div>`;

    const allData = [...unifiedDatabase.lexique, ...unifiedDatabase.layers];

    allData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.dataset.id = item.id;
        div.textContent = item.word.includes(" : ") ? item.word.split(" : ")[1] : item.word;
        div.addEventListener("click", () => {
            document.querySelectorAll("#knowledge-list .item").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            showConceptDetails(item);
        });
        knowledgeListEl.appendChild(div);
    });
}

function showConceptDetails(item) {
    knowledgeDetailEl.innerHTML = `
        <h2 class="kb-title">${item.word}</h2>
        <span class="kb-badge">${item.category}</span>
        
        <h3 class="kb-section-title">🔍 Définition globale</h3>
        <p>${item.longDef}</p>
        
        <h3 class="kb-section-title">⚙️ Comment ça marche ?</h3>
        <p>${item.details}</p>
        
        <h3 class="kb-section-title">💡 Exemple d'utilisation / Code</h3>
        <div class="kb-code">${item.example}</div>
    `;
}

// Boutons de navigation
btnModeLexique.addEventListener("click", () => {
    if (currentMode !== "lexique") {
        currentMode = "lexique";
        setActiveMenu(btnModeLexique);
        initGame();
    }
});

btnModeLayers.addEventListener("click", () => {
    if (currentMode !== "layers") {
        currentMode = "layers";
        setActiveMenu(btnModeLayers);
        initGame();
    }
});

btnModeKnowledge.addEventListener("click", () => {
    if (currentMode !== "knowledge") {
        currentMode = "knowledge";
        setActiveMenu(btnModeKnowledge);
        initKnowledgeBase();
    }
});

function setActiveMenu(activeBtn) {
    [btnModeLexique, btnModeLayers, btnModeKnowledge].forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
}

resetBtn.addEventListener("click", initGame);


// --- LOGIQUE DE CHAT INTERACTIF SANS AUCUN BLOCAGE CORS (FORM POST TECHNIQUE) ---

const chatToggleBtn = document.getElementById("chat-toggle-btn");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send-btn");
const chatMessages = document.getElementById("chat-messages");
const chatStatus = document.getElementById("chat-status");

// Clé API Gemini
const geminiKeyInput = document.getElementById("gemini-key-input");
const saveKeyBtn = document.getElementById("save-key-btn");
const apiKeyArea = document.getElementById("api-key-area");

// Charger la clé au démarrage si sauvegardée
const savedKey = localStorage.getItem("gemini_api_key");
if (savedKey) {
    geminiKeyInput.value = savedKey;
    initializeGemini(savedKey);
}

// Enregistrer la clé
saveKeyBtn.addEventListener("click", () => {
    const key = geminiKeyInput.value.trim();
    if (key) {
        localStorage.setItem("gemini_api_key", key);
        initializeGemini(key);
    } else {
        localStorage.removeItem("gemini_api_key");
        chatStatus.textContent = "Statut : Mode hors-ligne (en attente de votre clé API)";
        appendMessage("Clé API retirée. Retour en mode hors-ligne.", "system");
    }
});

function initializeGemini(apiKey) {
    chatStatus.textContent = "Statut : Connecté à Gemini (En ligne ⚡)";
    apiKeyArea.style.display = "none";
    appendMessage("Clé API enregistrée avec succès ! Le chat utilise désormais les requêtes natives du navigateur sans aucun terminal requis.", "system");
}

chatToggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden");
    chatInput.focus();
});

chatCloseBtn.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
});

chatSendBtn.addEventListener("click", handleUserMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserMessage();
});

async function handleUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    chatInput.value = "";
    chatStatus.textContent = "Gemini réfléchit...";

    try {
        // Appel transparent vers notre fonction cloud Vercel
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Erreur de communication avec le serveur.");
        }

        appendMessage(data.reply, "bot");

    } catch (error) {
        console.error("Erreur chat:", error);
        appendMessage(`Erreur : ${error.message}`, "bot");
    } finally {
        chatStatus.textContent = "Statut : Connecté à Gemini (En ligne ⚡)";
    }
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerHTML = text.replace(/\n/g, "<br>");
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mode dictionnaire hors-ligne de secours
function generateSmartResponse(question) {
    const q = question.toLowerCase();
    const allItems = [...unifiedDatabase.lexique, ...unifiedDatabase.layers];
    
    let bestMatch = null;
    let maxKeywords = 0;

    allItems.forEach(item => {
        const keywords = item.word.toLowerCase().split(/[\s(),:]+/);
        let matchCount = 0;
        
        keywords.forEach(kw => {
            if (kw.length > 2 && q.includes(kw)) {
                matchCount++;
            }
        });

        if (matchCount > maxKeywords) {
            maxKeywords = matchCount;
            bestMatch = item;
        }
    });

    if (bestMatch && maxKeywords > 0) {
        return `Excellente question ! Concernant le concept "${bestMatch.word.includes(" : ") ? bestMatch.word.split(" : ")[1] : bestMatch.word}" (${bestMatch.category}) : 

${bestMatch.longDef}

Pour aller plus loin, retenez que : ${bestMatch.details}

Par exemple : ${bestMatch.example.replace('Exemples connus :', '')}`;
    }

    if (q.includes("bonjour") || q.includes("salut") || q.includes("hello")) {
        return "Bonjour ! Je suis ravi de discuter avec vous. Posez-moi vos questions sur n'importe quel terme ou concept de l'IA présent dans le jeu (comme le RAG, les LLM, le Fine-tuning, etc.) !";
    }

    if (q.includes("aide") || q.includes("comment jouer") || q.includes("regle")) {
        return "C'est simple ! Dans les deux premiers onglets, cliquez sur un mot de gauche puis sur sa correspondance à droite. Dans le troisième onglet, lisez les fiches détaillées. Et ici, vous pouvez me poser n'importe quelle question théorique !";
    }

    return "Je comprends votre curiosité, mais je suis en mode hors-ligne. Pour me libérer l'esprit et me permettre de répondre à absolument tout, entrez votre clé API Gemini gratuite en haut de la fenêtre !";
}

// Lancement au chargement
window.onload = initGame;
