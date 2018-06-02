<template>
  <div class='wrapper'>
    <div class='left'>
        <div>This is Store</div>
    </div>
    <div class='right'>
        <ul>
            <li></li>
            <li><a :href="url">{{username}}</a></li>
            <li><a href="#">Register</a></li>
            <li class="check" @click="hiddenShopping"><a href="#">Checkout({{num}}(${{price}}))</a></li>
        </ul>
        <div class='shop-area'>
            <div class="show-shopping" v-if='flag === true'>
                <div class="shopping-box" v-for="(item,index) in infoArray" :key="item.imageInfo" v-if="item.shopNum !== 0">
                    <div class="shopping-pic">
                        <img :src="item.imageInfo">
                    </div>
                    <div class="shopping-msg">
                        <p>
                            Name:{{item.shopName}}
                        </p>
                        <p>
                            Price:${{item.shopPrice}}
                        </p>
                        <div class="add-dec">
                            <div @click="addBtn(index)">+</div>
                            <div>{{item.shopNum}}</div>
                            <div @click="decBtn(index)">-</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay" v-if="flag === true">
                <span style="margin-left:20px;font-size:14px;display:inline-block;width:160px;height:30px; line-height:30px">总金额数:${{price}}</span>
                <a :href="path" class="payfor" @click="buy" :style="{'z-index':mathNum}">购买</a>
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
                flag : false,
                username : '',
                url:"/#/login",
                path : "/#/index1",
                ami : 1
            }
        },
        props:['sign'],
        mounted(){
            function getCookie (name) {
                var name = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1);
                    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
                }
                return "";
            }
            let names =  getCookie("userValue")
            if (!names) {
                this.username = 'Login'
                this.url = "/#/login"
                this.ami = 1;
            }else{
                this.username = names;
                this.url = "/#/user"
                this.ami = 2;
                console.log(this.ami)
            }
        },
        computed : {
            mathNum () {
                if (this.price === 0) {
                    return -1
                }else{
                    return 10;
                }
            },
            ...mapState(['num','price','infoArray','cst'])
        },
        methods : {
            hiddenShopping () {
                this.flag = this.flag === false ? true : false;
            },
            buy () {
                console.log(this.ami)
                if (this.username === 'Login' && this.ami === 1) {
                    alert("请先登录")
                }else{
                    document.cookie = this.price;
                }
            },
            ...mapMutations(['addBtn','decBtn'])
        },
        watch :{
            username (val){
                if (val === 'Login' && this.ami === 1 ) {
                    this.path = "/#/login"
                }else{
                    this.path = "/#/shop"
                }
            },
            price (val) {
            }
        }
    }
</script>

<style scoped>
.wrapper{
    font-size:14px;
    color:#eee;
    width:100vw;
    height:60px;
    background-color:#aaa;
    display:flex;
    line-height:60px;
}
.right{
    position:absolute;
    right:20px;
}
.right ul{
    display:flex;
}
.right ul li{
    padding:0px 10px;
}
.right ul li a{
    color:#eee;
}
.check{
    cursor:pointer;
    height:40px;
    background-color:#b9dd08;
    color:#fff;
    text-align:center;
    line-height:40px;
    margin-top:10px;
    border-radius:6px;
}
.check:hover{
    background-color:#baff08;
}
.right ul li a:hover{
    color:#fff;
}
.left{
    margin-left:30px;

}
.right .shop-area{
    position:fixed;
    display:inline-block;
    right:0%;
    z-index:10;
    height:420px;
    width:270px;
}
.right .show-shopping{
    height:360px;
    width:100%;
    overflow-y:scroll;
    overflow-x:hidden;
    background-color:#fff;
}
.right .show-shopping .shopping-box{
    display:flex;
    background-color:#eee;
    width:90%;
    height:90px;
    padding:5px 10px;
    margin: 0px auto;
    align-content:center;
}
.right .show-shopping .shopping-box .shopping-pic{
    position:relative;
    flex:4;
    padding:5px 8px;
    border-radius:3px;
    width:100px;
    height:60px;
    border:2px solid #fff;
}
.shopping-pic img{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    height:100%;
}
.right .show-shopping .shopping-box .shopping-msg{
    text-align:center;
    flex:6;
    color:#666;
    height:40px;
}
.shopping-msg p{
    margin-bottom:3px;
    width:30px;
    height:20px;
    font-size:14px;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.add-dec{
    margin:30px auto;
    width:80px;
    height:20px;
    display:flex;
}
.add-dec div:nth-of-type(1),.add-dec div:nth-of-type(3){
    cursor:pointer;
    font-size:16px;
    font-weight:700;
    background-color:#b9dd08;
    width:20px;
    height:20px;
    line-height:20px;
    text-align:center;
    border-radius:50%;
    color:#eee;
}
.add-dec div:nth-of-type(1):hover,.add-dec div:nth-of-type(3):hover{
    background-color:#b8ff29;
}
.add-dec div:nth-of-type(2){
    flex:4;
    color:black;
    font-size:10px;
    line-height:20px;
    text-align:center;
}
.pay{
    width:100%;
    height:60px;
    position:absolute;
    z-index:10;
    bottom:0px;
    background-color:#eee;
    color:#222;
    opacity:.8;
}
.payfor{
    display:block;
    float:right;
    cursor:pointer;
    width:54px;
    height:36px;
    margin-top:12px;
    margin-right:24px;
    line-height:36px;
    text-align:center;
    background-color:#b9dd08;
    border-radius:2px;
    color:#fff;
}

</style>
