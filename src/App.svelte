<script lang="ts">
  import { onMount } from "svelte";
  import { auth, onAuthStateChanged } from "./fb}/confug";
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./routes/router";
  import { user } from "./stores/authStore";
  import Cart from "./components/Cart.svelte";

  onMount(() => {
    onAuthStateChanged(auth, (userLog) => {
      console.log(userLog);
      userLog ? user.set(userLog) : user.set(null);
    });
  });
</script>

<div>
  <Navbar />
  <div class="container text-center">
    <hr />
    <Cart />
  </div>
  <Router {routes} />
</div>
