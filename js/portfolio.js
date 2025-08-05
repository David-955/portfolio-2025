// --- Carrousel dynamique ---
var urls = [
    "https://github.com/David-955/mobileworld/tree/v1",
    "https://github.com/David-955/epicerie-symfony/tree/David",
    "https://github.com/David-955/clickfast/tree/david",
    "https://github.com/David-955/portfolio-2025",
    "https://github.com/David-955/ParadisHardware",
    "https://github.com/Ngo-David/Pacman",
    "https://github.com/Ngo-David/Authentic-Go-Game",
    "https://github.com/Ngo-David/Systeme-de-Gestion-de-Citoyens-2020",
    "https://github.com/David-955/IceWalker",
    "https://github.com/David-955/FlappyDunk",
    "https://github.com/Ngo-David/GPI-Fenouil-la-fine-equipe"
];
var texts = [
    "Mobile World (Symfony)",
    "Hello Boutique (Symfony)",
    "ClickFast (HTML, CSS, JS, Docker)",
    "Mon portfolio (HTML, CSS, JavaScript)",
    "Paradis du hardware (HTML, CSS)",
    "PAC-MAN (Java)",
    "Authentic-Go-Game (C#)",
    "Systeme de Gestion de Citoyens (Java)",
    "Ice Walker (Processing)",
    "Flappy Dunk (Processing)",
    "Fenouil (Python, Java, HTML, CSS)"
];

var livedemo = [
    "https://mobile-world.fr/",
    "non",
    "https://david-955.github.io/clickfast/",
    "https://ngo-portfolio.fr/",
    "https://david-955.github.io/ParadisHardware/",
    "non",
    "non",
    "non",
    "https://david-955.github.io/IceWalker/",
    "https://david-955.github.io/FlappyDunk/",
    "non"
];

var nbr = urls.length;
var position = 0;
var container = document.getElementById("container-carrousel");
var leftbutton1 = document.querySelector(".fa-circle-arrow-left");
var rightbutton1 = document.querySelector(".fa-circle-arrow-right");
var leftbutton2 = document.querySelector(".fa-arrow-left");
var rightbutton2 = document.querySelector(".fa-arrow-right");
var leftbutton3 = document.querySelector(".fa-left-long");
var rightbutton3 = document.querySelector(".fa-right-long");
var leftbutton4 = document.querySelector(".fa-caret-left");
var rightbutton4 = document.querySelector(".fa-caret-right");

container.style.width = (800 * nbr) + "px";

// Génération dynamique des éléments du carrousel
for (var i = 1; i <= nbr; i++) {
    var link = document.createElement("a");
    var description = document.createElement("p");
    link.href = urls[i - 1];
    link.target = "_blank";
    description.innerHTML = texts[i - 1];
    description.style.cssText = "background-color: #0000006d;"; 
    description.className = "descrphoto";
    var div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('../img/im" + i + ".webp')";
    link.appendChild(div);
    container.appendChild(link);
    div.appendChild(description);
}

function updateGitProjectLink() {
    var gitLink = document.getElementById("git-projects");
    var idx = Math.abs(position);
    gitLink.href = urls[idx];
    gitLink.innerHTML = '<i class="fa-brands fa-square-github"></i> <span class="github-link">GitHub</span>';
    if (livedemo[idx] && livedemo[idx] !== "non") {
    gitLink.innerHTML += ' &nbsp; <a href="' + livedemo[idx] + '" target="_blank" class="livedemo-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Tester</a>';
    }
}
updateGitProjectLink();

// Flèches version PC
rightbutton1.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 800 + "px)";
        updateGitProjectLink();
    }
};
leftbutton1.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 800 + "px)";
        updateGitProjectLink();
    }
};
// Flèches version PC 2
rightbutton2.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 500 + "px)";
        updateGitProjectLink();
    }
};
leftbutton2.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 500 + "px)";
        updateGitProjectLink();
    }
};
// Flèches version tablette
rightbutton3.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 300 + "px)";
        updateGitProjectLink();
    }
};
leftbutton3.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 300 + "px)";
        updateGitProjectLink();
    }
};
// Flèches version mobile
rightbutton4.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 250 + "px)";
        updateGitProjectLink();
    }
};
leftbutton4.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 250 + "px)";
        updateGitProjectLink();
    }
};
// --- Carrousel dynamique : fin ---


// Initialisation de EmailJS avec ma clé publique (le code suivant est trouvable sur le site de EmailJS)
(function(){
    emailjs.init({
      publicKey: "b8AcFwlY4X-XM0ieQ",
    });
})();

// Date en haut de page de index.html et en temps réel

// Initialisation d’une instance de la classe Date: la variable "maintenant" contient la date et l’heure actuelles
var maintenant=new Date();
// Récupération du jour du mois avec la méthode getDate()
var jour=maintenant.getDate();
// Récupération du mois avec la méthode getMonth()
var mois=maintenant.getMonth()+1;
// Récupération de l’année complète avec la méthode getFullYear()
var annee=maintenant.getFullYear(); 

// Insertion dans un élément HTML, le contenu avec l'id correspondant est remplacé :
document.getElementById("jour").innerHTML=jour;
document.getElementById("mois").innerHTML=mois;
document.getElementById("annee").innerHTML=annee;

// bouton pour remonter
var backToTopButton = document.getElementById("backToTop");
var envelope = document.querySelector(".fa-envelope");
var phone = document.querySelector(".fa-phone");

// Fonction pour afficher/masquer les icônes selon la visibilité de la section contact
function toggleIconsOnContact(visible) {
    if (visible) {
        envelope.style.display = "none";
        phone.style.display = "none";
    } else {
        envelope.style.display = "block";
        phone.style.display = "block";
    }
}

// Intersection Observer pour détecter la visibilité de la section #contact
var contactSection = document.getElementById("contact");
var observer = new window.IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        toggleIconsOnContact(true);
    } else {
        toggleIconsOnContact(false);
    }
}, { threshold: 0.1 });
observer.observe(contactSection);

// Afficher/Masquer le bouton backToTop en fonction du scroll (inchangé)
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};


// Action au clique du bouton flèche droite

rightbutton1.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 800 + "px)";
        updateGitProjectLink();
    }
};

// Action au clique du bouton flèche gauche

leftbutton1.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 800 + "px)";
        updateGitProjectLink();
    }
};

// Version PC 2, largeur du conteneur et de l'image passent à 500px

rightbutton2.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 500 + "px)";
        updateGitProjectLink();
    }
};


leftbutton2.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 500 + "px)";
        updateGitProjectLink();
    }
};

// Version tablette, largeur du conteneur et de l'image passent à 300px

rightbutton3.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 300 + "px)";
        updateGitProjectLink();
    }
};


leftbutton3.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 300 + "px)";
        updateGitProjectLink();
    }
};

// Version mobile, largeur du conteneur et de l'image passent à 250px

rightbutton4.onclick = function() {
    if (position > -nbr + 1) {
        position--;
        container.style.transform = "translate(" + position * 250 + "px)";
        updateGitProjectLink();
    }
};


leftbutton4.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform = "translate(" + position * 250 + "px)";
        updateGitProjectLink();
    }
};

// Formulaire

// Ajoute un écouteur d'événement "submit" au formulaire avec l'ID "contactForm"
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut de soumission (recharger la page)

    // Récupération des valeurs des champs du formulaire
    const name = document.getElementById("name").value; // Champ "Nom"
    const email = document.getElementById("email").value; // Champ "Email"
    const message = document.getElementById("message").value; // Champ "Message"


    // Préparer les paramètres à envoyer via EmailJS
    const templateParams = {
        name: name, // Valeur du champ "Nom"
        email: email, // Valeur du champ "Email"
        message: message, // Valeur du champ "Message"
    };

    // Envoyer l'email via EmailJS
    emailjs.send("service_zc82wtv", "template_gwew0eg", templateParams).then(
        function (response) {
            // En cas de succès, afficher un message de confirmation
            document.getElementById("send").innerHTML = "Message envoyé avec succès !";
        },
        function (error) {
            // En cas d'erreur, afficher un message d'erreur
            document.getElementById("send").innerHTML = "Erreur lors de l'envoi du message : " + error.text;
        },
    );

    // Réinitialise le formulaire après l'envoi
    document.getElementById("contactForm").reset();
});