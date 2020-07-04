import Vuex from "vuex"
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state : {
        fetchedPosts : []
    },
    mutations : {
        setPosts(state, posts) {
            state.fetchedPosts = posts
        },
        addPost(state, post) {
            state.fetchedPosts.push(post)
        },
        updatePost(state, editedPost) {
            let postIndex = state.fetchedPosts.findIndex(post => post.id === editedPost.id)
            state.fetchedPosts[postIndex] = editedPost
        },
    },
    actions : {
        nuxtServerInit(vuexContext, context) {
            return axios.get("https://article-nuxt.firebaseio.com/posts.json")
              .then(response => {
                  let data = response.data
                  let postArray = []
                  for(let key in data) {
                     postArray.push({ id : key, ...data[key] })
                  }
                  vuexContext.commit("setPosts", postArray)
              })
              .catch(e => console.log(e))
        },
        setPosts(vuexContext, posts) {
            vuexContext.commit("setPosts", posts)
        },
        addPost(vuexContext, post) {
          return axios.post("https://article-nuxt.firebaseio.com/posts.json", post)
            .then(response => {
              vuexContext.commit("addPost", { ...post, id : response.data.name })
            })
            .catch(e => console.log(e))
        },
        updatePost(vuexContext, editedPost) {
          return axios.put("https://article-nuxt.firebaseio.com/posts/"+ editedPost.id +".json", editedPost)
            .then(response => {
              vuexContext.commit("updatePost", editedPost)
            })
            .catch(e => console.log(e))
        },
    },
    getters : {
        getPosts(state) {
            return state.fetchedPosts
        }
    }
  })
}

export default createStore
