<script lang="ts">
  import { onMount } from "svelte";
  import { link, replace } from "svelte-spa-router";
  import {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "../fb}/confug";
  import { user } from "../stores/authStore";
  let valUser: string = "";
  let pass: string = "";
  let confirm: string = "";
  onMount(() => {
    onAuthStateChanged(auth, (userLog) => {
      userLog && replace("/");
    });
  });

  const handleRegister = async () => {
    if (pass.length < 6 || confirm.length < 6) {
      return;
    } else if (pass !== confirm) {
      return;
    }

    const newUser = await createUserWithEmailAndPassword(auth, valUser, pass);
    await user.set(newUser);
    replace("/");
  };
</script>

<div>
  <form on:submit|preventDefault={handleRegister} class="mt-3">
    <h1>Register</h1>
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
      <label class="form-label">
        Confirm Password:
        <input
          bind:value={confirm}
          type="password"
          class="form-control"
          placeholder="password"
        />
      </label>
    </div>
    <button type="submit" class="btn btn-primary ">Register</button>

    <div>
      <a use:link href="/login" class="text-dark fs-5">Login</a>
    </div>
  </form>
</div>
