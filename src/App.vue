<script setup>
import { ref } from 'vue'
import UserSite from "@/components/UserSite.vue";
import EngineerSite from "@/components/EngineerSite.vue";

const currentSite = ref('')
const showSite = (site) => {
  currentSite.value = site;
}

const formData = ref({})
const handleFormSubmission = (data) => {
  formData.value = data
}

</script>

<template>
  <header>
    U G R E N
  </header>

  <main>
    <button @click="showSite('engineer')">ENGINEER SITE</button>
    <button @click="showSite('user')">USER SITE</button>
    <EngineerSite v-if="currentSite === 'engineer'" @form-submitted="handleFormSubmission"/>
    <UserSite v-else-if="currentSite === 'user'" :form-data="formData"/>
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
