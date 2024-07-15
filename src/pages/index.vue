<template>
  <div class="tag">
    <div class="tag__list">
      <div class="tag__item"><TagBlock /></div>
      <div class="tag__item"><TagBlock /></div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss">
.tag {
  border: solid 1px #fff;
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    height: 500px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
  &__item {
    position: relative;
    padding: 10px;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background-color: #fff;
      position: absolute;
      right: -20px;
      top: 0;
      bottom: 0;
    }
    &:last-child:after {
      display: none;
    }
    &:first-child {
      text-align: left;
      @media(max-width: 1023px) {
        text-align: auto;
      }
    }
    &:last-child {
      text-align: right;
      @media(max-width: 1023px) {
        text-align: left;
      }
    }
  }
}
</style>
