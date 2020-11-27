<template>
  <div class="container">
    <NumberForm></NumberForm>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NumberForm from '@/components/form/NumberForm.vue';

@Options({
  components: {
    NumberForm,
  },
})
export default class Home extends Vue {

}
</script>
