<template>
  <div class="gauge-container">
    <div class="gauge-a"></div>
    <div class="gauge-b"></div>
    <div class="gauge-c"></div>
    <!-- <div class="gauge-data"><h1 id="percent">0%</h1><br>Hover On Me</div> -->
  </div>
</template>

<script>
export default {
  name: 'gauge'
}
</script>

<style>
.gauge-container{
  /* width:400px; */
  width: 300px;
  height: 150px;
  /* height:200px; */
  /* position: absolute;
  top: 30%;
  left: 50%; */
  overflow: hidden;
  text-align: center;
  transform: translate(0%, 0%);
}

.gauge-a{
  z-index: 1;
  position: absolute;
  background-color: rgb(32, 211, 121);
  /* width: 400px;
  height: 200px; */
  width: 300px;
  height: 150px;
  /* top: 0%; */
  border-radius:250px 250px 0px 0px ;
}

.gauge-b{
  z-index: 3;
  position: absolute;
  background-color: #222;
  width: 270px;
  height: 135px;
  top: 15px;
  margin-left: 15px;
  margin-right: auto;
  border-radius:250px 250px 0px 0px ;
}

.gauge-c{
  z-index: 2;
  position: absolute;
  background-color: rgb(249, 192, 86);
  /* width: 400px;
  height: 200px; */
  width: 300px;
  height: 150px;
  top: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius:0px 0px 250px 250px ;
  transform-origin:center top;
  transition: all 1.3s ease-in-out;
}

.gauge-container:hover .gauge-c{
  transform:rotate(.5turn);
}

.gauge-container:hover .gauge-data{
  color: rgba(255,255,255,1);
}

.gauge-data{
  z-index: 4;
  color: rgba(255,255,255,.2);
  font-size: 1.5em;
  line-height: 25px;
  position: absolute;
  width: inherit;
  height: inherit;
  top: 90px;
  margin-left: auto;
  margin-right: auto;
  transition: all 1s ease-out;
}
</style>
