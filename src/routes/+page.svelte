<script lang="ts">
  import Nav from '$lib/component/nav/Nav.svelte';
  import Search from '$lib/component/Search.svelte';
  import PostCard from '$lib/component/card/Card.svelte';

  import { posts, fetchPosts } from '$lib/store/post';
  import { filter } from '$lib/util/filter';
  import { nextSort, sort } from '$lib/util/sort';
  import { page as webPage } from '$app/stores';
  import { onMount } from 'svelte';
  import { currentUser, pb, signOut } from '$lib/util/pocketbase';
  let page = 1;

  filter.subscribe((value) => {
    page = 1;
    fetchPosts(page, value, $sort.filter);
  });

  $: fetchPosts(page, $filter, $sort.filter);

  onMount(async () => {
    const q = $webPage.url.searchParams.get('q');
    if (q) {
      filter.set('id="' + q + '"');
    }
    fetchPosts(page, $filter, $sort.filter);
  });

  const signOutIfBanned = async () => {
    if ($currentUser) {
      let user = await pb.collection('users').getOne($currentUser.id);
      console.log(user.isBanned);
      if (user.isBanned) {
        console.log('Naughty naughty!');
        await signOut();
      }
    } else {
    }
  };

  signOutIfBanned();
</script>

<main class="bg-gray-950 min-h-screen md:py-4 text-white">
  <div class="mx-auto md:border max-w-3xl">
    <Nav />
    {#await fetchPosts(page, $filter, $sort.filter)}
      <p class="text-center">loading...</p>
    {:then}
      <div class="max-w-3xl border border-none mx-auto">
        <div class="flex flex-row justify-between mx-2 mt-2">
          {#if $posts.pages > 1}
            <button
              on:click={() => {
                if (page <= 1) return;
                page--;
              }}>prev</button
            >

            <p>page {page}/{$posts.pages}</p>
          {:else}
            <p>{$posts.length} posts, 1 page</p>
          {/if}

          <button
            on:click={() => {
              nextSort();
              page = 1;
            }}>sort: {$sort.display}</button
          >

          {#if $posts.pages > 1}
            <button
              on:click={() => {
                if (page >= $posts.pages) return;
                page++;
              }}>next</button
            >
          {/if}
        </div>
        <Search />
      </div>
      <div class="flex flex-col mx-2 pb-2 justify-center items-center">
        {#each $posts.items as post (post.id)}
          <PostCard {post} />
        {/each}
      </div>
      {#if $posts.pages > 1}
        <div class="flex flex-row justify-between pb-2 max-w-xl mx-2 md:mx-auto">
          <button
            on:click={() => {
              if (page <= 1) return;
              page--;
            }}>prev</button
          >
          <p>page {page}/{$posts.pages}</p>
          <button
            on:click={() => {
              if (page >= $posts.pages) return;
              page++;
            }}>next</button
          >
        </div>
      {/if}
    {/await}
  </div>
</main>
