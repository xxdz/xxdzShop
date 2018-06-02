<template>
    <div class="msg-wrapper">
        <ul class="msg-box" ref="of">
            <li class="msg" v-for='item in arr'>
                <div class='image-area'>
                    <img :src="item.image">
                </div>
                <div class='info-area'>
                    <h3>{{item.name}}</h3>
                    <span>${{item.price}}</span>
                    <p class="btn" @click='addProduct' :amiee="item.price + ' ' + item.name + ' ' + item.image">添加至购物车</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data () {

    },
    computed : {
        ...mapState(['arr',{
            newarr : state => state.newarr
        }])
    },
    methods : {
        ...mapMutations(['addProduct'])
    },
}
</script>
<style scoped>
    .msg-wrapper{
        width:100%;
    }
    .msg-box{
        overflow:hidden;
        background-color:#e1f1f1;
    }
    .msg-box .msg{
        float:left;
        width:33%;
        height:290px;
        box-sizing:border-box;
        text-align:center;
        
    }
    .msg-box .msg .image-area{
        display:inline-block;
        margin:10px auto;
        width:80%;
        height:170px;
    }
    .msg-box .msg .image-area img{
        height:100%;
    }
    .msg-box .msg .btn{
        margin:10px auto;
        font-size:10px;
        line-height:30px;
        color:#fff;
        width:60%;
        height:30px;
        background-color:#b9dd08;
        border-radius:18px;
        box-shadow:0px 2px 3px #aaa;
        opacity:1;
        cursor:pointer;
    }
    .msg-box .msg .btn:hover{
        opacity:0.8;
    }
</style>