<template>
    <div>
        <mt-header title="注册页面" fixed>
            <router-link to="/" slot="left"><mt-button type="primary" icon="back"></mt-button></router-link>
        </mt-header>
        <div class="h ">
            <mt-field 
            type="text"
            label="用户名"
            placeholder="请输入用户名"
            :state="unamestate"
            :attr="{maxlength:'12'}"
            v-model="uname"
            @blur.native.capture="checkuname"
            ></mt-field>
            <mt-field type="password" label="密码" placeholder="请输入密码" :state="mimastate" v-model="mima" @blur.native.capture="checkmima"></mt-field>
            <mt-field type="password" label="确认密码" placeholder="确认密码" :state="mima1state" v-model="mima1" @blur.native.capture=" checkmima1"></mt-field>
            <div class="btn">
                <mt-button type="primary" size='normal' class="btn" @click="register">注册</mt-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    methods:{

        checkuname(){
            var unameregexp=/^[a-zA-Z0-9]{6,12}$/
            if(unameregexp.test(this.uname)){
                console.log(`用户名是${this.uname}`)
                this.unamestate='success'
                return true
            }else{
                console.log("用户名格式错误")
                this.unamestate='error'
                return false
            }
        },

        checkmima(){
            var mimaregexp=/^[a-zA-Z0-9@\.\_]{6,12}$/
            if(mimaregexp.test(this.mima)){
                console.log(`密码是${this.mima}`)
                this.mimastate='success'
                return true
            }else{
                console.log("密码格式不正确")
                this.mimastate='error'
                return false
            }
        },

        checkmima1(){
            if(this.mima1===this.mima && this.mima1){
                console.log(`确认密码是${this.mima1}`)
                this.mima1state='success'
                return true
            }else{
                console.log('重复密码格式错误')
                this.mima1state='error'
                return false
            }
            
        },

        register(){
            if(this.checkuname() && this.checkmima() && this.checkmima1()){
                console.log('可以提交了')
                alert('注册成功')
            }else{
                console.log('请检查错误')
            }
        }
    },

    data(){
        return{
            uname:"",
            mima:"",
            mima1:"",
            unamestate:"",
            mimastate:"",
            mima1state:""
        }
    }
}
</script>
<style scoped>
    .h{
        margin-top: 40px;
    }
    .btn{
        text-align: center;
    }
</style>