<template>
  <NuxtLink :to="`/profile/${user.id}`">
    <v-card :title="user.username || user.email">
      <ProfileAvatar :src="user.avatar_url" />
      <v-card-text>
        <p>Liczba Ocen: {{ Math.random() }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Zobacz Profil</v-btn>
        <v-btn color="primary">Dodaj Znajomego</v-btn>
      </v-card-actions>
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
import { UserProfile } from "@/types/objects";

const { user } = defineProps({
  user: {
    type: Object as PropType<UserProfile>,
    required: true,
  },
});
console.log(user);
</script>

<style scoped></style>
