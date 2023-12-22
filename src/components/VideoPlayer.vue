<script setup>
import { ref } from 'vue'

defineProps({
  url: {
    required: true,
    type: String,
    default: '',
  },
  text: {
    required: true,
    type: String,
    default: '',
  }
})

const videoRef = ref(null)

const toggleVideo = () => {
  const video = videoRef.value
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
</script>

<template>
  <div class="player">
    <div class="player__video">
      <div class="player__video-bnt" @click="toggleVideo"></div>
      <video ref="videoRef" :src="url" class="player__video-content"></video>
    </div>
    <div class="player-text" v-if="text" v-html="text"></div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include mq($bp-super-small, $bp-medium-big) {
    gap: 16px;
  }

  &__video {
    position: relative;

    &-bnt{
      position: absolute;
      width: 80px;
      height: 80px;
      bottom: 40px;
      left: 40px;
      background: url('/img/play.svg') 0 0 no-repeat;
      background-size: cover;
      cursor: pointer;
      z-index: 2;

      @include mq($bp-super-small, $bp-medium-big) {
        width: 32px;
        height: 32px;
        bottom: 16px;
        left: 16px;
      }
    }

    &-content {
      width: 100%;
      height: auto;
      border-radius: 16px;
      overflow: hidden;
      background: linear-gradient(91deg, rgba(163, 130, 255, 0.60) 1.1%, rgba(212, 196, 255, 0.60) 86.14%), #3A2575;

      @include mq($bp-medium-big, $bp-big) {
        // height: 508px;
      }
      @include mq($bp-super-small, $bp-medium-big) {
        // height: 188px;
        border-radius: 8px;
      }
    }
  }

  &-text {
    text-align: center;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.08px;
    opacity: 0.4;

    @include mq($bp-super-small, $bp-medium-big) {
      text-align: left;
      font-size: 12px;
      line-height: 133.333%;
      letter-spacing: -0.1px;
      width: 250px;
    }
  }
}
</style>