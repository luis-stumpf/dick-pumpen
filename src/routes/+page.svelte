<script lang="ts">
	import type Training from '$lib/types/training';

	export let data;
	const trainingData: Training[] = data.data;
</script>

<div class="m-4">
	<h1>Trainings</h1>
	<ul class="list bg-primary-900">
		{#each trainingData as training}
			<li>
				<span>(icon)</span>
				<span class="flex-auto">{training.name}</span>
			</li>
		{/each}
	</ul>
</div>
<button type="button" class="btn-icon variant-filled-tertiary">(icon)</button>
