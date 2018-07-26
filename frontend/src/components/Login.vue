<template>
  <div class="login">
    <Row>
      <Col span="12" class="hello">
        <img :src="background" class="hello-img">
      </Col>
      <Col span="10" class="hello login">
        <Form ref="logForm" :model="logForm" :rules="formRule" inline class="logForm">
          <FormItem prop="user">
            <Input type="text" v-model="logForm.name" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="logForm.password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('logForm')">Signin</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      logForm: {
        name: '',
        password: ''
      },
      formRule: {

      }  
    }
  },
  computed: {
    background() {
      return require('@/assets/home.jpg')
    }
  },
  methods: {
    handleSubmit () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  min-height: 100vh;
  width: 100%;
}
.login{
  margin: 0 auto;
}
.hello{
  margin-top: 20px;
  margin-left: 20px;
}
.hello-img{
  width: 100%;
  border: 2px solid seashell;
}
.logForm{
  margin-top: 100px;
}
</style>
