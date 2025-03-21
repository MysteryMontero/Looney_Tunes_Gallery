document.addEventListener('DOMContentLoaded', function() {
    const galleryBtn = document.getElementById('gallery-btn');
    
    galleryBtn.addEventListener('click', function() {
        window.location.href = 'gallery.html';
    });
});