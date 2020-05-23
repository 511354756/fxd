<template>
    <div>
        <mt-checklist 
        title="爱好"
        align="left"
        :options="ops"
        v-model="loves"
        ></mt-checklist>
        <mt-button type="primary" @click="quanxuan">全选</mt-button>
        <p>{{loves}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loves:[],
            ops:[
                {
                    label: '学习',
                    value:'1'
                },
                {
                    label:'看电视',
                    value:'2'
                },
                {
                    label:'玩游戏',
                    value:'3'
                }
            ]
        }
    },

    methods:{
        quanxuan(){
            this.loves=[]
            this.ops.forEach((item)=>{
                this.loves.push(item.value)
            })
        }
    }
}
</script>