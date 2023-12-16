<script setup lang="ts">
import { ref } from 'vue'

import HeroBlock from './components/HeroBlock.vue'
import ChatBox from './components/ChatBox.vue'
import FeaturesBlock from './components/FeaturesBlock.vue'
import CompatibleBlock from './components/CompatibleBlock.vue'
import HowitworksBlock from './components/HowitworksBlock.vue'
import FaqBlock from './components/FaqBlock.vue'
import SideBar from './components/SideBar.vue'

const sidebarVisible = ref(false)
const toggleSidebar = (state: boolean) => {
  sidebarVisible.value = state
}
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#" class="logo" @click="toggleSidebar(true)"></a>
    </div>
  </header>

  <div class="content__wrapper">
    <div class="container">
      <div class="content">
        <div class="content__box">
          <hero-block @show-sidebar="toggleSidebar(true)"/>
          <features-block />
          <compatible-block />
        </div>
        <chat-box />
      </div>
      <howitworks-block />
      <faq-block />
    </div>
  </div>

  <footer class="footer__wrapper">
    <div class="footer">
      <div class="footer__logo">
        <a href="#" class="footer__logo-img"></a>
      </div>
      <div class="footer__info">
        <p class="footer__info-text">We create state-of-art AI assistants that removes all boring works from humans and make them more productive and creative</p>
        <div class="footer__info-btn btn">Ask a question</div>
      </div>
    </div>
  </footer>

  <side-bar :visible="sidebarVisible" @hide-sidebar="toggleSidebar(false)" />
</template>

<style scoped lang="scss">
@import '/src/assets/styles/mixins/main.scss';
.content {
  display: flex;
  gap: 140px;

  @include mq($bp-medium-big, $bp-big) {
    gap: 0;
    flex-wrap: wrap;
  }

  @include mq($bp-super-small, $bp-medium-big) {
    gap: 0;
    width: 100%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 120px;

    @include mq($bp-medium-big, $bp-big) {
      gap: 60px;
    }

    @include mq($bp-super-small, $bp-medium-big) {
      width: 100%;
      gap: 40px;
    }
  }
}
</style>
