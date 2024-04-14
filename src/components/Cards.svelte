<script>
    /**
	 * @type {any}
	 */
     export let startDate;

    /**
	 * @type {any}
	 */
    export let endDate;

    /**
	 * @type {any}
	 */
    export let cost;

        /**
	 * @type {any}
	 */
     export let attendee;

    const date = startDate.split(' ')[0];
    const startTime = startDate.split(' ')[1].split('.')[0];
    const endTime = endDate.split(' ')[1].split('.')[0];
</script>

<div>
    <h4 class="h4">{date}</h4>
    <p>Time: {startTime} - {endTime}</p>
    <p>Total cost: ${cost}</p>
    <p>Remaining spots: {24 - attendee}</p>
    <button>Sign Up</button>
</div>