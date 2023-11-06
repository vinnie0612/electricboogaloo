<script lang="ts">
  import { goto } from '$app/navigation';
  import { currentUser, signIn, signOut } from '$lib/util/pocketbase';

  let username = '';
  $: username = $currentUser?.email.split('@')[0];
</script>

<div class="flex justify-between flex-row mx-2">
  {#if $currentUser}
  <div class="md:w-1/3 w-auto ">
    <p>{username}</p>
  </div>
  <div class="md:w-1/3 w-auto text-center">
    <button
    on:click={() => {
      goto('/post');
    }}
      class="font-bold"
      >
      new post</button
      >
  </div>
  <div class="md:w-1/3 w-auto  text-right">
    <button on:click={signOut}>sign out</button>
  </div>
  {:else}
    <p />
    <button on:click={signIn}>sign in</button>
  {/if}
</div>
