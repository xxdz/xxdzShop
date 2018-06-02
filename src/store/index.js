import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
let arr = [{name:'computer',price:1000,image:'/static/psb3.jpg',type:'computer'},{name:'Y60',price:1200,image:'/static/thumb-1.png',type:'computer'},{name:'Smart',price:1000,image:'/static/thumb-2.png',type:'phone'},{name:'MAC',price:1500,image:'/static/thumb-3.png',type:'computer'},{name:'sum',price:900,image:'/static/3.jpg',type:'phone'},{name:'lenovo',price:9000,image:'/static/4.jpg',type:'another'},{name:'computer',price:1300,image:'/static/5.jpg',type:'phone'},{name:'computer',price:1300,image:'/static/6.jpg',type:'phone'},{name:'computer',price:1300,image:'/static/2.jpg',type:'phone'}]
let len = arr.length;
var comArray = [];
var phoArray = [];
let infoArray = [];
let tar;
let shopNum = 1;
function dealArr () {
    for (var i = 0; i < len;i++) {
        if (arr[i].type === 'computer') {
            comArray.push(arr[i]) 
        }else if (arr[i].type === 'phone') {
            phoArray.push(arr[i])
        }
    }
}
dealArr()

export default new vuex.Store({
    state : {
        num:0,
        price:0,
        arr : arr,
        newarr : arr,
        comArray,
        phoArray,
        infoArray,
        username : '',
        cst : 1
    },
    mutations : {
        sendMsg (a,userValue) {
            document.cookie = "userValue=" + userValue;
            this.url = "/index1";
            this.cst = 2;
        },
        addProduct (state,e) {
            if (tar === e.target) {
                shopNum++
            }else{
                shopNum = 1
            }
            tar = e.target;
            state.num++;
            let newArrayLength = state.infoArray.length;
            let info = e.target.getAttribute('amiee');
            let newArr = info.split(' ');
            let arrNum = Number(newArr[0])
            state.price += arrNum;
            let shopObj = {
                shopPrice : arrNum,
                shopName : newArr[1],
                imageInfo : newArr[2],
                shopNum,
            }
            for (var i = 0; i<newArrayLength;i++) {
                if (state.infoArray[i].imageInfo === shopObj.imageInfo) {
                    state.infoArray[i].shopNum = shopObj.shopNum
                    break;
                }
            }
            state.infoArray.push(shopObj)
            var hash = {};
            state.infoArray = state.infoArray.reduce(function (item, next) {
                hash[next.imageInfo] ? '':hash[next.imageInfo] = true && item.push(next);
                return item;
            },[])
            state.shopNum = 1;
        },
        addBtn (e,index) {
            shopNum = ++e.infoArray[index].shopNum
            e.price += e.infoArray[index].shopPrice
            e.num++
        },
        decBtn (e,index) {
            if (e.infoArray[index].shopNum <= 1) {
                e.price -= e.infoArray[index].shopPrice
                e.num--
                e.infoArray.splice(index,1)
            }else{
                e.price -= e.infoArray[index].shopPrice
                shopNum = --e.infoArray[index].shopNum
                e.num--
                shopNum--
                console.log(e.num)
            }
        }

    }
   
})