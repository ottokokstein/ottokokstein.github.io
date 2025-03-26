// Source: https://stackoverflow.com/questions/18545077/image-fullscreen-on-click/50430187#50430187

document.querySelectorAll('img[data-enlargeable]').forEach(function(img) {
    img.classList.add('img-enlargeable');
    img.addEventListener('click', function() {
      var src = img.getAttribute('src');
      var modal;
  
      function removeModal() {
        modal.remove();
        document.body.removeEventListener('keyup', modalClose);
      }
  
      modal = document.createElement('div');
      modal.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';
      modal.style.backgroundSize = 'contain';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.position = 'fixed';
      modal.style.zIndex = '10000';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.cursor = 'zoom-out';
  
      modal.addEventListener('click', function() {
        removeModal();
      });
  
      document.body.appendChild(modal);
  
      // Handling ESC key
      function modalClose(e) {
        if (e.key === 'Escape') {
          removeModal();
        }
      }
      document.body.addEventListener('keyup', modalClose);
    });
  });
  