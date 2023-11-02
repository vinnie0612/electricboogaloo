<script>
  import { goto } from '$app/navigation';
</script>

<div class="flex flex-row justify-between items-center mx-2 text-lg">
  <button
    on:click={() => {
      goto('/');
    }}
  >
    <span class="text-green-400">petrik</span>
    <span class="text-blue-400">meme</span>
  </button>
  <button
    class="text-sm"
    on:click={() => {
      goto('/tutorial');
    }}
  >
    rules & tutorial
  </button>
</div>
