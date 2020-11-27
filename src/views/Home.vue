<template>
  <div class="container">
    <p>Total time spend: </p>
    <ul>
      <li>Docs reading = 1h</li>
      <li>Docs reading + @Component setup like in angular = 1h</li>
      <li>Doc reading, documentation, tutorial, bootstrap = 1h</li>
      <li>Tutorial end, font awesome setup, bootstrap customization, html = 2.5h</li>
      <li>Change detection research = 4.5h</li>
      <li>First version, some time to think about save+reset vs refresh proof form = 2h</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
