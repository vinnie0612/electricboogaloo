<script>
  import { goto } from '$app/navigation';
  import Title from '$lib/component/nav/Title.svelte';
</script>

<main
  class="bg-gray-950 flex flex-col pt-1 max-h-screen min-h-screen text-white max-w-5xl mx-auto md:border"
>
  <Title />
  <hr class="my-2" />
  <h1 class="text-center text-xl">tutorial</h1>
  <hr class="my-2" />
  <div class="flex flex-row justify-between">
    <div class="mx-2">
      <h2 class="text-lg">using the search</h2>
      <ul>
        <li>
          <p class="text-center font-bold">search for a post by name</p>
          <p>just type your search query into the search box and press go</p>
        </li>
        <li>
          <p class="text-center font-bold">search for your own posts</p>
          <p>use the <code>@own</code> search query to show your own posts</p>
        </li>
      </ul>
      <hr class="my-2" />
      <h2 class="text-lg">posting</h2>
      <p>
        first of all, log in with your <code>@petrik.hu</code> e-mail (microsoft account), then, press
        post.
      </p>
      <p>upload your image, give your post a title and press submit.</p>
      <h2 class="text-lg">posting <span class="font-bold">rules</span></h2>
      <ul>
        <li>posts must have a title, with a length of 3-30 characters</li>
        <li>
          posts must include a <span class="font-bold">non NSFW</span> funny image, related to Petrik
        </li>
        <li>posts must be funny</li>
        <li>post spamming will result in a ban.</li>
      </ul>
    </div>
    <div class="absolute bottom-0 w-full px-2">
      <button
        class="text-center w-full border p-1 text-xl h-10 bg-green-900 mb-3"
        on:click={() => {
          goto('/');
        }}>i am ready.</button
      >
    </div>
  </div>
</main>
