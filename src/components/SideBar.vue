<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  visible: {
    required: true,
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['hideSidebar'])

const hideSidebar = () => {
  emits('hideSidebar')
}
</script>

<template>
  <Teleport to="body">
    <div class="sidebar" v-if="visible">
      <div class="sidebar__overlay" @click="hideSidebar"></div>
      <div class="sidebar__close-btn" @click="hideSidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <rect x="8" y="9.44009" width="2.03636" height="20.3636" transform="rotate(-45 8 9.44009)" fill="white"/>
          <rect width="2.03636" height="20.3636" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24 9.44009)" fill="white"/>
        </svg>
      </div>
      <div class="sidebar__content">
        <div class="sidebar__content-signin">
          <div class="sidebar__content-hgroup">
            <div class="sidebar__content-title">Ready to use gogol.chat?</div>
            <div class="sidebar__content-subtitle">Sign in to join waitlist</div>
          </div>
          <div class="sidebar__content-btngroup">
            <div class="btn">Sign in with Google</div>
            <div class="btn">Sign in with Discord</div>
            <div class="sidebar__content-info">
              By signing in, you are agreeing to the <a href="#" class="sidebar__content-info-link">Terms of Service</a> and <a href="#" class="sidebar__content-info-link">Privasy Polycy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.sidebar {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: flex-end;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.60);
    z-index: 0;

    @include mq($bp-super-small, $bp-medium-big) {
     display: none;
    }
  }

  &__close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    cursor: pointer;

    @include mq($bp-super-small, $bp-medium-big) {
      top: 22px;
    }
  }

  &__content {
    position: relative;
    width: 420px;
    height: 100vh;
    flex-shrink: 0;
    background: #fff;
    padding: 202px 32px;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #17082B;
    background-image: url('/img/sidebar-bg.png');
    background-repeat: no-repeat;
    background-size: 816px;
    background-position: center top;
    z-index: 1;

    @include mq($bp-super-small, $bp-medium-big) {
      width: 100vw;
      padding-top: 193px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      background: rgba(0, 0, 0, 0.60);
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &-signin {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &-hgroup {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &-title {
      font-size: 40px;
      font-weight: 450;
      line-height: 110%;
      letter-spacing: -0.56px;
    }
    &-subtitle {
      font-size: 18px;
      font-weight: 400;
      line-height: 155.556%;
      opacity: 0.8;
    }
    &-btngroup {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .btn {
        padding: 19px 32px;
        color: #000;
      }
    }
    &-info {
      color: rgba(255, 255, 255, 0.40);
      font-size: 14px;
      line-height: 142.857%;

      &-link {
        color: rgba(255, 255, 255, 0.60);
      }
    }
  }
}
</style>