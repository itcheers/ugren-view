<script setup>
defineProps({
  formData: Object
})

const name = "DL68 printer";
const purpose = "TEST";
const stepNumber = 1;

const requirements = "The curious cat chased the fluttering butterfly through the lush green meadow, its paws barely touching the soft earth beneath. With each leap, it seemed to come closer to its elusive target, yet the butterfly danced just out of reach, teasing the feline with its delicate wings."

const tableTitles = [
  "filled 1",
  "filled 2",
  "filled 3",
  "blank 1",
  "blank 2",
]

const totalRows = 4;
const filledCols = 3;
const blankCols = 2;

</script>

<template>
  <h1>
    USER SITE
  </h1>
  <div>
    <h2>{{ name }} for {{ purpose }} step {{ stepNumber }} </h2>

    <h2>requirements: </h2>
    <p>{{ requirements }}</p>
    <h2>records: </h2>
    <table>
      <tr>
        <th v-for="title in tableTitles">{{ title }}</th>
      </tr>
      <tr v-for="serial_no in totalRows">
        <td v-for="index in filledCols">FILLED</td>
        <td v-for="index in blankCols"></td>
      </tr>
    </table>
    <h2>picture: </h2>
    <img src="/public/machine.jpeg" alt="machine" width="550">
  </div>
</template>

<style scoped>

</style>
