<script lang="ts">
  import { onMount } from "svelte";

  import { db } from "../models/db";
  import { product } from "../stores/productStore";
  import Products from "./Products.svelte";

  onMount(() => {
    product.set(db);
  });
</script>

<div class="mt-3 row">
  {#each $product as pro}
    <div class="col-12 col-md-4">
      <Products {pro} />
    </div>
  {/each}
</div>
