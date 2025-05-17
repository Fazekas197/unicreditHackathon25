<template>
	<div>
		<Hero
			tutorial="true"
			bg-img="/images/edFinBg.png"
			alt-img="Educatie Financiara Background"
			title="Cum să înțelegi creditele și să le folosești în avantajul tău"
			paragraph="În acest tutorial vei învăța bazele creditelor: ce înseamnă un credit, cum funcționează și care sunt principalele tipuri – de nevoi personale, ipotecare și de refinanțare. Vei găsi explicații clare, exemple practice și sfaturi utile care te vor ajuta să iei decizii financiare inteligente."
			btn-link="#start"
			btn-text="Start"
		/>

		<section>
			<section
				id="start"
				class="bg-blackBg text-white space-y-15 px-24 py-24"
			>
				<h1 class="text-4xl">
					Cât de multe știi despre credite? - Află acum
				</h1>
				<FinQuiz />
			</section>
		</section>

		<section class="flex gap-x-10 px-24 py-24">
			<div>
				<img src="/images/House.png" alt="Atac Hacker" class="w-full" />
			</div>
			<div class="space-y-3 w-2/5">
				<h1 class="text-3xl">Ce este un credit?</h1>
				<h3 class="text-lg font-extrabold">
					Un credit înseamnă că banca îți împrumută bani pentru o
					nevoie importantă.
				</h3>
				<p class="text-lg">
					Tu te obligi să îi returnezi treptat, lună de lună, cu o
					sumă în plus, numită dobândă. Ca un exemplu simplu: Dacă iei
					10.000 lei de la bancă și trebuie să returnezi 11.200 lei în
					total, înseamnă că 1.200 lei e costul creditului (dobândă +
					alte costuri).
				</p>
				<p class="text-lg">
					Dacă iei
					<b class="font-extrabold">10.000 lei de la bancă</b> și
					trebuie să
					<b class="font-extrabold">returnezi 11.200 lei în total</b>,
					înseamnă că
					<b class="font-extrabold">1.200 lei e costul creditului</b>
					(dobândă + alte costuri).
				</p>
			</div>
		</section>

		<section class="px-24 py-24">
			<h1 class="pb-10 text-3xl text-center w-full">
				Ce tipuri de credit oferă UniCredit?
			</h1>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">Credit de nevoi personale</p>
				<p>
					pentru cheltuieli urgente: frigider nou, reparații, vacanță
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">Credit ipotecar</p>
				<p>pentru cumpărarea unei locuințe</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold"> Credit de refinanțare</p>
				<p>
					dacă vrei să înlocuiești un credit vechi cu unul mai
					avantajos
				</p>
			</div>
			<USeparator class="my-5" />
		</section>

		<section class="flex gap-x-10 px-24 py-24">
			<div>
				<img
					src="/images/payment.png"
					alt="Atac Hacker"
					class="w-full"
				/>
			</div>
			<div class="space-y-3 w-2/5">
				<h1 class="text-3xl">Ce este dobânda?</h1>
				<h3 class="text-lg font-extrabold">
					Dobânda este „prețul” pe care îl plătești pentru că
					folosești banii băncii.
				</h3>
				<p class="text-lg">
					Pentru a pune lucrurile într-o perspectivă mai concretă,
					oferim și un exemplu: Dacă iei
					<b class="font-extrabold">10.000 lei de la bancă</b> și
					trebuie să
					<b class="font-extrabold">returnezi 11.200 lei în total</b>,
					înseamnă că<b class="font-extrabold">
						1.200 lei e costul creditului</b
					>
				</p>
				<div>
					<p class="text-lg">
						Dobândă fixă = rămâne la fel toată perioada.
					</p>
					<p class="text-lg">
						Dobândă variabilă = se poate schimba (poate crește sau
						scădea)
					</p>
				</div>
			</div>
		</section>

		<section class="px-24 py-24">
			<h1 class="pb-10 text-3xl text-center w-full">
				Pașii pentru un credit ipotecar la UniCredit
			</h1>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					1. Mergi la bancă și discută cu un consultant
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					2. Depui cererea și actele (venituri, buletin, imobil)
				</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold"> 3. Evaluarea locuinței</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold"> 4. Primești răspuns de aprobare</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold"> 5. Semnezi contractul la notar</p>
			</div>
			<USeparator class="my-5" />
			<div class="text-lg space-y-3">
				<p class="font-extrabold">
					 6. Primești banii și începi să plătești rata
				</p>
			</div>
			<USeparator class="my-5" />
		</section>

		<Hero
			title="La UniCredit, creditele sunt mai accesibile decât ai crede"
			btn-link="https://www.unicredit.ro/ro/persoane-fizice.html#credite"
			btn-text="Crează-ți un credit acum"
			bg-img="/images/genericBg.png"
			alt-img="Generic Bg Image"
		/>
	</div>
</template>
