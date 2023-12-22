<script setup lang="ts">
import VideoPlayer from '../components/VideoPlayer.vue'

const emits = defineEmits(['showSidebar'])

const showSidebar = () => {
  emits('showSidebar')
}

defineProps({
  title: {
    required: true,
    type: String,
    default: '',
  },
  text: {
    required: false,
    type: String,
    default: '',
  },
  video: {
    required: false,
    type: String,
    default: '',
  },
  btn: {
    required: false,
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="hero">
    <h1 class="hero__title gradient-text" v-html="title"></h1>
    <p class="hero__text" v-html="text" v-if="text"></p>
    <button class="hero__button btn" @click="showSidebar" v-if="btn">
      Request Demo
    </button>
    <video-player :url="video" v-if="video" />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  width: 700px;
  height: 740px;
  align-items: flex-start;

  @include mq($bp-medium-big, $bp-big) {
    width: 482px;
  }

  @include mq($bp-super-small, $bp-medium-big) {
    justify-content: flex-start;
    width: 100%;
    height: 894px;
    gap: 24px;
    padding: 60px 0 80px;
  }

  &__title {
    position: relative;
    font-size: 72px;
    font-weight: 450;
    line-height: 111.111%;
    letter-spacing: -1.3px;
    margin: 0 0 38px;
    margin: 0;

    @include mq($bp-medium-big, $bp-big) {
      font-size: 64px;
      line-height: 112.5%;
      letter-spacing: -0.896px;
    }

    @include mq($bp-super-small, $bp-medium-big) {
      font-size: 40px;
      line-height: 110%;
      letter-spacing: -0.56px;
    }

    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }

    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 5px;
      height: 75px;
      border-radius: 100px;
      background: #613DC4;
      left: 650px;
      bottom: -5px;
      animation: blink 0.8s infinite;

      @include mq($bp-medium-big, $bp-big) {
        width: 5px;
        height: 57px;
        left: 212px;
        bottom: 0px;
      }

      @include mq($bp-super-small, $bp-medium-big) {
        width: 3px;
        height: 34px;
        left: 132px;
        bottom: 3px;
      }
    }
  }
  &__text {
    font-size: 24px;
    font-weight: 400;
    line-height: 166.667%;
    opacity: 0.8;

    @include mq($bp-super-small, $bp-medium-big) {
      font-size: 18px;
      line-height: 155.556%;
    }
  }
  &__button {
    height: 60px;
    line-height: 150%;
    margin-top: 6px;
    padding: 16px 54px;

    @include mq($bp-super-small, $bp-medium-big) {
      height: auto;
      font-size: 16px;
      font-weight: 500;
      line-height:150%;
      letter-spacing: -0.08px;
      padding: 12px 32px;
      margin-top: 8px;
    }
  }
}
</style>