<template>
	<div>
		<!-- HERO -->
		<section
			class="relative before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0"
		>
			<img
				src="/bg/HomeBg.png"
				alt="Home Page Background"
				class="w-full"
			/>
			<div class="text-white absolute top-0 mx-24 my-24 space-y-9 w-2/5">
				<h1 class="text-4xl font-extrabold">
					UniCredit Learning - Simplu. Clar. Pentru toți.
				</h1>
				<p class="text-lg">
					La UniCredit, credem că încrederea în deciziile financiare
					începe cu înțelegerea lor. De aceea, am creat un spațiu
					digital dedicat tuturor celor care vor să își gestioneze
					banii mai bine — indiferent de vârstă sau nivel de
					cunoștințe.
				</p>
				<Button text="Explorează acum" />
			</div>
			<div class="h-2.5 bg-brand"></div>
		</section>

		<!-- TUTORIAL 1 -->
		<section class="flex gap-x-10 mx-24 my-24">
			<div>
				<img
					src="/images/phishingImg.png"
					alt="Atac Hacker"
					class="w-full"
				/>
			</div>
			<div class="space-y-3 w-2/5">
				<h1 class="text-3xl">Ghid împotriva înșelătoriilor</h1>
				<h3 class="text-lg font-extrabold">
					Fii informat. Fii vigilent. Fii în siguranță.
				</h3>
				<p class="text-lg">
					În acest tutorial interactiv vei învăța cum să identifici
					încercările de fraudă online, prin exemple concrete și un
					scurt exercițiu practic. Vei avea ocazia să testezi
					diferența dintre comunicările reale și cele false, într-un
					mod simplu și clar.
				</p>
				<NuxtLink to="/phishing">
					<Button
						second-type="true"
						text="Învață acum"
						class="mt-5"
					/>
				</NuxtLink>
			</div>
		</section>

		<!-- TUTORIAL 2 -->
		<section class="flex gap-x-10 px-24 py-24 bg-greyBg justify-between">
			<div class="space-y-3 w-2/4">
				<h1 class="text-3xl">Mobile Banking UniCredit</h1>
				<h3 class="text-lg font-extrabold">
					Siguranță, acces rapid și control total – totul la îndemâna
					ta.
				</h3>
				<p class="text-lg">
					În acest tutorial interactiv vei învăța cum să identifici
					Descoperă cum să folosești aplicația UniCredit Mobile
					Banking simplu și în siguranță. În acest tutorial
					interactiv, vei învăța pașii esențiali pentru a-ți verifica
					contul, a efectua plăți și a gestiona cardurile direct de pe
					telefon, fără complicații.
				</p>
				<NuxtLink to="/mobileBanking">
					<Button
						second-type="true"
						text="Învață acum"
						class="mt-5"
					/>
				</NuxtLink>
			</div>
			<div>
				<img
					src="/images/mbBankingImg.png"
					alt="Mobile Banking App"
					class="w-full"
				/>
			</div>
		</section>
	</div>
</template>
