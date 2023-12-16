<template>
  <div class="features">
    <div class="features__item">
      <h2 class="features__item-title">Tune your CRM like-a-pro</h2>
      <div class="features__item-text">After connecting your CRM, assistant will ask you few questions about your business. And make recommendation how to improve you CRM setup.</div>
    </div>
    <div class="features__item">
      <h2 class="features__item-title">Talk with your CRM</h2>
      <div class="features__item-text">Ask assistant anything you want about your CRM data. Sales statistics, manager velocity - image you have human assistant who can do all boring job.</div>
    </div>
    <div class="features__item">
      <h2 class="features__item-title">Sales persons assistant</h2>
      <div class="features__item-text">Based on your company sales scripts assistant can read all the data about deal, contact and company and will recommend next steps. If you have a lot of deals based on scoring assistant can prioritize most important tasks.</div>
    </div>
    <div class="features__item">
      <h2 class="features__item-title">Incoming data analyse</h2>
      <div class="features__item-text">AI will help to analyse all incoming data like emails, calls, messages - analyse it, provide summary and offer how to fill up all neccessary fields. Your sales person just need to confirm it.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features {
  width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px 60px;

  @include mq($bp-medium-big, $bp-big) {
    width: 100%;
    grid-gap: 80px 48px;
    margin-bottom: 20px;
  }
  @include mq($bp-super-small, $bp-medium-big) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    flex: 50%;
    gap: 16px;

    &-title {
      font-size: 22px;
      font-weight: 450;
      line-height: 145.455%;
      letter-spacing: -0.11px;

      @include mq($bp-super-small, $bp-medium-big) {
        letter-spacing: -0.2px;
      }
    }
    &-text {
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.09px;
      opacity: 0.6;

      @include mq($bp-super-small, $bp-medium-big) {
        font-size: 16px;
        line-height: 168.75%;
        letter-spacing: -0.08px;
      }
    }

  }
}
</style>