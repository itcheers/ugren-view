<script setup>
import { ref } from 'vue'

const hasTable = ref('no')
const changeTableState = (state) => {
  if (state)
    hasTable.value = 'yes'
  else
    hasTable.value = 'no'
}

</script>

<template>
  <h1>
    ENGINEER SITE
  </h1>

  <div>
    <form method="post">
      <div>
        <label for="machineModel">Add the Machine/Model Name: </label>
        <input type="text" id="machineModel" placeholder="Enter machine/model name">
      </div>
      <div>
        <label>Column Type: </label>
        <input type="radio" id="test" name="columnType" value="Test">
        <label for="test">Test </label>
        <input type="radio" id="debug" name="columnType" value="Debug">
        <label for="debug">Debug </label>
      </div>
      <div>
        <label for="stepNo">Step No.: </label>
        <input type="number" id="stepNo" placeholder="enter step number">
      </div>

      <div>
        <label for="text">Text: </label>
        <textarea placeholder="input some requirements"></textarea>
      </div>
      <div>
        <label for="table">Table: </label>
        <input type="checkbox" id="table" @click="changeTableState($event.target.checked)"/>

        <div v-if="hasTable === 'yes'">
          <label for="filledCol">Filled Column Number: </label>
          <input type="number" id="filledCol" />
          <br />
          <label for="blankCol">Blank Column Number: </label>
          <input type="number" id="blankCol" />
          <br />
          <label for="row">Row Number: </label>
          <input type="number" id="row" />
        </div>
      </div>

      <div>
        <label for="pictures">Pictures: </label>
        <input type="file" id="pictures">
      </div>
      <input type="submit">
    </form>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
}
</style>
