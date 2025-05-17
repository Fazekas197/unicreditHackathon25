<template>
	<UButton
		class="text-lg py-3 px-5 rounded-sm hover:bg-[#006375]"
		:class="{ 'bg-secondBtn hover:bg-secondBtnHover': secondType }"
		>{{ text }}</UButton
	>
</template>

<script setup>
	const props = defineProps(["text", "secondType"]);
</script>
