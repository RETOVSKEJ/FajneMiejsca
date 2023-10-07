<template>
  <NuxtErrorBoundary>
    <slot />
    <template #error="{ error, clearError }">
      <h1>Oops! Something went wrong.</h1>
      <v-btn color="secondary" @click="clearRefresh">Refresh</v-btn>
      <v-btn color="secondary" @click="clearRedirect"
        >Go Back to Main Page</v-btn
      >
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
const router = useRouter();
const clearRedirect = () => clearError({ redirect: "/" });
const clearRefresh = () =>
  clearError({ redirect: router.currentRoute.value.path });
</script>

<style scoped></style>
