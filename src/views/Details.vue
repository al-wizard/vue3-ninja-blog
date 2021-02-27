<template>
    <div v-if="error">{{ error }}</div>
        <div v-if="post">
            <h3 class="text-capitalize mb-4">{{ post.title }}</h3>

            <div class="row birder-bottom mb-3">
                <div class="col-sm-1" :class="post.completed ? 'bg-success' : 'bg-danger'">&nbsp;</div>
                <div class="col-sm-11"><p class="px-2">User id: {{ post.userId }}</p></div>  
            </div>
        <p>Complition: <span :class="post.completed ? 'text-success' : 'text-danger'"> {{ post.completed }}</span></p>      
        <hr> 
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
    import getPost from '../composables/getPost'
    import Spinner from '../components/Spinner'    
        export default {
            props: ['id'],
            components: { Spinner },
            setup(props){
                const { post, error, load } = getPost(props.id)

                load()
                return {post, error }
            }
        }
</script>

<style>

</style>