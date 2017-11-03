export default {
  namespaced: true,
  state: {
    last: undefined, //[pos, idx]
    left: [
      {
        title: '',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'About This Macintosh...'
        },
        {
          title: 'AppleCD Audio Player'
        },
        {
          title: 'Automated Tasks'
        },
        {
          title: 'Calculator'
        },
        {
          title: 'Chooser'
        },
        {
          title: 'Control Panels'
        },
        {
          title: 'Find File'
        },
        {
          title: 'Jigsaw Puzzle'
        }
        ]
      },
      {
        title: 'File',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      },
      {
        title: 'Edit',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      },
      {
        title: 'View',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      },
      {
        title: 'Label',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      },
      {
        title: 'Special',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      }
    ],
    right: [
      {
        title: 'RMain1',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub1-1'
        },
        {
          title: 'Sub1-2'
        },
        {
          title: 'Sub1-3'
        }
        ]
      },
      {
        title: 'RMain2',
        state: {
          hidden: true
        },
        children: [
        {
          title: 'Sub2-1'
        },
        {
          title: 'Sub2-2'
        },
        {
          title: 'Sub2-3'
        }
        ]
      }
    ]
  },
  actions: {
    
  },
  mutations: {
    toggleSubmenu(state, { pos, idx }) {
      if (state.last) {
        if (state.last[0] === pos && state.last[1] === idx) {
          state[pos][idx].state.hidden = true
          state.last = undefined
          return
        } else {
          state[state.last[0]][state.last[1]].state.hidden = true
        }
      }
      state[pos][idx].state.hidden = false
      state.last = [pos, idx]
    }
  },
  getters: {
    getSubmenuDisplayState(state) {
      return ({ pos, idx }) => state[pos][idx].state.hidden
    }
  }
}
