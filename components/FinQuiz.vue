<template>
	<div class="space-y-4" v-if="currentIndex < finQuiz.length">
		<p class="text-3xl">{{ currentQuestion.question }}</p>
		<div>
			<URadioGroup
				v-model="userOption"
				:items="currentQuestion.options"
				:ui="{
					wrapper: 'space-y-4',
					container: 'flex items-center space-x-3',
					label: 'text-white text-lg leading-none',
				}"
			/>
		</div>
		<p class="text-lg">{{ rezultat }}</p>
		<div class="flex space-x-10">
			<Button @click="validate" text="Verifică" />
			<Button
				v-if="rezultat"
				@click="nextQuestion"
				text="Următoarea întrebare"
			/>
		</div>
	</div>

	<div v-else class="space-y-3">
		<p class="text-xl">✅ Ai terminat testul!</p>
		<p class="text-lg">
			Ai răspuns corect la {{ score }} din {{ finQuiz.length }} întrebări.
		</p>
		<Button @click="restartQuiz" text="Reîncearcă testul" />
	</div>
</template>

<script setup>
	import { finQuiz } from "~/data/finQuiz";

	const currentIndex = ref(0);
	const userOption = ref("");
	const rezultat = ref("");
	const score = ref(0);

	const currentQuestion = computed(() => finQuiz[currentIndex.value]);

	function validate() {
		if (userOption.value === currentQuestion.value.answer) {
			rezultat.value = "✅ Corect";
			score.value++;
		} else {
			rezultat.value = `❌ Greșit: ${currentQuestion.value.answer}`;
		}
	}

	function nextQuestion() {
		currentIndex.value++;
		userOption.value = "";
		rezultat.value = "";
	}

	function restartQuiz() {
		currentIndex.value = 0;
		score.value = 0;
		userOption.value = "";
		rezultat.value = "";
	}
</script>
