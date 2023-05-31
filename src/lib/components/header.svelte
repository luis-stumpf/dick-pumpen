<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';

	$: getName = () => {
		let route = $page.route.id?.split('/');
		switch (route?.at(1)) {
			case '':
				return 'Home';
			case 'plan':
				if (route[2] === 'add') return 'Add';
				return 'Training';
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
