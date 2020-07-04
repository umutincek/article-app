import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state : {
        fetchedPosts : []
    },
    mutations : {
        setPosts(state, posts) {
            state.fetchedPosts = posts
        }
    },
    actions : {
        nuxtServerInit(vuexContext, context) {
            vuexContext.commit("setPosts", [
              {
                id : 1,
                title : "Vue.js",
                subTitle: "Vue.js eğitimi başlıyorr!!",
                text : "Router, Vuex, Axios, Resource, Router, Vuex, Axios, Resource, Router, Vuex, Axios, Resource...",
                author: "Umut Incek"
              },
              {
                id : 2,
                title : "Nuxt.js",
                subTitle: "Nuxt.js eğitimi başlıyorr!!",
                text : "Router, Middleware, Axios, Authentication, Router, Middleware, Axios, Authentication, Router, Vuex, Axios, Resource...",
                author: "Umut Incek"
              },
            ])
        },
        setPosts(vuexContext, posts) {
            vuexContext.commit("setPosts", posts)
        }
    },
    getters : {
        getPosts(state) {
            return state.fetchedPosts
        }
    }
  })
}

export default createStore
