<template>
  <div class="faq">
    <h2 class="faq__title gradient-text">Frequently Asked Questions</h2>
    <div class="faq__list">
      <div class="faq__list-item">
        <div class="faq__list-item-title">How to get demo?</div>
        <div class="faq__list-item-text">Right now we are on private beta. You can request demo, and then we can discuss your needs and provide access.</div>
      </div>
      <div class="faq__list-item">
        <div class="faq__list-item-title">I’m afraiding of loosing my data...</div>
        <div class="faq__list-item-text">We doesnt provide you api key to third party, and communication with your CRM is from our secure server. </div>
      </div>
      <div class="faq__list-item">
        <div class="faq__list-item-title">What CRM does you support?</div>
        <div class="faq__list-item-text">We have integration with Kommo and HubSpot CRM, we plan to add more, plug your custom CRM and also support Zapier.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 90px 0 52px;

  @include mq($bp-super-small, $bp-medium-big) {
    gap: 22px;
    padding: 90px 0 30px;
  }

  &__title {
    font-size: 48px;
    font-weight: 450;
    line-height: 133.333%;
    letter-spacing: -0.9px;

    @include mq($bp-medium-big, $bp-big) {
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
  &__list {
    &-item {
      display: flex;
      gap: 60px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px 0 39px 0;

      @include mq($bp-super-small, $bp-medium-big) {
        flex-direction: column;
        padding: 33px 0 30px 0;
        gap: 8px;
      }

      &-title {
        width: 600px;
        flex-shrink: 0;
        font-size: 32px;
        font-weight: 450;
        line-height: 125%;
        letter-spacing: -0.6px;

        @include mq($bp-medium-big, $bp-big) {
          width: 369px;
          font-size: 28px;
          line-height: 142.857%;
          letter-spacing: -0.392px;
        }

        @include mq($bp-super-small, $bp-medium-big) {
          width: 100%;
          font-size: 18px;
          line-height: 155.556%;
          letter-spacing: -0.1px;
          font-weight: 400;
        }
      }
      &-text {
        flex: 1 0 0;
        font-size: 24px;
        line-height: 166.667%;
        opacity: 0.8;

        @include mq($bp-medium-big, $bp-big) {
        }
        @include mq($bp-super-small, $bp-medium-big) {
          font-size: 18px;
          line-height: 155.556%;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>