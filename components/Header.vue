<template>
	<header class="px-10 py-5 flex justify-between items-center">
		<div>
			<NuxtLink to="/" class="space-x-5 flex items-end">
				<img src="/images/logo.svg" class="h-7" alt="logo Unicredit" />
				<h4 class="text-xl text-secondary font-extrabold">LEARNING</h4>
			</NuxtLink>
		</div>
		<div class="text-black flex gap-x-10">
			<NuxtLink to="/phishing" class="flex flex-col items-center gap-y-2">
				<img src="/icons/diamond.svg" class="h-6" alt="diamond icon" />
				<p>SIGURANȚĂ ONLINE</p>
			</NuxtLink>
			<NuxtLink
				to="/mobileBanking"
				class="flex flex-col items-center gap-y-2"
			>
				<img src="/icons/mobile.svg" class="h-6" alt="diamond icon" />
				<p>MOBILE BANKING</p>
			</NuxtLink>
			<NuxtLink to="/edFin" class="flex flex-col items-center gap-y-2">
				<img src="/icons/money.svg" class="h-6" alt="diamond icon" />
				<p>EDUCAȚIE FINANCIARĂ</p>
			</NuxtLink>
		</div>
		<div class="text-black">
			<NuxtLink to="#footer" class="flex flex-col items-center gap-y-2">
				<img src="/icons/contact.svg" class="h-6" alt="diamond icon" />
				<p class="font-extrabold">CONTACT</p>
			</NuxtLink>
		</div>
	</header>
</template>
