import { ref } from 'vue'

export default function usePosts() {
    const posts = ref({})

    const getPosts = async (page = 1, category = '') => {
        axios.get('/api/posts?page=' + page + '&category=' + category)
            .then(response => {
                posts.value = response.data;
            })
    }

    return { posts, getPosts }
}
