<template src="./Counter.html" lang="html"></template>

<script>
import {Options, Vue} from 'vue-class-component'
import {Counter} from './NumberForm.vue'

@Options({
  props: {
    counter: Counter,
    showRemoveButton: Boolean,
    onAction: Function,
    onRemove: Function
  }
})
export default class CounterComponent extends Vue {
  increase() {
    this.counter.count++
    this.onAction()
  }

  decrease() {
    this.counter.count--
    this.onAction()
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

.counter {
  &__input-block {
    position: relative;
  }

  &__remove-button {
    position: absolute;
    right: $form-grid-gutter-width / 2;
    top: 0;
    transform: scale(0.75);
  }
}
</style>
