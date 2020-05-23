<template>
    <div>
        <mt-header title="***********" fixed>
            <router-link to="/" slot="left"><mt-button type="primary" icon="back"></mt-button></router-link>
            <span slot="right"><mt-button type="primary" icon="more"></mt-button></span>
        </mt-header>
        <div class="h" >
            <p v-for="(v,k) in 50" :key="k">{{v}}</p>
        </div>
    </div>
</template>
<style scoped>
    .h{
        margin-top: 40px;
        width :100px;
        height :5000px;
    }
</style>