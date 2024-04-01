<script setup>
import Login from "@/components/Login.vue";

</script>

<template>
  <header>
    U G R E N
  </header>

  <main>
    <Login />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    font-size: large;
  }

  button {
    margin: 10px;
  }
}
</style>
