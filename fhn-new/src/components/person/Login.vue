<template>
  <div class="app-login">
    <mu-container>
      <h2>用户登录</h2>
      <mu-form ref="form"
               :model="validateForm"
               class="mu-demo-form">
        <mu-form-item label="用户名"
                      prop="username"
                      :rules="usernameRules">
          <mu-text-field v-model="validateForm.username"
                         @blur="show = false"
                         @focus="show=true"
                         prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码"
                      prop="password"
                      :rules="passwordRules">
          <mu-text-field type="password"
                         @blur="show = false"
                         @focus="show=true"
                         v-model="validateForm.password"
                         prop="password"></mu-text-field>
        </mu-form-item>

        <mu-form-item>
          <mu-button color="primary"
                     @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <!--  -->
    <h3 style="padding:0 30px">测试账号：tom,密码:123456</h3>
    <h3 style="padding:0 30px">测试账号：jerry,密码:123456</h3>
    <!--  -->
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: 'login',
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名' },
        { validate: (val) => val.length >= 3 && val.length <= 8, message: '用户名长度大于3小于8' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码' },
        { validate: (val) => val.length >= 6 && val.length <= 12, message: '密码长度大于6小于12' }
      ],
      validateForm: {
        username: '',
        password: ''
      },
      userinfo: {}
    }
  },
  methods: {
    submit () {
      var un = this.validateForm.username
      var up = this.validateForm.password
      var param = `un=${un}&up=${up}`
      this.axios.post('/signin', param).then((result) => {
        // console.log(result.data)
        if (result.data.code == 1) {
          Toast.success({
            mask: true,
            duration: 1000,
            message: result.data.msg
          });
          this.userinfo.uname = un
          this.userinfo.upwd = up
          this.$store.commit('saveinfo', this.userinfo)
          this.$router.push("/user")
        } else {
          Toast.fail({
            mask: true,
            duration: 1000,
            message: result.data.msg
          });
        }

      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: ''
      };
    }

  },
  created () {
    if (this.$store.state.userinfo) {
      this.$router.push('/user')
      // console.log(this.$store.state.userinfo)
    } else {
      this.$router.push('/login')
    }
  }

}

</script>

<style scoped>
.mflex {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  padding: 5px;
}
.mflex span {
  display: inline-block;
  width: 33%;
  height: 110px;
  line-height: 40px;
  padding: 10px;
  background: rgb(255, 100, 82);
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
}
b {
  display: block;
  font-size: 40px;
}
a {
  color: #000;
}
/*  */
.mu-card-text {
  margin: 10px auto;
}
.mu-avatar {
  width: 80px !important;
  height: 80px !important;
}
.mu-card-header-title {
  padding-top: 10px;
}
.mu-card-header-title .mu-card-title {
  font-size: 20px;
}
.mu-card-header-title .mu-card-sub-title {
  font-size: 16px;
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
