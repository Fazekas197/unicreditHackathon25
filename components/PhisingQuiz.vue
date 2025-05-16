<template>
	<div class="space-y-10">
		<div>
			<img
				:src="quizzes[index].test"
				alt="poza cu phising"
				class="w-3/12"
			/>

			<div class="space-x-10">
				<Button
					text="Este Phising"
					@click="validate(true, quizzes[index])"
				/>
				<Button
					text="Nu Este Phising"
					@click="validate(false, quizzes[index])"
				/>
				<Button
					v-if="quizzes[index].result"
					text="Next"
					@click="next(quizzes[index])"
				/>
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
	function next(quiz) {
		if (index.value >= quizzes.length - 1) {
			index.value = 0;
		} else {
			index.value++;
		}
		quiz.result = null;
	}
</script>
