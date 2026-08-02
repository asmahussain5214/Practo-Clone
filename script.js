/* =========================================================
   MEDICOCARE COMPLETE JavaScript
   ========================================================= */

// 1. BACK BUTTON FUNCTIONALITY
function goBack() {
    // Navigates to the previous page in history, or defaults to home if opened directly
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

// 2. ROUTING FOR "WHAT WE OFFER" CARDS
function openService(serviceName) {
    switch (serviceName.toLowerCase()) {
        case 'video':
            window.location.href = 'video.html';
            break;
        case 'clinic':
            window.location.href = 'clinic.html';
            break;
        case 'lab':
            window.location.href = 'lab.html';
            break;
        case 'medicine':
            window.location.href = 'medicine.html';
            break;
        default:
            console.log('Service not found:', serviceName);
    }
}

// 3. SEARCH DOCTORS / SPECIALTIES
function searchDoctors() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
        alert('Please enter a doctor name or specialty to search.');
        return;
    }

    // Redirects to doctors page with search term in query parameter
    window.location.href = `doctors.html?search=${encodeURIComponent(query)}`;
}

// Enable pressing "Enter" key inside the search input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchDoctors();
            }
        });
    }

    // Filter doctors automatically if arriving from a search redirect
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery && window.location.pathname.includes('doctors.html')) {
        filterDoctorList(searchQuery);
    }
});

// 4. FILTER DOCTORS ON DOCTORS.HTML
function filterDoctorList(query) {
    const doctorCards = document.querySelectorAll('.doctor-card');
    
    doctorCards.forEach(card => {
        const textContent = card.textContent.toLowerCase();
        if (textContent.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// 5. MOBILE MENU TOGGLE
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.right = '5%';
            navLinks.style.background = '#ffffff';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            navLinks.style.borderRadius = '8px';
        }
    }
}