<template>
  <a-layout class="box">
    <a-layout class="layout">
      <a-layout>
        <a-layout-sider class="side">
          <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }" mode="inline">
            <a-sub-menu key="sub1">
              <template #title> <span> <user-outlined /> VSCode </span> </template>
              <a-menu-item key="1">
                <RouterLink to='./blog1'>コンソールログを二度と自分で書かない</RouterLink>
              </a-menu-item>
              <a-menu-item key="2">
                <RouterLink to='./blog2'>MDN プレイグラウンドの紹介</RouterLink>
              </a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title> <span> <laptop-outlined /> subnav 2 </span>
              </template>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span><notification-outlined />subnav 3</span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout class="head">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content class="content">
            <RouterView></RouterView>
            <RouterView name="base"></RouterView>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const selectedKeys2 = ref(["1"]);
const openKeys = ref(["sub1"]);
const collapsed = ref(false);
const subnavList = ['VScode'];
const optionList = ['コンソールログを二度と自分で書かない'];
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.layout {
  margin-left: -530px;
}

.head {
  display: flex;
  width: 1000px !important;
  height: 878px;
  padding: 0 24px 24px;

}

#app {
  margin-left: 510px;
  margin-top: 100px;
  height: 340px;
}

.box {
  display: flex;
  margin-top: -120px;
}

.side {
  overflow-y: auto;
  overflow-x: hidden;
  height: 88vh;
  position: fixed;
  left: 0;
  top: 10;
  bottom: 0;
  margin-top: -80px;
  flex: 0 0 350px !important;
  max-width: 500px !important;
  min-width: 200px !important;
  width: 400px !important;
}

.content {
  background: #fff;
  padding: 15px;
  min-height: 825px !important;
  margin-left: -25px;
  position: relative;
  width: 1000px;

}

.ant-layout-sider-children {}

.ant-menu-title-content {
  padding-top: 2px;
}

.ant-layout {
  background-color: #fff !important;
  margin-top: -80px;
}

.head {
  position: relative;
  top: 20px;
}</style>
