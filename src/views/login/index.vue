<template>
  <div class="container">
    <el-form
      ref="ruleFormRef"
      :model="user"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      with="600px"
      :sinline="true"
      label-position="left"
      :hide-required-asterisk="true"
    >
      <el-form-item label="用户名" prop="pass">
        <el-input v-model="user.userName" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input v-model="user.passWord" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="btnLoading"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useStore } from "vuex";

interface userType {
  userName: String;
  passWord: String;
}

interface rulesType {
  userName: Object;
  passWord: Object;
}

const router = useRouter();

const rules: rulesType = reactive({
  userName: {
    required: true,
    message: "请填写用户名",
    trigger: "blur",
  },
  passWord: {
    required: true,
    message: "请填写密码",
    trigger: "blur",
  },
});
const btnLoading = ref(false);
const store: any = useStore();

const user: userType = reactive({
  userName: store.state.login.userName,
  passWord: store.state.login.passWord,
});

const submitForm = () => {
  if (user.userName === "admin" && user.passWord === "admin") {
    Cookies.set("token", "admin");
    router.push("/");
  } else {
    ElMessage.error("密码错误");
    Cookies.remove("token");
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  position: relative;
}
.el-form {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  right: 100px;
  top: 100px;
  padding: 50px;
  box-sizing: border-box;
  padding-top: 100px;
  border-radius: 20px;
}
.el-form-item {
  margin-top: 20px;
}
</style>