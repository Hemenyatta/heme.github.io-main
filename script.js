const talentTrees = {
    class1: {
        name: "Cristalomancien",
        // Liste des talents pour la classe 1
        talents: [
          { id: 1, name: "Sommet du Cristal", description: "Bonus de concentration +15%", image: "images/talents/fire.png", x: 417, y: 1282, prerequisites: [] },
          { id: 2, name: "Arête Gauche Supérieure", description: "Résistance aux sorts +10%", image: "images/talents/fire.png", x: 112, y: 974, prerequisites: [] },
          { id: 3, name: "Arête Droite Supérieure", description: "Dégâts magiques +10%", image: "images/talents/fire.png", x: 355, y: 1060, prerequisites: [] },
          { id: 4, name: "Arête Gauche Moyenne", description: "Vitesse d’attaque +5%", image: "images/talents/fire.png", x: 456, y: 1156, prerequisites: [] },
          { id: 5, name: "Cœur Gauche", description: "Soins +5%", image: "images/talents/fire.png", x: 692, y: 1041, prerequisites: [] },
          { id: 6, name: "Extrémité Gauche", description: "Résistance physique +10%", image: "images/talents/fire.png", x: 21, y: 744, prerequisites: [] },
          { id: 7, name: "Base Gauche", description: "Défense +15%", image: "images/talents/fire.png", x: 115, y: 791, prerequisites: [] },
          { id: 8, name: "Cœur Central", description: "Bonus de régénération +10%", image: "images/talents/fire.png", x: 410, y: 944, prerequisites: [] },
          { id: 9, name: "Arête Droite Moyenne", description: "Dégâts de feu +10%", image: "images/talents/fire.png", x: 772, y: 862, prerequisites: [] },
          { id: 10, name: "Fracture Gauche", description: "Critique +5%", image: "images/talents/fire.png", x: 58, y: 574, prerequisites: [] },
          { id: 11, name: "Éclat de Givre", description: "Résistance au froid +15%", image: "images/talents/fire.png", x: 119, y: 670, prerequisites: [] },
          { id: 12, name: "Lumière Gauche", description: "Dégâts de lumière +10%", image: "images/talents/fire.png", x: 211, y: 642, prerequisites: [] },
          { id: 13, name: "Lumière Droite", description: "Dégâts sacrés +10%", image: "images/talents/fire.png", x: 557, y: 645, prerequisites: [] },
          { id: 14, name: "Fracture Droite", description: "Pénétration magique +10%", image: "images/talents/fire.png", x: 779, y: 648, prerequisites: [] },
          { id: 15, name: "Pic Central", description: "Mana +20%", image: "images/talents/fire.png", x: 300, y: 191, prerequisites: [] },
          { id: 16, name: "Équilibre", description: "Stabilité +15%", image: "images/talents/fire.png", x: 483, y: 275, prerequisites: [] },
          { id: 17, name: "Sommet Inférieur", description: "Bonus d’expérience +10%", image: "images/talents/fire.png", x: 593, y: 427, prerequisites: [] },
          { id: 18, name: "Ancrage Magique", description: "Coût en mana -10%", image: "images/talents/fire.png", x: 688, y: 378, prerequisites: [] },
          { id: 19, name: "Harmonie", description: "Bonus de groupe +10%", image: "images/talents/fire.png", x: 348, y: 121, prerequisites: [] },
          { id: 20, name: "Écho Magique", description: "Dégâts de zone +15%", image: "images/talents/fire.png", x: 506, y: 166, prerequisites: [] },
          { id: 21, name: "Noyau", description: "Tous les attributs +5%", image: "images/talents/fire.png", x: 647, y: 234, prerequisites: [] },
          { id: 22, name: "Apogée", description: "Bonus ultime +25%", image: "images/talents/fire.png", x: 461, y: 44, prerequisites: [] }
          ],
        // Liste des liens pour la classe 1
        links: [
          // Liens depuis le nœud 1
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 1, to: 4 },
          { from: 1, to: 5 },

          // Liens vers le nœud 2
          { from: 1, to: 2 },
          { from: 3, to: 2 },
          { from: 6, to: 2 },
          { from: 7, to: 2 },

          // Liens vers le nœud 3
          { from: 1, to: 3 },
          { from: 2, to: 3 },
          { from: 7, to: 3 },
          { from: 8, to: 3 },

          // Liens depuis le nœud 2
          { from: 2, to: 6 },
          { from: 2, to: 7 },
          { from: 2, to: 1 },

          // Liens depuis le nœud 3
          { from: 3, to: 7 },
          { from: 3, to: 8 },
          { from: 3, to: 1 },

          // Liens depuis le nœud 4
          { from: 4, to: 8 },
          { from: 4, to: 9 },
          { from: 4, to: 1 },

          // Liens depuis le nœud 5
          { from: 5, to: 9 },
          { from: 5, to: 1 },

          // Liens vers le nœud 6
          { from: 2, to: 6 },
          { from: 10, to: 6 },

          // Liens depuis le nœud 6
          { from: 6, to: 10 },

          // Liens vers le nœud 7
          { from: 2, to: 7 },
          { from: 3, to: 7 },

          // Liens depuis le nœud 7
          { from: 7, to: 11 },
          { from: 7, to: 12 },

          // Liens vers le nœud 8
          { from: 3, to: 8 },
          { from: 4, to: 8 },

          // Liens depuis le nœud 8
          { from: 8, to: 12 },
          { from: 8, to: 13 },
          { from: 8, to: 4 },

          // Liens vers le nœud 9
          { from: 4, to: 9 },
          { from: 5, to: 9 },

          // Liens depuis le nœud 9
          { from: 9, to: 13 },
          { from: 9, to: 14 },
          { from: 9, to: 4 },
          { from: 9, to: 5 },

          // Liens vers le nœud 10
          { from: 6, to: 10 },
          { from: 11, to: 10 },
          { from: 15, to: 10 },

          // Liens depuis le nœud 10
          { from: 10, to: 15 },

          // Liens vers le nœud 11
          { from: 11, to: 7 },
          { from: 10, to: 11 },
          { from: 12, to: 11 },
          { from: 15, to: 11 },

          // Liens depuis le nœud 11
          { from: 11, to: 12 },
          { from: 11, to: 15 },

          // Liens vers le nœud 12
          { from: 7, to: 12 },
          { from: 8, to: 12 },
          { from: 11, to: 12 },

          // Liens depuis le nœud 12
          { from: 12, to: 15 },
          { from: 12, to: 16 },
          { from: 12, to: 7 },
          { from: 12, to: 8 },

          // Liens vers le nœud 13
          { from: 8, to: 13 },
          { from: 9, to: 13 },

          // Liens depuis le nœud 13
          { from: 13, to: 16 },
          { from: 13, to: 17 },
          { from: 13, to: 9 },
          { from: 13, to: 8 },

          // Liens vers le nœud 14
          { from: 9, to: 14 },
          { from: 17, to: 14 },
          { from: 18, to: 14 },

          // Liens depuis le nœud 14
          { from: 14, to: 17 },
          { from: 14, to: 18 },
          { from: 14, to: 9 },

          // Liens vers le nœud 15
          { from: 10, to: 15 },
          { from: 11, to: 15 },
          { from: 12, to: 15 },

          // Liens depuis le nœud 15
          { from: 15, to: 19 },
          { from: 15, to: 12 },

          // Liens vers le nœud 16
          { from: 12, to: 16 },
          { from: 13, to: 16 },

          // Liens depuis le nœud 16
          { from: 16, to: 20 },
          { from: 16, to: 13 },
          { from: 16, to: 12 },

          // Liens vers le nœud 17
          { from: 13, to: 17 },
          { from: 14, to: 17 },

          // Liens depuis le nœud 17
          { from: 17, to: 20 },
          { from: 17, to: 13 },

          // Liens vers le nœud 18
          { from: 14, to: 18 },

          // Liens depuis le nœud 18
          { from: 18, to: 21 },

          // Liens vers le nœud 19
          { from: 15, to: 19 },
          { from: 22, to: 19 },

          // Liens depuis le nœud 19
          { from: 19, to: 20 },
          { from: 19, to: 22 },
          { from: 19, to: 15 },

          // Liens vers le nœud 20
          { from: 16, to: 20 },
          { from: 17, to: 20 },
          { from: 19, to: 20 },

          // Liens depuis le nœud 20
          { from: 20, to: 16 },
          { from: 20, to: 17 },
          { from: 20, to: 19 },
          { from: 20, to: 21 },
          { from: 20, to: 22 },

          // Liens vers le nœud 21
          { from: 18, to: 21 },
          { from: 20, to: 21 },

          // Liens depuis le nœud 21
          { from: 21, to: 22 },
          { from: 21, to: 20 },
          { from: 21, to: 18 },

          // Liens vers le nœud 22
          { from: 19, to: 22 },
          { from: 20, to: 22 },
          { from: 21, to: 22 },

          // Liens depuis le nœud 22
          { from: 22, to: 19 },
          { from: 22, to: 20 },
          { from: 22, to: 21 }
        ]
    },
    class2: {
        name: "Mécanicien",
        // Liste des talents pour la classe 2
        talents: [
          { id: 1, name: "Cœur de l'Engrenage", description: "Bonus de précision +15%", image: "images/talents/gear.png", x: 494, y: 507, prerequisites: [] },
          { id: 2, name: "Rouage Supérieur", description: "Vitesse d'attaque +10%", image: "images/talents/gear.png", x: 491, y: 173, prerequisites: [] },
          { id: 3, name: "Engrenage de Précision", description: "Critique +10%", image: "images/talents/gear.png", x: 624, y: 50, prerequisites: [] },
          { id: 4, name: "Mécanisme Rapide", description: "Réduction du temps de recharge +5%", image: "images/talents/gear.png", x: 720, y: 93, prerequisites: [] },
          { id: 5, name: "Pignon Renforcé", description: "Résistance physique +10%", image: "images/talents/gear.png", x: 733, y: 268, prerequisites: [] },
          { id: 6, name: "Transmission Énergétique", description: "Bonus de mana +10%", image: "images/talents/gear.png", x: 911, y: 280, prerequisites: [] },
          { id: 7, name: "Rouage de Puissance", description: "Dégâts physiques +10%", image: "images/talents/gear.png", x: 951, y: 375, prerequisites: [] },
          { id: 8, name: "Mécanisme Central", description: "Bonus de régénération +10%", image: "images/talents/gear.png", x: 829, y: 507, prerequisites: [] },
          { id: 9, name: "Engrenage de Vitesse", description: "Vitesse de déplacement +10%", image: "images/talents/gear.png", x: 946, y: 642, prerequisites: [] },
          { id: 10, name: "Ressort de Saut", description: "Bonus de saut +15%", image: "images/talents/gear.png", x: 913, y: 734, prerequisites: [] },
          { id: 11, name: "Rouage de Défense", description: "Défense +15%", image: "images/talents/gear.png", x: 732, y: 747, prerequisites: [] },
          { id: 12, name: "Mécanisme de Soin", description: "Soins +10%", image: "images/talents/gear.png", x: 721, y: 927, prerequisites: [] },
          { id: 13, name: "Engrenage de Résistance", description: "Résistance magique +10%", image: "images/talents/gear.png", x: 626, y: 965, prerequisites: [] },
          { id: 14, name: "Transmission de Puissance", description: "Dégâts de zone +15%", image: "images/talents/gear.png", x: 490, y: 843, prerequisites: [] },
          { id: 15, name: "Rouage d'Équilibre", description: "Stabilité +15%", image: "images/talents/gear.png", x: 360, y: 964, prerequisites: [] },
          { id: 16, name: "Mécanisme de Protection", description: "Résistance aux sorts +10%", image: "images/talents/gear.png", x: 266, y: 929, prerequisites: [] },
          { id: 17, name: "Engrenage de Furtivité", description: "Bonus de furtivité +10%", image: "images/talents/gear.png", x: 251, y: 747, prerequisites: [] },
          { id: 18, name: "Ressort de Réflexes", description: "Bonus d'esquive +15%", image: "images/talents/gear.png", x: 73, y: 739, prerequisites: [] },
          { id: 19, name: "Rouage de Chance", description: "Bonus de chance +10%", image: "images/talents/gear.png", x: 33, y: 645, prerequisites: [] },
          { id: 20, name: "Mécanisme d'Adaptation", description: "Bonus d'adaptation +10%", image: "images/talents/gear.png", x: 155, y: 506, prerequisites: [] },
          { id: 21, name: "Engrenage d'Innovation", description: "Bonus d'expérience +10%", image: "images/talents/gear.png", x: 35, y: 374, prerequisites: [] },
          { id: 22, name: "Rouage de Maîtrise", description: "Bonus de maîtrise +15%", image: "images/talents/gear.png", x: 75, y: 283, prerequisites: [] },
          { id: 23, name: "Mécanisme d'Efficacité", description: "Bonus d'efficacité +10%", image: "images/talents/gear.png", x: 253, y: 270, prerequisites: [] },
          { id: 24, name: "Engrenage de Puissance", description: "Bonus de puissance +15%", image: "images/talents/gear.png", x: 264, y: 92, prerequisites: [] },
          { id: 25, name: "Rouage Ultime", description: "Bonus ultime +25%", image: "images/talents/gear.png", x: 356, y: 51, prerequisites: [] }
        ],
        // Liste des liens pour la classe 2
        links: [
          // Liens pour le nœud 1
          { from: 1, to: 2 },
          { from: 2, to: 1 },
          { from: 1, to: 8 },
          { from: 8, to: 1 },
          { from: 1, to: 14 },
          { from: 14, to: 1 },
          { from: 1, to: 20 },
          { from: 20, to: 1 },

          // Liens pour le nœud 2
          { from: 2, to: 23 },
          { from: 23, to: 2 },
          { from: 2, to: 25 },
          { from: 25, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 2 },
          { from: 2, to: 5 },
          { from: 5, to: 2 },

          // Liens pour le nœud 3
          { from: 3, to: 4 },
          { from: 4, to: 3 },

          // Liens pour le nœud 4
          { from: 4, to: 5 },
          { from: 5, to: 4 },

          // Liens pour le nœud 5
          { from: 5, to: 6 },
          { from: 6, to: 5 },
          { from: 5, to: 8 },
          { from: 8, to: 5 },

          // Liens pour le nœud 6
          { from: 6, to: 7 },
          { from: 7, to: 6 },

          // Liens pour le nœud 7
          { from: 7, to: 8 },
          { from: 8, to: 7 },

          // Liens pour le nœud 8
          { from: 8, to: 9 },
          { from: 9, to: 8 },
          { from: 8, to: 11 },
          { from: 11, to: 8 },

          // Liens pour le nœud 9
          { from: 9, to: 10 },
          { from: 10, to: 9 },

          // Liens pour le nœud 10
          { from: 10, to: 11 },
          { from: 11, to: 10 },

          // Liens pour le nœud 11
          { from: 11, to: 12 },
          { from: 12, to: 11 },
          { from: 11, to: 14 },
          { from: 14, to: 11 },

          // Liens pour le nœud 12
          { from: 12, to: 13 },
          { from: 13, to: 12 },

          // Liens pour le nœud 13
          { from: 13, to: 14 },
          { from: 14, to: 13 },

          // Liens pour le nœud 14
          { from: 14, to: 15 },
          { from: 15, to: 14 },
          { from: 14, to: 17 },
          { from: 17, to: 14 },

          // Liens pour le nœud 15
          { from: 15, to: 16 },
          { from: 16, to: 15 },

          // Liens pour le nœud 16
          { from: 16, to: 17 },
          { from: 17, to: 16 },

          // Liens pour le nœud 17
          { from: 17, to: 18 },
          { from: 18, to: 17 },
          { from: 17, to: 20 },
          { from: 20, to: 17 },

          // Liens pour le nœud 18
          { from: 18, to: 19 },
          { from: 19, to: 18 },

          // Liens pour le nœud 19
          { from: 19, to: 20 },
          { from: 20, to: 19 },

          // Liens pour le nœud 20
          { from: 20, to: 21 },
          { from: 21, to: 20 },
          { from: 20, to: 23 },
          { from: 23, to: 20 },

          // Liens pour le nœud 21
          { from: 21, to: 22 },
          { from: 22, to: 21 },

          // Liens pour le nœud 22
          { from: 22, to: 23 },
          { from: 23, to: 22 },

          // Liens pour le nœud 23
          { from: 23, to: 24 },
          { from: 24, to: 23 },

          // Liens pour le nœud 24
          { from: 24, to: 25 },
          { from: 25, to: 24 },

          // Liens pour le nœud 25
          { from: 25, to: 2 },
          { from: 2, to: 25 }
        ]
    },
};

function generatePrerequisites(talents, links) {
    const prerequisitesMap = {};

    talents.forEach(talent => {
        prerequisitesMap[talent.id] = [];
    });

    links.forEach(link => {
        const { from, to } = link;
        if (!prerequisitesMap[to].includes(from)) {
            prerequisitesMap[to].push(from);
        }
    });

    return talents.map(talent => ({
        ...talent,
        prerequisites: prerequisitesMap[talent.id]
    }));
}

// Mettre à jour les prérequis pour chaque classe
Object.keys(talentTrees).forEach(classKey => {
    talentTrees[classKey].talents = generatePrerequisites(
        talentTrees[classKey].talents,
        talentTrees[classKey].links
    );
});

// Fonction pour normaliser les coordonnées de tous les talents
function normalizeAllTalents() {
    // Trouver les limites globales de TOUS les talents des deux classes
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    Object.keys(talentTrees).forEach(classKey => {
        talentTrees[classKey].talents.forEach(talent => {
            if (talent.x < minX) minX = talent.x;
            if (talent.y < minY) minY = talent.y;
            if (talent.x > maxX) maxX = talent.x;
            if (talent.y > maxY) maxY = talent.y;
        });
    });

    // Calculer les dimensions totales
    const width = maxX - minX;
    const height = maxY - minY;

    // Facteur d'échelle pour adapter à 1200x1500
    const scaleX = 1200 / width;
    const scaleY = 1500 / height;
    const scale = Math.min(scaleX, scaleY) * 0.9; // 0.9 pour un peu de padding

    // Centrage
    const offsetX = (1200 - width * scale) / 2;
    const offsetY = (1500 - height * scale) / 2;

    // Appliquer à TOUS les talents des deux classes
    Object.keys(talentTrees).forEach(classKey => {
        talentTrees[classKey].talents.forEach(talent => {
            talent.x = (talent.x - minX) * scale + offsetX;
            talent.y = (talent.y - minY) * scale + offsetY;
        });
    });
}

// Appeler cette fonction AVANT d'initialiser l'arbre
normalizeAllTalents();

function findBounds(talents) {
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    talents.forEach(talent => {
        if (talent.x < minX) minX = talent.x;
        if (talent.y < minY) minY = talent.y;
        if (talent.x > maxX) maxX = talent.x;
        if (talent.y > maxY) maxY = talent.y;
    });

    return { minX, minY, maxX, maxY };
}

// Variables globales pour stocker l'arbre de talents actuel
let currentTalents = [];
let currentLinks = [];
let currentClass = 'class1';

// Variables pour le carousel
let currentIndex = 0;
const classes = Object.keys(talentTrees);

// Initialiser le carousel
function initCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    classes.forEach((classKey, index) => {
        const treeSlot = document.createElement('div');
        treeSlot.className = 'tree-slot';
        treeSlot.id = `tree-slot-${index}`;
        if (index === currentIndex) {
            treeSlot.classList.add('active');
        }

        const treeContainer = document.createElement('div');
        treeContainer.id = `tree-container-${index}`;
        treeContainer.className = 'tree-container';

        const tree = document.createElement('div');
        tree.id = `tree-${index}`;
        tree.className = 'tree';
        tree.dataset.classKey = classKey;
        tree.dataset.index = index;

        treeContainer.appendChild(tree);
        treeSlot.appendChild(treeContainer);
        carousel.appendChild(treeSlot);
    });

    updateCarouselPosition();
}

// Met à jour la position du carousel
function updateCarouselPosition() {
    const carousel = document.getElementById('carousel');
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;

    // Mettre à jour les classes active/prev/next
    document.querySelectorAll('.tree-slot').forEach((slot, index) => {
        slot.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            slot.classList.add('active');
        } else if (index < currentIndex) {
            slot.classList.add('prev');
        } else {
            slot.classList.add('next');
        }
    });

    // Mettre à jour l'arbre actif
    currentClass = classes[currentIndex];
    currentTalents = JSON.parse(JSON.stringify(talentTrees[currentClass].talents));
    currentLinks = talentTrees[currentClass].links;
    currentTalents = generatePrerequisites(currentTalents, currentLinks);

    // Rendre l'arbre actif
    const activeSlot = document.querySelector('.tree-slot.active');
    if (activeSlot) {
        const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
        if (tree) {
            tree.innerHTML = ''; // Vider complètement le tree avant de rendre
            renderTalentTree();
            renderLinks();
            setupNodeListeners();
            // Attendre que le DOM soit mis à jour avant d'ajuster les coordonnées
            requestAnimationFrame(() => {
                adjustCoordinates();
                initTooltips();
            });
        }
    }
}





// Configure les écouteurs des flèches (appelé UNE SEULE FOIS)
function setupCarouselListeners() {
    const leftArrow = document.getElementById('carousel-left');
    const rightArrow = document.getElementById('carousel-right');

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            // Boucle infinie avec modulo
            currentIndex = (currentIndex - 1 + classes.length) % classes.length;
            updateCarouselPosition();
        });

        rightArrow.addEventListener('click', () => {
            // Boucle infinie avec modulo
            currentIndex = (currentIndex + 1) % classes.length;
            updateCarouselPosition();
        });
    }

    // Navigation au clavier - boucle infinie
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + classes.length) % classes.length;
            updateCarouselPosition();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % classes.length;
            updateCarouselPosition();
        }
    });
}



// Fonction pour dessiner les nœuds de l'arbre
function renderTalentTree() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
    // Récupérer les talents actuellement actifs AVANT de modifier l'arbre
    let activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    
    // S'assurer que le nœud 1 est toujours dans activeTalents (car il est toujours actif)
    if (!activeTalents.includes(1)) {
        activeTalents.push(1);
    }

    currentTalents.forEach(talent => {
        let node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        
        // Si le nœud n'existe pas, le créer
        if (!node) {
            node = document.createElement('div');
            node.className = 'node';
            node.dataset.id = talent.id;
            node.dataset.tooltip = talent.description;
            node.style.left = `${talent.x}px`;
            node.style.top = `${talent.y}px`;
            node.innerHTML = `<img src="${talent.image}" alt="${talent.name}" class="node-img" />`;
            tree.appendChild(node);
        }
        
        // Mettre à jour les classes du nœud
        let isActive = talent.id === 1 || activeTalents.includes(talent.id);
        
        if (isActive) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }

        // Vérifie si le talent est accessible ET s'il y a un lien direct depuis un nœud actif
        const isAccessible = checkPrerequisites(talent.id, activeTalents);
        const isNotActive = !isActive;
        const hasDirectLinkFromActive = hasDirectLinkFromActiveNode(talent.id, activeTalents);
        
        if (isAccessible && isNotActive && hasDirectLinkFromActive) {
            node.classList.add('highlight');
        } else {
            node.classList.remove('highlight');
        }
    });

    renderLinks();
}

// Attacher les listeners avec event delegation pour éviter les doublons
function setupNodeListeners() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
    // Retirer l'ancien listener
    tree.removeEventListener('click', handleNodeClick);
    // Attacher le nouveau
    tree.addEventListener('click', handleNodeClick);
}

function handleNodeClick(event) {
    const node = event.target.closest('.node');
    if (node) {
        const talentId = parseInt(node.dataset.id);
        toggleTalent(talentId);
    }
}

// Vérifie s'il existe un lien DIRECT depuis/vers un nœud actif
function hasDirectLinkFromActiveNode(talentId, activeTalents) {
    // S'assurer que activeTalents contient des integers
    const activeIds = activeTalents.map(id => parseInt(id));

    // Vérifier s'il existe un lien DIRECT dans les deux sens:
    return currentLinks.some(link => 
        (link.to === talentId && activeIds.includes(link.from)) ||
        (link.from === talentId && activeIds.includes(link.to))
    );
}

// Fonction pour dessiner les liens entre les talents
function renderLinks() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
    tree.querySelectorAll('.connection').forEach(el => el.remove());

    currentLinks.forEach(link => {
        const fromNode = tree.querySelector(`.node[data-id="${link.from}"]`);
        const toNode = tree.querySelector(`.node[data-id="${link.to}"]`);
        if (!fromNode || !toNode) return;

        // Utiliser les coordonnées de style (pas getBoundingClientRect)
        const fromX = parseFloat(fromNode.style.left);
        const fromY = parseFloat(fromNode.style.top);
        const toX = parseFloat(toNode.style.left);
        const toY = parseFloat(toNode.style.top);

        // Calculer la distance et l'angle entre les deux nœuds
        const dx = toX - fromX;
        const dy = toY - fromY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        // Créer le lien
        const line = document.createElement('div');
        line.className = 'connection';

        const fromActive = fromNode.classList.contains('active');
        const toActive = toNode.classList.contains('active');
        if (fromActive && toActive) {
            line.classList.add('active');
        }

        const isToTalentAccessible = checkPrerequisites(parseInt(toNode.dataset.id));
        const isToTalentNotActive = !toNode.classList.contains('active');
        if (fromActive && isToTalentAccessible && isToTalentNotActive) {
            line.classList.add('highlight');
        }

        // Appliquer les styles au lien
        line.style.width = `${length}px`;
        line.style.height = '2px';
        line.style.transform = `rotate(${angle}rad)`;
        line.style.position = 'absolute';
        line.style.left = `${fromX}px`;
        line.style.top = `${fromY}px`;
        line.style.transformOrigin = '0 0';

        tree.appendChild(line);
    });
}

// Fonction utilitaire pour récupérer l'arbre actif
function getActiveTree() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return null;
    return activeSlot.querySelector(`#tree-${currentIndex}`);
}

function adjustCoordinates() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const container = activeSlot.querySelector(`#tree-container-${currentIndex}`);
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!container || !tree) return;
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Ajouter du padding pour que l'arbre ne soit pas collé aux bords
    const padding = 20;
    const availableWidth = containerWidth - (padding * 2);
    const availableHeight = containerHeight - (padding * 2);

    // Calculer le facteur d'échelle pour adapter l'arbre à la fenêtre
    const scaleX = availableWidth / 1200;
    const scaleY = availableHeight / 1500;
    
    // Utiliser le facteur le plus petit pour maintenir les proportions
    const scale = Math.min(scaleX, scaleY, 1); // Max 1 pour ne pas agrandir

    // Appliquer le facteur d'échelle via la variable CSS
    document.documentElement.style.setProperty('--scale-factor', scale);
}

// Fonction pour activer/désactiver un talent
function toggleTalent(id) {
    // Obtenir d'abord l'arbre actif
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    
    const talent = currentTalents.find(t => t.id == id);
    if (!talent) return;
    
    // Rechercher le nœud UNIQUEMENT dans l'arbre actif
    const node = tree.querySelector(`.node[data-id="${id}"]`);
    if (!node) return;

    // Le nœud 1 ne peut JAMAIS être désélectionné
    if (id === 1) {
        if (!node.classList.contains('active')) {
            node.classList.add('active');
        }
        // Ne rien faire si on essaie de cliquer sur le nœud 1 qui est déjà actif
        return;
    }

    // Récupérer les talents actuellement actifs UNIQUEMENT dans l'arbre actif
    let activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    
    // S'assurer que le nœud 1 est toujours inclus (car il est toujours actif)
    if (!activeTalents.includes(1)) {
        activeTalents.push(1);
    }

    const isCurrentlyActive = node.classList.contains('active');

    if (!isCurrentlyActive) {
        // On veut ACTIVER le nœud - vérifier les prérequis AVANT de faire quoi que ce soit
        if (!checkPrerequisites(id, activeTalents)) {
            // Blocage silencieux - le nœud ne peut pas être activé
            return;
        }
        // Les prérequis sont OK - activer le nœud
        node.classList.add('active');
    } else {
        // On veut DÉSACTIVER le nœud - vérifier la connexion à la racine AVANT de faire quoi que ce soit
        if (!isConnectedToRoot(id)) {
            // Blocage silencieux - le nœud ne peut pas être désactivé
            return;
        }
        // La connexion est OK - désactiver le nœud
        node.classList.remove('active');
    }

    renderTalentTree();
    renderLinks();
    setupNodeListeners();
    requestAnimationFrame(() => {
        adjustCoordinates();
        // Mettre à jour les tooltips sans les détruire (garde le tooltip ouvert)
        updateTooltips();
    });
}

// Vérifie si AU MOINS UN prérequis DIRECT est rempli
function checkPrerequisites(id, activeTalents = null) {
    const talent = currentTalents.find(t => t.id == id);
    if (!talent) return false;

    // Si activeTalents n'est pas fourni, récupérer du DOM (arbre actif uniquement)
    if (activeTalents === null) {
        const tree = getActiveTree();
        if (!tree) return false;
        activeTalents = Array.from(tree.querySelectorAll('.node.active'))
            .map(node => parseInt(node.dataset.id));
        // S'assurer que le nœud 1 est inclus
        if (!activeTalents.includes(1)) {
            activeTalents.push(1);
        }
    }

    // Le nœud 1 est toujours accessible
    if (id === 1) {
        return true;
    }

    // Si le talent n'a pas de prérequis directs, il n'est PAS accessible
    // (sauf le nœud 1, déjà géré ci-dessus)
    if (talent.prerequisites.length === 0) {
        return false;
    }

    // Convertir activeTalents en Set pour recherche O(1)
    const activeSet = new Set(activeTalents);

    // Vérifie si AU MOINS UN prérequis DIRECT est actif
    // (pas de prérequis indirects - seulement la proximité directe compte)
    return talent.prerequisites.some(prereqId => {
        return activeSet.has(prereqId);
    });
}


// Initialise les tooltips avec Tippy.js
function initTooltips() {
    // Récupérer les talents actifs UNIQUEMENT dans l'arbre actif
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    const activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    
    // Détruire les anciennes instances Tippy pour ce tree
    tree.querySelectorAll('.node').forEach(node => {
        if (node._tippy) {
            node._tippy.destroy();
        }
    });

    currentTalents.forEach(talent => {
        const node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (node) {
            // Récupérer l'état du talent depuis le DOM
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            // Créer le contenu HTML du tooltip
            const tooltipContent = document.createElement('div');
            tooltipContent.className = 'tooltip-content';

            // Titre
            const title = document.createElement('div');
            title.className = 'tooltip-title';
            title.textContent = talent.name;
            tooltipContent.appendChild(title);

            // Description
            const description = document.createElement('div');
            description.className = 'tooltip-description';
            description.textContent = talent.description;
            tooltipContent.appendChild(description);

            // Statut
            const statusDiv = document.createElement('div');
            statusDiv.className = 'tooltip-status';

            if (isActive) {
                statusDiv.classList.add('active');
                statusDiv.textContent = '✓ Activé';
            } else if (isAccessible) {
                statusDiv.classList.add('available');
                statusDiv.textContent = '◆ Disponible';
            } else {
                statusDiv.classList.add('locked');
                statusDiv.textContent = '✕ Verrouillé';
            }

            tooltipContent.appendChild(statusDiv);

            // Initialiser Tippy
            tippy(node, {
                content: tooltipContent,
                animation: 'scale',
                arrow: true,
                theme: 'talent-tooltip',
                placement: 'right',
                followCursor: false,
                interactive: true,
                allowHTML: true,
                hideOnClick: false,
            });
        }
    });
}

// Met à jour les tooltips sans détruire les instances existantes (pour garder le tooltip ouvert)
function updateTooltips() {
    // Récupérer les talents actifs UNIQUEMENT dans l'arbre actif
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    const activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));

    currentTalents.forEach(talent => {
        const node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (node && node._tippy) {
            // Le tooltip existe déjà, on met à jour juste son contenu sans recalculer la position
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            // Chercher le div de statut existant dans le contenu du tooltip
            const tippyContent = node._tippy.popper.querySelector('.tooltip-content');
            if (tippyContent) {
                // Mettre à jour le texte et les classes du statut
                const statusDiv = tippyContent.querySelector('.tooltip-status');
                if (statusDiv) {
                    statusDiv.className = 'tooltip-status';
                    if (isActive) {
                        statusDiv.classList.add('active');
                        statusDiv.textContent = '✓ Activé';
                    } else if (isAccessible) {
                        statusDiv.classList.add('available');
                        statusDiv.textContent = '◆ Disponible';
                    } else {
                        statusDiv.classList.add('locked');
                        statusDiv.textContent = '✕ Verrouillé';
                    }
                }
            }
        } else if (node) {
            // Le tooltip n'existe pas encore, le créer
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            // Créer le contenu HTML du tooltip
            const tooltipContent = document.createElement('div');
            tooltipContent.className = 'tooltip-content';

            // Titre
            const title = document.createElement('div');
            title.className = 'tooltip-title';
            title.textContent = talent.name;
            tooltipContent.appendChild(title);

            // Description
            const description = document.createElement('div');
            description.className = 'tooltip-description';
            description.textContent = talent.description;
            tooltipContent.appendChild(description);

            // Statut
            const statusDiv = document.createElement('div');
            statusDiv.className = 'tooltip-status';

            if (isActive) {
                statusDiv.classList.add('active');
                statusDiv.textContent = '✓ Activé';
            } else if (isAccessible) {
                statusDiv.classList.add('available');
                statusDiv.textContent = '◆ Disponible';
            } else {
                statusDiv.classList.add('locked');
                statusDiv.textContent = '✕ Verrouillé';
            }

            tooltipContent.appendChild(statusDiv);

            // Initialiser Tippy
            tippy(node, {
                content: tooltipContent,
                animation: 'scale',
                arrow: true,
                theme: 'talent-tooltip',
                placement: 'right',
                followCursor: false,
                interactive: true,
                allowHTML: true,
                hideOnClick: false,
            });
        }
    });
}

// Vérifie s'il existe un chemin entre un nœud et le nœud 1
function hasPathToRoot(talentId, activeTalents, visited = new Set()) {
    if (talentId === 1) return true;

    // Évite les boucles infinies en vérifiant si ce nœud a déjà été visité
    if (visited.has(talentId)) {
        return false;
    }
    visited.add(talentId);

    const talent = currentTalents.find(t => t.id === talentId);
    if (!talent) return false;

    // Vérifie chaque prérequis actif
    for (const prereqId of talent.prerequisites) {
        if (activeTalents.includes(prereqId) && hasPathToRoot(prereqId, activeTalents, visited)) {
            return true;
        }
    }

    return false;
}

function isConnectedToRoot(id) {
    const tree = getActiveTree();
    if (!tree) return false;
    
    const activeTalents = Array.from(tree.querySelectorAll('.node.active'))
        .map(node => parseInt(node.dataset.id));

    // Si on essaie de désélectionner le nœud 1, c'est interdit
    if (id === 1) {
        return false;
    }

    // Simuler la désélection du nœud
    const activeTalentsWithoutNode = activeTalents.filter(talentId => talentId !== id);

    // Vérifier chaque nœud actif restant
    for (const talentId of activeTalentsWithoutNode) {
        if (talentId === 1) continue; // Ignorer le nœud 1

        // Vérifier s'il existe un chemin entre ce nœud et le nœud 1
        if (!hasPathToRoot(talentId, activeTalentsWithoutNode, new Set())) {
            return false;
        }
    }

    return true;
}

// Appelle cette fonction au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    setupCarouselListeners();
    requestAnimationFrame(() => {
        adjustCoordinates();
        initTooltips();
    });
});

window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        adjustCoordinates();
        initTooltips();
    });
});

window.addEventListener('resize', () => {
    adjustCoordinates();
    renderTalentTree();
    renderLinks();
});
