/**
 * Modern Library Management System - User JavaScript
 * Enhanced functionality with theme support
 */

// Theme Management
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('userTheme');
    
    // Load saved theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }
    
    // Theme toggle event
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('userTheme', 'light');
                updateThemeIcon(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('userTheme', 'dark');
                updateThemeIcon(true);
            }
        });
    }
    
    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fa fa-moon-o' : 'fa fa-sun-o';
        }
    }
});

// Carousel functionality
function PrepareCarousel() {
    $('#carousel-example').carousel({
        interval: 5000,
        ride: 'carousel'
    });
    
    // Pause on hover
    $('#carousel-example').hover(
        function() { $(this).carousel('pause'); },
        function() { $(this).carousel('cycle'); }
    );
}

// DataTables initialization
function PrepareDataTables() {
    if ($.fn.DataTable) {
        $('#dataTables-example').DataTable({
            responsive: true,
            pageLength: 25,
            lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records..."
            },
            dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                 "<'row'<'col-sm-12'tr>>" +
                 "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            columnDefs: [
                { orderable: false, targets: 'no-sort' }
            ]
        });
    }
}

function MenuTopActive() {
    const currentPage = window.location.pathname.split('/').pop();
    if(currentPage === 'dashboard.php') {
        document.getElementById("db").classList.add("menu-top-active");
    }
    if(currentPage === 'issued-books.php') {
        document.getElementById("ib").classList.add("menu-top-active");
    }
    if(currentPage === 'my-profile.php' || currentPage === 'change-password.php') {
        document.getElementById("ddlmenuItem").classList.add("menu-top-active");
    }
}

// Initialize all functions
$(document).ready(function() {
    PrepareCarousel();
    PrepareDataTables();
    MenuTopActive();
    console.log('📚 Library Management System - User Interface Loaded');
});