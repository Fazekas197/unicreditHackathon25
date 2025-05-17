<template>
	<section class="px-24 py-24">
		<h1 class="text-5xl text-center mb-10">Meet The Team:</h1>
		<div class="grid grid-cols-3 gap-12">
			<NuxtLink
				v-for="member in team"
				:key="member.email"
				:to="member.link"
				class="flex flex-col items-center text-center space-y-2"
			>
				<UAvatar :src="member.poza" class="size-28" />
				<h1 class="text-2xl font-semibold">{{ member.nume }}</h1>
				<p class="text-lg">LinkedIn: {{ member.nume }}</p>
				<p class="text-lg">{{ member.email }}</p>
			</NuxtLink>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import { team } from "~/data/team";
</script>
