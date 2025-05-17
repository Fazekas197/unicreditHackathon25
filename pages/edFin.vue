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
				<h1 class="text-4xl text-center">
					Este sau nu phishing? - Testează-ți cunoștințele
				</h1>
				<FinQuiz />
			</section>
		</section>

		<section class="flex gap-x-10 px-24 py-24">
			<div>
				<img src="/images/house.png" alt="Atac Hacker" class="w-full" />
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
	</div>
</template>
