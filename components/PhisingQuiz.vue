<template>
	<div class="space-y-10">
		<div>
			<img :src="quizzes[index].test" alt="poza cu phising" />

			<div class="space-x-10">
				<Button
					text="Este Phising"
					@click="validate(true, quizzes[index])"
				/>
				<Button
					text="Nu Este Phising"
					@click="validate(false, quizzes[index])"
				/>
				<div v-if="quizzes[index].result">
					<Button text="Next" @click="next" />
				</div>
			</div>

			<div v-if="quizzes[index].result" class="mt-2">
				{{ quizzes[index].result }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from "vue";
	import { phisingQuiz } from "../data/phisingQuiz";

	const quizzes = reactive(phisingQuiz.map((q) => ({ ...q, result: null })));

	function validate(answ, quiz) {
		if (answ === quiz.answear) {
			quiz.result = "✅ Corect!";
		} else {
			quiz.result = `❌ Gresit: ${quiz.explanation}`;
		}
	}

	const index = ref(0);
	function next() {
		if (index.value >= quizzes.length - 1) {
			index.value = 0;
		} else {
			index.value++;
		}
	}
</script>
