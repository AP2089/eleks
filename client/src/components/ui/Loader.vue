<template>
  <Transition name="loader">
    <div
      class="loader"
      v-if="isLoading"
    ></div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
  background-color: $color-global;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 5px;

  &:before {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ffffff;
    border-right-color: $color-primary;
    animation: loader 1s infinite linear;
  }
}

@keyframes loader {
  to {
    transform: rotate(1turn);
  }
}

.loader-enter-active,
.loader-leave-active {
  transform: translateY(0);
  transition: transform .5s ease 0s;
}

.loader-enter-from,
.loader-leave-to {
  transform: translateY(-100px);
}
</style>