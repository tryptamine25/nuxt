<template>
  <footer class="footer">
    <div class="footer-links">
      <div class="footer-links__base-group">
        <a
          href="https://lk.roskvartal.ru/"
          class="footer-links__lk c-button shape-rounded"
        >
          Личный кабинет
        </a>
        <button
          class="footer-links__ask-question"
          data-modal="#lead-modal"
          data-payload='{ "service": "orderCall" }'
        >
          Задать вопрос
        </button>
        <a
          href="http://roskvartal.ru/pismo-direktoru"
          class="footer-links__feedback"
        >
          Письмо директору
        </a>
      </div>
      <div class="footer-links__group">
        <span class="footer-links__group-title"> Компания </span>
        <ul class="footer-links__group-list">
          <li>
            <a href="http://roskvartal.ru/o-kompanii"> О нас </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/komanda"> Команда </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/faq/themes">
              Часто задаваемые вопросы
            </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/press-kit"> Материалы для СМИ </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/ofitsyalnye-documenty">
              Официальные документы
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-links__group">
        <span class="footer-links__group-title"> Услуги </span>
        <ul class="footer-links__group-list">
          <li>
            <a href="http://roskvartal.ru/gis-gkh-dlya-uo-i-tszh"> ГИС ЖКХ </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/reforma-zhkh"> Реформа ЖКХ </a>
          </li>
          <li>
            <a
              href="http://roskvartal.ru/obshee-sobranie-sobstvennikov-mnogokvartirnogo-doma"
            >
              Проведение ОСС
            </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/sait-dlya-upravlyaushey-kompanii">
              Сайт для УК/ТСЖ
            </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/pravo"> Юридическая поддержка </a>
          </li>
        </ul>
      </div>
      <div class="footer-links__group">
        <span class="footer-links__group-title"> Полезные сервисы </span>
        <ul class="footer-links__group-list">
          <li>
            <a href="http://roskvartal.ru"> Портал </a>
          </li>
          <li>
            <a href="http://oss.roskvartal.ru"> Сервис «ОСС на 100%» </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/gkh-partners"> ЖКХ-Партнёры </a>
          </li>
          <li>
            <a href="http://school.roskvartal.ru"> Онлайн-школа ЖКХ </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/licensing"> Лицензионный тест УК </a>
          </li>
          <li>
            <a href="http://roskvartal.ru/all-events">
              Новый вебинар для УК/ТСЖ
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-contacts">
      <div class="footer-contacts__container">
        <div class="footer-social-links">
          <a
            href="https://vk.com/roskvartal"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-vk"
            title="Мы во Вконтакте"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="https://myapartment.roskvartal.ru/static/svg/common-landing-icons.svg#fab-vk"
              ></use>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/RosKvartal"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-fb"
            title="Мы в Facebook"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-facebook-f"
              ></use>
            </svg>
          </a>
          <a
            href="https://ok.ru/group/54946626666502"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-ok"
            title="Мы в Одноклассниках"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-odnoklassniki"
              ></use>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC5t7A6P-Ewrug7zVyLOgUGg"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-yt"
            title="Мы на YouTube"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-youtube"
              ></use>
            </svg>
          </a>
          <a
            href="https://twitter.com/roskvartal"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-tw"
            title="Мы в Twitter"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-twitter"
              ></use>
            </svg>
          </a>
          <a
            href="https://live.viber.com/#/roskvartal"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-vb"
            title="Мы в Viber"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-viber"
              ></use>
            </svg>
          </a>
          <a
            href="https://t.me/roskvartal"
            target="_blank"
            rel="nofollow noopener"
            class="footer-social-links__item contact-tg"
            title="Мы в Telegram"
          >
            <svg class="footer-social-links__item-icon">
              <use
                xlink:href="/static/svg/common-landing-icons.svg#fab-telegram-plane"
              ></use>
            </svg>
          </a>
        </div>
        <div class="footer-contacts__our-email">
          Наша почта:
          <a
            href="mailto:mail@roskvartal.ru"
            class="footer-contacts__our-email-link"
          >
            mail@roskvartal.ru
          </a>
        </div>
      </div>
      <div class="footer-contacts__container">
        <span class="footer-contacts__callback-text">
          Бесплатный звонок<br />
          по всей территории России
        </span>
        <a href="tel:88005006561" class="footer-contacts__callback-number">
          8&nbsp;800&nbsp;500-65-61
        </a>
        <button
          class="footer-contacts__callback-button c-button"
          data-modal="#lead-modal"
          data-payload='{ "service": "orderCall" }'
        >
          Заказать звонок
        </button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  font-family: "PT Sans", sans-serif;
  font-size: 0.875rem;
  background-image: url(//roskvartal-a.akamaihd.net/Web.Common/Images/footer-portal-back.jpg);
  background-size: cover;
  background-color: #00527b;
  & a {
    text-decoration: none;
  }
  &-links {
    padding-bottom: 36px;
    padding-top: 36px;
    width: 1200px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    &__lk {
      display: inline-block;
      background-color: transparent;
      border-width: 1px;
      border-color: #ffffff;
      border-style: solid;
      color: #ffffff;
      margin-bottom: 24px;
    }
    &__base-group {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__ask-question {
      background-color: transparent;
      color: #dedede;
      font-size: 1.125rem;
      padding: 0;
      margin-left: 24px;
      margin-bottom: 24px;
      cursor: pointer;
      border: none;
      outline: none;
      font-weight: 600;
    }
    &__feedback {
      background-color: transparent;
      color: #dedede;
      font-size: 16px;
      padding: 0;
      margin-left: 24px;
      margin-bottom: 24px;
      cursor: pointer;
      border: none;
      outline: none;
      font-weight: 600;
    }
    &__group {
      color: #ffffff;
      font-size: 16px;
      width: 25%;
      box-sizing: border-box;
    }
    &__group-title {
      display: block;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 24px;
      font-weight: 600;
    }
    &__group-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      & li {
        margin-bottom: 4px;
      }
      & li:last-child {
        margin-bottom: 0;
      }
      & a {
        color: inherit;
        opacity: 0.7;
        font-weight: 600;
      }
    }
  }
}
.c-button.shape-rounded {
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 16px;
  height: 40px;
  min-width: 60px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
}
.footer-contacts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  color: #d1d1d1;
  width: 1200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  &__container {
    display: flex;
    align-items: center;
  }
  &__our-email {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    font-family: "PT Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1;
  }
  & a {
    color: #f7f7f7;
  }
  &__callback-text {
    display: block;
    text-align: right;
    line-height: 1;
  }
  &__callback-number {
    display: block;
    font-size: 1.875rem;
    margin-right: 16px;
    margin-left: 16px;
  }
  &__callback-button {
    background-color: #2c71c5;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 16px;
    height: 40px;
    min-width: 60px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 6px;
    border: none;
    outline: none;
  }
}
.footer-social-links {
  display: flex;
  align-items: center;
  min-width: 268px;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    border-radius: 9999px;
    margin-right: 6px;
    background-color: #4680c2;
    &:last-child {
      margin-right: 0;
    }
    .contact-vk {
      background-color: #4680c2;
    }
  }
}
.footer-social-links__item-icon {
  display: inline-block;
  height: 1em;
  width: 1em;
  color: #ffffff;
  vertical-align: -0.125em;
}
</style>