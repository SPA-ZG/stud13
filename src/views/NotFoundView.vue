<template>
  <main>
    <p>
      404 NOT found <br />
      Sorry, {{ $route.params.catchAll }} is not found.
    </p>
  </main>
</template>

<style scoped>
p {
  font-size: 25px;
  text-align: center;
}
</style>
