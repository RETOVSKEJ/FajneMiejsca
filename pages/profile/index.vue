<template>
  <ProfileSettings />
</template>

<script setup lang="ts">
definePageMeta({
  title: "Profil",
  description: "Profil użytkownika",
  middleware: ["auth"],
});
</script>
