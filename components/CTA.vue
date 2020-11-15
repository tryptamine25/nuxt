<template>
  <section class="cta-section">
    <div class="cta-section__container">
      <h1 class="cta-section__title">
        Приложение для решения текущих вопросов по дому онлайн
      </h1>
      <span class="cta-section__subtitle">
        Поможет решить проблемы жителей дома в режиме реального времени, без
        дополнительных визитов и звонков в управляющую организацию
      </span>
      <div class="cta-section__controls">
        <a href="/signup" class="cta-section__controls--button-free">
          Попробовать бесплатно
        </a>
        <div class="cta-section__store">
          <a href="#" class="cta-section__store--button" target="_blank">
            <img
              height="16"
              alt="Доступно в Google Play"
              src="https://myapartment.roskvartal.ru/static/svg/apple.svg"
            />
            <span>APP STORE</span>
          </a>
          <a href="#" class="cta-section__store--button" target="_blank">
            <img
              height="16"
              alt="Доступно в Google Play"
              src="https://myapartment.roskvartal.ru/static/svg/gplay.svg"
            />
            <span>GOOGLE PLAY</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta-section {
  background-image: url(https://myapartment.roskvartal.ru/static/jpg/cta-section-bg.png);
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 54px 74px;
  &__container {
    width: 50%;
  }
  &__title {
    font-family: "PT Serif", serif;
    font-size: 34px;
    font-weight: bold;
    line-height: 44px;
    margin-bottom: 17px;
  }
  &__subtitle {
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    font-family: "PT Sans", sans-serif;
  }
  &__controls {
    display: flex;
    margin-top: 44px;
    flex-direction: column;
    &--button-free {
      max-width: fit-content;
      font-size: 13px;
      line-height: 16px;
      height: 48px;
      min-width: 96px;
      padding: 16px 20px;
      text-transform: uppercase;
      background-color: #e12351;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 700;
      font-family: "PT Sans", sans-serif;
      letter-spacing: 1px;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  &__store {
    display: flex;
    &--button {
      color: #262626;
      text-decoration: none;
      position: relative;
      top: -12px;
      transition: transform 0.1s ease-in-out;
      padding: 10px 20px;
      border: 1px solid #d4d8de;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 32px 8px 0 0;
      letter-spacing: 1px;
      font-size: 13px;
      line-height: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      & span {
        margin-left: 12px;
        font-family: "PT Sans", sans-serif;
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}
</style>