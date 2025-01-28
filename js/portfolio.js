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
var linkedin = document.querySelector(".fa-linkedin");

// Afficher/Masquer le bouton en fonction du défilement
// même principe pour les logos linkedin, tel, mail 
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
        envelope.style.display = "none";
        phone.style.display = "none";
        linkedin.style.display = "none";
    } else {
        backToTopButton.style.display = "none";
        envelope.style.display = "block";
        phone.style.display = "block";
        linkedin.style.display = "block";
    }
};

// Carrousel

// Tableau contenant les URL des projets associés au carrousel. Ces URL seront insérées dans les balises <a> pour chaque élément.
var urls = [
    "https://github.com/Ngo-David/Pacman",
    "https://github.com/Ngo-David/Authentic-Go-Game",
    "https://github.com/Ngo-David/Systeme-de-Gestion-de-Citoyens-2020",
    "https://github.com/Ngo-David/Ice-Walker",
    "https://github.com/Ngo-David/Flappy-Dunk",
    "https://github.com/Ngo-David/GPI-Fenouil-la-fine-equipe",
    "https://github.com/David-955/ParadisHardware",
    "https://github.com/David-955/portfolio-2025",
    "https://github.com/David-955/clickfast",
    "https://github.com/David-955/epicerie-symfony"
];

// Tableau des descriptions textuelles pour chaque projet. Ces textes seront affichés sur chaque image.
var texts = [
    "PAC-MAN (Java)",
    "Authentic-Go-Game (C#)",
    "Systeme de Gestion de Citoyens (Java)",
    "Ice Walker (Processing)",
    "Flappy Dunk (Processing)",
    "Fenouil (Python, Java, HTML, CSS)",
    "Paradis du hardware (HTML, CSS)",
    "Mon portfolio (HTML, CSS, JavaScript)",
    "ClickFast (HTML, CSS, JS, Docker)",
    "Hello Boutique (Symfony)"
];

nbr = 10; // Nombre de projets donc d'images
position = 0; // Position de départ. Position sert à gérer la translation horizontale pour simuler le déplacement.
// Container cible l’élément HTML où le carrousel est rendu.
container = document.getElementById("container-carrousel");

// Selon la version, le design de la flèche change et chaque flèche est associée à une fonction qui va redimensionner l'image dans le conteneur. Conteneur qui change de taille selon le "media screen" et c'est dans le fichier style.css que ces modifications ont lieu.
// Boutons flèches gauche et droite de la version PC, on sélectionne les flèches via des classes CSS spécifiques.
leftbutton1 = document.querySelector(".fa-circle-arrow-left");
rightbutton1 = document.querySelector(".fa-circle-arrow-right");
// Flèches gauche et droite de la version PC 2
leftbutton2 = document.querySelector(".fa-arrow-left");
rightbutton2 = document.querySelector(".fa-arrow-right");
// Flèches gauche et droite de la version tablette
leftbutton3 = document.querySelector(".fa-left-long");
rightbutton3 = document.querySelector(".fa-right-long");
// Flèches gauche et droite de la version mobile
leftbutton4 = document.querySelector(".fa-caret-left");
rightbutton4 = document.querySelector(".fa-caret-right");

// Définit dynamiquement la largeur totale du conteneur en fonction du nombre d’images (nbr).
container.style.width=(800*nbr)+"px"; /* 800 étant la largeur fixée pour chaque élément (version PC) */

// Génération dynamique des éléments du carrousel
// La boucle génère dynamiquement les éléments du carrousel : chaque projet est représenté par une balise <a> contenant une image (div avec backgroundImage) et une description (<p>).
for (i=1; i <= nbr; i++) {
    var link = document.createElement("a");
    var description = document.createElement("p");
    link.href = urls[i - 1]; // Associe un lien unique à chaque image
    link.target = "_blank"; // ouvre le lien dans un nouvel onglet
    description.innerHTML=texts[i - 1]; // Associe un texte unique à chaque image
    description.className="descrphoto"; // Pour modifier l'apparence dans le fichier style.css
    div = document.createElement("div");
    div.className="photo";
    // Les images se situent dans le dossier "img" et se nomment im1.webp, im2.webp, etc... (le numéro s'incrémente à chaque tour)
    div.style.backgroundImage="url('../img/im"+i+".webp')";

    // objectif <a><div><p> ... </p></div></a>
    // Ajouter <div> dans <a>
    link.appendChild(div);
    // Ajouter <a> dans le container
    container.appendChild(link);
    // Même principe
    div.appendChild(description);
}

// Action au clique du bouton flèche droite
rightbutton1.onclick = function() {
    // Défiler à droite c'est défiler vers -1, -2, etc... jusqu'au dernier projet
    // S'il y a 6 projets alors on part du projet 0 jusqu'à -5, une fois "position" à -5 on s'arrête car on est à la fin du carrousel 
    if (position > -nbr+1) {
        position--; // Diminue la position pour faire défiler les éléments vers la gauche.
        container.style.transform="translate("+position*800+"px)"; // container.style.transform applique une translation CSS pour déplacer visuellement le carrousel.
    }
}

// Action au clique du bouton flèche gauche
leftbutton1.onclick = function() {
    // chaque clique fait qu'on se rapproche du projet 0, la position de départ donc le premier projet
    // La condition if (position < 0) empêche de défiler au-delà de la position de départ (projet 0).
    if (position < 0) {
        position++; // Augmente la position pour déplacer les éléments vers la droite.
        container.style.transform="translate("+position*800+"px)";
    }
}

// Version PC 2, largeur du conteneur et de l'image passent à 500px
rightbutton2.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*500+"px)";
    }
}

leftbutton2.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*500+"px)";
    }
}

// Version tablette, largeur du conteneur et de l'image passent à 300px
rightbutton3.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*300+"px)";
    }
}

leftbutton3.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*300+"px)";
    }
}

// Version mobile, largeur du conteneur et de l'image passent à 250px
rightbutton4.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*250+"px)";
    }
}

leftbutton4.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*250+"px)";
    }
}

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