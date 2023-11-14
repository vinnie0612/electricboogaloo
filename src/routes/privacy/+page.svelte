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
    <h1 class="text-center text-xl">privacy policy</h1>
    <hr class="my-2" />
    <div class="flex flex-col w-full justify-between">
      <div class="mx-2">
        <p>
          This Privacy Policy governs the manner in which petrikmeme.hu collects, uses, maintains,
          and discloses information collected from users (each, a "User") of the petrikmeme.hu
          website ("Site"). This privacy policy applies to the Site and all products and services
          offered by petrikmeme.hu.
        </p>

        <h3 class="text-lg mt-3">Data We Collect</h3>
        <p>We may collect the following personal identification information from Users:</p>
        <ul class="list-disc ml-4">
          <li>Your email address</li>
          <li>Your account creation date</li>
          <li>Your last login date</li>
          <li>Your IP address used to make requests</li>
          <li>General information about your device (desktop/mobile, browser)</li>
        </ul>
        <p class="mt-2">We may also collect the following information related to your posts:</p>
        <ul class="list-disc ml-4">
          <li>Your posts</li>
          <li>Their titles</li>
          <li>Their images</li>
          <li>Their creation date</li>
          <li>Their last edit date</li>
        </ul>
        <p class="mt-2">
          Additionally, we may collect information about your votes, including their creation date.
        </p>

        <h3 class="text-lg mt-3">Use of Collected Data</h3>
        <p>We collect and use personal information for the following purposes:</p>
        <ul class="list-disc ml-4">
          <li>To improve our user's experience</li>
        </ul>

        <h3 class="text-lg mt-3">GDPR Compliance</h3>
        <p>
          petrikmeme.hu is committed to complying with the General Data Protection Regulation
          (GDPR). By using our services, you acknowledge and agree to the collection and processing
          of your personal data as outlined in this Privacy Policy. You have the right to access,
          rectify, or erase your personal data, and you may exercise these rights by contacting us.
        </p>

        <p>
          We do not sell any collected data, nor do we share it with any third parties without your
          explicit consent.
        </p>

        <h3 class="text-lg mt-3">Cookie Usage</h3>
        <p>
          A cookie is a small piece of data stored on the user's device for authentication purposes.
          By using our Site, you agree to the use of cookies to authenticate and enhance your user
          experience.
        </p>

        <h3 class="text-lg font-bold mt-3">Disclaimer for Images</h3>
        <p>
          petrikmeme.hu does not hold responsibility for images posted on our site. Users are solely
          responsible for the content they upload, and any legal or copyright issues arising from
          uploaded images are the responsibility of the user.
        </p>

        <p class="font-bold mt-3">
          By using petrikmeme.hu, you agree to have this data collected about you and acknowledge
          the terms outlined in this Privacy Policy.
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
