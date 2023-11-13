<script lang="ts">
  import { goto } from '$app/navigation';
  import Title from '$lib/component/nav/Title.svelte';
  import { pb, signIn } from '$lib/util/pocketbase';
  import { currentUser } from '$lib/util/pocketbase';
  let input: HTMLInputElement;
  let image: HTMLImageElement;
  let showImage = false;
  let disabled = true;
  let title = '';

  $: disabled = !title || !showImage;

  function onChange() {
    if (!input.files) return;
    const file = input.files[0];

    if (file) {
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener('load', function () {
        image.setAttribute('src', reader.result as string);
      });
      reader.readAsDataURL(file);

      return;
    }
    showImage = false;
  }

  const handleSubmit = async () => {
    if (!input.files) return;
    const file = input.files[0];
    if (!file || !title) return;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', (document.getElementById('title') as HTMLInputElement).value);
    formData.append('author', $currentUser?.id);
    const createdPost = await pb.collection('posts').create(formData);
    goto('/?q=' + createdPost.id);
  };

  let username = '';
  $: username = $currentUser?.email.split('@')[0];
</script>

<head>
  <title>PetrikMeme | Post</title>
</head>

<main class="bg-gray-950 flex flex-col min-h-screen text-white max-w-5xl mx-auto md:border">
  <Title />
  {#if $currentUser}
    <p class="text-center mb-1">logged in as {username}</p>
  {/if}
  <hr />

  {#if $currentUser}
    <h1 class="text-center text-lg my-2">add new post</h1>
    <hr />

    <label for="title" class="block mt-2 text-center font-medium">title</label>
    <input
      id="title"
      class="h-8 border bg-gray-950 p-1 focus:outline-none m-2"
      bind:value={title}
      type="text"
    />
    <hr class="my-2" />
    <label for="imageupload" class="block my-2 text-center font-medium">image</label>
    <input
      id="imageupload"
      class="text-sm border cursor-pointer focus:outline-none mx-2"
      bind:this={input}
      on:change={onChange}
      type="file"
      accept="image/*"
    />

    <div class="mt-2 mx-2">
      {#if showImage}
        <img bind:this={image} src="" alt="Preview" />
      {/if}
    </div>
    <hr class="my-2" />
    <button
      class="bg-gray-950 disabled:bg-red-900 border p-1 h-8 mx-2 mt-auto mb-2"
      {disabled}
      on:click={handleSubmit}>submit</button
    >
  {:else}
    <h1 class="text-center text-xl my-2">you need to be logged in to post!</h1>
    <div class="mx-auto">
      <button
        class="text-center border p-1 text-xl h-10 w-24 bg-green-900 mb-3"
        on:click={() => {
          signIn();
        }}>log in</button
      >
    </div>
  {/if}
</main>
