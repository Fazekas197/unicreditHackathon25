<template>
	<div>
		<div v-for="quiz in phisingQuiz">
			{{ quiz.test }}

			<div class="space-x-10">
				<UButton @click="validate(true, quiz)">Da</UButton>
				<UButton @click="validate(false, quiz)">Nu</UButton>
			</div>
		</div>

		{{ result }}
	</div>
</template>

<script setup>
	import { phisingQuiz } from "../data/phisingQuiz";

	const result = ref("");
	function validate(answ, quiz) {
		if (answ === quiz.answear) {
			result.value = "Corect";
		} else {
			result.value = `Este gresit: ${quiz.explanation}`;
		}
	}
</script>
