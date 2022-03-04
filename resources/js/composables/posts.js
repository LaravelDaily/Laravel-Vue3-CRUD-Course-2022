import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function usePosts() {
    const posts = ref({})
    const router = useRouter()

    const getPosts = async (
        page = 1,
        category = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/posts?page=' + page +
            '&category=' + category +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                posts.value = response.data;
            })
    }

    const storePost = async (post) => {
        axios.post('/api/posts', post)
            .then(response => {
                router.push({ name: 'posts.index' })
            })
    }

    return { posts, getPosts, storePost }
}
