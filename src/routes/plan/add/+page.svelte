<script lang="ts">
	import type Exercise from '$lib/types/exercise';
	import { each } from 'svelte/internal';

	let newExercise: Exercise = {
		name: '',
		repAmount: 0,
		globalWeight: 0
	};

	let exercises: Exercise[] = [];

	function add() {
		exercises = [...exercises, newExercise];
		newExercise = {
			name: '',
			repAmount: 0,
			globalWeight: 0
		};
	}
</script>

<div class="card p-4 m-4 variant-gradine-surface text-2xl">
	<form action="add">
		<header class="card-header">
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" placeholder="Input" />
			</label>
		</header>
		<section class="p-4">
			{#each exercises as exercise}
				<div class="card my-2 variant-ghost-primary">
					<header>{exercise.name}</header>
					<section>
						<p>{exercise.repAmount}</p>
						<p>{exercise.globalWeight}</p>
					</section>
				</div>
			{/each}
		</section>

		<footer class="card-footer">
			<label class="label">
				<span>New:</span>
				<input class="input" type="text" placeholder="Name" bind:value={newExercise.name} />
				<div class="flex content-between">
					<input
						class="input mr-2"
						type="number"
						placeholder="Sets"
						bind:value={newExercise.repAmount}
					/>
					<input
						class="input mr-2"
						type="number"
						placeholder="Weight"
						bind:value={newExercise.globalWeight}
					/>
					<button type="button" class="btn variant-filled" on:click={add}>
						<div class="mx-auto w-fit">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</button>
				</div>
			</label>
		</footer>
	</form>
</div>
