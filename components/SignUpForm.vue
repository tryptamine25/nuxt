<template>
  <div class="signup">
    <form class="signup__form" v-on:submit="handleSubmit" ref="form">
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <label class="form__label">Email</label>
        <input
          class="form__input"
          v-model.trim="modifiedData.email"
          @input="setEmail($event.target.value)"
        />
      </div>
      <div v-if="$v.email.$dirty">
        <div class="error" v-if="!$v.email.required">Field is required</div>
        <div class="error" v-if="!$v.email.email">
          Please input correct email
        </div>
      </div>

      <div
        class="form-group"
        :class="{ 'form-group--error': $v.password.$error }"
      >
        <label class="form__label">Password</label>
        <input
          type="password"
          class="form__input"
          v-model.trim="modifiedData.password"
          @input="setPassword($event.target.value)"
        />
      </div>
      <div v-if="$v.password.$dirty">
        <div class="error" v-if="!$v.password.required">Field is required</div>
        <div class="error" v-if="!$v.password.minLength">
          Password must be at least
          {{ $v.password.$params.minLength.min }} characters
        </div>
      </div>
      <label class="form__label">City</label>
      <select v-model="modifiedData.cityId" class="form__input">
        <option v-for="cities in cities" :key="cities.id" :value="cities.id">
          {{ cities.city }}
        </option>
      </select>
      <input type="submit" class="submit" value="SignUp" />
    </form>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      cities: [],
      error: null,
      headers: { "Content-Type": "application/json" },
      modifiedData: {
        email: this.email,
        password: this.password,
        cityId: this.cityId,
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },

  methods: {
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    handleSubmit: async function (e) {
      e.preventDefault();

      try {
        const response = await fetch(
          "https://5f3a6e3b2300b100169a8b93.mockapi.io/api/v1/users",
          {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(this.modifiedData),
          }
        )
          .then(this.checkStatus)
          .then(this.parseJSON);
      } catch (error) {
        this.error = error;
      }
      this.$refs.form.reset();
    },
  },
  async fetch() {
    this.cities = await fetch(
      "https://5f3a6e3b2300b100169a8b93.mockapi.io/api/v1/cities"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss" scoped>
.signup {
  padding: 50px;
  &__form {
    margin-left: auto;
    margin-right: auto;
    width: 768px;
    &__label {
      margin-right: 10px;
      max-width: 20px;
    }
  }
}
.form {
  &__label {
    margin-right: 100px;
    display: inline-block;
    width: 100%;
  }
  &__input {
    border: 1px solid #00527b;
    padding: 4px;
    border-radius: 9999px;
    margin-left: 10px;
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
  }
}
.error {
  color: red;
  padding: 10px 0 10px 0;
}
.submit {
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
</style>