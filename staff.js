document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu functionality
    const navItems = document.querySelectorAll('.nav-menu li');
    const contentSections = document.querySelectorAll('.content-section');
    const sectionTitle = document.getElementById('section-title');
    
    navItems.forEach(item => {
        if (item.id !== 'logout-btn') {
            item.addEventListener('click', function() {
                // Remove active class from all nav items and sections
                navItems.forEach(navItem => navItem.classList.remove('active'));
                contentSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked nav item
                this.classList.add('active');
                
                // Show corresponding section
                const sectionId = this.getAttribute('data-section');
                document.getElementById(sectionId).classList.add('active');
                
                // Update section title
                updateSectionTitle(this.querySelector('span').textContent);
            });
        }
    });
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            // In a real application, this would clear session and redirect to login
            window.location.href = 'index.html';
        }
    });
    
    // Save buttons in marks table
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const studentId = row.cells[0].textContent;
            const studentName = row.cells[1].textContent;
            const course = row.cells[2].textContent;
            const marks = row.cells[3].querySelector('input').value;
            const cgpa = row.cells[5].querySelector('input').value;
            
            // Show loading state
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            this.disabled = true;
            
            // Simulate API call to save data
            setTimeout(() => {
                // Reset button
                this.innerHTML = originalHTML;
                this.disabled = false;
                
                // Show success message
                alert(`Successfully updated marks for ${studentName} (${studentId}) in ${course}\nMarks: ${marks}\nCGPA: ${cgpa}`);
            }, 1000);
        });
    });
    
    // Reset buttons in marks table
    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const marksInput = row.cells[3].querySelector('input');
            const cgpaInput = row.cells[5].querySelector('input');
            
            // Reset to default values (in a real app, these would come from the database)
            marksInput.value = marksInput.defaultValue;
            cgpaInput.value = cgpaInput.defaultValue;
            
            alert('Changes have been reset');
        });
    });
    
    // Save All Changes button
    document.querySelector('.bulk-actions .btn-primary').addEventListener('click', function() {
        // Show loading state
        const originalHTML = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
        this.disabled = true;
        
        // Simulate bulk save
        setTimeout(() => {
            // Reset button
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            alert('All changes have been saved successfully!');
        }, 1500);
    });
    
    // Initialize the page
    updateSectionTitle('Staff Profile');
});

function updateSectionTitle(title) {
    document.getElementById('section-title').textContent = title;
}