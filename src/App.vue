<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/diceThrow">Throw a dice</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: green;
  padding: 5px;
}

a {
  margin: 25px;
  font-size: 25px;
  color: rgb(0, 0, 150);
  font-weight: bold;
}
</style>
