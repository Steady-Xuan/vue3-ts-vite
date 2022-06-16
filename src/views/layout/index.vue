<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <PageHeader /> -->
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "./Menu/index.vue";
import PageHeader from "./PageHeader/index.vue";
</script>

<style>
.el-main {
  padding: 0px;
  margin: 0px;
  border: 0px;
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
}
.el-header,
.el-footer {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

.el-header {
  background-color: #a18cd1;
  display: flex;
  /* float: left; */
}
</style>