<script setup>

const requirements = [
    'download',
    'install',
    'development',
    'test',
    'deploy'
]

const totalRows = 8;

</script>

<template>
  <h1>
    USER SITE
  </h1>
  <div>
    <h2>requirements: </h2>
    <p v-for="(requirement, index) in requirements">{{ index }}.{{ requirement }}</p>
    <h2>records: </h2>
    <h2>picture: </h2>
  </div>
</template>

<style scoped>

</style>
