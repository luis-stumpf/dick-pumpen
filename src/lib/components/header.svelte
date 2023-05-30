<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';

	$: getName = () => {
		switch ($page.route.id?.split('/').at(-1)) {
			case '':
				return 'Home';
			case 'add':
				return 'New plan';
			case 'settings':
				return 'Settings';
			case 'profile':
				return 'Profile';
			default:
				return 'Error';
		}
	};
</script>

<AppBar>
	<span class="font-bold">{getName()}</span>
</AppBar>
