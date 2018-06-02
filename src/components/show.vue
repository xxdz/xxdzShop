<template>
    <div class="content">
        <div class='left-content'>
        </div>
        <div class='right-content'></div>
        <div class='middle-content'>
             <transition>
                <router-view :name="viewName" ></router-view>
            </transition>
        </div>

    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data () {
        return {
            distance : 100,
            icon : "》",
            flag : true,
            viewName : 'showArea',
        }
    },
    mounted () {
        console.log(this.$store.state.newarr)
    },
    methods : {
        alert () {
            if (this.flag) {
                this.distance = 0;
                this.icon = "《";
            }else{
                this.distance = 100;
                this.icon = "》"
            }
            this.flag = !this.flag
        }
    },
    computed : {
        ...mapState(['arr',{newarr : state => state.newarr}])
    }
}
</script>
<style>
.content{
    width:100%;
    height:100%;
    
}
.left-content{
    width:200px;
    height:100%;
    float:left;
}
.right-content{
    width:200px;
    height:100%;
    float:right;
}
.middle-content{
    margin:0 200px;
    background-color:#e1f1f1;
}

</style>