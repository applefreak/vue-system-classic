<template lang="pug">
  ul.menu
    li.submenus(v-for="(submenus, idx) in taskbarItem" v-bind:class="{inverted: submenusSelected(pos, idx)}" @click="toggleSubmenu(pos, idx)")
      div(:class="{left: pos === 'left'}") {{ submenus.title }}
      ul.submenu(:class="getSubmenuDisplayState(pos, idx)")
        li.menuitem(v-for='submenu in submenus.children' @click.stop) {{ submenu.title }}
</template>

<script>
export default {
  props: ['taskbar-item', 'pos'],
  methods: {
    toggleSubmenu(pos, idx) {
      this.$store.commit('taskbar/toggleSubmenu', { pos, idx })
    },
    getSubmenuDisplayState(pos, idx) {
      return {
        hide: this.$store.getters['taskbar/getSubmenuDisplayState']({ pos, idx })
      }
    },
    submenusSelected(pos, idx) {
      console.log(this.$store.state.taskbar[pos][idx].state.hidden)
      return this.$store.state.taskbar[pos][idx].state.hidden === false
    }
  }
}
</script>

<style scoped>
  .menu {
    display: flex;
    height: 100%;
  }

  .submenus {
    font-family: 'Chicago';
    font-size: 0.8em;
    display: flex;
    min-width: 2em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    text-align: center;
    height: 100%;
    align-items: center;

    &.inverted {
      background-color: black;
      color: white;
    }

    &:first-child > div.left {
      font-size: 1.35em;
    };

/*    & > div.inverted {
      background-color: black;
      color: white;
    }*/
  }

  .submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 1.8em;
    margin-left: -0.5em;
    border: 1px solid black;
    box-shadow: 1px 1px 0 0 black;
    align-self: baseline;

    &.hide {
      display: none;
    }

    & li {
      padding: 0.25em 1.5em;
      background-color: white;
      color: black;
      text-align: left;
    }
  }
</style>
