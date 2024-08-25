document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // User is scrolling down, hide the navbar
            navbar.style.top = "-60px";
        } else {
            // User is scrolling up, show the navbar
            if (scrollTop > 100) { // Trigger navbar visibility only after a certain scroll distance
                navbar.style.top = "0";
            }
        }
        lastScrollTop = scrollTop;
    });

    // Hover to show navbar at the top
    document.body.addEventListener('mousemove', function(event) {
        if (event.clientY < 100 && window.pageYOffset > 100) {
            navbar.style.top = "0";
        }
    });
});


// project section
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        document.querySelectorAll('.card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
