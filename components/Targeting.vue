<template>
  <section class="targeting-section">
    <h2 class="targeting-section__title">Кто может пользоваться</h2>
    <div class="targeting-section__target target">
      <img
        class="target__image target__image_users"
        src="http://myapartment.roskvartal.ru/static/svg/img_mnogokvartir.svg"
        alt="img_mnogokvartir"
      />
      <div class="target__container">
        <h3 class="target__title">Жители многоквартирных домов</h3>
        <ul class="target__list">
          <li>
            <span
              >Получение сведений о квартире, доме, лицевом счёте и управляющей
              организации</span
            >
          </li>
          <li>
            <span
              >Отправка обращений или вопроса в управляющую организацию, ТСЖ или
              ЖСК</span
            >
          </li>
          <li>Передача показаний счётчиков</li>
          <li>Вызов аварийной службы</li>
          <li>Запись на приём к руководителю управляющей организации</li>
          <li>Новости дома и района</li>
          <li>Публикация объявлений для жителей вашего дома</li>
          <li>
            <span
              >Отправка заявок на устранение проблемы и оценка качества её
              выполнения</span
            >
          </li>
          <li>Организация совместных мероприятий с управляющей организацией</li>
        </ul>
        <a
          href="https://my-apartment-frontend.roskvartal.ru/account/registration/form"
          class="target--reg-button"
        >
          Зарегистрировать личный кабинет
        </a>
      </div>
    </div>
    <div class="targeting-section__target target">
      <div class="target__container">
        <h3 class="target__title">Управляющие организации и ТСЖ</h3>
        <ul class="target__list">
          <li>Быстрое и надёжное информирование жителей МКД</li>
          <li>Работа с обращениями</li>
          <li>Возможность прикрепления фото- и видеоматериалов</li>
          <li>Получение заявок на выполнение работ</li>
          <li>Обратная связь от жителей МКД</li>
          <li>Контроль потребления коммуналных ресурсов</li>
          <li>Предложение дополнительных платных услуг УО</li>
          <li>Размещение новостей и отчётов</li>
          <li>Автоматическая синхронизация вашего сайта с ГИС ЖКХ</li>
          <li>Приём оплаты за ЖКУ</li>
        </ul>
        <a href="https://dispatch.roskvartal.ru/" class="target--reg-button">
          Зарегистрироваться
        </a>
      </div>
      <img
        class="target__image--company"
        src="https://myapartment.roskvartal.ru/static/svg/img_upr_company.svg"
        alt="img_mnogokvartir"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.targeting-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
  &__title {
    font-size: 34px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 48px;
    font-family: "PT Sans", sans-serif;
    letter-spacing: -1px;
    font-weight: 600;
  }

  .target {
    display: flex;
    margin: 24px 0;
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    &__title {
      font-size: 28px;
      color: #046ab4;
      font-weight: bold;
      font-family: "PT Sans", sans-serif;
    }
    &__list {
      margin: 32px 0;
      & > li {
        list-style: none;
        font-size: 18px;
        line-height: 32px;
        padding-left: 40px;

        font-family: "PT Sans", sans-serif;
      }
      & > li::before {
        content: "—";
        margin: 0px 5px 0px -84px !important;
      }
    }
    &--reg-button {
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
    &__image {
      height: 676px;
      margin: 0 44px;
      &--company {
        height: 546px;
        margin: 0 -25px 0 -25px;
      }
    }
  }
}
</style>