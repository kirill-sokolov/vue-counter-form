<template src="./NumberForm.html" lang="html"></template>

<script lang="ts">
import { reactive } from 'vue';
import { Options, Vue } from 'vue-class-component';
import CounterComponent from '@/components/form/Counter.vue';

export interface Counter {
  count: number | null;
}

@Options({
  components: {
    CounterComponent,
  },
})
export default class NumberForm extends Vue {
  formName = 'form-counters'
  isResetButtonActive = !!JSON.parse(localStorage.getItem(this.formName) as string)
  counters: any
  defaultCounter: Counter = { count: null }
  defaultCounterOnRestore: Counter = { count: 0 }

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
}
</script>

<style scoped lang="scss"></style>
