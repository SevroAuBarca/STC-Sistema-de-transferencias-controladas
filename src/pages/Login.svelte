<script lang="ts">
  import { onMount } from "svelte";
  import GoogleAuthLogin from "../components/GoogleAuthLogin.svelte";
  import { link, replace } from "svelte-spa-router";
  import {
    provider,
    auth,
    signInWithRedirect,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "../fb}/confug";
  import { user } from "../stores/authStore";
  let valUser: string = "";
  let pass: string = "";
  onMount(() => {
    onAuthStateChanged(auth, (userLog) => {
      console.log(userLog);
      userLog && replace("/");
    });
  });

  const handleLogin = async () => {
    if (pass.length < 6) {
      return;
    }

    const newUser = await signInWithEmailAndPassword(auth, valUser, pass);
    user.set(newUser);
    replace("/");
  };

  const handleGoogleLogin = async () => {
    await signInWithRedirect(auth, provider);
  };
</script>

<div>
  <form on:submit|preventDefault={handleLogin} class="mt-3">
    <h1>Login</h1>
    <hr />
    <div class="mb-3">
      <label class="form-label">
        Email:
        <input
          bind:value={valUser}
          type="email"
          class="form-control"
          placeholder="example@mail.com"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label">
        Password:
        <input
          bind:value={pass}
          type="password"
          class="form-control"
          placeholder="password"
        />
      </label>
    </div>
    <button type="submit" class="btn btn-primary ">Login</button>

    <GoogleAuthLogin handleLogin={handleGoogleLogin} />
    <div>
      <a use:link href="/register" class="text-dark fs-5">Register</a>
    </div>
  </form>
</div>
