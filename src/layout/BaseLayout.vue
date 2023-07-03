<template>
  <a-layout>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 30">
        <a-breadcrumb-item id="subnav">{{ subnav }}</a-breadcrumb-item>
        <a-breadcrumb-item id="option">{{ option }}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider class="sider" width="330" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  VSCode
                </span>
              </template>
              <a-menu-item key="1"><button @click="changeBreadcrumb(1)"><RouterLink to='./blog1' >コンソールログを二度と自分で書かない</RouterLink></button></a-menu-item>
              <a-menu-item key="2"><button @click="changeBreadcrumb(2)"><RouterLink to='./blog2' >プレイグラウンドの紹介</RouterLink></button></a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  subnav 2
                </span>
              </template>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <RouterView></RouterView>
          <RouterView name="base"></RouterView>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { RouterLink } from "vue-router";
import { defineComponent, ref } from 'vue';
export default defineComponent({

  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      openKeys: ref(['sub1']),
      subnavList : ref(['VScode','VScode']),
      optionList : ref(['コンソールログを二度と自分で書かない','プレイグラウンドの紹介']),
      subnav:ref('home'),
      option:ref('page')
    };
  },
  methods:{
    changeBreadcrumb(n){
      this.subnav = this.subnavList[n-1];
      this.option = this.optionList[n-1];
    }
  }
});
</script>
<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-layout{
  width: 1700px;
  margin-left: -180px;
  height: 800px;
  background-color: #fff!important;
}
.ant-layout-content{
  background-color: white;
  max-width: 1700px;
  max-height: 760px;
  margin-left: 30px;
  margin-top: -30px;
}
.sider{
  margin-top: -72px;
}
.ant-layout-footer{
  background-color:white!important;
}
#subnav{
  margin-left: 180px!important;
  font-size: 16px!important;
  font-weight: 600;
  color: cornflowerblue!important;
}
#option{
  font-size: 16px!important;font-weight: 600;
  color: rgb(216, 130, 17)!important;
}
#option1{
  width: 200px!important;
}
</style>
