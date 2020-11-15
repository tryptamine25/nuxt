<template>
  <header class="header">
    <div class="header__flex-container">
      <a class="header__logo" href="/"></a>
      <div class="header__logo-separator">/</div>
      <span class="header__title"> Моя квартира </span>
      <button class="header__services-button" type="button" title="Меню">
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon" width="16" height="16">
            <rect width="4" height="4" fill="currentColor"></rect>
            <rect x="6" width="4" height="4" fill="currentColor"></rect>
            <rect x="12" width="4" height="4" fill="currentColor"></rect>
            <rect y="6" width="4" height="4" fill="currentColor"></rect>
            <rect x="6" y="6" width="4" height="4" fill="currentColor"></rect>
            <rect x="12" y="6" width="4" height="4" fill="currentColor"></rect>
            <rect y="12" width="4" height="4" fill="currentColor"></rect>
            <rect x="6" y="12" width="4" height="4" fill="currentColor"></rect>
            <rect x="12" y="12" width="4" height="4" fill="currentColor"></rect>
          </g>
          <linearGradient
            id="icon-gradient"
            gradientUnits="userSpaceOnUse"
            fy="90%"
          >
            <stop offset="0%" stop-color="#D81F4F">
              <animate
                id="a1"
                attributeName="stop-color"
                values="#D81F4F; #0268B9"
                begin="0; a2.end"
                dur="2s"
              ></animate>
              <animate
                id="a2"
                attributeName="stop-color"
                values="#0268B9; #D81F4F"
                begin="a1.end"
                dur="2s"
              ></animate>
            </stop>
            <stop offset="100%" stop-color="#0268B9">
              <animate
                id="a3"
                attributeName="stop-color"
                values="#0268B9; #D81F4F"
                begin="0; a4.end"
                dur="2s"
              ></animate>
              <animate
                id="a4"
                attributeName="stop-color"
                values="#D81F4F; #0268B9"
                begin="a3.end"
                dur="2s"
              ></animate>
            </stop>
          </linearGradient>
          <path
            id="icon-circle"
            fill="transparent"
            d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0ZM12,24H8V20h4Zm0-6H8V14h4Zm0-6H8V8h4Zm6,12H14V20h4Zm0-6H14V14h4Zm0-6H14V8h4Zm6,12H20V20h4Zm0-6H20V14h4Zm0-6H20V8h4Z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="header__flex-container">
      <nav class="header__navigation">
        <a class="header__navigation--item" href="#"> Правила </a>
        <a class="header__navigation--item" href="#"> Руководство </a>
        <a class="header__navigation--item" href="#"> О компании </a>
        <a class="header__navigation--item" href="#"> Наши услуги </a>
        <a class="header__navigation--item" href="#"> Портал </a>
      </nav>
      <button class="header__order-callback-button" type="button">
        <span> 8 800 500 65 61 </span>
        <!-- <span>
				Заказать звонок
			</span> -->
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  font-family: "PT Sans", sans-serif;
  padding: 18px 34px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  &__flex-container {
    display: flex;
  }

  &__logo {
    position: relative;
    background-image: url(https://roskvartal-a.akamaihd.net/Dispatch/Landing/rk-logo.svg);
    background-repeat: no-repeat;
    width: 202px;
    height: 40px;
    bottom: 5px;
  }

  &__logo-separator {
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNiAzMSIgZmlsbD0icmdiKDUxLCA1MSwgNTEpIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIxNS4zNTQyIiB5MT0iMC4yMTkxODYiIHgyPSIwLjQ0OTU2NCIgeTI9IjMwLjc3ODIiCnN0cm9rZT0icmdiKDUxLCA1MSwgNTEpIi8+PC9zdmc+Cg==);
    height: 32px;
    position: relative;
    top: 6px;
    margin-right: 20px;
    margin-left: 8px;
  }

  &__title {
    color: #131313;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      border-bottom: 1px dotted #131313;
    }
  }

  &__services-button {
    display: flex;
    align-items: center;
    background: none;
    margin-left: 12px;
    padding: 0;
    border: none;
    cursor: pointer;
    :hover {
      color: red;
    }
    & svg > #icon {
      transform: translate(8px, 8px);
    }
    &:focus {
      outline: none !important;
    }
  }

  &__navigation {
    display: flex;
    align-items: center;
    &--item {
      color: #00527b;
      font-size: 16px;
      position: relative;
      text-decoration: none;
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
      &::after {
        display: block;
        content: "";
        background-color: #00527b;
        height: 2px;
        width: 0%;
        left: 50%;
        position: absolute;
        margin-top: 5px;
        -webkit-transition: width 0.3s ease-in-out;
        -moz--transition: width 0.3s ease-in-out;
        transition: width 0.3s ease-in-out;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      &:hover:after,
      &:focus:after {
        width: 100%;
      }
    }
  }

  &__order-callback-button {
    font-size: 20px;
    height: 44px;
    width: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-weight: bold;
    border: 2px solid #00527b;
    border-radius: 50px;
    color: #00527b;
    margin-left: 20px;
    cursor: pointer;
    text-transform: uppercase;
    display: inline;
    font-weight: 700;
  }
}
</style>
