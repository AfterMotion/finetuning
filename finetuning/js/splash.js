/**
 * Fine Tuning - Splash Screen & Intro Animation Controller (v2.0)
 * Trigger policy: Strictly on page refresh / reload or manual replay trigger.
 * Zero interference with SPA in-page navigation or tab switching.
 * finetuning.com.bd
 */

class FineTuningSplash {
  constructor(options = {}) {
    this.splash = document.getElementById('ft-splash');
    this.skipBtn = document.getElementById('ft-splash-skip');
    this.calibratorPercent = document.getElementById('ft-calibrator-val');
    this.replayTriggers = document.querySelectorAll('[data-action="replay-splash"], #ft-replay-splash');
    
    this.isActive = false;
    this.isExiting = false;
    this.timeouts = [];
    
    this.timings = {
      skipButtonDelay: 350,
      pulseDelay: 600,
      calibrationDuration: 2400,
      exitTriggerTime: 3200,
      exitDuration: 650,
      fastExitDuration: 350,
      ...options
    };

    this.init();
  }

  isRefreshEvent() {
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries && navEntries.length > 0) {
        return navEntries[0].type === 'reload';
      }
      if (window.performance && window.performance.navigation) {
        return window.performance.navigation.type === 1;
      }
    } catch (e) {}
    return false;
  }

  isManualTrigger() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.has('intro') || params.has('replay');
    } catch (e) {
      return false;
    }
  }

  init() {
    if (!this.splash) return;

    this.bindReplayTriggers();

    // Check accessibility reduced motion
    const prefersReducedMotion = window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.dismissImmediately();
      return;
    }

    // STRICT TRIGGER CONDITION: Only trigger on browser reload or explicit query param
    const shouldTrigger = this.isRefreshEvent() || this.isManualTrigger();

    if (shouldTrigger) {
      this.bindEvents();
      this.startSequence();
    } else {
      // Normal SPA navigation or initial link click: stay completely inactive
      this.dismissImmediately();
    }
  }

  bindEvents() {
    // Skip on Escape key
    this.handleKeyDown = (e) => {
      if (e.key === 'Escape' && this.isActive && !this.isExiting) {
        e.preventDefault();
        e.stopPropagation();
        this.skip();
      }
    };
    window.addEventListener('keydown', this.handleKeyDown, true);

    // Skip on button click
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.skip();
      });
    }
  }

  bindReplayTriggers() {
    this.replayTriggers = document.querySelectorAll('[data-action="replay-splash"], #ft-replay-splash');
    this.replayTriggers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.replay();
      });
    });
  }

  startSequence() {
    this.clearAllTimeouts();
    this.isActive = true;
    this.isExiting = false;

    // Lock page scrolling
    document.documentElement.classList.add('ft-splash-active');
    document.body.classList.add('ft-splash-locked');

    // Reset visual classes
    this.splash.style.display = 'flex';
    this.splash.classList.remove('is-exiting', 'is-fast-exit', 'has-pulse');

    if (this.skipBtn) {
      this.skipBtn.classList.remove('is-visible');
    }

    // Reset calibrator value
    if (this.calibratorPercent) {
      this.calibratorPercent.textContent = '0%';
    }

    // 1. Reveal Skip intro button
    this.schedule(() => {
      if (this.skipBtn && this.isActive) {
        this.skipBtn.classList.add('is-visible');
      }
    }, this.timings.skipButtonDelay);

    // 2. Activate acoustic pulse rings
    this.schedule(() => {
      if (this.isActive) {
        this.splash.classList.add('has-pulse');
      }
    }, this.timings.pulseDelay);

    // 3. Sonic Calibrator percentage count (0% -> 100%)
    const startTime = performance.now();
    const updateMeter = (now) => {
      if (!this.isActive || this.isExiting) return;
      const progress = Math.min((now - startTime) / this.timings.calibrationDuration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * 100);
      if (this.calibratorPercent) {
        this.calibratorPercent.textContent = `${val}%`;
      }
      if (progress < 1) {
        requestAnimationFrame(updateMeter);
      }
    };
    requestAnimationFrame(updateMeter);

    // 4. Trigger Stage Parting across width
    this.schedule(() => {
      this.triggerStageParting(false);
    }, this.timings.exitTriggerTime);
  }

  triggerStageParting(isImmediate = false) {
    if (this.isExiting) return;
    this.isExiting = true;

    if (this.calibratorPercent) {
      this.calibratorPercent.textContent = '100%';
    }

    if (isImmediate) {
      this.splash.classList.add('is-fast-exit', 'is-exiting');
    } else {
      this.splash.classList.add('is-exiting');
    }

    const duration = isImmediate ? this.timings.fastExitDuration : this.timings.exitDuration;

    // Unlock page scroll slightly ahead of transition completion for snappy responsiveness
    this.schedule(() => {
      document.body.classList.remove('ft-splash-locked');
    }, Math.max(100, duration - 150));

    this.schedule(() => {
      this.complete();
    }, duration);
  }

  complete() {
    this.isActive = false;

    // Cleanly hide off-screen splash after curtain lift completes
    if (this.splash) {
      this.splash.style.display = 'none';
      this.splash.classList.remove('is-exiting', 'is-fast-exit', 'has-pulse');
    }
    document.documentElement.classList.remove('ft-splash-active');
    document.body.classList.remove('ft-splash-locked');
  }

  skip() {
    if (!this.isActive || this.isExiting) return;
    this.clearAllTimeouts();
    this.triggerStageParting(true);
  }

  replay() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.bindEvents();
    this.startSequence();
  }

  dismissImmediately() {
    if (!this.splash) return;
    this.splash.style.display = 'none';
    this.splash.classList.remove('is-exiting', 'is-fast-exit', 'has-pulse');
    document.documentElement.classList.remove('ft-splash-active');
    document.body.classList.remove('ft-splash-locked');
    this.isActive = false;
  }

  schedule(callback, delayMs) {
    const timer = setTimeout(callback, delayMs);
    this.timeouts.push(timer);
    return timer;
  }

  clearAllTimeouts() {
    this.timeouts.forEach(timer => clearTimeout(timer));
    this.timeouts = [];
  }
}

// Auto-instantiate when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.FineTuningSplashInstance = new FineTuningSplash();
  
  window.FineTuningSplash = {
    replay: () => window.FineTuningSplashInstance?.replay(),
    skip: () => window.FineTuningSplashInstance?.skip(),
    getInstance: () => window.FineTuningSplashInstance
  };
});
