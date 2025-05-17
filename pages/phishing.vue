<template>
	<div>
		<Hero
			tutorial="true"
			bg-img="/images/fraudaBg.png"
			alt-img="Siguranta Online Background"
			title="Siguranță Online – Fii cu un pas înaintea pericolelor digitale"
			paragraph="Învață să-ți protejezi informațiile personale și banii împotriva celor mai noi amenințări din mediul digital. Phishing-ul nu e o poveste, e o realitate."
			btn-text="Start"
			btn-link="#start"
		/>

		<section
			id="start"
			class="bg-blackBg text-white space-y-15 px-24 py-24"
		>
			<h1 class="text-4xl text-center">
				Este sau nu phishing? - Testează-ți cunoștințele
			</h1>
			<PhishingQuiz />
		</section>

		<section class="flex gap-x-10 px-24 py-24">
			<div>
				<img
					src="/images/processing.png"
					alt="Procesarea Platei"
					class="w-full"
				/>
			</div>
			<div class="space-y-3 w-2/5">
				<h1 class="text-3xl">Ce este phishing-ul?</h1>
				<p class="text-lg">
					<b class="font-extrabold">Scopul phishing-ului:</b> Furt de
					bani, identitate sau compromiterea securității contului tău.
				</p>
				<p class="text-lg">
					Phishing-ul reprezintă
					<b class="font-extrabold">o metodă de fraudă</b> prin care
					atacatorii încearcă să obțină
					<b class="font-extrabold">date personale</b> (parole, coduri
					PIN, date bancare) prin
					<b class="font-extrabold">mesaje false</b> care par a fi
					trimise de instituții de încredere, cum ar fi bănci,
					furnizori de servicii sau chiar autorități.
				</p>
			</div>
		</section>

		<section class="px-24 py-24">
			<h1 class="pb-10 text-3xl text-center w-full">
				Cum recunoaștem un email de tip phishing?
			</h1>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Adrese de e-mail neobișnuite sau suspecte
				</p>
				<p>
					Exemple: support@unicredit-secure-login.info,
					info-banca@security-alert.net
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">Mesaje cu un ton de urgență falsă</p>
				<p>
					Formulări precum: „Contul dumneavoastră va fi suspendat!”,
					„Este necesară confirmarea imediată a datelor!”
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Link-uri înșelătoare, mascate sub denumiri legitime dar care
					redirecționează către site-uri frauduloase
				</p>
				<p>
					Exemplu: un link care pare a fi unicredit.ro, dar duce către
					un domeniu necunoscut.
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Erori gramaticale sau exprimări nefiresc formulate
				</p>
				<p>
					Acestea nu reflectă standardele profesionale ale
					instituțiilor oficiale
				</p>
			</div>
			<USeparator class="my-5" />
		</section>

		<section class="px-24 py-24">
			<h1 class="pb-10 text-3xl text-center w-full">
				Ce trebuie să faci pentru a te proteja?
			</h1>
			<div class="flex justify-around">
				<div class="space-y-5">
					<img
						src="/icons/toDoIcon.svg"
						alt="To Do Icon"
						class="m-auto"
					/>
					<div class="text-lg space-y-5">
						<p class="font-extrabold">
							Verifică întotdeauna adresa de e-mail a
							expeditorului
						</p>
						<p>
							<b class="font-extrabold"
								>Nu accesa link-uri dubioase</b
							>, verifică-le înainte
						</p>
						<p>
							<b class="font-extrabold"
								>Nu furniza date personale</b
							>
							sau bancare prin e-mail/SMS
						</p>
						<p>
							În caz de suspiciune,
							<b class="font-extrabold"
								>contactează direct banca la numărul oficial</b
							>
						</p>
					</div>
				</div>
				<div class="space-y-5">
					<img
						src="/icons/toDoIcon.svg"
						alt="To Do Icon"
						class="m-auto"
					/>
					<div class="text-lg space-y-5">
						<p class="font-extrabold">
							Verifică întotdeauna adresa de e-mail a
							expeditorului
						</p>
						<p>
							<b class="font-extrabold"
								>Nu accesa link-uri dubioase</b
							>, verifică-le înainte
						</p>
						<p>
							<b class="font-extrabold"
								>Nu furniza date personale</b
							>
							sau bancare prin e-mail/SMS
						</p>
						<p>
							În caz de suspiciune,
							<b class="font-extrabold"
								>contactează direct banca la numărul oficial</b
							>
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="flex gap-x-10 px-24 py-24">
			<div>
				<img
					src="/images/spoofing.png"
					alt="Procesarea Platei"
					class="w-full"
				/>
			</div>
			<div class="space-y-3 w-2/5">
				<h1 class="text-3xl">Ce este spoofing-ul?</h1>
				<p class="text-lg">
					Spoofingul este o tehnică de fraudă prin care infractorii
					cibernetici își falsifică identitatea pentru a părea că sună
					sau trimit mesaje din partea unei instituții de încredere,
					cum ar fi banca. Pot apărea pe ecranul telefonului dvs. cu
					numărul real al băncii sau cu un nume cunoscut. Acest lucru
					NU înseamnă că apelul este autentic.
				</p>
			</div>
		</section>

		<section class="px-24 py-24">
			<h1 class="pb-10 text-3xl text-center w-full">
				Cum recunoaștem spoofing?
			</h1>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Număr cunoscut sau oficial, dar vocea sau tonul sună urgent
					sau amenințător
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Ți se cere să oferi informații sensibile (PIN, coduri OTP,
					date personale).
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Se prezintă drept „banca”, „poliția”, „ANAF” sau altă
					autoritate și insistă să acționezi rapid.
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					Nu îți dau timp să verifici, spun că e o situație „de
					urgență” sau „confidențială”.
				</p>
			</div>
			<USeparator class="my-5" />
			<div>
				<h1 class="text-center text-2xl mt-16">Exemplu de Spoofing</h1>
				<audio controls class="w-full mt-5">
					<source src="/voice/vishing.mp3" type="audio/mpeg" />
				</audio>
			</div>
		</section>

		<Hero
			title="Simți că informațiile tale ar putea fi fraudate? UniCredit îți oferă siguranță"
			bg-img="/images/genericBg.png"
			alt-img="Generic bg"
			btn-link="https://www.unicredit.ro/ro/persoane-fizice.html?_gl=1*1fnxdj1*_up*MQ..*_gs*MQ..&gclid=CjwKCAjw56DBBhAkEiwAaFsG-vE4oUntJLgpnB-P7d5RT05wewRVd67XM41yUN5D7y94ZiyFfIb_qBoCZ-wQAvD_BwE#home"
			btn-text="Creează-ți Cont"
		/>
	</div>
</template>

<script lang="ts" setup></script>
