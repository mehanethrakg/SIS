document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const loginForms = document.querySelectorAll('.login-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            loginForms.forEach(form => form.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding form
            const tabName = this.getAttribute('data-tab');
            document.getElementById(`${tabName}-form`).classList.add('active');
        });
    });

    // Form submission handlers
    document.getElementById('student-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('student')) {
            // In a real app, you would authenticate here before redirecting
            window.location.href = 'student.html';
        }
    });

    document.getElementById('staff-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('staff')) {
            window.location.href = 'staff.html';
        }
    });

    document.getElementById('admin-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('admin')) {
            window.location.href = 'admin.html';
        }
    });

    // Basic form validation
    function validateForm(userType) {
        const id = document.getElementById(`${userType}-id`).value.trim();
        const password = document.getElementById(`${userType}-password`).value.trim();
        
        if (!id) {
            alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} ID is required`);
            return false;
        }
        
        if (!password) {
            alert('Password is required');
            return false;
        }
        
        // Additional validation can be added here
        return true;
    }

    // Remember me functionality (using localStorage)
    function checkRememberMe() {
        ['student', 'staff', 'admin'].forEach(userType => {
            const remember = localStorage.getItem(`remember-${userType}`);
            if (remember === 'true') {
                document.getElementById(`${userType}-id`).value = localStorage.getItem(`${userType}-id`) || '';
                document.getElementById(`remember-${userType}`).checked = true;
            }
        });
    }

    function setupRememberMe() {
        ['student', 'staff', 'admin'].forEach(userType => {
            const checkbox = document.getElementById(`remember-${userType}`);
            const idField = document.getElementById(`${userType}-id`);
            
            checkbox.addEventListener('change', function() {
                if (this.checked && idField.value) {
                    localStorage.setItem(`remember-${userType}`, 'true');
                    localStorage.setItem(`${userType}-id`, idField.value);
                } else {
                    localStorage.removeItem(`remember-${userType}`);
                    localStorage.removeItem(`${userType}-id`);
                }
            });
        });
    }

    // Initialize remember me functionality
    checkRememberMe();
    setupRememberMe();
});