<script>
    import Card from "./Cards.svelte";
    let data = [
        {
            "date":"2024-02-21",
            "time":"3pm - 5pm",
            "cost":"$154"
        },
        {
            "date":"2024-02-28",
            "time":"3pm - 5pm",
            "cost":"$154"
        },
        {
            "date":"2024-03-02",
            "time":"3pm - 5pm",
            "cost":"$154"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        },
        {
            "date":"2024-03-09",
            "time":"2pm - 5pm",
            "cost":"$255"
        }
    ]
</script>
<h1 class="h1">this is the calendar component</h1>

<div id="cards">
    {#each data as cardDetail}
        <Card date={cardDetail.date} time={cardDetail.time} cost={cardDetail.cost}/>
    {/each}
</div>

<style>
    #cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-gap: 3rem;
    }
</style>