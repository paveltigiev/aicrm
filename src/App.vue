<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const header = ref(null)

onMounted(() => {
  const handleScroll = () => {
    if (header.value) {
      let scrollPosition = window.scrollY;
      let opacity = 1 - scrollPosition / 200
      if (opacity < 0) {
        opacity = 0
        header.value.style.display = 'none'
      } else {
        header.value.style.display = 'block'
      }
      header.value.style.opacity = opacity.toString()
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <header class="header" ref="header">
    <div class="container">
      <a href="#" class="logo"></a>
    </div>
  </header>
  <router-view></router-view>
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
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  transition: opacity 0.1s ease;
}
</style>
