<template>
	<div class="d-flex">
		<img :src="props.celu_url" alt="Pantalla de SugarCoach">
		<div class="sugarView-explain w-auto rounded-3  p-5 shadow">
			<h3>{{ props.celu_url }}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit adipisci voluptatem distinctio error?
				Ex placeat eius quidem illo amet, quos accusamus exercitationem molestiae voluptatibus minima sint dicta
				reprehenderit distinctio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eos
				distinctio perspiciatis voluptates. Eaque sapiente dicta iusto saepe, repellat earum id dolorem. At,
				magnam enim. Ipsam sint cumque quaerat amet.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure quaerat quo eligendi enim maiores ab
				ipsum explicabo, earum dignissimos alias, expedita debitis repellat odit obcaecati ea voluptas eveniet
				sunt.
			</p>
		</div>
	</div>

</template>

<script setup>
name: "funcionalidadApp";
const props = defineProps(["celu_url"])
</script>

<style scoped lang="scss">
.sugarView-explain {
	max-width: 50vw;
	height: 80vh;
}
</style>
