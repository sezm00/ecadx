// Shared Footer JavaScript - Common functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Footer link hover effects (if not handled by CSS)
    const footerLinks = document.querySelectorAll('.footer-links-left a, .footer-links-right a');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#3498db';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#003b71';
        });
    });

    // Social media icon hover effects (if not handled by CSS)
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.color = '#3498db';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.color = '#003b71';
        });
    });

    // Footer copyright year update (optional - can be removed if you prefer static year)
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-copyright p');
    
    if (copyrightElement) {
        const currentText = copyrightElement.textContent;
        const updatedText = currentText.replace(/\d{4}/, currentYear);
        copyrightElement.textContent = updatedText;
    }

    // Footer responsive behavior
    function handleFooterResponsiveness() {
        const footerContent = document.querySelector('.footer-content');
        const footerLinksLeft = document.querySelector('.footer-links-left');
        const footerLinksRight = document.querySelector('.footer-links-right');
        const footerSocial = document.querySelector('.footer-social');
        
        if (window.innerWidth <= 768) {
            // Mobile layout adjustments
            if (footerContent) {
                footerContent.style.flexDirection = 'column';
                footerContent.style.gap = '20px';
                footerContent.style.textAlign = 'center';
            }
            
            if (footerLinksLeft && footerLinksRight) {
                footerLinksLeft.style.justifyContent = 'center';
                footerLinksRight.style.justifyContent = 'center';
            }
            
            if (footerSocial) {
                footerSocial.style.margin = '20px 0';
            }
        } else {
            // Desktop layout
            if (footerContent) {
                footerContent.style.flexDirection = 'row';
                footerContent.style.gap = '0';
                footerContent.style.textAlign = 'left';
            }
            
            if (footerLinksLeft && footerLinksRight) {
                footerLinksLeft.style.justifyContent = 'flex-start';
                footerLinksRight.style.justifyContent = 'flex-end';
            }
            
            if (footerSocial) {
                footerSocial.style.margin = '0';
            }
        }
    }

    // Initial call and resize listener
    handleFooterResponsiveness();
    window.addEventListener('resize', handleFooterResponsiveness);
}); 