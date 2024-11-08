<template>
	<div class="fondo w-autorounded-3 p-5 shadow position-relative d-flex rounded-5" :class="props.direction">
		<div class="celu position-relative">
			<img :src="props.celu_url" class="position-absolute h-auto m-auto m-0" alt="Pantalla de SugarCoach">
		</div>

		<div class="text-container m-auto">
			<h3>H3</h3>
			<p class="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit adipisci voluptatem distinctio
				error?
				Ex placeat eius quidem illo amet, quos accusamus exercitationem molestiae voluptatibus minima sint
				dicta
				reprehenderit distinctio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
				eos
			</p>
		</div>
		<div v-if="!props.last" class="d-flex gap-4 gap-sm-5 position-absolute tira">
			<div class="t1 h-100"></div>
			<div class="t2 h-100"></div>
		</div>

	</div>

</template>

<script setup>
import { onMounted } from 'vue';

name: "funcionalidadApp";
const props = defineProps({
	celu_url: {
		type: String,
		required: true,
	},
	direction: {
		type: String,
		required: true,
	},
	last: {
		type: Boolean,
		defaut: false,
	}
});
</script>

<style scoped lang="scss">
$top: 3rem;


@mixin screenStyles ($size, $aspectRatio) {
	aspect-ratio: $aspectRatio;

	.celu {
		width: 1px;

		img {
			filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.2));
			top: $top;
			width: $size;
		}
	}

	$size: $size/2.2;
	$move-celu: calc((-1) * (1.5rem + $size));
	$move-all: calc((-1) * $size/2 - 1.5rem);
	$tira-move: calc(50% - (1.5rem + max(6vw, 40px) - $move-all/2));
	&.left {
		flex-direction: row;
		margin-right: $move-all;

		.tira {
			right: $tira-move;
		}

		.celu {
			img {
				left: $move-celu;
			}
		}

		.text-container {
			margin-right: 0 !important;
		}
	}

	&.right {
		flex-direction: row-reverse;
		margin-left: $move-all;

		.tira {
			left: $tira-move;
		}

		.celu {
			img {
				right: $move-celu;
			}
		}

		.text-container {
			margin-left: 0 !important;
		}
	}
}



.fondo {
	width: 800px;
	max-width: 80vw;
	min-height: fit-content !important;
	padding-bottom: relative !important;
	background-color: rgb(248, 248, 248);
	@include screenStyles(250px, 7/4);

	.tira {
		height: calc(90vh + 6%);
		bottom: -90vh;

		.t1,
		.t2 {
			width: 6vw;
			max-width: 40px;
		}

		.t1 {
			background: linear-gradient(0deg, #8694B7 0%, #3B4151 64%);
		}

		.t2 {
			background: linear-gradient(0deg, rgba(232, 232, 232, 1) 0%, rgba(135, 145, 171, 1) 64%);
		}
	}

	.text-container {
		width: 75%;

		p {
			width: 90%;
		}
	}
}

@media only screen and (max-width: 992px) {

	h3 {
		color: red;
	}

	.fondo {
		width: 605px;
		@include screenStyles(220px, 7/5);
	}
}

@media only screen and (max-width: 768px) {
	h3 {
		color: violet;
	}

	.fondo {
		width: 480px;
		@include screenStyles(190px, 6/5);
	}
}

@media only screen and (max-width: 575px) {
	h3 {
		color: violet;
	}

	.fondo {
		width: 380px;
		@include screenStyles(180px, 1/1);
	}
}
</style>
