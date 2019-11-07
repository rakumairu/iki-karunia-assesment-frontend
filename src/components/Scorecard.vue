<template>
  <div class="mr-md-5 mr-sm-0">
    <div class="row">
      <div class="col-1">
        <div>5</div>
      </div>
      <div class="col-11">
        <div class="bar-container">
          <div class="bar-5" :style="{ width: five + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <div>4</div>
      </div>
      <div class="col-11">
        <div class="bar-container">
          <div class="bar-4" :style="{ width: four + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <div>3</div>
      </div>
      <div class="col-11">
        <div class="bar-container">
          <div class="bar-3" :style="{ width: three + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <div>2</div>
      </div>
      <div class="col-11">
        <div class="bar-container">
          <div class="bar-2" :style="{ width: two + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <div>1</div>
      </div>
      <div class="col-11">
        <div class="bar-container">
          <div class="bar-1" :style="{ width: one + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scorecard',
  props: ['ratingStar'],
  computed: {
    total () {
      return Object.values(this.ratingStar).reduce((total, value) => total + value)
    },
    five () {
      return Math.round((this.ratingStar.five / this.total) * 100)
    },
    four () {
      return Math.round((this.ratingStar.four / this.total) * 100)
    },
    three () {
      return Math.round((this.ratingStar.three / this.total) * 100)
    },
    two () {
      return Math.round((this.ratingStar.two / this.total) * 100)
    },
    one () {
      return Math.round((this.ratingStar.one / this.total) * 100)
    }
  }
}
</script>

<style>
/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}

/* Individual bars */
.bar-5 {height: 18px; background-color: #79c9a1;}
.bar-4 {height: 18px; background-color: #aed888;}
.bar-3 {height: 18px; background-color: #ffd935;}
.bar-2 {height: 18px; background-color: #ffb235;}
.bar-1 {height: 18px; background-color: #ff8c5a;}
</style>
