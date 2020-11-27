<template src="./NumberForm.html" lang="html"></template>

<script lang="ts">
import { reactive } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    data: Array,
  },
})
export default class NumberForm extends Vue {
  formName = 'form-counters'
  isResetButtonActive = !!JSON.parse(localStorage.getItem(this.formName) as string)
  counters: any
  defaultCounter = { count: null }
  defaultCounterOnRestore = { count: 0 }

  data() {
    return {
      counters: reactive([{ ...this.defaultCounter }]),
    }
  }

  addCounter() {
    this.counters.push(reactive({ ...this.defaultCounter }))
  }

  activateReset() {
    this.isResetButtonActive = true
  }

  save() {
    localStorage.setItem(this.formName, JSON.stringify(this.counters))
  }

  restore() {
    this.counters =
      JSON.parse(localStorage.getItem(this.formName) as string)
      || reactive([{ ...this.defaultCounterOnRestore }])
  }

  increase(counter: any) {
    counter.count++;
    this.activateReset();
  }

  decrease(counter: any) {
    counter.count--;
    this.activateReset();
  }
}
</script>

<style scoped lang="scss"></style>
