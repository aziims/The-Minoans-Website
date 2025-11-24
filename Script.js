// ===== SIMPLE WEBSITE ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Highlighting navigation tab
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.Navigation a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#a8925a';
        }
    });

    // Go to the top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #776123ff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        opacity: 0;
        z-index: 1000;
        cursor: pointer;
    `;
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        scrollBtn.style.opacity = window.pageYOffset > 200 ? '1' : '0';
    });

});

// changing colour button
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('ToggleLight');
    
    // Checking the previous colour
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark_mode');
        themeToggle.textContent = 'Light Mode';
    }
    
    // button excecution 
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark_mode');
        
        if (document.body.classList.contains('dark_mode')) {
            this.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            this.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});


