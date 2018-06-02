<template>
  <div id="app">
    <router-view/>
    <router-view name="show"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  font-size:16px;
  list-style:none;
  margin:0px;
  padding:0px;
  text-decoration:none;
}
#app{
  width:100vw;
  height:100vh;
}
::-webkit-scrollbar{
  width:10px;
}
::-webkit-scrollbar-track{
  border-radius:5px;
  background-color:#444;
  opacity:0.6;
}
::-webkit-scrollbar-thumb{
  border-radius:10px;
  background-color:#333;
  opactiy:0.7;
}

</style>
