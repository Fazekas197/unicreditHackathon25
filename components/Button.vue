<template>
	<UButton class="text-lg py-3 px-5 rounded-sm">{{ text }}</UButton>
</template>

<script setup>
	const props = defineProps(["text"]);
</script>
