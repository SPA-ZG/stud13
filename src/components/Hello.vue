<template>
  <title-comp :title="title"></title-comp>
  <h3>Hello{{ full_name }}</h3>
  <form>
    <div class="input">
      <label for="first_name">First name: </label>
      <input type="text" placeholder="What's your first name?" v-model.trim="first_name" />
    </div>
    <div class="input">
      <label for="last_name">Last name: </label>
      <input type="text" placeholder="What's your last name?" v-model.trim="last_name" />
    </div>
  </form>
</template>

<style scoped>
h3,
form {
  font-size: 25px;
}

.input {
  margin: 8px;
}

input {
  margin-left: 15px;
  font-size: 20px;
  padding: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      currentTime: new Date().toLocaleTimeString('hr-HR'),
      title: 'Welcome to home page'
    }
  },

  computed: {
    full_name: function () {
      return ' "' + this.first_name + ' ' + this.last_name + '"'
    }
  }
}
</script>
