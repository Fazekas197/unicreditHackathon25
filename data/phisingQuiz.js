export const phisingQuiz = [
	{
		test: "„Stimate client, vă rugăm să accesați link-ul de mai jos pentru a confirma detaliile contului dvs. pentru a evita suspendarea. Link: http://unicredit-verify-account.security-check.com",
		answear: false,
		explanation:
			"Acest link NU aparține UniCredit! Observi domeniul dubios? E un semnal clar de phishing.",
	},
	{
		test: "„UniCredit: Sesiune suspectă detectată! Accesați urgent portalul de verificare pentru a bloca accesul neautorizat.” Link: http://unicredit-secure-alert-login-update.com",
		answear: false,
		explanation:
			"Link-ul lung și complicat e o păcăleală. Domeniul NU e oficial. E un SMS clasic de phishing.",
	},
	{
		test: "„Stimate client, a fost emisă o nouă factură pentru serviciile UniCredit. Descărcați documentul de mai jos pentru detalii.” Link: http://unicredit-billing-documents-download.com",
		answear: false,
		explanation:
			"UniCredit nu trimite facturi prin astfel de link-uri externe. Domeniul e fals, gândit să păcălească vizual.",
	},
];
