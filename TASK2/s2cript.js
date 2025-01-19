class Stopwatch {
    constructor() {
        this.minutesDisplay = document.getElementById('minutes');
        this.secondsDisplay = document.getElementById('seconds');
        this.millisecondsDisplay = document.getElementById('milliseconds');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.lapBtn = document.getElementById('lapBtn');
        this.lapTimes = document.getElementById('lapTimes');

        this.startTime = 0;
        this.elapsedTime = 0;
        this.timeInterval = null;
        this.running = false;
        this.lapCount = 1;
        this.lastLapTime = 0;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.lapBtn.addEventListener('click', () => this.lap());
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.startTime = Date.now() - this.elapsedTime;
            this.timeInterval = setInterval(() => this.updateDisplay(), 10);
            this.startBtn.textContent = 'Start';
            this.startBtn.disabled = true;
            this.pauseBtn.disabled = false;
        }
    }

    pause() {
        if (this.running) {
            this.running = false;
            clearInterval(this.timeInterval);
            this.startBtn.disabled = false;
            this.startBtn.textContent = 'Resume';
        }
    }

    reset() {
        this.running = false;
        clearInterval(this.timeInterval);
        this.elapsedTime = 0;
        this.lastLapTime = 0;
        this.lapCount = 1;
        this.updateDisplay();
        this.lapTimes.innerHTML = '';
        this.startBtn.disabled = false;
        this.startBtn.textContent = 'Start';
        this.pauseBtn.disabled = false;
    }

    lap() {
        if (this.running) {
            const currentTime = this.elapsedTime;
            const lapTime = currentTime - this.lastLapTime;
            this.lastLapTime = currentTime;

            const li = document.createElement('li');
            li.textContent = `Lap ${this.lapCount} - ${this.formatTime(lapTime)}`;
            this.lapTimes.insertBefore(li, this.lapTimes.firstChild);
            this.lapCount++;
        }
    }

    updateDisplay() {
        this.elapsedTime = Date.now() - this.startTime;
        const time = this.formatTime(this.elapsedTime);
        [this.minutesDisplay.textContent, 
         this.secondsDisplay.textContent, 
         this.millisecondsDisplay.textContent] = time.split(':');
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    }
}

// Initialize the stopwatch when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Stopwatch();
});
