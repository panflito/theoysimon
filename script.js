document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  
    // Optional: Add subtle click animation
    buttons.forEach(button => {
      button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
      });
  
      button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  });