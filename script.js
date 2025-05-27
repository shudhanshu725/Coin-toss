class CoinFlip {
            constructor() {
                this.coin = document.getElementById('coin');
                this.flipBtn = document.getElementById('flipBtn');
                this.result = document.getElementById('result');
                this.headsCount = document.getElementById('headsCount');
                this.tailsCount = document.getElementById('tailsCount');
                
                this.stats = { heads: 0, tails: 0 };
                this.isFlipping = false;
                
                this.init();
            }
            
            init() {
                this.flipBtn.addEventListener('click', () => this.flipCoin());
                this.createParticles();
            }
            
            flipCoin() {
                if (this.isFlipping) return;
                
                this.isFlipping = true;
                this.flipBtn.disabled = true;
                this.result.textContent = '';
                this.result.classList.remove('show');
                
                // Random result
                const isHeads = Math.random() < 0.5;
                
                // Add flipping animation
                this.coin.classList.add('flipping');
                
                // After animation completes
                setTimeout(() => {
                    this.coin.classList.remove('flipping');
                    
                    // Set final position
                    if (isHeads) {
                        this.coin.style.transform = 'rotateY(0deg)';
                        this.result.textContent = '🎉 HEADS!';
                        this.stats.heads++;
                        this.headsCount.textContent = this.stats.heads;
                    } else {
                        this.coin.style.transform = 'rotateY(180deg)';
                        this.result.textContent = '🎊 TAILS!';
                        this.stats.tails++;
                        this.tailsCount.textContent = this.stats.tails;
                    }
                    
                    this.result.classList.add('show');
                    this.isFlipping = false;
                    this.flipBtn.disabled = false;
                }, 2000);
            }
            
            createParticles() {
                const particlesContainer = document.getElementById('particles');
                
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 6 + 's';
                    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    particlesContainer.appendChild(particle);
                }
            }
        }
        
        // Initialize the coin flip app
        document.addEventListener('DOMContentLoaded', () => {
            new CoinFlip();
        });
