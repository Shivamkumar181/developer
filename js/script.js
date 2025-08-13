// Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const sideNav = document.getElementById('sideNav');
        const closeBtn = document.getElementById('closeBtn');
        // const sideThemeToggle = document.getElementById('sideThemeToggle');

        hamburger.addEventListener('click', () => {
            sideNav.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            sideNav.classList.remove('active');
        });

        // Close side nav when clicking on a link
        document.querySelectorAll('.side-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                sideNav.classList.remove('active');
            });
        });

        // // Theme Toggle
        // const themeToggle = document.getElementById('themeToggle');
        // const body = document.body;

        // themeToggle.addEventListener('click', () => {
        //     body.classList.toggle('dark-mode');
        //     if (body.classList.contains('dark-mode')) {
        //         themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        //         localStorage.setItem('theme', 'dark');
        //     } else {
        //         themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        //         localStorage.setItem('theme', 'light');
        //     }
        // });

        // sideThemeToggle.addEventListener('click', () => {
        //     body.classList.toggle('dark-mode');
        //     if (body.classList.contains('dark-mode')) {
        //         themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        //         localStorage.setItem('theme', 'dark');
        //     } else {
        //         themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        //         localStorage.setItem('theme', 'light');
        //     }
        // });

        // // Check for saved theme preference
        // if (localStorage.getItem('theme') === 'dark') {
        //     body.classList.add('dark-mode');
        //     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        // }

        // Active Navigation Link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a, .side-nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Work Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const workCards = document.querySelectorAll('.work-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                workCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Project Modals
        const viewProjectBtns = document.querySelectorAll('.view-project');
        const modals = document.querySelectorAll('.modal');
        const modalCloseBtns = document.querySelectorAll('.modal-close');

        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                const modal = document.getElementById(`projectModal${projectId}`);
                modal.classList.add('active');
            });
        });

        modalCloseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                modal.classList.remove('active');
            });
        });

        // Close modal when clicking outside
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // Back to Top Button
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll Animations
        const animateOnScroll = () => {
            const timelineItems = document.querySelectorAll('.timeline-item');
            const workCards = document.querySelectorAll('.work-card');
            const serviceCards = document.querySelectorAll('.service-card');
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            
            const triggerBottom = window.innerHeight * 0.8;
            
            // Timeline items
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < triggerBottom) {
                    item.classList.add('visible');
                }
            });
            
            // Work cards
            workCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerBottom) {
                    card.classList.add('visible');
                }
            });
            
            // Service cards
            serviceCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerBottom) {
                    card.classList.add('animate');
                }
            });
            
            // Testimonial cards
            testimonialCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerBottom) {
                    card.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        // Initial check on page load
        animateOnScroll();

       