<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	let route = '/';
</script>

<TabGroup
	justify="justify-center"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="text-xl bg-surface-100-800-token w-full bottom-0 absolute"
>
	<Tab bind:group={route} name="route" value={'/'} on:click={() => goto('/')}>
		<svelte:fragment slot="lead">
			<div class="mx-auto w-fit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						fill-rule="evenodd"
						d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</svelte:fragment>
		Home
	</Tab>
	<Tab bind:group={route} name="route" value={'/plan/add'} on:click={() => goto('/plan/add')}>
		<svelte:fragment slot="lead">
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
		</svelte:fragment>
		Add
	</Tab>
	<Tab bind:group={route} name="route" value={'/settings'} on:click={() => goto('/settings')}>
		<svelte:fragment slot="lead">
			<div class="mx-auto w-fit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						fill-rule="evenodd"
						d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</svelte:fragment>
		Settings
	</Tab>
	<Tab bind:group={route} name="route" value={'/profile'} on:click={() => goto('/profile')}>
		<svelte:fragment slot="lead">
			<div class="mx-auto w-fit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
					/>
				</svg>
			</div>
		</svelte:fragment>
		Profile
	</Tab>
	<!-- ... -->
</TabGroup>
