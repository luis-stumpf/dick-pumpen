<script>
	import BottomNav from '$lib/components/bottomNav.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let pageName;
</script>

<Header />
<slot />
<BottomNav />
