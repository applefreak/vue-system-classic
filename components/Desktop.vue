<template lang="pug">
  main
    div.bar
    slot
</template>

<script>
export default {
}
</script>

<style scoped>
  main {
    width: 100%;
    height: 100vh;
    background-color: #7c7c7c;
    border-radius: 0px 0px 10px 10px;

    & .bar {
      position: absolute;
      width: 100%;
      height: 10px;
      background-color: black;
    }
  }
</style>
