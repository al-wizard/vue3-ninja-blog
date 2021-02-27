<template>
    <router-link :to="{ name: 'Details', params:  { id: post.id  }} ">
        <h5 class="text-capitalize">{{ post.title }}</h5>
    </router-link>
    
    <div class="row birder-bottom mb-3">
        <div class="col-sm-1" :class="post.completed ? 'bg-success' : 'bg-danger'">&nbsp;</div>
        <div class="col-sm-11"><p class="px-2">User id: {{ post.userId }}</p></div> 
             
    </div>
       <p>Complition: <span :class="post.completed ? 'text-success' : 'text-danger'"> {{ post.completed }}</span></p>      

        <hr> 

</template>

<script>
export default {
    props: ['post']
}
</script>