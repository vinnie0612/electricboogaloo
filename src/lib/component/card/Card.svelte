<script lang="ts">
  import { currentUser, pb } from '$lib/util/pocketbase';
  import { type Post, posts } from '$lib/store/post';
  import { copyText } from 'svelte-copy';

  export let post = {} as Post;

  let copiedText = 'share';

  const handleShare = () => {
    copyText(window.location.origin + '/?q=' + post.id);
    copiedText = 'copied!';
    setTimeout(() => {
      copiedText = 'share';
    }, 1000);
  };
</script>

<div class="mt-4 border border-gray-100 w-full">
  {#if $currentUser}
    <p class="ml-2 text-lg mt-1">{post.title}</p>
    <div class="flex flex-row justify-between mx-2">
      <button
        on:click={() => {
          post.downvotes = post.downvotes.filter((id) => id !== $currentUser?.id);
          if (post.upvotes.includes($currentUser?.id)) {
            post.upvotes = post.upvotes.filter((id) => id !== $currentUser?.id);
          } else {
            post.upvotes.push($currentUser?.id);
          }
          pb.collection('posts').update(post.id, {
            upvotes: post.upvotes,
            downvotes: post.downvotes
          });
          posts.update((posts) => {
            const index = posts.items.findIndex((item) => item.id === post.id);
            posts.items[index].score = post.upvotes.length - post.downvotes.length;
            return posts;
          });
        }}
      >
        <p class={post.upvotes.includes($currentUser.id) ? 'text-green-500' : ''}>like</p>
      </button>

      <p>score: {post.score}</p>

      <button on:click={handleShare}>{copiedText}</button>

      {#if post.author == $currentUser.id}
        <button
          class="text-red-500"
          on:click={() => {
            pb.collection('posts').delete(post.id);
            posts.update((posts) => {
              const index = posts.items.findIndex((item) => item.id === post.id);
              posts.items.splice(index, 1);
              return posts;
            });
          }}>delete</button
        >
      {/if}

      <button
        on:click={() => {
          post.upvotes = post.upvotes.filter((id) => id !== $currentUser?.id);
          if (post.downvotes.includes($currentUser?.id)) {
            post.downvotes = post.downvotes.filter((id) => id !== $currentUser?.id);
          } else {
            post.downvotes.push($currentUser?.id);
          }
          pb.collection('posts').update(post.id, {
            upvotes: post.upvotes,
            downvotes: post.downvotes
          });
          posts.update((posts) => {
            const index = posts.items.findIndex((item) => item.id === post.id);
            posts.items[index].score = post.upvotes.length - post.downvotes.length;
            return posts;
          });
        }}
      >
        <p class={post.downvotes.includes($currentUser.id) ? 'text-red-500' : ''}>dislike</p>
      </button>
    </div>
  {:else}
    <div class="mx-2 my-2 flex flex-row justify-between">
      <p class="text-lg">{post.title}</p>
      <p class="text-lg"><span class="text-base">score: </span>{post.score}</p>
    </div>
  {/if}
  <img class="w-full" alt={post.title} src={post.imageUrl} />
</div>
