<template>
    <div class="category">
      <template v-for="item in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="">
          <span class="text">{{ item.title }}</span>
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  defineProps({
    categories:{
        type:Array
    }
  })
  </script>
  
  <style lang="less" scoped>
  .category {
    display: flex;
    align-items: center;
    height: 80px;
    overflow-x: scroll;
    padding: 0px 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    
    .item {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;
      img {
        width: 32px;
        height: 32px;
      }
      .text {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
  </style>