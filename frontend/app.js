// Career Referee Application Logic
class CareerReferee {
    constructor() {
        this.roles = null;
        this.userProfile = null;
        this.init();
    }

    async init() {
        await this.loadRoles();
        this.setupEventListeners();
        this.updateScoreDisplays();
    }

    async loadRoles() {
        try {
            const response = await fetch('../data/roles.json');
            const data = await response.json();
            this.roles = data.roles;
        } catch (error) {
            console.error('Error loading roles data:', error);
            this.showError('Failed to load role data. Please refresh the page.');
        }
    }

    setupEventListeners() {
        // Update score displays when sliders change
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.updateScoreDisplay(e.target);
            });
        });

        // Handle form submission
        const form = document.getElementById('assessment-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processAssessment();
        });
    }

    updateScoreDisplays() {
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            this.updateScoreDisplay(slider);
        });
    }

    updateScoreDisplay(slider) {
        const scoreDisplay = document.getElementById(`${slider.id}-score`);
        if (scoreDisplay) {
            scoreDisplay.textContent = slider.value;
        }
    }

    processAssessment() {
        // Collect user input
        this.userProfile = {
            coding: parseInt(document.getElementById('coding').value),
            ops: parseInt(document.getElementById('ops').value),
            stress: parseInt(document.getElementById('stress').value),
            salary: parseInt(document.getElementById('salary').value),
            worklife: parseInt(document.getElementById('worklife').value)
        };

        // Calculate matches
        const matches = this.calculateMatches();
        
        // Display results
        this.displayResults(matches);
    }

    calculateMatches() {
        if (!this.roles || !this.userProfile) {
            return [];
        }

        const matches = this.roles.map(role => {
            const distance = this.calculateEuclideanDistance(this.userProfile, role);
            const maxDistance = Math.sqrt(5 * Math.pow(4, 2)); // Maximum possible distance
            const matchPercentage = Math.max(0, Math.round((1 - distance / maxDistance) * 100));
            
            return {
                ...role,
                distance,
                matchPercentage,
                tradeoffs: this.calculateTradeoffs(this.userProfile, role)
            };
        });

        // Sort by match percentage (highest first)
        return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
    }

    calculateEuclideanDistance(user, role) {
        const dimensions = ['coding', 'ops', 'stress', 'salary', 'worklife'];
        let sumSquares = 0;
        
        dimensions.forEach(dim => {
            sumSquares += Math.pow(user[dim] - role[dim], 2);
        });
        
        return Math.sqrt(sumSquares);
    }

    calculateTradeoffs(user, role) {
        const dimensions = ['coding', 'ops', 'stress', 'salary', 'worklife'];
        const dimensionLabels = {
            coding: 'Coding Skill',
            ops: 'Ops Experience',
            stress: 'Stress Level',
            salary: 'Salary Potential',
            worklife: 'Work-Life Balance'
        };

        const gains = [];
        const losses = [];

        dimensions.forEach(dim => {
            const diff = role[dim] - user[dim];
            if (diff > 0) {
                gains.push(`Higher ${dimensionLabels[dim]} (+${diff})`);
            } else if (diff < 0) {
                losses.push(`Lower ${dimensionLabels[dim]} (${diff})`);
            }
        });

        return { gains, losses };
    }

    displayResults(matches) {
        const resultsSection = document.getElementById('results-section');
        const resultsContent = document.getElementById('results-content');
        
        if (!matches.length) {
            resultsContent.innerHTML = '<p>No results available. Please try again.</p>';
            resultsSection.classList.remove('hidden');
            return;
        }

        const bestMatch = matches[0];
        
        let html = `
            <div class="best-fit">
                <h3>🎯 Best Fit: ${bestMatch.name}</h3>
                <p class="match-score">${bestMatch.matchPercentage}% Match</p>
                <p>${bestMatch.description}</p>
            </div>

            <div class="match-grid">
                ${matches.map(role => `
                    <div class="role-card ${role === bestMatch ? 'best-match' : ''}">
                        <h4>${role.name}</h4>
                        <div class="match-percentage">${role.matchPercentage}%</div>
                        <p class="role-description">${role.description}</p>
                    </div>
                `).join('')}
            </div>

            <div class="analysis-section">
                <h3>📊 Detailed Analysis</h3>
                ${matches.map(role => `
                    <div class="role-analysis">
                        <h4>${role.name} (${role.matchPercentage}% match)</h4>
                        
                        ${role.tradeoffs.gains.length > 0 ? `
                            <div class="tradeoff-item">
                                <strong class="gains">✅ What you'd gain:</strong>
                                <ul>
                                    ${role.tradeoffs.gains.map(gain => `<li>${gain}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${role.tradeoffs.losses.length > 0 ? `
                            <div class="tradeoff-item">
                                <strong class="losses">⚠️ What you'd sacrifice:</strong>
                                <ul>
                                    ${role.tradeoffs.losses.map(loss => `<li>${loss}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        <div class="tradeoff-item">
                            <strong>🎯 Growth Areas:</strong>
                            <ul>
                                ${role.growthAreas.map(area => `<li>${area}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="tradeoff-item">
                            <strong>⚡ Risk Factors:</strong>
                            <ul>
                                ${role.risks.map(risk => `<li>${risk}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="analysis-section">
                <h3>🔄 Your Profile Summary</h3>
                <div class="profile-summary">
                    <p><strong>Coding Skill:</strong> ${this.userProfile.coding}/5</p>
                    <p><strong>Ops Experience:</strong> ${this.userProfile.ops}/5</p>
                    <p><strong>Stress Tolerance:</strong> ${this.userProfile.stress}/5</p>
                    <p><strong>Salary Ambition:</strong> ${this.userProfile.salary}/5</p>
                    <p><strong>Work-Life Balance:</strong> ${this.userProfile.worklife}/5</p>
                </div>
            </div>
        `;

        resultsContent.innerHTML = html;
        resultsSection.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    showError(message) {
        const resultsSection = document.getElementById('results-section');
        const resultsContent = document.getElementById('results-content');
        
        resultsContent.innerHTML = `
            <div class="error-message">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
            </div>
        `;
        
        resultsSection.classList.remove('hidden');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CareerReferee();
});