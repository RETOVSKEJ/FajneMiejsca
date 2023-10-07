<template>
  <v-avatar
    :image="srcWithDefault"
    :size="100"
    alt="Avatar"
    class="avatar image"
  />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const DEFAULT_AVATAR_URL = `${runtimeConfig.public.supabaseUrl}/storage/v1/object/public/avatars/avatar.png`;

const props = defineProps({
  src: {
    type: String,
  },
});

const srcWithDefault = props.src || DEFAULT_AVATAR_URL;

// const props = withDefaults(defineProps<Props>(), {
//   src: `${runtimeConfig.supabaseUrl}/storage/v1/object/public/avatars/avatar.png`,
// });
</script>
