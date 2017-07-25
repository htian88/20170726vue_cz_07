<template>
    <div>
        <shi-guqoing></shi-guqoing>
        {{msg}}
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import Shiguoqing from '../components/Shiguoqing.vue'
    export default{
        //data类似于angular里面的$.scope，react里面的state属性
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'shi-guoqing':Shiguoqing
        }
    }
</script>