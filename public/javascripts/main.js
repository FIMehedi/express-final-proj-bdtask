const flash = document.getElementById('flash');
const flashClose = document.getElementById('flash-close');

flashClose.addEventListener('click', () => flash.classList.add('hidden'));
