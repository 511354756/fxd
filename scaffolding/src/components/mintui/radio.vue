<template>
    <div>
        <div>123</div>
        <mt-radio 
        title="性别"
        :options="aaa"
        v-model="sex"
        ></mt-radio>
        <p>{{sex}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sex:"",
            aaa:[
                
                     {
                    label: '男',
                    value:'1'
                    },
                    {
                        label:'女',
                        value:'2'
                    },
                    {
                        label:'保密',
                        value:'3'
                    }
                
            ]
        }
    }
}
</script>