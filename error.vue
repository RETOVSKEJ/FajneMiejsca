<template>
  <h2>Ooops. the Page doesnt exist</h2>
  <p>{{ error.message }}</p>
  <p>{{ error.statusCode }}</p>
  <button @click="handleClearError">Go Home...</button>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>
