// hero-particles.js - Lightweight particle network for hero section
// Respects prefers-reduced-motion, pauses on mobile/low-power, cleans up properly

(function () {
    'use strict';

    const canvas = document.querySelector('.hero-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = canvas.closest('.hero');
    if (!hero) return;

    // Configuration - calm, minimal, neutral tones with subtle green accents
    const CONFIG = {
        particleCount: 35,
        maxDistance: 140,
        particleRadius: { min: 1, max: 2.5 },
        lineWidth: 0.4,
        speed: 0.25,
        accentRatio: 0.18, // ~18% of particles get subtle green tint
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        isMobile: window.innerWidth < 768,
        lowPower: navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4
    };

    // Adjust for reduced motion / mobile / low power
    if (CONFIG.reducedMotion || CONFIG.isMobile || CONFIG.lowPower) {
        CONFIG.particleCount = Math.max(12, Math.floor(CONFIG.particleCount * 0.35));
        CONFIG.maxDistance = 100;
        CONFIG.speed *= 0.5;
    }

    let particles = [];
    let animationId = null;
    let dpr = window.devicePixelRatio || 1;
    let resizeTimeout = null;

    // Get current theme colors (neutral + subtle green accent)
    function getColorPalettes() {
        const isDark = document.documentElement.classList.contains('dark-theme');
        
        if (isDark) {
            // Dark theme: muted slate + soft sage/seafoam accent
            return {
                neutral: {
                    particle: 'rgba(160, 170, 185, 0.5)',
                    line: 'rgba(160, 170, 185, 0.1)'
                },
                accent: {
                    particle: 'rgba(90, 170, 140, 0.45)',  // muted emerald/sage
                    line: 'rgba(90, 170, 140, 0.09)'
                }
            };
        } else {
            // Light theme: muted slate + soft seafoam accent
            return {
                neutral: {
                    particle: 'rgba(85, 95, 110, 0.5)',
                    line: 'rgba(85, 95, 110, 0.1)'
                },
                accent: {
                    particle: 'rgba(70, 150, 125, 0.4)',  // muted seafoam
                    line: 'rgba(70, 150, 125, 0.08)'
                }
            };
        }
    }

    function initParticles() {
        const palettes = getColorPalettes();
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        particles = [];
        for (let i = 0; i < CONFIG.particleCount; i++) {
            const isAccent = Math.random() < CONFIG.accentRatio;
            const palette = isAccent ? palettes.accent : palettes.neutral;
            
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * CONFIG.speed,
                vy: (Math.random() - 0.5) * CONFIG.speed,
                radius: Math.random() * (CONFIG.particleRadius.max - CONFIG.particleRadius.min) + CONFIG.particleRadius.min,
                color: palette.particle,
                lineColor: palette.line,
                isAccent: isAccent
            });
        }
    }

    function resize() {
        const rect = hero.getBoundingClientRect();
        dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);
        initParticles();
    }

    function draw() {
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        ctx.clearRect(0, 0, w, h);

        // Update and draw particles
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.maxDistance) {
                    const opacity = 1 - dist / CONFIG.maxDistance;
                    // Blend line color based on whether either particle is accent
                    const lineColor = particles[i].isAccent || particles[j].isAccent
                        ? particles[i].lineColor.replace('0.1', (0.09 * opacity).toFixed(3))
                        : particles[i].lineColor.replace('0.1', (0.1 * opacity).toFixed(3));
                    
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = CONFIG.lineWidth;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        draw();
        animationId = requestAnimationFrame(animate);
    }

    function start() {
        resize();
        animate();
    }

    function stop() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            stop();
            start();
        }, 150);
    }

    function handleThemeChange() {
        const palettes = getColorPalettes();
        for (const p of particles) {
            const palette = p.isAccent ? palettes.accent : palettes.neutral;
            p.color = palette.particle;
            p.lineColor = palette.line;
        }
    }

    function handleVisibilityChange() {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    }

    function handleReducedMotionChange(e) {
        if (e.matches) {
            stop();
            CONFIG.reducedMotion = true;
            CONFIG.particleCount = Math.max(12, Math.floor(CONFIG.particleCount * 0.35));
            CONFIG.speed *= 0.5;
            initParticles();
            start();
        } else {
            CONFIG.reducedMotion = false;
            // Restart with full config on next resize/load
        }
    }

    // Event listeners
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleReducedMotionChange);

    // Listen for theme changes (assuming a class toggle on html)
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Cleanup function exposed globally for potential manual cleanup
    window.heroParticlesCleanup = function () {
        stop();
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        observer.disconnect();
        window.heroParticlesCleanup = null;
    };

    // Start
    start();
})();