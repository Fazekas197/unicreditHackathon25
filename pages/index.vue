<template>
	<div>
		<h1 class="text-9xl">wow</h1>
		{{ questions }}
	</div>
</template>

<script setup>
	import { phisingQuiz } from "../data/phisingQuiz.js";
	const questions = phisingQuiz;
</script>
