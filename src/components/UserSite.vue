<script setup>

const name = "DL68 printer";
const purpose = "TEST";
const stepNumber = 1;

const requirements = "this is requirement..."

const tableTitles = [
  "serial number",
  "filled 1",
  "filled 2",
  "blank 1",
  "blank 2",
]

const totalRows = 8;
const filledCols = 2;
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
        <td>SERIAL No. {{ serial_no }}</td>
        <td v-for="index in filledCols">FILLED</td>
        <td v-for="index in blankCols"></td>
      </tr>
    </table>
    <h2>picture: </h2>
  </div>
</template>

<style scoped>

</style>
