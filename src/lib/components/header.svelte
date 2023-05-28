<script lang="ts">
	import { page } from '$app/stores';

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

<div
	class="font-bold w-full z-50 text-5xl text-gray-500 border-b-4 border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
>
	<h1>{getName()}</h1>
</div>
