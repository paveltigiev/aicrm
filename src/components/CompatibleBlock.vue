<template>
  <div class="compatible">
    <div class="compatible__title">
      Compatible with
    </div>
    <div class="compatible__links">
      <a href="#" class="compatible__links-item">
        <img src="/img/logos/hubspot.svg" alt="">
      </a>
      <a href="#" class="compatible__links-item">
        <img src="/img/logos/kommo.svg" alt="">
      </a>
      <a href="#" class="compatible__links-item">
        <img src="/img/logos/zoho.svg" alt="">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.compatible {
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 89px;

  @include mq($bp-medium-big, $bp-big) {
    padding-bottom: 59px;
  }
  @include mq($bp-super-small, $bp-medium-big) {
    width: 100%;
    gap: 18px;
  }

  &__title {
    font-size: 22px;
    font-weight: 450;
    line-height: 145.455%;
    letter-spacing: -0.11px;
  }
  &__links {
    display: flex;
    gap: 80px;

    @include mq($bp-super-small, $bp-medium-big) {
      gap: 44px;
    }

    &-item {
      display: flex;
      align-content: center;
    }
  }
}
</style>