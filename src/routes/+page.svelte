<script>
	import { DarkMode } from 'flowbite-svelte';
	export let data;
</script>

<h1>Home</h1>
<h1>{JSON.stringify(data)}</h1>
<DarkMode />
