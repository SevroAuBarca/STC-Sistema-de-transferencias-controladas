<script lang="ts">
  import { link } from "svelte-spa-router";
  import { cart } from "../stores/productStore";
</script>

<h3>
  {#if $cart.length > 0}
    Cart: {$cart.length}
    {#if $cart.length === 1}
      Product
    {:else}
      Products
    {/if}
    <a use:link href="/cart">Go to cart</a>
  {/if}
</h3>
