<template>
  <div id="app">
        <title-bar></title-bar>
  </div>
</template>

<script>
    import titleBar from '../components/titlebar.vue';

    export default {
        namr        : 'App',
        components  : {
            titleBar,
        },
    };
</script>
