<template>
    <div class="wrapper">
        <div class='navigation'>
            <span>This is Store</span>
        </div>
        <div class="pay">
            <div class="pay-info">
                <div>
                    <div style="font-size:60px;font-weight:600;">待支付</div>
                    <br>
                    <div style="font-size:50px;color:#f40">${{price}}</div>
                </div>
            </div>
            <div class="pay-wrapper">
                <div class="pay-method">
                    <ul>
                        <li @click="pay" :class="{classa: flag === true }">微信付款</li>
                        <li @click="pay" :class="{classa: flag !== true}">支付宝付款</li>
                    </ul>
                </div>
                <div class="show">
                    <div style="height:40px;line-height:40px;">
                        <strong>打开{{name}}扫描下方二维码</strong>
                    </div>
                    <div style="height:360px">
                        <img :src="imgname">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        data () {
            return {
                imgname : "../../static/Qrcode.png",
                flag : true,
                name : "微信",
                price : ""

            }
        },
        mounted () {
            this.price = document.cookie.split("; ")[1];
        },
        methods : {
            pay (e) {
                if (e.target.innerText === "支付宝付款") {
                    this.imgname = "../../static/Qrcode.png";
                    this.flag = false;
                    this.name = "支付宝"
                }else{
                    this.flag = true;
                    this.imgname = "../../static/Qrcode.png";
                    this.name = "微信"
                }
            }
        },
        watch : {
            
        }
    }
</script>
<style>
    .wrapper{
        width:100vw;
    }
    .pay-method{
        width:100%;
    }
    .pay-wrapper{
        width:100%;
        background-color:#fff;
        transform:translateY(60px);
        margin:0px auto;
    }
    .pay-wrapper .pay-method ul{
        width:100%;
        height:40px;
        padding-top:6px;
        border-top:1px solid rgba(0,0,0,.3);
        border-bottom:1px solid rgba(0,0,0,.3);
    }
    .pay-wrapper .pay-method ul li{
        width:90px;
        height:30px;
        border:2px solid #666;
        text-align:center;
        line-height:30px;
        margin:0 9px;
        overflow:hidden;
        cursor:pointer;
        float:left;
        border-radius:10px;
        font-size:14px;
    }
    .show{
        width:100%;
        height:400px;
        margin:10px auto;
        position:relative;
        background-color:#eee;
        text-align:center;
    }
    .show img{
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        height:360px;
        border:20px solid #fff;
        box-sizing:border-box;
    }
    .navigation{
        font-size:16px;
        width:100%;
        height:60px;
        background-color:#aaa;
        color:#eee;
        line-height:60px;
        padding-left:30px;
    }
    .pay{
        width:80%;
        height:100vh;
        margin:8px auto;
    }
    .pay .pay-info{
        width:100%;
        margin:0 auto;
        transform:translateY(60px);
        background-color:#fff;
        text-align:center;
        padding:10px 20px;
    }
    .classa{
        color:#f40;
        font-weight:600;
    }
</style>