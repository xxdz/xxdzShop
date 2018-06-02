<template>
    <div class="login-wrapper">
        <div class='navigation' @click="sendMsg(userValue,$event)">This is store</div>
        <div class="login-area">
            <div class="input">
                <h1 style="font-size:30px">注册你的账号</h1>
                <br>
                <br>
                <form>
                    <div class="text"><input type="text" class="username" placeholder="输入用户名" :value="userValue" @keyup="check($event,'user')"/> <span v-show="userShow">用户名应小于六位</span></div>
                    <div class="pass"><input type="password" class="password" placeholder="输入密码" :value="passValue" @keyup="check($event,'pass')"/> <span v-show="passShow">密码应少于11位</span></div>
                    
                    <div class="btn">Login<a class="under" @click="sendMsg(userValue,$event)" href="/index1" :class="{z:((!userShow&&!passShow)&&(userValue&&passValue))}">Login</a></div>
                </form>
            </div>
            <div class="bilibili-wrap">
                <div>官方合作伙伴</div>
                <br>
                <br>
                <p class="bilibili" :style="{'backgroundPositionX' :'-' + distance + 'px'}" @mouseenter="move" @mouseleave="leave"></p>
                <span>bilibili</span>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        data () {
            return {
                distance : 0,
                userShow : false,
                passShow : false,
                userValue:'',
                passValue:'',
                url : ""
            }
        },
        computed : {
            ...mapState(['username','cst'])
        },
        methods : {
            check (e,info) {
                if (info === 'user') {
                    this.userValue = e.target.value;
                    if (this.userValue.length > 6) {
                        this.userShow = true;
                    }else{
                        this.userShow = false;
                    }
                }else{
                    this.passValue = e.target.value;
                    if (this.passValue.length > 11) {
                        this.passShow = true;
                    }else{
                        this.passShow = false;
                    }
                }
            },
            move () {
                clearInterval(this.timer2)
                this.timer1 = setInterval(() => {
                    if (this.distance === 1200) {
                        this.distance = 720;
                    }
                        this.distance += 80;
                },80)
             
            },
            leave () {
                clearInterval(this.timer1)
                this.timer2 = setInterval(()=>{
                    console.log(11)
                    if (this.distance === 0) {
                        clearInterval(this.timer2)
                    }
                    this.distance -=80
                },80)
            },
            ...mapMutations(['sendMsg'])
        }
    }
</script>
<style scoped>
    .bilibili{
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        width:80px;
        height:80px;
        background-image:url('../../static/a.png');
        background-repeat:no-repeat;
    }
    .navigation{
        font-size:16px;
        color:#eee;
        width:100vw;
        height:60px;
        background-color:#aaa;
        line-height:60px;
        padding-left:30px;
    }
    .login-wrapper{
        width:100vw;
    }
    .login-area{
        margin:16px auto 0px auto;
        width:80%;
        height:100vh;
        background-color:#eee;
    }
    .input{
        transform:translateY(200px);
        text-align:center;
        height:400px;
    }
    .text,.pass{
        margin:10px;
    }
    .username,.password{
        line-height:22px;
        outline:none;
        padding:10px 8px;
        width:280px;
        height:22px;
        font-size:20px;
        border-radius:15px;
        border:1px solid #666;
    }
    .under,.btn{
        display:inline-block;
        background-color:#bbb;
        text-align:center;
        line-height:54px;
        cursor:pointer;
        font-size:20px;
        border-radius:6px;
        color:#fff;
    }
    .btn{
        position:relative;
        width:90px;
        height:54px;
        border:0px;
        margin-top:30px;
    }
    .btn:hover{
        background-color:#ddd;
    }
    .under{
        position:absolute;
        left:0px;
        z-index:-1;
        display:inline-block;
        width:100%;
        height:100%;
    }
    .bilibili-wrap{
        width:100%;
        margin:0px auto;
        text-align:center;
        transform:translateY(200px);
    }
    .z{
        z-index:2;
    }
</style>
