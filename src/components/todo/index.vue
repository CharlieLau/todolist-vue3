<template>
    <!-- 根元素可以多个 -->
    <section class="todoapp" v-cloak>
        <head-component></head-component>
        <main-component></main-component>
        <foot-component></foot-component>
    </section>
    <info-component></info-component>
</template>
<script>
  import HeadComponent from "./head.vue";
  import InfoComponent from "./info.vue";
  import MainComponent from "./main";
  import FootComponent from "./foot";


  export default {
    components: {
      HeadComponent,
      InfoComponent,
      MainComponent,
      FootComponent
    }
  };
</script>