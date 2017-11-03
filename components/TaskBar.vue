<template lang="pug">
  section.taskbar
    TaskbarItem(:taskbar-item="left" pos="left")
    TaskbarItem(:taskbar-item="right" pos="right")
</template>

<script>
import TaskbarItem from './TaskbarItem'

export default {
  computed: {
    left() {
      return this.$store.state.taskbar.left
    },
    right() {
      return this.$store.state.taskbar.right
    }
  },
  components: {
    TaskbarItem
  }
}
</script>

<style scoped>
  .taskbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    /*cursor: default;*/

    width: 100%;
    height: 1.5em;
    background-color: #fff;
    border-bottom: 1px solid black;
    border-radius: 10px 10px 0px 0px;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
</style>
