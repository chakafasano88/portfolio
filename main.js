window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    ScrollReveal().reveal('.video', { reset: true, delay: 200 });

    _copyToClipBoard = () => {
        let copyText = document.getElementById("email");

        copyText.select();
        document.execCommand("copy");

        alert(`Copied ${copyText.value} to clipboard!`);
    }

});
