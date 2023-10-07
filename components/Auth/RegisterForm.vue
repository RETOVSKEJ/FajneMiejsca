<template>
  <FormKit
    type="form"
    id="registration-example"
    @submit="handleSubmit"
    submit-label="Register"
  >
    <v-divider :thickness="4" class="my-2">eee</v-divider>
    <FormKit
      type="text"
      name="name"
      label="Your username"
      placeholder="Maciek1337"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
        help="Confirm your password"
      />
    </div>
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>
  <div v-else-if="authErrorMsg">
    <p>Submission failed! {{ authErrorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
const submitted = ref<Boolean>(false);
const client = useSupabaseClient();
const authErrorMsg = ref<string>("");

async function handleSubmit(ctx) {
  // TODO dodać validacje error unique
  try {
    const { data, error } = await client.auth.signUp({
      email: ctx.email,
      password: ctx.password,
    });
    if (error) throw error;
    submitted.value = true;
    authErrorMsg.value = "";
  } catch (error) {
    authErrorMsg.value = error.message;
  }

  // TODO dodać validacje error unique
  //   setTimeout(() => {
  //     $fetch("/api/register", {
  //       method: "POST",
  //       body: ctx,
  //     })
  //       .then((data) => {
  //         console.log(data);
  //         submitted.value = true;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
}
</script>
