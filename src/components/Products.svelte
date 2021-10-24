<script lang="ts">
  import { push } from "svelte-spa-router";

  import { user } from "../stores/authStore";
  import { cart } from "../stores/productStore";
  export let pro: any;

  const handleAddCart = () => {
    if (user !== null) {
      console.log(user);
      cart.set([...$cart, pro]);
    }
  };
</script>

<div class="card m-3">
  <img src={pro.img} alt={pro.nombre} class="card-img-top" loading="lazy" />
  <div class="card-body">
    <h5 class="card-title">{pro.nombre}</h5>
    <p class="card-text">
      ${pro.precio} MXN
    </p>
    <button on:click={handleAddCart} class="btn btn-primary">Add to cart</button
    >
  </div>
</div>

<style>
  div {
    width: 18rem;
  }
</style>
