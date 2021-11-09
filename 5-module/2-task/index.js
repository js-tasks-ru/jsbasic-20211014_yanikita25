function toggleText() {
  let button = document.querySelector('.toggle-text-button');
    button.onclick = function () {
        text.hasAttribute('hidden') ?
            text.removeAttribute('hidden') : text.setAttribute('hidden', '');
    }
}
