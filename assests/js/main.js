
document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.querySelector('.button');
    
   
    const title = document.querySelector('h1');
    
    
    const colors = ['#FF416C', '#6a11cb', '#2575fc', '#FFD700', '#00b09b', '#96c93d'];
    
    
    button.addEventListener('click', function() {
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        
        button.style.background = `linear-gradient(to right, ${randomColor}, ${randomColor}99)`;
        
        
        title.style.color = randomColor;
        
        
        alert('Wow! You changed the colors! 🎨');
    });
    
    
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        });
    });
    
    
    const clock = document.createElement('div');
    clock.id = 'live-clock';
    clock.style.marginTop = '30px';
    clock.style.fontSize = '1.2rem';
    clock.style.color = '#A3E4D7';
    document.querySelector('.container').appendChild(clock);
    
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clock.textContent = `🕒 Current time: ${timeString}`;
    }
    
    
});