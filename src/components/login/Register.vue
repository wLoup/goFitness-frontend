<template>

  <!--<div style="background:url('../../assets/images/login/background.jpg');background-size:100%;">-->
  <div class="rebody" id="bg">
    <h1>Welcome to GoFitness</h1>
    <div class="container w3layouts agileits">
      <div class="register w3layouts agileits">
        <h2>Sign Up</h2>
        <!--<form method="post">-->
        <el-form ref="ruleform" :model="form" :rules="rules" >
          <el-form-item prop="username">
            <el-input type="text" placeholder="username" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="text" placeholder="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input type="text" placeholder="phone number" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item prop="sex">
            <el-input type="text" placeholder="sex(male/female)" v-model="form.sex"></el-input>
          </el-form-item>
          <el-form-item prop="height">
            <el-input type="text" placeholder="your body height" v-model="form.height"></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input type="text" placeholder="age" v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item prop="weight">
            <el-input type="text" placeholder="your body weight" v-model="form.weight"></el-input>
          </el-form-item>
          <el-form-item prop="sport">
            <el-input type="text" placeholder="preference(HIIT/Zumba/Yoga/Boxing)" v-model="form.sports"></el-input>
          </el-form-item>
          <!--<input type="text" v-model="form.username" placeholder="用户名" required="">-->
          <!--<input type="text" v-model="form.email" placeholder="邮箱" required="">-->
          <!--<input type="password" v-model="form.password" placeholder="密码" required="">-->
          <!--<input type="text" v-model="form.phone" placeholder="手机号码" required="">-->
          <el-form-item>
            <el-button  class="buttoncheck" type="submit" @click="formSubmit('ruleform', form)">
              <!--<router-link :to="{path:'/login'}">注册</router-link>-->
              Sign up
            </el-button>
            <el-button class="buttoncheck"  @click="resetForm('ruleform')">Reset</el-button>
          </el-form-item>
        </el-form>
        <!--</form>-->

        <div class="send-button w3layouts agileits">
          <form>
            <!--<router-link :to="{path:'/'}"><input type="submit" @click='formSubmit(form)' value="注册"></router-link>-->
            <!--<router-link :to="{path:'/'}">-->
              <!--<el-form-item>-->
                <!--<el-button type="submit" @click='formSubmit(form)'>注册</el-button>-->
              <!--</el-form-item>-->
            <!--</router-link>-->
            <p class="go_login" >Already have an account? <router-link :to="{name:'login'}">Click here to log in</router-link></p>
          </form>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>

</template>



<script>
  import {register}  from '@/api/user.js'
  export default {
    name: 'Register',
    data(){
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('Email cannot be blank'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('Please key in the correct format'))
          }
        }, 100)
      };

      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Phone number cannot be blank'));
        } else {
          const reg = /^\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('Please key in the correct format'));
          }
        }
      };

      return {
        status_code: '',
        form: {
          username: "",
          email: "",
          password: "",
          phone: "",
          sex: "",
          height: "",
          age: "",
          weight: "",
          sports:""

        },
        rules: {
          username: [{ required: true, message: 'Please key in your username', trigger: 'blur' },
          { max: 20, message: 'Max length is 20 characters', trigger: 'blur'  }],
          email: [{ required: true, message: 'Please key in your email', trigger: 'blur' },
          {validator: checkEmail, trigger: 'blur'}],
          password: [{ required: true, message: 'Please key in your password', trigger: 'blur' },
          { max: 20, message: 'Max length is 20 characters', trigger: 'blur'  }],
          phone: [{ required: true, message: 'Please key in your phone number', trigger: 'blur' },
              {validator: checkPhone, trigger: 'blur'}],
          sex: [{ required: true, message: 'Please key in your sex', trigger: 'blur' },
          { max: 8, message: 'Max length is 8 characters', trigger: 'blur'  }],
          height: [{ required: true, message: 'Please key in your height', trigger: 'blur' },
          { max: 4, message: 'Max length is 4 characters', trigger: 'blur'  }],
          age: [{ required: true, message: 'Please key in your age', trigger: 'blur' },
          { max: 4, message: 'Max length is 4 characters', trigger: 'blur'  }],
          weight: [{ required: true, message: 'Please key in your weight', trigger: 'blur' },
          { max: 4, message: 'Max length is 4 characters', trigger: 'blur'  }],
        }
      }
    },
    // methods:{
    //   formSubmit(form)
    //   {
    //     register(form).then(
    //       res => {
    //         const data = res.data
    //         //  data => {message: xxxx , status_code: xxxx, data: {token: xxx }}}
    //         this.status_code = res.data.status_code
    //         console.log(data)
    //       }
    //     )
    //   }
    // },
    methods: {
      formSubmit(formName, form) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('Submitted successfully!');
            this.$router.push("/login");
          } else {
            console.log('error submit!!')
          }
        });
        register(form).then(
          res => {
            const data = res.data
            //  data => {message: xxxx , status_code: xxxx, data: {token: xxx }}}
            this.status_code = res.data.status_code
            console.log(data)
          }
        )
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


<style src="../../assets/css/style-login.css" scoped>
</style>

