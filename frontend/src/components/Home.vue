<template>
  <div class="hello">
    <page-header></page-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import PageHeader from './pages/PageHeader'

export default {
  name: 'Home',
  components: { PageHeader },
  data () {
    return {
      msg: 'Welcome to Your Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
