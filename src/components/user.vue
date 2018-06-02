<template>
    <div class="wrapper">
        <div class="navigation">
            <div class="title">This is Store</div>
        </div>
        <div class="other-area">
            <div class="left">
                <div class="msg-wrapper">
                    <div class="header">
                        <img/>
                    </div>
                    <div class='msg'>
                        <h3>name</h3>
                    </div>
                    <div class="info-area">
                        <div class="info">消息</div>
                        <div class="wallet">我的钱包</div>
                    </div>
                </div>
                <div class="choose">
                    <ul>
                        <li>粉丝</li>
                        <li>关于我们</li>
                        <li>投诉</li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="top-area">
                    <h1>完善资料</h1>
                    <div class="input">
                        <div>
                            男 <input type="radio" name="sex" value="男"/>
                            女 <input type="radio" name="sex" value="女"/>
                        </div>
                        <div>
                            <input type="text" placeholder="填写电话号" class="put"/>
                        </div>
                        <div>
                            <input type="text" placeholder="填写邮箱" class="put"/>
                        </div>
                    </div>
                </div>
                <div class='bottom-area'></div>
            </div>
        </div>   
    </div>

</template>
<script></script>
<style scoped>
    .right{
        margin-top:30px;
        width:70%;
        hieght:800px;
        background-color:#fff;
    }
    .top-area{
        width:80%;
        margin:20px auto;
        text-align:center;
        
    }
    .top-area h1{
        font-size:40px;
        color:#666;
    }
    .input div{
        width:300px;
        height:60px;
        padding:20px 10px;
        border-bottom:1px solid #eee;
        line-height:60px;
        margin:0px auto;
    }
    .input div .put{
        width:270px;
        height:27px;
        border-radius:3px;
        border:1px solid #ccc;
    }



    .wrapper{
        width:100vw;
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
    .other-area{
        width:80%;
        height:100vh;
        background-color:#ccc;
        margin:10px auto;
        display:flex;
    }
    .left{
        margin:30px 40px;
        width:340px;
        height:700px;
        background-color:#fff;
        border-radius:2px;
    }
    .msg-wrapper{
        width:300px;
        height:400px;
        background-color:#eee;
        margin:8px auto;
        text-align:center;
        border-radius:3px;
    }
    .header{
        width:160px;
        height:160px;
        background-color:#ddd;
        border-radius:50%;
        margin:0px auto;
        transform:translateY(8px);
    }
    .msg-wrapper .msg{
        width:100%;
        margin-top:20px;
    }
    .msg-wrapper .msg h3{
        font-size:21px;
        color:#333;
    }
    .info-area{
        width:100%;
        display:flex;
        padding-top:65px;
    }
    .info-area .info,.info-area .wallet{
        flex:5;
        text-align:center;
        height:120px;
        line-height:120px;
        color:#888;

    }
    .info-area .info{
        border-right:1px solid #bbb;
    }
    .choose{
        width:300px;
        margin:20px auto;
        border-bottom:1px solid #eee;
    }
    .choose ul li{
        height:60px;
        line-height:60px;
        padding-left:8px;
        color:#ccc;
        border-top:1px solid #eee;
        cursor:pointer;
    }
    .choose ul li:nth-of-type(1)::after{
        content:"+";
        padding-left:70%;
    }
    .choose ul li:hover{
        color:#aaa;
    }
</style>
