<template>
  <div class="create">
      <h2 class="mb-3">Create a Todo</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="title" placeholder="Title" required>
          <input type="text" v-model="tag" placeholder="Enter tag + enter" @keydown.enter.prevent="handleKeydown">

            <div class="my-3">
                <p class="my-3">Entered tags:</p>
                <small v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</small>
            </div>
                
            <button>Add todo</button>
        </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('')
        const tag = ref('')        
        const tags = ref([])

        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, '') // removes all whitespace
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                tags: tags.value
            }

            await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(post)
            })

            console.log('Уехало: ', post)
        }
        return { title, tags, tag, handleKeydown, handleSubmit }
    }
}
</script>

<style>
   .pill {
       display: inline-block;
       margin: 10px 10px 0 0;
       color: #444;
       background: #ddd;
       padding: 8px;
       border-radius: 20px;
       font-size: 14px;
   }
</style>