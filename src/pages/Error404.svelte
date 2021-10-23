<script lang="ts">
  import { replace } from "svelte-spa-router";
  const handleBack = () => {
    replace("/");
  };
</script>

<div class="text-center">
  <h1 class="text-danger text-center mt-5">Error 404</h1>
  <button on:click={handleBack} class="btn btn-outline-warning">Go Home</button>
</div>
