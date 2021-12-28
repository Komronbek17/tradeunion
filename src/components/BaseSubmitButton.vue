<template>
  <div class="form__input-submit">
    <button type="submit" class="form__input-submit-button">
      <span class="display__block">{{ value }}</span>
      <span class="display__block" v-if="loading">
        <img
          src="../assets/icons/spin.svg"
          alt="spin-circle"
          class="spin-animation"
        />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.form__input-submit {
  width: 100%;
  height: 3.437rem;
  margin: 10px 0;
  border-radius: 3.437rem;
  display: flex;
  align-items: center;
  background-color: #009745;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &-button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background: transparent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .spin-animation {
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

</style>
