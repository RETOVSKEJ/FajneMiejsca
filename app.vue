<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.error-msg {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

/* .flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.flex-c {
  display: flex;
  flex-direction: column;
}

.flex-r {
  display: flex;
  flex-direction: row;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
