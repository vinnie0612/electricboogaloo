<script lang="ts">
  import { goto } from '$app/navigation';
  import { currentUser, signIn, signOut } from '$lib/util/pocketbase';

  let username = '';
  $: username = $currentUser?.email.split('@')[0];
</script>

<div class="flex flex-row justify-between mx-2">
  {#if $currentUser}
    <p>{username}</p>
    <button
      on:click={() => {
        goto('/post');
      }}
      class="font-bold"
    >
      new post</button
    >
    <button on:click={signOut}>sign out</button>
  {:else}
    <p />
    <button on:click={signIn}>sign in</button>
  {/if}
</div>
