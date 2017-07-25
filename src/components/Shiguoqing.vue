<template>
    <div>
       姓名：石国庆，年龄：{{age}},性别：{{genderSex}}
    </div>
</template>
<style scope>
    div{
        background-color:orange;
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['age','genderSex']
    }
</script>
