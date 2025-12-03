<!-- Container.svelte -->
<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="mx-auto justify-center px-12 md:w-[1280px] md:px-20 {className}">
	<slot />
</div>
