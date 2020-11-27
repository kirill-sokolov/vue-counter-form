<template>
  <div class="form-group col-md-6">
    <input v-model.number="counter.count"
           @input="onAction()"
           type="number"
           class="form-control form-control-lg"
           placeholder="Enter number">
  </div>
  <div class="form-group col-6 col-md-3">
    <button class="btn btn-lg btn-block btn-outline-primary" @click="increase()">Increase</button>
  </div>
  <div class="form-group col-6 col-md-3">
    <button class="btn btn-lg btn-block btn-outline-primary" @click="decrease()">Decrease</button>
  </div>
</template>

<script>
import {Options, Vue} from 'vue-class-component';
import {Counter} from './NumberForm.vue';

@Options({
  props: {
    counter: Counter,
    onAction: Function
  }
})
export default class CounterComponent extends Vue {
  increase() {
    this.counter.count++;
    this.onAction();
  }

  decrease() {
    this.counter.count--;
    this.onAction();
  }
}
</script>

<style scoped></style>
