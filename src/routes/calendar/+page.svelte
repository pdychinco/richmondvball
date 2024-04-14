<script>
    import Calendar from "../../components/Calendar.svelte";
	/**
	 * @type {any}
	 */
	export let data; 
</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">See below for upcoming sessions</h2>
		<!-- Animated Logo -->
		<Calendar data={data.data}/>
		<!-- / -->

	</div>
</div>