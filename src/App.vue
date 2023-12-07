<script setup lang="ts">
import ChatBox from './components/ChatBox.vue'
</script>

<template>

  <header class="header">
    <div class="container">
      <el-row :gutter="16">
        <el-col :span="12">
          <div class="logo"></div>
        </el-col>
        <el-col :span="12" class="buttons">
          <el-button type="primary" size="large" class="loginBtn">
            Login
          </el-button>
        </el-col>
      </el-row>
    </div>
  </header>
  <div class="light-row hero">
    <div class="container">
      <el-row :gutter="0">
        <el-col :span="13">
          <h1 class="title">Brings humanity to your CRM system</h1>
          <p class="text">
            Enhance your service with AI assistant: talk with your CRM on human language, improves customer interactions, and eliminates tedious routine tasks
          </p>
          <div class="partners">
            <a href="#" class="partners-item">
              <img src="/img/logos/logo01.png" alt="">
            </a>
            <a href="#" class="partners-item">
              <img src="/img/logos/logo03.png" alt="">
            </a>
            <a href="#" class="partners-item">
              <img src="/img/logos/logo02.png" alt="">
            </a>
          </div>
        </el-col>
        <el-col :span="11">
          <chat-box />
        </el-col>
        <el-col :span="24" class="align-center">
          <el-button type="primary" class="requestBtn">
            Request Demo
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="dark-row">
    <div class="container">
      <h1 class="title">Features you will love</h1>
      <div class="features">
        <div class="features-item">
          <div class="features-item-icon"></div>
          <div class="features-item-info">
            <h2 class="features-item-title">Tune your CRM like-a-pro</h2>
            <div class="features-item-text">
              After connecting your CRM, assistant will ask you few questions about your business. And make recommendation how to improve you CRM setup.
            </div>
          </div>
        </div>
        <div class="features-item">
          <div class="features-item-icon"></div>
          <div class="features-item-info">
            <h2 class="features-item-title">Talk with your CRM</h2>
            <div class="features-item-text">
              Ask assistant anything you want about your CRM data. Sales statistics, manager velocity - image you have human assistant who can do all boring job.
            </div>
          </div>
        </div>
        <div class="features-item">
          <div class="features-item-icon"></div>
          <div class="features-item-info">
            <h2 class="features-item-title">Sales persons assistant</h2>
            <div class="features-item-text">
              Based on your company sales scripts assistant can read all the data about deal, contact and company and will recommend next steps. If you have a lot of deals based on scoring assistant can prioritize most important tasks.
            </div>
          </div>
        </div>
        <div class="features-item">
          <div class="features-item-icon"></div>
          <div class="features-item-info">
            <h2 class="features-item-title">Incoming data analyse</h2>
            <div class="features-item-text">
              AI will help to analyse all incoming data like emails, calls, messages - analyse it, provide summary and offer how to fill up all neccessary fields. Your sales person just need to confirm it.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="light-row how_it_works">
    <div class="container">
      <el-row :gutter="16">
        <el-col :span="13">
          <iframe src="https://player.vimeo.com/video/835735804?h=28d4845221&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </el-col>
        <el-col :span="11" class="buttons">
          <h1 class="title">How does it works</h1>
          <div class="text">
            <p>On this video you can see how does assistant works. First of all you will need to provide API key, to make assistant access to your CRM. Then you will chat with assistant. On this video you can see how CRM setting up works and how to talk with your CRM.</p>
            <p>Take a note, we doesnt provide your API key and data to thirdparty.</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="dark-row">
    <div class="container">
      <div class="faq">
        <div class="faq-item">
          <div class="faq-item-title">How to get demo?</div>
          <div class="faq-item-text">Right now we are on private beta. You can request demo, and then we can discuss your needs and provide access.</div>
        </div>
        <div class="faq-item">
          <div class="faq-item-title">I’m afraiding of loosing my data...</div>
          <div class="faq-item-text">We doesnt provide you api key to third party, and communication with your CRM is from our secure server. </div>
        </div>
        <div class="faq-item">
          <div class="faq-item-title">What CRM does you support?</div>
          <div class="faq-item-text">We have integration with Kommo and HubSpot CRM, we plan to add more, plug your custom CRM and also support Zapier.</div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-container">
      <el-row :gutter="60">
        <el-col :span="11">
          <a href="#" class="footer-logo">
            <img src="/img/logos/tana.svg" alt="">
          </a>
          <p>We create state-of-art AI assistants that removes all boring works from humans and make them more productive and creative</p>
        </el-col>
        <el-col :span="11" :offset="2">
          <div class="footer-contacts">
            <div class="footer-contacts-title">Get in Touch</div>
            <a href="mailto:human@crmassistant.ai" class="mailto">human@crmassistant.ai</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<style scoped lang="scss">

.header {
  .loginBtn {
    margin-right: 20px;
    padding: 0 25px;
  }
}
.hero {
  margin: 0 0 20px;
  h1.title {
    font-size: 64px;
    font-weight: 900;
    line-height: 86px;
    margin-top: 42px;
  }
  .text {
    font-size: 32px;
    line-height: 43px;
  }
  .partners {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 95px;

    &-item {
      img {
        height: 90px;
      }
    }
  }
  .requestBtn {
    margin: 0 auto;
    font-size: 32px;
    font-style: italic;
    font-weight: 900;
    line-height: 43px;
    padding: 16px 52px;
    display: block;
    height: auto;
    margin-top: 23px;
  }
}
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 89px 126px;
  margin: 72px 0 82px;

  &-item {
    display: flex;
    gap: 24px;

    &-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #A0BCF8;
    }
    &-info {
      flex: 1;
    }
    &-title {
      font-size: 24px;
      font-weight: 900;
      line-height: 31.992px;
      margin: 0 0 8px;
    }
    &-text {
      font-family: Roboto;
      font-size: 16px;
      line-height: 150%;
    }
  }
}
.how_it_works {
  padding: 64px 0;
  .title {
    margin: 0 0 24px;
  }
}
.faq {
  width: 900px;
  margin: 0 auto;
  padding: 56px 68px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;

  &-item {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-title {
      font-size: 24px;
      font-weight: 900;
      line-height: 31.992px;
    }
    &-text {
      font-family: Roboto;
      font-size: 16px;
      line-height: 150%;
    }
  }
}
.footer {
  background: #ECF2FE;
  padding: 40px 40px 88px;

  &-container {
    width: 900px;
    margin: 0 auto;
  }
  &-logo {
    display: block;
    margin-bottom: 20px;
  }
  &-contacts {
    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      margin: 14px 0;
      color: #3371F2;
    }
    .mailto {
      display: block;
      background: url('/img/icons/email.svg') 0 0 no-repeat;
      margin-bottom: 16px;
      padding-left: 40px;
    }
  }
}
</style>
