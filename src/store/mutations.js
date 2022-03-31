
const mutations = {
    setHighLight(state, name) {
        if (state.highLight === name || name === '') {
          state.highLight = state.topic;
        } else {
          state.highLight = name;
        }
      },
}

export default mutations