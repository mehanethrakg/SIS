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
    
    // Payment form submission
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('payment-amount').value);
        const method = document.getElementById('payment-method').value;
        
        if (!amount || amount <= 0) {
            alert('Please enter a valid payment amount');
            return;
        }
        
        // Simulate payment processing
        simulatePayment(amount, method);
    });
    
    // Feedback form submission
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('feedback-type').value;
        const subject = document.getElementById('feedback-subject').value;
        const message = document.getElementById('feedback-message').value;
        
        if (!type || !subject || !message) {
            alert('Please fill all fields');
            return;
        }
        
        submitFeedback(type, subject, message);
    });
    
    // Download receipt buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would download the actual receipt PDF
            alert('Receipt download started');
        });
    });
    
    // Initialize the page
    updateSectionTitle('Student Details');
});

function updateSectionTitle(title) {
    document.getElementById('section-title').textContent = title;
}

function simulatePayment(amount, method) {
    // Show loading state
    const payBtn = document.querySelector('.pay-btn');
    const originalText = payBtn.textContent;
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    payBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        payBtn.textContent = originalText;
        payBtn.disabled = false;
        
        // Show success message
        alert(`Payment of $${amount.toFixed(2)} via ${method} was successful!`);
        
        // In a real app, this would update the UI with the new payment
        // For demo, we'll just refresh the payment history
        document.getElementById('payment-form').reset();
    }, 2000);
}

function submitFeedback(type, subject, message) {
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        alert('Thank you for your feedback! It has been submitted successfully.');
        
        // In a real app, this would update the feedback history
        // For demo, we'll just clear the form
        document.getElementById('feedback-form').reset();
    }, 1500);
}