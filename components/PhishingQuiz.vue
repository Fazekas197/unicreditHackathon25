<template>
	<div v-if="!finished">
		<div class="space-y-10 flex flex-col items-center w-1/2 m-auto">
			<p class="text-2xl">{{ index + 1 }} / {{ quizzes.length }}</p>

			<img
				:src="quizzes[index].test"
				alt="poza cu phishing"
				class="w-1/2"
			/>

			<div>
				<div class="space-x-10">
					<Button
						text="Este Phishing"
						class="bg-brand"
						icon="material-symbols:cancel"
						@click="validate(true, quizzes[index])"
					/>
					<Button
						text="Nu Este Phishing"
						class="bg-green-800"
						icon="icon-park-solid:correct"
						@click="validate(false, quizzes[index])"
					/>
				</div>
				<div class="text-center mt-4">
					<Button
						v-if="quizzes[index].result"
						text="Următoarea întrebare"
						@click="next(quizzes[index])"
					/>
				</div>
			</div>

			<div v-if="quizzes[index].result" class="mt-2 text-center text-2xl">
				{{ quizzes[index].result }}
			</div>
		</div>
	</div>

	<!-- Final screen -->
	<div v-else class="space-y-5 text-center">
		<p class="text-2xl">✅ Ai terminat testul!</p>
		<p class="text-xl">
			Ai
			{{
				Math.round(((quizzes.length - score) / quizzes.length) * 100)
			}}
			% sa fi păcălit
		</p>
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
