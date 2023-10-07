<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/"
            ><v-btn><v-icon start>mdi-home</v-icon>Home</v-btn></NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/explore"><v-btn>Odkrywaj</v-btn></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ranking"><v-btn>RANKINGS</v-btn></NuxtLink>
        </li>
        <li v-if="user">
          <NuxtLink to="/profile"><v-btn>Profil</v-btn></NuxtLink>
        </li>
        <li v-else>
          <NuxtLink to="/auth/login"><v-btn>Login</v-btn></NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #111;
  font-size: larger;
}
</style>
