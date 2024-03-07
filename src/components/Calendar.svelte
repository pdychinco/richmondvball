<script lang="ts">
    import Card from "./Cards.svelte";
    import PocketBase, { type RecordModel } from 'pocketbase';

    const url = 'https://richmondvball.pockethost.io/'
    const client = new PocketBase(url)
    let data: RecordModel[];
    async function getData() {
        data = await client.collection('sessions').getFullList({
        sort: '-created',
    });
    }
    
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
        grid-template-rows: auto;
    }
    @media only screen and (max-width: 400px) {
        #cards {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        }
    }

    @media only screen and (max-width: 599px) {
        #cards {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        }
    }
    @media only screen and (min-width: 600px) {
        #cards {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
        }
    }

    @media only screen and (min-width: 800px) {
        #cards {
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 3rem;
        }
    }
    
</style>