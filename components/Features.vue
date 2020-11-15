<template>
  <section class="features-section">
    <div class="features-section__feature feature">
      <div class="feature__icon">
        <img
          src="https://myapartment.roskvartal.ru/static/svg/mails.svg"
          alt="mails"
        />
      </div>
      <h2 class="feature__title">Информационная система</h2>
      <span class="feature__description">
        для улучшения коммуникации <br />
        между жителями МКД <br />
        и управляющей организацией
      </span>
    </div>
    <div class="features-section__feature feature">
      <div class="feature__icon">
        <img
          src="https://myapartment.roskvartal.ru/static/svg/multiple-users.svg"
          alt="multiple-users"
        />
      </div>
      <h2 class="feature__title">Обменивайтесь</h2>
      <span class="feature__description">
        с жителями МКД информацией <br />
        и оперативно решайте вопросы <br />
        управления МКД
      </span>
    </div>
    <div class="features-section__feature feature">
      <div class="feature__icon">
        <img
          src="https://myapartment.roskvartal.ru/static/svg/conversation.svg"
          alt="conversation"
        />
      </div>
      <h2 class="feature__title">Общайтесь</h2>
      <span class="feature__description">
        с управляющей организацией <br />
        и ТСЖ, участвуйте в управлении <br />
        своим домом
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features-section {
  font-family: "PT Sans", sans-serif;
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    circle farthest-side at center bottom,
    #0091d7,
    #004094 100%
  );
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}
.feature {
  margin-right: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  &:last-child {
    margin-right: 0;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    width: 92px;
    background-color: #ffffff;
    border-radius: 9999px;
    margin-bottom: 24px;
    & img {
      height: 52px;
    }
  }
  &__title {
    font-size: 26px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  &__description {
    font-size: 19px;
    line-height: 26px;
    text-align: center;
  }
}
</style>