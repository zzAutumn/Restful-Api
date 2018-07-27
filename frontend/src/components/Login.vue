<template>
  <div class="login">
    <Row>
      <Col span="12" class="hello">
        <img :src="background" class="hello-img">
      </Col>
      <Col span="10" class="hello login-form">
        <Form ref="loginForm" :model="loginForm" :rules="formRule" class="logForm">
          <FormItem prop="name">
            <Input type="text" v-model="loginForm.name" placeholder="Username" class="w-200">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
              <Button class="custom-btn" @click="loginSubmit">Login</Button>
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
      <Form ref="signUpForm" :model="signUpForm" :rules="signUpRule" class="signForm" label-position="left" :label-width="80">
          <FormItem prop="name" label="Username">
            <Input type="text" v-model="signUpForm.name" placeholder="Username" class="w-200">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" label="Password">
            <Input type="password" v-model="signUpForm.password" placeholder="Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="rePassword" label="Confirm Password">
            <Input type="password" v-model="signUpForm.rePassword" placeholder="confirm Password" class="w-200">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="cancel">Cancel</Button>
          <Button type="primary" @click="signSubmit">SignUp</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
/* eslint-disable */
import $http from '@/service'

export default {
  name: 'Login',
  data () {
    const checkpass = (rule, value, callback) => {
      if (value !== this.signUpForm.password) {
        callback(new Error('The two input passwords do not match!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: '',
        password: '',
      },
      signUpForm: {
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
          required: true,
          validator: checkpass
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
    background () {
      return require('@/assets/home.jpg')
    }
  },
  methods: {
    /**
     * 登录 提交
     */
    loginSubmit () {
      this.$refs.loginForm.validate( async (valid) => {
        if (valid) {
          const result = await this.$service.login(this.loginForm)
          console.log(result)
          if (result.data.success) {
            this.$Notice.success({
              title: 'Login successfully'
            })
            this.$router.push('/home')
          } else {
            this.$Notice.error({
              title: 'Login failed'
            })
          }  
        }
      })
    },
    /**
     * 注册提交
     */

    signSubmit () {
      this.$refs.signUpForm.validate( async (valid) => {
        if (valid) {
          const result = await this.$service.signUp(this.signUpForm)
          console.log(result)
          if (result.data.success) {
            this.signUpModal = false
            this.$Notice.success({
              title: 'SignUp successfully'
            })
          } else {
            this.$Notice.error({
              title: 'SignUp failed'
            })
          }  
        }
      })
    },

    /**
     * 注册
     */
    signUp () {
      this.signUpModal = true
    },

    /**
     * 注册取消
     */
    cancel () {
      this.$refs.signUpForm.resetFields()
      this.signUpModal = false
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
