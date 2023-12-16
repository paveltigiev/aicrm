<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

function addElementsEverySecond(arr1: any[], arr2: any[]): void {
  let index = 0

  const intervalId = ref<number | null>(null)

  intervalId.value = setInterval(() => {
    if (index < arr1.length) {
      arr2.push(arr1[index])
      index++
    } else {
      clearInterval(intervalId.value!)
    }
  }, 1000)
}

const messages = [
  'How many leads was today?',
  'Today was 10 new leads, 2 of it already won on $7200.',
  'Who win more leads last week?',
  'Tell me about your business, boy',
  'Samanta wins 20 leads last week, total on $50234'
]
const chat_messages = ref<any[]>([])

onMounted(() => {
  addElementsEverySecond(messages, chat_messages.value)
})

onUnmounted(() => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
  }
})
</script>

<template>
  <div class="chat">
    <div class="chat__card">
      <div class="chat__card-header">
        <div class="chat__card-header-actions">
          <div class="chat__card-header-actions-btn"></div>
        </div>
        <div class="chat__card-header-title">gogol.chat</div>
      </div>
      <div class="chat__card-messages">
        <div class="chat__card-messages-message slide-in-from-bottom" v-for="(message, index) in chat_messages" :key="index">
          <div class="chat__card-messages-message-text">{{ message }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none" class="chat__card-messages-message-tail">
            <path d="M0 10L12.5 0L0 1.00947e-06V10Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat {
  position: relative;
  padding-bottom: 90px;

  @include mq($bp-medium-big, $bp-big) {
    position: absolute;
    top: 90px;
    right: 0;
  }

  @include mq($bp-super-small, $bp-medium-big) {
    position: absolute;
    top: 467px;
    left: 0;
    width: 100%;
  }

  &__card {
    position:sticky;
    top: 80px;
    width: 480px;
    height: 740px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: linear-gradient(180deg, #18181B 0%, #1F1F26 100%);
    backdrop-filter: blur(50px);

    @include mq($bp-medium-big, $bp-big) {
      position: relative;
      top: 0;
      width: 364px;
      height: 561px;
      border-radius: 18px;
    }
    @include mq($bp-super-small, $bp-medium-big) {
      position: relative;
      top: 0;
      width: 315px;
      height: 485.625px;
      margin: 0 auto;
      border-radius: 15.75px;
      border: 0.656px solid rgba(255, 255, 255, 0.05);
      background: linear-gradient(180deg, #18181B 0%, #1F1F26 100%);
      backdrop-filter: blur(32.812496185302734px);
    }

    &-header {
      position: relative;
      padding: 18px;

      @include mq($bp-medium-big, $bp-big) {
        padding: 14px;
      }
      @include mq($bp-super-small, $bp-medium-big) {
        padding: 11px;
      }

      &-actions {
        position: absolute;
        display: flex;
        gap: 8px;
        left: 24px;
        top: 23px;

        @include mq($bp-medium-big, $bp-big) {
          gap: 6px;
          left: 16px;
          top: 18px;
        }
        @include mq($bp-super-small, $bp-medium-big) {
          gap: 5.25px;
          left: 15px;
          top: 15px;
        }

        &-btn {
          width: 13px;
          height: 13px;
          border-radius: 75.833px;
          background: #28282F;

          @include mq($bp-medium-big, $bp-big) {
            width: 10px;
            height: 10px;
          }
          @include mq($bp-super-small, $bp-medium-big) {
            width: 8.5px;
            height: 8.5px;
          }
        }
        &::before {
          content: '';
          display: block;
          width: 13px;
          height: 13px;
          border-radius: 75.833px;
          background: #28282F;

          @include mq($bp-medium-big, $bp-big) {
            width: 10px;
            height: 10px;
          }
          @include mq($bp-super-small, $bp-medium-big) {
            width: 8.5px;
            height: 8.5px;
          }
        }
        &::after {
          content: '';
          display: block;
          width: 13px;
          height: 13px;
          border-radius: 75.833px;
          background: #28282F;

          @include mq($bp-medium-big, $bp-big) {
            width: 10px;
            height: 10px;
          }
          @include mq($bp-super-small, $bp-medium-big) {
            width: 8.5px;
            height: 8.5px;
          }
        }
      }
      &-title {
        text-align: center;
        color: #28282F;
        font-size: 16px;
        font-weight: 450;
        line-height: 150%;

        @include mq($bp-medium-big, $bp-big) {
          font-size: 12.133px;
          line-height: 150%;
        }
        @include mq($bp-super-small, $bp-medium-big) {
          font-size: 10.5px;
          line-height: 150%;
        }
      }
    }
    &-messages {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 32px;
      height: calc(100% - 60px);
      padding: 42px 32px;
      box-sizing: border-box;
      overflow-y: scroll;

      @include mq($bp-medium-big, $bp-big) {
        height: calc(100% - 46px);
        padding: 31px 22px;
        gap: 25px;
      }
      @include mq($bp-super-small, $bp-medium-big) {
        height: calc(100% - 38px);
        padding: 27px 21px;
        gap: 21px;
      }
      &-message {
        position: relative;
        display: flex;
        font-size: 16px;
        font-weight: 450;
        line-height: 150%;

        &-text {
          display: flex;
          padding: 12px 20px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 24px 24px 24px 0;
          background: #fff;
          color: #000;
          max-width: 300px;
          line-height: 137.5%;

          @include mq($bp-medium-big, $bp-big) {
            max-width: 228px;
            line-height: 137.5%;
            font-size: 12.133px;
            padding: 9px 17px;
            border-radius: 18.2px 18.2px 18.2px 0;
          }
          @include mq($bp-super-small, $bp-medium-big) {
            max-width: 196px;
            font-size: 10.5px;
            font-weight: 450;
            line-height: 150%;
            padding: 7px 13px;
            border-radius: 15.75px 15.75px 15.75px 0;
          }
        }
        &-tail {
          position: absolute;
          left: 0;
          bottom: -10px;
          fill: white;

          @include mq($bp-super-small, $bp-medium-big) {
            bottom: -8px;
            width: 8.23px;
          }
        }

        &:nth-child(2n-1) {
          flex-direction: row-reverse;

          .chat__card-messages-message-text {
            border-radius: 24px 24px 0 24px;
            background: #613DC4;
            color: #FFF;

            @include mq($bp-medium-big, $bp-big) {
              border-radius: 18.2px 18.2px 0 18.2px;
            }
            @include mq($bp-super-small, $bp-medium-big) {
              border-radius: 15.75px 15.75px 0 15.75px;
            }
          }
          .chat__card-messages-message-tail {
            right: 0;
            left: auto;
            fill: #613DC4;
            transform: scaleX(-1);
            @include mq($bp-super-small, $bp-medium-big) {
            }
          }
        }
      }
    }
  }
}
</style>
