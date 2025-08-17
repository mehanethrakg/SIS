document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const menuItems = document.querySelectorAll('.menu-item:not(#logout-btn)');
    const sections = document.querySelectorAll('.section');
    
    // Add click event listeners to each menu item (except logout)
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the corresponding section
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(`${sectionId}-section`);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Update the header title
            const headerTitle = document.querySelector('.header h2');
            if (headerTitle) {
                const menuText = this.querySelector('span');
                if (menuText) {
                    headerTitle.textContent = menuText.textContent;
                }
            }
        });
    });
    
    // Logout button functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your logout logic here
            console.log('Logout clicked');
            // Example: window.location.href = 'logout.php';
            // Or show a confirmation modal
            confirm('Are you sure you want to logout?') && (window.location.href = 'index.html');
        });
    }
    
    // Initialize the dashboard as active
    const defaultSection = document.getElementById('dashboard-section');
    if (defaultSection) {
        defaultSection.style.display = 'block';
    }
    
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    // Add Student button
    const addStudentBtn = document.getElementById('add-student');
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', function() {
            document.getElementById('student-modal').style.display = 'block';
        });
    }
    
    // Add Staff button
    const addStaffBtn = document.getElementById('add-staff');
    if (addStaffBtn) {
        addStaffBtn.addEventListener('click', function() {
            document.getElementById('staff-modal').style.display = 'block';
        });
    }
    
    // Close modals when clicking X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Form submissions
    const studentForm = document.getElementById('student-form');
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add student form submission logic
            alert('Student added successfully!');
            this.reset();
            document.getElementById('student-modal').style.display = 'none';
        });
    }
    
    const staffForm = document.getElementById('staff-form');
    if (staffForm) {
        staffForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add staff form submission logic
            alert('Staff added successfully!');
            this.reset();
            document.getElementById('staff-modal').style.display = 'none';
        });
    }
    
    const adminProfileForm = document.getElementById('admin-profile-form');
    if (adminProfileForm) {
        adminProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add profile update logic
            alert('Profile updated successfully!');
        });
    }
    
    // Initialize charts (example with Chart.js)
    if (typeof Chart !== 'undefined') {
        // Performance Chart
        const performanceCtx = document.getElementById('performance-chart');
        if (performanceCtx) {
            new Chart(performanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Average Score',
                        data: [65, 59, 80, 81, 56, 72],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        tension: 0.1
                    }]
                }
            });
        }
        
        // Staff Chart
        const staffCtx = document.getElementById('staff-chart');
        if (staffCtx) {
            new Chart(staffCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Teachers', 'Administrators', 'Support Staff'],
                    datasets: [{
                        data: [45, 15, 25],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(255, 206, 86, 0.7)'
                        ]
                    }]
                }
            });
        }
    }
});