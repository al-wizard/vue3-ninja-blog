import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {

            // Simple delay чтобы увидеть анимацию загрузки
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

            let data = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
            if(!data.ok){
                throw Error('todo not exist')
            }
            post.value = await data.json()
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return { post, error, load }
}

export default getPost