// Fonction pour faire apparaître le titre progressivement
window.onload = () => {
    // Faire apparaître le titre après 0.5s
    setTimeout(() => {
        document.getElementById('welcome-title').style.opacity = 1;
    }, 500); // Après 0.5 seconde

    // Faire apparaître le bouton après 3s
    setTimeout(() => {
        document.getElementById('start-button').style.opacity = 1;
    }, 3000); // Après 3 secondes
};
