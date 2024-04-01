<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post('/api/user/login', {
      username: username.value,
      password: password.value
    }, {
      headers: {
        'Content-Type': "application/json"
      }
    });
    console.log(response.data); // Assuming you want to log the response data
    // Here you can handle the response as per your requirement
    // TODO after login redirect to home page

  } catch (error) {
    console.error('Error:', error);
    // Handle error here, e.g., show error message to user
  }
};
</script>

<template>
  <form>
    <label>Username:</label>
    <input type="text" v-model="username" />
    <br />
    <label>Password:</label>
    <input type="password" v-model="password" />
    <br />
    <button type="submit" @click.prevent="login">Login</button>
  </form>
</template>

<style scoped>

</style>
