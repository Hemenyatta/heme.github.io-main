class TalentTree {
    constructor(svgSelector, talentData) {
        this.svg = document.querySelector(svgSelector);
        this.talentData = talentData;
        this.activeTalents = new Set();
        
        // Vérifier que le SVG existe
        if (!this.svg) {
            console.error('SVG non trouvé avec le sélecteur:', svgSelector);
            return;
        }
        
        // Définir les attributs du SVG
        this.svg.setAttribute('viewBox', '0 0 1200 1200');
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.style.display = 'block';
        this.svg.style.border = 'none';
        
        console.log('TalentTree créé pour:', talentData?.name || 'Unknown');
        this.render();
    }

    render() {
        // Vider le SVG
        while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
        }

        // Vérifier que talentData existe
        if (!this.talentData || !this.talentData.talents) {
            console.error('Pas de données de talents', this.talentData);
            return;
        }
        
        console.log('Rendering talents:', this.talentData.talents.length, 'talents found');
        console.log('First talent:', this.talentData.talents[0]);

        // Créer un groupe pour les lignes
        const linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Dessiner les liens
        if (this.talentData.links && Array.isArray(this.talentData.links)) {
            this.talentData.links.forEach(link => {
                const fromTalent = this.talentData.talents.find(t => t.id === link.from);
                const toTalent = this.talentData.talents.find(t => t.id === link.to);

                if (fromTalent && toTalent) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', fromTalent.x);
                    line.setAttribute('y1', fromTalent.y);
                    line.setAttribute('x2', toTalent.x);
                    line.setAttribute('y2', toTalent.y);
                    line.setAttribute('stroke', '#e6d1b4');
                    line.setAttribute('stroke-width', '2');
                    line.setAttribute('class', 'talent-connection');
                    line.style.transition = 'all 0.3s ease';
                    line.style.opacity = '0.5';

                    if (this.activeTalents.has(link.from) && this.activeTalents.has(link.to)) {
                        line.setAttribute('stroke', '#e6d1b4');
                        line.setAttribute('stroke-width', '3');
                        line.setAttribute('filter', 'drop-shadow(0 0 8px rgba(230, 209, 180, 0.8))');
                        line.style.opacity = '1';
                    }

                    linesGroup.appendChild(line);
                }
            });
        }
        this.svg.appendChild(linesGroup);

        // Créer un groupe pour les nœuds
        const nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Dessiner les nœuds
        if (this.talentData.talents && Array.isArray(this.talentData.talents)) {
            console.log('Creating', this.talentData.talents.length, 'talent nodes');
            
            this.talentData.talents.forEach(talent => {
                // Créer un groupe pour le nœud
                const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                nodeGroup.style.cursor = 'pointer';
                nodeGroup.setAttribute('class', 'talent-node-group');
                
                // Créer le cercle de fond
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', talent.x);
                circle.setAttribute('cy', talent.y);
                circle.setAttribute('r', '20');
                circle.setAttribute('fill', this.activeTalents.has(talent.id) ? '#e6d1b4' : '#151a32');
                circle.setAttribute('stroke', '#e6d1b4');
                circle.setAttribute('stroke-width', '2');
                circle.setAttribute('class', 'talent-node');
                circle.style.transition = 'all 0.3s ease';

                nodeGroup.appendChild(circle);
                
                // Ajouter une image si elle existe
                if (talent.image) {
                    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                    image.setAttribute('x', talent.x - 16);
                    image.setAttribute('y', talent.y - 16);
                    image.setAttribute('width', '32');
                    image.setAttribute('height', '32');
                    image.setAttribute('href', talent.image);
                    image.setAttribute('class', 'talent-image');
                    image.style.transition = 'opacity 0.3s ease';
                    image.style.opacity = '0.8';
                    
                    // Vérifier que l'image se charge correctement
                    image.addEventListener('error', () => {
                        console.warn('Impossible de charger l\'image:', talent.image);
                    });
                    
                    nodeGroup.appendChild(image);
                }

                nodeGroup.addEventListener('click', () => this.toggleTalent(talent.id));
                nodeGroup.addEventListener('mouseenter', (e) => {
                    circle.setAttribute('r', '24');
                    const img = nodeGroup.querySelector('.talent-image');
                    if (img) img.style.opacity = '1';
                    this.showTooltip(talent, e);
                });
                nodeGroup.addEventListener('mouseleave', () => {
                    circle.setAttribute('r', '20');
                    const img = nodeGroup.querySelector('.talent-image');
                    if (img) img.style.opacity = '0.8';
                    this.hideTooltip();
                });

                nodesGroup.appendChild(nodeGroup);
            });
            
            console.log('Nodes created successfully');
        }
        this.svg.appendChild(nodesGroup);
    }

    toggleTalent(talentId) {
        if (this.activeTalents.has(talentId)) {
            this.activeTalents.delete(talentId);
        } else {
            this.activeTalents.add(talentId);
        }
        this.render();
    }

    showTooltip(talent, event) {
        let tooltip = document.getElementById('talent-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'talent-tooltip';
            tooltip.style.cssText = `
                position: fixed;
                background: rgba(26, 31, 51, 0.95);
                border: 2px solid #e6d1b4;
                border-radius: 8px;
                padding: 12px 16px;
                color: #e6d1b4;
                font-family: 'Corben', sans-serif;
                font-size: 14px;
                z-index: 1000;
                max-width: 250px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            `;
            document.body.appendChild(tooltip);
        }

        tooltip.innerHTML = `
            <div style="color: #e6d1b4; font-weight: bold; margin-bottom: 5px;">${talent.name}</div>
            <div style="font-size: 12px;">${talent.description}</div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = (event.pageX + 10) + 'px';
        tooltip.style.top = (event.pageY + 10) + 'px';
    }

    hideTooltip() {
        const tooltip = document.getElementById('talent-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }

    destroy() {
        const tooltip = document.getElementById('talent-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
}
