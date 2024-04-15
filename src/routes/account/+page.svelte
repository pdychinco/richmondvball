<script lang="ts">
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    // $page.data.session -> { user, image, etc.. }
    console.log($page.data.session);


</script>

<h2 class="h2">this is the login page</h2>
<div>
    {#if $page.data.session}
        <h1>You are logged in</h1>
        <button on:click={() => signOut()} class="bg-blue-500 py-1 px-2 rounded text-white font-bold">Sign out</button>
    {:else}
        <h1>You are not logged in</h1>
        <button on:click={() => signIn("github")} class="bg-blue-500 py-1 px-2 rounded text-white font-bold">Sign in with Github</button>
    {/if}
</div>