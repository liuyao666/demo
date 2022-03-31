const actions = {
    setPop(context, flag) {
        console.log(flag)
        context.commit('setShowPop', flag);
    },
}

export default actions