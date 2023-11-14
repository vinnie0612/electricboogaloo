<script>
  import { goto } from '$app/navigation';
  import Title from '$lib/component/nav/Title.svelte';
</script>

<head>
  <title>PetrikMeme | Tutorial</title>
</head>

<main class="bg-gray-950 flex flex-row pt-1 min-h-screen text-white max-w-3xl mx-auto md:border">
  <div class="flex flex-col w-full">
    <Title />
    <hr class="my-2" />
    <h1 class="text-center text-xl">tutorial</h1>
    <hr class="my-2" />
    <div class="flex flex-col w-full justify-between">
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
        <h2 class="text-xl">Posting</h2>
        <p>
          first of all, log in with your <code>@petrik.hu</code> e-mail (microsoft account), then, press
          post.
        </p>
        <p>upload your image, give your post a title and press submit.</p>
        <h2 class="text-xl mt-2"><span class="font-bold">Rules</span></h2>
        <ul class="list-disc ml-4">
          <li>
            posts must have a title, with a length of <span class="font-bold">3-30</span> characters
          </li>
          <li>
            posts must include an image <span class="font-bold"
              >that does not break Hungarian law, and is not NSFW</span
            >, related to Petrik
          </li>
          <li>
            posts must be <a
              href="https://dictionary.cambridge.org/dictionary/english/funny"
              class="underline hover:font-bold">funny</a
            >
          </li>
          <li>post spamming will result in a ban.</li>
        </ul>
      </div>
      <div class="mx-2">
        <hr class="my-2" />
        <h2 class="text-xl">Reporting</h2>
        <p>
          if you see a post that you think should not be there or is using material that is not
          theirs, you can email us at
          <a href="mailto:dmca@petrikmeme.hu" class="text-green-500"> dmca@petrikmeme.hu </a>
          with the post's share link and the reason why you think it should be removed.
        </p>
      </div>
      <div class="mx-2">
        <hr class="my-2" />
        <h2 class="text-xl">Privacy policy</h2>
        <p>what data we store</p>
        <ul>
          <li>
            your email, your account creation date, your last login date, your IP used to make
            requests
          </li>
          <li>your posts, their titles, their images, their creation date, their last edit date</li>
          <li>your votes, their creation date</li>
        </ul>
        <p>we also use a cookie to authenticate you</p>
        <p>we do not sell any data, nor do we share it with any third parties</p>
        <p class="font-bold">
          by using petrikmeme.hu, your agree to have this data collected about you.
        </p>
      </div>
      <button
        class="text-center border p-1 mt-8 text-xl h-10 bg-green-900 md:w-48 md:mx-auto mb-3"
        on:click={() => {
          goto('/');
        }}>back to home</button
      >
    </div>
  </div>
</main>
