// Données des talents (tous avec fire.png)
const talents = [
  { id: 1, name: "Sommet du Cristal", description: "Bonus de concentration +15%", image: "images/talents/fire.png", x: 417, y: 1282, prerequisites: [], selected: true },
  { id: 2, name: "Arête Gauche Supérieure", description: "Résistance aux sorts +10%", image: "images/talents/fire.png", x: 112, y: 974, prerequisites: [1, 3, 6, 7], selected: false },
  { id: 3, name: "Arête Droite Supérieure", description: "Dégâts magiques +10%", image: "images/talents/fire.png", x: 355, y: 1060, prerequisites: [1, 2, 7, 8], selected: false },
  { id: 4, name: "Arête Gauche Moyenne", description: "Vitesse d’attaque +5%", image: "images/talents/fire.png", x: 456, y: 1156, prerequisites: [1, 8, 9], selected: false },
  { id: 5, name: "Cœur Gauche", description: "Soins +5%", image: "images/talents/fire.png", x: 692, y: 1041, prerequisites: [1, 9], selected: false },
  { id: 6, name: "Extrémité Gauche", description: "Résistance physique +10%", image: "images/talents/fire.png", x: 21, y: 744, prerequisites: [2, 10], selected: false },
  { id: 7, name: "Base Gauche", description: "Défense +15%", image: "images/talents/fire.png", x: 115, y: 791, prerequisites: [2, 3, 11, 12], selected: false },
  { id: 8, name: "Cœur Central", description: "Bonus de régénération +10%", image: "images/talents/fire.png", x: 410, y: 944, prerequisites: [3, 4, 12, 13], selected: false },
  { id: 9, name: "Arête Droite Moyenne", description: "Dégâts de feu +10%", image: "images/talents/fire.png", x: 772, y: 862, prerequisites: [4, 5, 13, 14], selected: false },
  { id: 10, name: "Fracture Gauche", description: "Critique +5%", image: "images/talents/fire.png", x: 58, y: 574, prerequisites: [6, 11, 15], selected: false },
  { id: 11, name: "Éclat de Givre", description: "Résistance au froid +15%", image: "images/talents/fire.png", x: 119, y: 670, prerequisites: [7, 10, 12, 15], selected: false },
  { id: 12, name: "Lumière Gauche", description: "Dégâts de lumière +10%", image: "images/talents/fire.png", x: 211, y: 642, prerequisites: [7, 8, 11, 15, 16], selected: false },
  { id: 13, name: "Lumière Droite", description: "Dégâts sacrés +10%", image: "images/talents/fire.png", x: 557, y: 645, prerequisites: [8, 9, 16, 17], selected: false },
  { id: 14, name: "Fracture Droite", description: "Pénétration magique +10%", image: "images/talents/fire.png", x: 779, y: 648, prerequisites: [9, 17, 18], selected: false },
  { id: 15, name: "Pic Central", description: "Mana +20%", image: "images/talents/fire.png", x: 300, y: 191, prerequisites: [10, 11, 12, 19], selected: false },
  { id: 16, name: "Équilibre", description: "Stabilité +15%", image: "images/talents/fire.png", x: 483, y: 275, prerequisites: [12, 13, 20], selected: false },
  { id: 17, name: "Sommet Inférieur", description: "Bonus d’expérience +10%", image: "images/talents/fire.png", x: 593, y: 427, prerequisites: [13, 14, 20], selected: false },
  { id: 18, name: "Ancrage Magique", description: "Coût en mana -10%", image: "images/talents/fire.png", x: 688, y: 378, prerequisites: [14, 21], selected: false },
  { id: 19, name: "Harmonie", description: "Bonus de groupe +10%", image: "images/talents/fire.png", x: 348, y: 121, prerequisites: [15, 22], selected: false },
  { id: 20, name: "Écho Magique", description: "Dégâts de zone +15%", image: "images/talents/fire.png", x: 506, y: 166, prerequisites: [16, 17, 19, 21, 22], selected: false },
  { id: 21, name: "Noyau", description: "Tous les attributs +5%", image: "images/talents/fire.png", x: 647, y: 234, prerequisites: [18, 20, 22], selected: false },
  { id: 22, name: "Apogée", description: "Bonus ultime +25%", image: "images/talents/fire.png", x: 461, y: 44, prerequisites: [19, 20, 21], selected: false }
];

// Liens entre les talents
const links = [
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
];

function renderTalentTree() {
  const tree = document.getElementById('tree');
  tree.innerHTML = '';

  const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'));

  talents.forEach(talent => {
    const node = document.createElement('div');
    node.className = 'node';

    const savedState = localStorage.getItem('talentTree');
    if (savedState && JSON.parse(savedState).includes(talent.id.toString())) {
      node.classList.add('active');
    }

    const isAccessible = checkPrerequisites(talent.id);
    const isNotActive = !(savedState && JSON.parse(savedState).includes(talent.id.toString()));
    if (isAccessible && isNotActive) {
      node.classList.add('highlight');
    }

    node.dataset.id = talent.id;
    node.dataset.tooltip = talent.description;

    node.style.left = `${talent.x * scale}px`;
    node.style.top = `${talent.y * scale}px`;

    node.innerHTML = `
      <img src="${talent.image}" alt="${talent.name}" class="node-img" />
    `;

    tree.appendChild(node);
  });

  talents.forEach(talent => {
    const node = document.querySelector(`.node[data-id="${talent.id}"]`);
    if (node) {
      node.addEventListener('click', () => toggleTalent(talent.id));
    }
  });
}

function renderLinks() {
  const tree = document.getElementById('tree');
  document.querySelectorAll('.connection').forEach(el => el.remove());

  const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'));

  links.forEach(link => {
    const fromTalent = talents.find(t => t.id === link.from);
    const toTalent = talents.find(t => t.id === link.to);
    if (!fromTalent || !toTalent) return;

    const fromNode = document.querySelector(`.node[data-id="${link.from}"]`);
    const toNode = document.querySelector(`.node[data-id="${link.to}"]`);
    if (!fromNode || !toNode) return;

    const line = document.createElement('div');
    line.className = 'connection';

    const fromActive = fromNode.classList.contains('active');
    const toActive = toNode.classList.contains('active');
    if (fromActive && toActive) {
      line.classList.add('active');
    }

    const isToTalentAccessible = checkPrerequisites(toTalent.id);
    const isToTalentNotActive = !toNode.classList.contains('active');
    if (fromActive && isToTalentAccessible && isToTalentNotActive) {
      line.classList.add('highlight');
    }

    const dx = (toTalent.x - fromTalent.x) * scale;
    const dy = (toTalent.y - fromTalent.y) * scale;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);

    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}rad)`;
    line.style.left = `${fromTalent.x * scale + 20 * scale}px`;
    line.style.top = `${fromTalent.y * scale + 20 * scale}px`;

    tree.appendChild(line);
  });
}

// Active/désactive un talent
function toggleTalent(id) {
  const talent = talents.find(t => t.id == id);
  if (!talent) return;
  const node = document.querySelector(`.node[data-id="${id}"]`);
  if (!node) return;

  if (id === 1 && !node.classList.contains('active')) {
    node.classList.add('active');
    saveTreeState();
    renderTalentTree();
    renderLinks();
    initTooltips();
    return; // Le nœud racine est toujours actif
  }

  if (!node.classList.contains('active')) {
    // Vérifie si le talent peut être sélectionné
    if (!checkPrerequisites(id) && id !== 1) {
      alert("Tu dois d'abord activer les talents requis !");
      return;
    }
  } else {
    // Vérifie si le talent peut être désélectionné
    if (id !== 1 && !canDeselectNode(id)) {
      alert("Tu ne peux pas désélectionner ce talent car cela isolerait un autre talent actif du nœud principal.");
      return;
    }
  }

  node.classList.toggle('active');
  saveTreeState();

  // Réinitialise les infobulles avant de re-rendre l'arbre
  document.querySelectorAll('.tippy-box').forEach(el => el.remove());

  // Re-rend l'arbre et les liens
  renderTalentTree();
  renderLinks();

  // Réinitialise les infobulles après le re-rendu
  initTooltips();
}

// Vérifie si AU MOINS UN prérequis est rempli
function checkPrerequisites(id) {
  const talent = talents.find(t => t.id == id);
  if (!talent) return false;

  // Si le talent n'a pas de prérequis, il est accessible
  if (talent.prerequisites.length === 0) {
    return true;
  }

  // Vérifie si AU MOINS UN prérequis est actif
  return talent.prerequisites.some(prereqId => {
    const prereqNode = document.querySelector(`.node[data-id="${prereqId}"]`);
    return prereqNode && prereqNode.classList.contains('active');
  });
}

function canDeselectNode(id) {
  const activeTalents = Array.from(document.querySelectorAll('.node.active'))
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
    if (!hasPathToRoot(talentId, activeTalentsWithoutNode)) {
      return false;
    }
  }

  return true;
}

function isConnectedToRoot(id) {
  const activeTalents = Array.from(document.querySelectorAll('.node.active'))
    .map(node => parseInt(node.dataset.id));

  // Si le nœud est déjà le nœud racine, il est connecté
  if (id === 1) {
    return true;
  }

  // Vérifie s'il existe un chemin entre ce nœud et le nœud 1
  return hasPathToRoot(id, activeTalents);
}

// Fonction pour vérifier s'il existe un chemin entre un nœud et le nœud 1
function hasPathToRoot(talentId, activeTalents) {
  if (talentId === 1) return true;

  // Trouver tous les prérequis actifs du nœud
  const talent = talents.find(t => t.id === talentId);
  if (!talent) return false;

  // Vérifie chaque prérequis
  for (const prereqId of talent.prerequisites) {
    if (activeTalents.includes(prereqId) && hasPathToRoot(prereqId, activeTalents)) {
      return true;
    }
  }

  return false;
}

// Sauvegarde l'état dans localStorage
function saveTreeState() {
  const activeTalents = Array.from(document.querySelectorAll('.node.active'))
    .map(node => node.dataset.id);
  localStorage.setItem('talentTree', JSON.stringify(activeTalents));
}

// Charge l'état au démarrage
function loadTreeState() {
  const saved = localStorage.getItem('talentTree');
  if (saved) {
    JSON.parse(saved).forEach(id => {
      const node = document.querySelector(`.node[data-id="${id}"]`);
      if (node) {
        node.classList.add('active');
      }
    });
    renderLinks(); // Met à jour les connexions après chargement
  }
}

// Initialise les tooltips avec Tippy.js
function initTooltips() {
  talents.forEach(talent => {
    const node = document.querySelector(`.node[data-id="${talent.id}"]`);
    if (node) {
      tippy(node, {
        content: `<strong>${talent.name}</strong><br>${talent.description}`,
        animation: 'scale',
        arrow: true,
      });
    }
  });
}

// Fonction pour ajuster les coordonnées des nœuds en fonction de la taille du conteneur
function adjustCoordinates() {
  const container = document.getElementById('tree-container');
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Calculer le facteur d'échelle pour conserver le ratio
  const scale = Math.min(containerWidth / 1200, containerHeight / 1500);

  // Appliquer le facteur d'échelle à l'arbre
  document.documentElement.style.setProperty('--scale-factor', scale);
}

// Appeler cette fonction au chargement de la page et lors du redimensionnement de la fenêtre
window.addEventListener('load', () => {
  adjustCoordinates();
  renderTalentTree();
  renderLinks();
  initTooltips();
});

window.addEventListener('resize', () => {
  adjustCoordinates();
  renderTalentTree();
  renderLinks();
});

// Charge tout au démarrage
window.addEventListener('DOMContentLoaded', () => {
  adjustCoordinates();
  renderTalentTree();
  initTooltips();
  loadTreeState();
  renderLinks();
});
