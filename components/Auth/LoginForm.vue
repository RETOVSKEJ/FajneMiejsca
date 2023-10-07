<template>
  <FormKit
    id="login-form"
    type="form"
    @submit="handleSubmit"
    submit-label="Login"
  >
    <FormKit
      type="email"
      name="email"
      label="Email"
      validation="required"
      validation-visibility="blur"
    />
    <FormKit
      type="password"
      name="password"
      label="Hasło"
      validation="required"
    />
  </FormKit>
  <div v-if="authErrorMsg">
    <h2 class="error-msg">{{ authErrorMsg }}</h2>
  </div>
</template>

<script setup lang="ts">
const authErrorMsg = ref<string>("");
const submitted = ref<Boolean>(false);
const client = useSupabaseClient();
const router = useRouter();

async function handleSubmit(ctx) {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: ctx.email,
      password: ctx.password,
    });
    if (error) throw error;
    submitted.value = true;
    authErrorMsg.value = "";
    router.push("/profile");
  } catch (error) {
    authErrorMsg.value = error.message;
  }
}
</script>
