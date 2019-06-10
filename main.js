window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    _copyToClipBoard = () => {
        let copyText = document.getElementById("email");

        copyText.select();
        document.execCommand("copy");

        alert(`Copied ${copyText.value} to clipboard!`);
    }

    ScrollReveal().reveal('.video', { reset: true, delay: 200, easing: 'step(5)' });
});
