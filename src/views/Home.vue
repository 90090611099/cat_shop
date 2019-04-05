<template>
  <div class="home">
   <h1> {{ name }}</h1>
    <img alt="hugo" src="../assets/kothero.jpg" />
  </div>
</template>

<script>



export default {
  name: "home",
  components: {
   
  },
  data() {
    return {
      name: 'Koty rządzą! xD'}
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
   justify-content: center;

}
img {
  display: flex;

 width: 200px;
	height: 200px;
	border-radius: 150px; 
}
</style>

