<template>
  <div class="rebody" id="bg">
    <h1>Welcome to goFitness</h1>
    <div class="container w3layouts agileits">

      <div class="login w3layouts agileits">
        <h2>Log In</h2>

        <el-form ref="ruleform" :model="form" :rules="rules" >
          <el-form-item prop="username">
            <el-input type="text" v-model="form.username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="Password" required=""></el-input>
          </el-form-item>


        <!--<div class="send-button w3layouts agileits">-->
          <el-form-item>
            <el-button  class="buttoncheck" type="submit" @click="loginHandler('ruleform',form)">
              Log in
            </el-button>
            <el-button class="buttoncheck"  @click="resetForm('ruleform')">Reset</el-button>
          </el-form-item>
        </el-form>

        <div class="send-button w3layouts agileits">
          <form>
            <p style="color: #e5e5e5" class="go_login" >No Account? <router-link :to="{name:'register'}">Click here to sign up</router-link></p>
          </form>
        </div>
        <div class="clear"></div>
      </div>

    </div>

  </div>

</template>

<script>
  // import axios from 'axios'
  // import 'vue-resource'
  import {
    login
  } from '@/api/user.js'
    import {
    pic
  } from '@/api/user.js'
  export default {
    name: 'Login',
    data() {
      return {
        status_code: '',
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, message: 'Please key in your username', trigger: 'blur' },
          { max: 20, message: 'Max length is 20 characters', trigger: 'blur'  }],
          password: [{ required: true, message: 'Please key in your password', trigger: 'blur' },
          { max: 20, message: 'Max length is 20 characters', trigger: 'blur'  }],
        }
      }
    },
    methods: {
      loginHandler(formName,form) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('Logged in successfully!');
        //     this.$router.push("/");
        //   } else {
        //     console.log('error submit!!')
        //   }
        // });
        // this.$http.get('http://127.0.0.1:5000/v1/api/recommend/',
        //     {params: {"user_name":form.username}},{emulateJSON:true}).then(result =>{
        //       // console.log(result.data.user_type)
        //       // result.setHeader("Access-Control-Allow-Origin", "*");
        //       console.log(result);})
        pic(form.username).then(
          res => {
            // localStorage.removeItem('token')
            const data = res.data
             // data => {message: xxxx , status_code: xxxx, data:{
             //     user_type: xxx,
             //     recommend: xxx,{
             //         re0: {exercise_name:x, exercise_length:x, description:x, video_link:x, image_url:x,category_id:x,},
             //         re1: {exercise_name:x, exercise_length:x, description:x, video_link:x, image_url:x,category_id:x,},
             //         re2: {exercise_name:x, exercise_length:x, description:x, video_link:x, image_url:x,category_id:x,}
             //     }
             // }}
            // console.log(form.username)

            window.sessionStorage.setItem("re0",JSON.stringify(data.data.recommend.re0))
            window.sessionStorage.setItem("re1",JSON.stringify(data.data.recommend.re1))
            window.sessionStorage.setItem("re2",JSON.stringify(data.data.recommend.re2))
            window.sessionStorage.setItem("re3",JSON.stringify(data.data.recommend.re3))
            window.sessionStorage.setItem("re4",JSON.stringify(data.data.recommend.re4))
            // const temp1 = JSON.parse(window.sessionStorage.getItem("re0"))
            // alert(temp1.exercise_name)
            // console.log(data.data.recommend)
            // console.log(data)
          },
        )

        login(form).then(
          res => {
            // localStorage.removeItem('token')
            const data = res.data
            //  data => {message: xxxx , status_code: xxxx, data: {token: xxx }}}
            // console.log(res)

            // console.log(check)
            window.sessionStorage.setItem("user",JSON.stringify(form.username))
            // this.$router.push("/");
            window.sessionStorage.setItem("check",JSON.stringify(data.status_code))
            this.$router.push("/");
          },
        )
        // console.log(login(form).status_code)
        // const tp = JSON.parse(window.sessionStorage.getItem('check'))
        // if(tp == 10000){
        //     // console.log(tp)
        //     this.$router.push("/");
        // }
        // else {
        //     // console.log(tp.message)
        //     alert('Error username or password!');
        // }


        // this.$jsonp('http://127.0.0.1:5000/v1/api/recommend/', {"user_name":form.username})
        //     .then(json =>{
        //         console.log(json);
        //     })
        //     .catch(err =>{
        //         console.log(err);
        //     })
        // pic(form.username).then(
        //   result => {
        //     console.log(result);
        //   },
        // )
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!--<style>-->
  <!--@import url("../../assets/css/style-login.css");-->
<!--</style>-->

<style scoped src="../../assets/css/style-login.css">
</style>

