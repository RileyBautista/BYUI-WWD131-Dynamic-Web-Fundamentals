
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'matrix') {
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4828883.jpg&f=1&nofb=1&ipt=f2c2b0c29f4c94e81e34fe2b87ef60c95c2b0a63919047ccc53867a41e63c34b')";
        pageContent.style.fontFamily = "'Press Start 2P', system-ui";
        pageContent.style.color = 'green';
    } else if (current === 'futuristic') {
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Ffuturistic-background-125kto22lnkvasa5.jpg&f=1&nofb=1&ipt=bd3f7c728cfb7cee425c0a8a8a3e8446fe2ef901c03261e5cc1172c4de289a3b')";
        pageContent.style.fontFamily = "Orbitron, sans-serif";
        pageContent.style.color = 'white';
    } else if (current === 'old-timey') {
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fantique-clocks-vintage-paper-background_1247484-2888.jpg%3Fw%3D2000&f=1&nofb=1&ipt=0ba5d52d7163327c32596a57c92c969b37dc3f35f8b26662605def6f2ba49638')";
        pageContent.style.fontFamily = "serif";
        pageContent.style.color = 'white';
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        pageContent.style.color = 'black';
    }
}
          