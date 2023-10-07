<template>
  <FormKit
    id="my-form"
    type="form"
    @submit=""
    submit-label="Custom btn-submit Text"
  >
    <FormKit
      type="text"
      name="Name"
      label="Name"
      help="This helps us customize your experience"
    />
    <FormKit
      value="18"
      type="number"
      label="Age"
      name="age"
      validation="required|max:27"
    />
    <FormKit
      type="checkbox"
      label="I have..."
      name="actions"
      :options="['Liked', 'Commented', 'Subscribed']"
      validation="required|min:2"
      :validation-messages="{
        required: 'This Field is required',
        min: 'Please select at least 2 options',
      }"
      validation-visibility="blur"
    />
  </FormKit>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");

// function handleSubmit(ctx) {
//   console.log(ctx);
//   $fetch("/api/login", {
//     method: "POST",
//     body: ctx,
//   }).then((data) => {
//     console.log(data);
//   });
// }
</script>
