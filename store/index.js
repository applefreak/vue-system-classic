import Vuex from 'vuex'

import taskbar from './modules/taskbar'

export default () => {
  return new Vuex.Store({
    modules: {
      taskbar
    }
  })
}
