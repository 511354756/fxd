<template>
    <div>
        <mt-tabbar  v-model="asd" fixed>
            <mt-tab-item id="d1">
                <img src="../../assets/img/bussiness-man (1).png" slot="icon"  v-if="asd==='d1'">
                <img src="../../assets/img/bussiness-man.png" slot="icon" v-else >
                HTML
            </mt-tab-item>
            <mt-tab-item id="d2">
                CSS
                <img src="../../assets/img/copy (1).png" slot="icon"  v-if="asd==='d2'">
                <img src="../../assets/img/copy.png" slot="icon" v-else>
                
            </mt-tab-item>
            <mt-tab-item id="d3">
                JS 
                <img src="../../assets/img/component (1).png" slot="icon"  v-if="asd==='d3'">
                <img src="../../assets/img/component.png" slot="icon" v-else>
                
            </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="asd" swipeable class="dibu">

            <mt-tab-container-item id="d1">111
                <p v-for="(v,k) in 100" :key="k" >{{k}}</p>
            </mt-tab-container-item>

            <mt-tab-container-item id="d2">
                222e
            </mt-tab-container-item>

            <mt-tab-container-item id="d3">
                333
                <mt-button type="primary" @click="toast">全选</mt-button>
            </mt-tab-container-item>
            
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            asd:"d3"
        }
    },
    methods:{
        toast(){
            this.$toast({
            message: '你好',
            position: 'middle',
            iconClass: '',
            duration: 3000
            });
        }
    }
}
</script>

<style scoped>
.dibu{
    margin-bottom :55px;
}
</style>