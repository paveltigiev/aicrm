<script setup>
import VideoPlayer from '../components/VideoPlayer.vue'
</script>

<template>
  <div class="howitworks">
    <div class="howitworks__info">
      <h1 class="howitworks__info-title gradient-text">How it works?</h1>
      <div class="howitworks__info-text">
        <p>On this video you can see how does assistant works. First of all you will need to provide API key, to make assistant access to your CRM. Then you will chat with assistant. On this video you can see how CRM setting up works and how to talk with your CRM.</p>
      </div>
    </div>
    <video-player url="/demo.mp4" text="Take a note, we don't provide your API key and data to third parties." />
  </div>
</template>

<style lang="scss" scoped>
.howitworks {
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 61px 0;

  @include mq($bp-super-small, $bp-medium-big) {
    padding: 31px 0;
    gap: 48px;
  }

  &__info {
    display: flex;
    align-items: flex-start;
    gap: 60px;

    @include mq($bp-super-small, $bp-medium-big) {
      flex-direction: column;
      gap: 24px;
    }

    &-title {
      width: 599px;
      flex-shrink: 0;
      font-size: 48px;
      font-weight: 450;
      line-height: 133.333%;
      letter-spacing: -0.9px;

      @include mq($bp-medium-big, $bp-big) {
        width: 375px;
        font-size: 40px;
        line-height: 120%;
        letter-spacing: -0.7px;
      }
      @include mq($bp-super-small, $bp-medium-big) {
        width: 100%;
        font-size: 40px;
        font-weight: 450;
        line-height: 110%;
        letter-spacing: -0.56px;
      }
    }
    &-text {
      flex: 1 0 0;
      color: #FFF;
      font-size: 24px;
      line-height: 166.667%;
      opacity: 0.8;

      @include mq($bp-super-small, $bp-medium-big) {
        font-size: 18px;
        line-height: 155.556%;
      }
    }
  }
}
</style>