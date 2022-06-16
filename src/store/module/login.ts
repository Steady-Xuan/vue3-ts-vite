interface StateObject {
    userName: String,
    passWord: String
}


const state = {
    userName: "admin",
    passWord: "admin"
}

const getters = {

}

const mutations = {

    UPDATE_USERNAME(state: StateObject, value: String): void {
        state.userName = value
    },
    UPDATE_PASSWORD(state: StateObject, value: String): void {
        state.passWord = value
    },

}


const actions = {
    SYNC_USERNAME({ commit }: any, value: String): void {
        commit("UPDATE_USERNAME", value)
    },
    SYNC_PASSWORD({ commit }: any, value: String): void {
        commit("UPDATE_PASSWORD", value)

    },
}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}