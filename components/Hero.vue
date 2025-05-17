<template>
	<!-- HERO -->
	<section
		class="relative before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0"
	>
		<img :src="bgImg" :alt="altImg" class="w-full" />
		<div class="text-white absolute top-0 mx-24 my-24 space-y-9 w-2/5">
			<NuxtLink v-if="tutorial" to="/" class="mb-10 block text-k3">
				ÎNAPOI LA TUTORIALE
			</NuxtLink>
			<h1 class="text-4xl font-extrabold">
				{{ title }}
			</h1>
			<p class="text-lg">
				{{ paragraph }}
			</p>
			<NuxtLink :to="btnLink">
				<Button :text="btnText" class="cursor-pointer" />
			</NuxtLink>
		</div>
		<div class="h-2.5 bg-brand"></div>
	</section>
</template>

<script setup>
	const props = defineProps([
		"title",
		"paragraph",
		"btnText",
		"btnLink",
		"bgImg",
		"altImg",
		"tutorial",
	]);
</script>
