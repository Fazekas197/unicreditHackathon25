export const phishingQuiz = [
	{
		test: "/images/phising4.png",
		answear: true,
		explanation:
			"Atașamentul PDF poate conține viruși sau linkuri către formulare false. Banca NU trimite documente sensibile fără să te autentifici în platforma oficială.",
	},
	{
		test: "/images/phising3.jpg",
		answear: true,
		explanation:
			"Tactici de urgență și frică. DomeniuL nu este un domeniu oficial UniCredit. Orice mesaj care te trimite pe un site pentru a „verifica identitatea” sau a introduce date personale este suspect.",
	},
	{
		test: "/images/phising1.png",
		answear: true,
		explanation:
			"Design copiat: Imită perfect site-ul oficial pentru a păcăli utilizatorii. Furt de date: Orice date introduse aici ajung la atacatori, nu la bancă.  Nu accesa linkuri din mesaje: Intră doar pe site-ul oficial (unicredit.ro)",
	},
	{
		test: "/images/phising2.png",
		answear: true,
		explanation:
			"Link-ul duce spre un site ce imită UniCredit, dar nu este oficial. Tactică de urgență („Grăbește-te!”) – presiune tipică pentru fraude.  Contul nu e verificat, dar pare real pentru a induce în eroare",
	},
	{
		test: "images/phising5.jpg",
		answear: false,
		explanation:
			"Link oficial și sigur. Ton profesional și clar.  Date de contact reale. Nu cere informații personale sensibile",
	},
	{
		test: "images/phising6.jpeg",
		answear: false,
		explanation:
			"Adresă de contact oficială. Formulare și ton profesionist.  Fără linkuri suspecte. Numere de contact reale",
	},
];
