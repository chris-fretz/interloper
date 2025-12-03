function initLightModeToggle() {
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
      document.body.classList.toggle('light');
    });
}

document.addEventListener('DOMContentLoaded', function() {

    initLightModeToggle();

});
