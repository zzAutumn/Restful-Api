<template>
  <div class="login">
    <Row>
      <Col span="12" class="hello">
        <img :src="background" class="hello-img">
      </Col>
      <Col span="10" class="hello login-form">
        <Form ref="logForm" :model="logForm" :rules="formRule" class="logForm">
          <FormItem prop="name">
            <Input type="text" v-model="logForm.name" placeholder="Username" class="w-200">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="logForm.password" placeholder="Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
              <Button class="custom-btn" @click="handleSubmit('logForm')">Login</Button>
              <Button class="custom-btn" @click="signUp">Signup</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>

    <!-- 注册modal -->
    <Modal
      v-model="signUpModal"
      
    >
      <p slot="header" style="color:#f60;text-align:center">
          <Icon type="person-add"></Icon>
          <span>注册新用户</span>
      </p>
      <Form ref="logForm" :model="logForm" :rules="signUpRule" class="signForm" label-position="left" :label-width="80">
          <FormItem prop="name" label="Username">
            <Input type="text" v-model="logForm.name" placeholder="Username" class="w-200">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" label="Password">
            <Input type="password" v-model="logForm.password" placeholder="Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="rePassword" label="Confirm Password">
            <Input type="password" v-model="logForm.rePassword" placeholder="confirm Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="cancel">Cancel</Button>
          <Button type="primary" @click="handleSubmit">SignUp</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import $http from '@/service'

export default {
  name: 'Login',
  data () {
    return {
      logForm: {
        name: '',
        password: '',
        rePassword: ''
      },
      signUpRule: {
        name: {
          required: true
        },
        password: {
          required: true
        },
        rePassword: {
          required: true
        }
      },
      formRule: {
        name: {
          required: true
        },
        password: {
          required: true
        },
      },
      signUpModal: false,
      rePassword: ''  
    }
  },
  computed: {
    background() {
      return require('@/assets/home.jpg')
    }
  },
  methods: {
    /**
     * 登录 || 注册 提交
     */
   async handleSubmit () {
       const result = await this.$service.sign(this.logForm) 
       console.log(result)      
    },

    /**
     * 注册
     */
    signUp() {
      this.signUpModal = true
    },

    /**
     * 注册取消
     */
    cancel() {

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
.login-form{
  margin: 0 auto;
}
.hello{
  margin-top: 20px;
  margin-left: 20px;
}
.hello-img{
  width: 100%;
  height: 95vh;
  border: 2px solid seashell;
}
.logForm{
  margin-top: 40vh;
  width: 100%;
  padding: 10px;
  border: 20px solid #FBE251;
  background: #FEDFE1;
}
.w-200{
  width: 200px;
}
.custom-btn{
  color: #fff;
  font-weight: 900;
  background-color: #B5CAA0;
}
.signForm{
  margin-left: 20%;
}
</style>
