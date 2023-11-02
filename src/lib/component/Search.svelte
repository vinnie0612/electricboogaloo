<script lang="ts">
  import { filter, updateFilter } from '$lib/util/filter';
  import { posts } from '$lib/store/post';
  let search = '';

  import { page as webPage } from '$app/stores';
  import { goto } from '$app/navigation';
  const q = $webPage.url.searchParams.get('q');
</script>

<div class="flex justify-center">
  <form
    on:submit|preventDefault={() => {
      updateFilter(search);
    }}
    class="flex flex-row mt-3 w-full mx-2 items-center"
  >
    <input
      type="text"
      placeholder="search"
      bind:value={search}
      class="w-[95%] h-8 border bg-gray-950 p-1 text-center"
    />
    <button type="submit" class="bg-gray-950 border p-1 h-8 ml-2 px-2">go</button>
    {#if $filter}
      <button
        on:click={() => {
          filter.set('');
          if (q) {
            goto('/');
          }
        }}
        class="bg-gray-950 border text-center h-8 ml-2 px-2">home</button
      >
    {/if}
  </form>
</div>
{#if $filter}
  <p class="text-center mt-2">{$posts.length} results for {$filter}</p>
{/if}
<hr class="mt-3" />
