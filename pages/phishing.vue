<template>
	<div>
		<Hero
			tutorial="true"
			bg-img="/images/fraudaBg.png"
			alt-img="Siguranta Online Background"
			title="Siguranță Online – Fii cu un pas înaintea pericolelor digitale"
			paragraph="Învață să-ți protejezi informațiile personale și banii împotriva celor mai noi amenințări din mediul digital. Phishing-ul nu e o poveste, e o realitate."
			btn-text="Start"
			btn-link="#start"
		/>

		<section id="start">
			<PhishingQuiz />
		</section>
	</div>
</template>

<script lang="ts" setup></script>
