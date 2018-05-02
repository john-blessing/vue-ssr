import api from "~/service";

const state = {
    title: 'hello world',
    sitesList:[]
}

const actions = {
    setNewTitle({
        commit,
        state
    }, payload) {
        commit('set_new_name', payload);
    },
    getSites({
        commit,
        state
    }, payload = {}) {
        return new Promise(function(resolve, reject){
            api
            .post("api/referer_dealer/getRefererDealerList")
            .then(res => {
                if (res.res_code == 1) {
                    commit('set_sites_list', res.msg)
                    resolve(res.msg)
                } else {
                    reject(res.msg);
                }
            })
            .catch(error => {
                console.log(error);
                reject(error)
            });
        })

    }
}

const mutations = {
    set_new_name(state, payload) {
        state.title = payload;
    },
    set_sites_list(state, payload){
        state.sitesList = payload
    },
    set_title(state, payload){
        state.title = payload;
    }
}

export default {
    state,
    actions,
    mutations
}