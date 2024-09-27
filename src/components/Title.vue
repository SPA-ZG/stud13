<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
h1 {
  background-color: rgb(96, 255, 255);
  padding: 5px;
  margin-bottom: 15px;
  text-align: center;
  width: 100vw;
}
</style>
