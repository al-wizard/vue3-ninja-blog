import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {

            // Simple delay чтобы увидеть анимацию загрузки
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

            let data = await fetch('https://jsonplaceholder.typicode.com/todos')
            if(!data.ok){
                throw Error('no data available')
            }
            posts.value = await data.json()
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return { posts, error, load }
}

export default getPosts