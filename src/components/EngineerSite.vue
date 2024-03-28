<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from "vue-router";

const formData = ref({})
const emit = defineEmits(['formSubmitted']);
const router = useRouter()

const submitForm = () => {
  emit('formSubmitted', formData.value)
  router.push({ name: 'UserSite.vue' });
}

const filledColNumber = ref(3);
const blankColNumber = ref(2);

const filledInputs = reactive([]);
const generateFilledInputs = () => {
  if (filledColNumber.value > filledInputs.length) {
    for (let i = filledInputs.length; i < filledColNumber.value; i++) {
      filledInputs.push({ title: `Title ${ i + 1 }`, value: '' });
    }
  } else if (filledColNumber.value < filledInputs.length) {
    filledInputs.splice(filledColNumber.value);
  }
};

const blankInputs = reactive([]);
const generateBlankInputs = () => {
  if (blankColNumber.value > blankInputs.length) {
    for (let i = blankInputs.length; i < blankColNumber.value; i++) {
      blankInputs.push({ title: `Title ${ filledInputs.length + i + 1 }`, value: '' });
    }
  } else if (blankColNumber.value < blankInputs.length) {
    blankInputs.splice(blankColNumber.value);
  }
};

const rowNumber = ref(0);
watch(filledColNumber, generateFilledInputs);
watch(blankColNumber, generateBlankInputs);

const name = ref("DL68 printer");
const stepNo = ref(1);
const requirements = ref("The curious cat chased the fluttering butterfly through the lush green meadow, its paws barely touching the soft earth beneath. With each leap, it seemed to come closer to its elusive target, yet the butterfly danced just out of reach, teasing the feline with its delicate wings.");

</script>

<template>
  <h1>
    ENGINEER SITE
  </h1>

  <div>
    <form method="post" @submit.prevent="submitForm">
      <div>
        <label for="machineModel">Add the Machine/Model Name: </label>
        <input v-model="name" type="text" id="machineModel" placeholder="Enter machine/model name" name="name">
      </div>
      <div>
        <label>Purpose: </label>
        <input type="radio" id="test" name="columnType" value="test">
        <label for="test">Test </label>
        <input type="radio" id="debug" name="columnType" value="debug">
        <label for="debug">Debug </label>
      </div>
      <div>
        <label for="stepNo">Step No.: </label>
        <input v-model="stepNo" type="number" id="stepNo" placeholder="enter step number">
      </div>

      <div>
        <label for="text">Text: </label>
        <textarea v-model="requirements" placeholder="input some requirements"></textarea>
      </div>
      <div>
        <label>Table: </label>

        <div>
          <label for="filledCol">Filled Column Number: </label>
          <input type="number" id="filledCol" v-model="filledColNumber" @input="generateFilledInputs" />
          <div v-if="filledColNumber > 0">
            <div v-for="(input, index) in filledInputs" :key="index">
              <label :for="'col' + index">{{ 'Title ' + (index + 1) + ' ' }}</label>
              <input type="text" :id="'col' + index" v-model="input.value">
            </div>
          </div>
          <br />

          <label for="blankCol">Blank Column Number: </label>
          <input type="number" id="blankCol" v-model="blankColNumber" @input="generateBlankInputs" />
          <div v-if="blankColNumber > 0">
            <div v-for="(input, index) in blankInputs" :key="index">
              <label :for="'col' + index + filledColNumber">{{ 'Title ' + (index + 1 + filledColNumber) + ' ' }}</label>
              <input type="text" :id="'col' + index + filledColNumber" v-model="input.value">
            </div>
          </div>
          <br />

          <label for="rowNumber">Row Number: </label>
          <input type="number" id="rowNumber" v-model="rowNumber" />
          <br />

          <table>
            <thead>
            <tr>
              <th v-for="input in filledInputs">{{ input.value }}</th>
              <th v-for="input in blankInputs">{{ input.value }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rowNumber">
              <td v-for="x in filledColNumber">FILLED {{ x }}</td>
              <td v-for="x in blankColNumber"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <label for="pictures">Pictures: </label>
        <input type="file" id="pictures">
      </div>
      <input type="submit" @click="submitForm">
    </form>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
