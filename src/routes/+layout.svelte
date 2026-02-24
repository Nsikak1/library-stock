<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import OfflineBanner from './offlineBanner.svelte';
	import "./styles/global.css";

	let { children } = $props();

	 export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Library Stock</title>
</svelte:head>


<OfflineBanner />
{@render children()}
<!-- export const prerender = true; -->