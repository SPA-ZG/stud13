<template>
  <title-comp :title="title"></title-comp>

  <div class="input">
    <button @click.prevent="eventMethod">Hit it</button>
    <p style="display: inline">{{ number }}</p>
  </div>

  <p>{{ message }}</p>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 15px;
}

button {
  font-size: 25px;
  margin-right: 15px;
}

p {
  font-size: 30px;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      message: '',
      number: 1,
      title: 'Try to hit 6'
    }
  },
  methods: {
    eventMethod() {
      let gottenNumber = this.number
      if (gottenNumber != 6) {
        this.message = 'You hit ' + gottenNumber
      } else {
        this.message = 'Congratulations, you hit ' + gottenNumber
      }
    }
  },

  mounted() {
    window.setInterval(() => {
      this.number = (this.number % 6) + 1
    }, 100)
  }
}
</script>
