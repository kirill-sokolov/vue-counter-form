<template src="./NumberForm.html" lang="html"></template>

<script lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { Options, Vue } from 'vue-class-component'
import CounterComponent from '@/components/form/Counter.vue'

export interface Counter {
  count: number | null;
}

export interface Message {
  type: string;
  text: string;
}

@Options({
  components: {
    CounterComponent,
  },
})
export default class NumberForm extends Vue {
  static MESSAGE_TIMEOUT = 3000
  static API_URL = 'https://vue-counter-form-db.herokuapp.com/counters'
  storageName = 'form-counters'
  isResetButtonActive = !!JSON.parse(localStorage.getItem(this.storageName) as string)
  counters: Array<Counter> = reactive([])
  defaultCounter: Counter = { count: null }
  defaultCounterOnRestore: Counter = { count: 0 }
  message: Message | null = null

  data() {
    return {
      counters: reactive([{ ...this.defaultCounter }]),
    }
  }

  created() {
    this.counters = this.loadRefreshProofData();
  }

  addCounter() {
    this.counters.push(reactive({ ...this.defaultCounter }))
    this.saveRefreshProofData()
  }

  removeCounter(index: any) {
    this.counters[index] && this.counters.splice(index, 1)
    this.saveRefreshProofData()
  }

  onCounterChange() {
    this.activateResetButton()
    this.saveRefreshProofData()
  }

  save() {
    axios.put(NumberForm.API_URL, { data: this.counters })
      .then((response) => {
        this.message = { text: 'save success', type: 'success' }
      })
      .catch((error) => {
        this.message = { text: `save error: ${error}`, type: 'error' }
      })
      .finally(() => {
        setTimeout(() => {
          this.message = null
        }, NumberForm.MESSAGE_TIMEOUT)
      })
  }

  restore() {
    axios.get(NumberForm.API_URL)
      .then((response) => {
        if (response.data.data.length) {
          this.counters = response.data.data
        } else {
          this.counters = [{ ...this.defaultCounterOnRestore }]
        }

        this.saveRefreshProofData()
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  activateResetButton() {
    this.isResetButtonActive = true
  }

  showRemoveButton() {
    return this.counters.length > 1
  }

  private saveRefreshProofData() {
    localStorage.setItem(this.storageName, JSON.stringify(this.counters))
  }

  private loadRefreshProofData() {
    return JSON.parse(localStorage.getItem(this.storageName) as string)
      || reactive([{ ...this.defaultCounter }])
  }
}
</script>
