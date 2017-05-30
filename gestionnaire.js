var Contact = {
		// initialise le contact
	// 	init: function (nom, prenom) {
	// 			this.nom = nom;
	// 					this.prenom = prenom;
	// 						},
	// 							// Renvoie la description du contact
	// 								decrire: function () {
	// 										var description = "Nom: " + this.nom + ", Prenom: " + this.prenom;
	// 												return description;
	// 													}
	// 													};
	//
	// 													// Ajout des 2 premier contacts
	// 													var contact1 = Object.create(Contact);
	// 													contact1.init("Carole", "Lévisse");
	//
	// 													var contact2 = Object.create(Contact);
	// 													contact2.init("Mélodie", "Nelsonne");
	//
	// 													// Création du tableau contenant les contacts
	// 													var contacts = [];
	// 													contacts.push(contact1);
	// 													contacts.push(contact2);
	//
	//
	//
	// 													// Affiche les options
	// 													var options = function () {
	// 														var choix = "1 : Lister les contact\n2 : Ajouter un contact\n0 : Quitter";
	// 															return choix;
	// 															};
	//
	// 															console.log("Bienvenue dans le gestionnaire de contacts !");
	//
	// 															// Affiche en boucle la liste des options et le choix utilisateur sauf pour 0
	// 															while (choixUtilisateur !== 0) {
	//
	// 																console.log(options());
	//
	// 																	var choixUtilisateur = Number(prompt("Choisisser une option :"));
	//
	// 																		// Résultat suivant choix utilisateur
	// 																			switch (choixUtilisateur) {
	//
	// 																				case 1:
	// 																						console.log("Voici la liste de tout les contacts : ");
	// 																								contacts.forEach(function (Contact) {
	// 																											console.log(Contact.decrire());
	// 																													});
	// 																															break;
	// 																																case 2:
	// 																																		var nom = prompt("Entrer le nom du contact");
	// 																																				var prenom = prompt("Entrer le prenom du contact");
	// 																																						var newContact = "contact" + contacts.length;
	// 																																								newContact = Object.create(Contact);
	// 																																										newContact.init(nom, prenom);
	// 																																												contacts.push(newContact);
	// 																																														console.log("Le contact a bien était ajouté !");
	// 																																																break;
	// 																																																	case 0:
	// 																																																			console.log("Au revoir !");
	// 																																																				}
	// 																																																				}
