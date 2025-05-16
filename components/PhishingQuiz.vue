<template>
	<div class="space-y-10" v-if="!finished">
		<div>
			<img
				:src="quizzes[index].test"
				alt="poza cu phishing"
				class="w-3/12"
			/>

			<div class="space-x-10">
				<Button
					text="Este Phishing"
					@click="validate(true, quizzes[index])"
				/>
				<Button
					text="Nu Este Phishing"
					@click="validate(false, quizzes[index])"
				/>
				<Button
					v-if="quizzes[index].result"
					text="Următoarea întrebare"
					@click="next(quizzes[index])"
				/>
			</div>

			<div v-if="quizzes[index].result" class="mt-2">
				{{ quizzes[index].result }}
			</div>
		</div>
	</div>

	<!-- Final screen -->
	<div v-else class="space-y-5">
		<p class="text-xl">✅ Ai terminat testul!</p>
		<p class="text-lg">Scor final: {{ score }} / {{ quizzes.length }}</p>
		<Button text="Reîncearcă testul" @click="restart" />
	</div>
</template>

<script setup>
	import { reactive, ref, computed } from "vue";
	import { phishingQuiz } from "../data/phishingQuiz";

	// Fisher-Yates shuffle
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	let quizzes = reactive(
		shuffle(phishingQuiz.map((q) => ({ ...q, result: null })))
	);

	const index = ref(0);
	const score = ref(0);
	const finished = ref(false);

	function validate(answ, quiz) {
		if (quiz.result !== null) return; // prevenim validări multiple

		if (answ === quiz.answear) {
			score.value++;
			quiz.result = "✅ Corect!";
			if (answ === false) {
				quiz.result = `✅ Corect: ${quiz.explanation}`;
			}
		} else {
			quiz.result = `❌ Greșit: ${quiz.explanation}`;
		}
	}

	function next(quiz) {
		if (index.value < quizzes.length - 1) {
			index.value++;
		} else {
			finished.value = true;
		}
		quiz.result = null;
	}

	function restart() {
		quizzes = reactive(
			shuffle(phishingQuiz.map((q) => ({ ...q, result: null })))
		);
		index.value = 0;
		score.value = 0;
		finished.value = false;
	}
</script>
