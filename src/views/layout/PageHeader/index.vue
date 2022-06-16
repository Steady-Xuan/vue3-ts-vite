<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    background-color="#a18cd1"
  >
    <div index="0">
      <!-- <img src="" alt=""> -->
      logo
    </div>
    <div class="flex-grow" />
    <el-sub-menu index="1">
      <template #title>帮助</template>
      <el-menu-item index="1-1">联系我们</el-menu-item>
      <el-menu-item index="1-2">反馈中心</el-menu-item>
    </el-sub-menu>
    <!-- <div>帮助</div> -->
    <el-sub-menu index="2">
      <template #title>用户中心</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu {
  border: none;
}
</style>
