const state = {
  arr: [{
    name: "school组件store中的数据",
    age: 10
  }]
}
const getters = {
    arr: state => state.arr,
  }
  
  // mutations
  const mutations = {
    changeArr(state, flage) {
      state.arr.map((val) => {
        return val.age += flage
      })
    }
  }
// actions
const actions = {
  editArr(context, flag) {
    context.commit('changeArr', flag);
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}