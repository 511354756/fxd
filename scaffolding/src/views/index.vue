<template>
    <div>
        <!-- 顶部导航开始 -->
        <mt-header title="学前端" >
            <div slot="right" class="shortcut">
                <router-link to="/register">注册</router-link>
                <router-link to="/login">登录</router-link>
            </div>
        </mt-header> 
        <!-- 顶部导航结束 -->

        <!-- 顶部选项卡开始 -->
        <mt-navbar  v-model="asd" >
            <mt-tab-item id="d1">
                HTML
            </mt-tab-item>
            <mt-tab-item id="d2">
                CSS
            </mt-tab-item>
            <mt-tab-item id="d3">
                JS 
            </mt-tab-item>
        </mt-navbar>
        <!-- 顶部选项卡结束 -->
        
    
        <!-- 面板区域开始 -->
        <mt-tab-container v-model="dsa" swipeable class="dibu">

            <mt-tab-container-item id="d1">111
                <p v-for="(v,k) in 100" :key="k" >{{k}}</p>
            </mt-tab-container-item>

            <mt-tab-container-item id="d2">
                222e
            </mt-tab-container-item>

            <mt-tab-container-item id="d3">
                333
            </mt-tab-container-item>
            
        </mt-tab-container>
        <!-- 面板区域结束 -->

        <!-- 底部选项卡开始 -->
        <mt-tabbar  v-model="dsa" fixed>
            <mt-tab-item id="d1">
                <img src="../assets/img/bussiness-man (1).png" slot="icon"  v-if="dsa==='d1'">
                <img src="../assets/img/bussiness-man.png" slot="icon" v-else >
                HTML
            </mt-tab-item>
            <mt-tab-item id="d2">
                CSS
                <img src="../assets/img/copy (1).png" slot="icon"  v-if="dsa==='d2'">
                <img src="../assets/img/copy.png" slot="icon" v-else>
                
            </mt-tab-item>
            <mt-tab-item id="d3">
                JS 
                <img src="../assets/img/component (1).png" slot="icon"  v-if="dsa==='d3'">
                <img src="../assets/img/component.png" slot="icon" v-else>
                
            </mt-tab-item>
        </mt-tabbar>
        <!-- 底部选项卡结束 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            asd:"d1",
            dsa:"d1"
        }
    }
}
</script>

<style >
    html,body{
        touch-action: none;
    }
</style>
<style  scoped>
.shortcut>a{
    color: #fff;
    margin-left: 10px;
}
.dibu{
    margin-bottom :55px;
}
</style>