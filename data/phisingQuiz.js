export const phisingQuiz = [
	{
		test: "/images/phising1.png",
		answear: false,
		explanation:
			"Acest link NU aparține UniCredit! Observi domeniul dubios? E un semnal clar de phishing.",
	},
	{
		test: "/images/phising2.png",
		answear: false,
		explanation:
			"Link-ul lung și complicat e o păcăleală. Domeniul NU e oficial. E un SMS clasic de phishing.",
	},
	{
		test: "/images/phising3.png",
		answear: false,
		explanation:
			"UniCredit nu trimite facturi prin astfel de link-uri externe. Domeniul e fals, gândit să păcălească vizual.",
	},
	{
		test: "/images/phising4.jpg",
		answear: true,
		explanation:
			"Acesta este un mesaj oficial de la UniCredit. E-mailul e corect, iar link-ul te duce pe site-ul nostru.",
	},
];
