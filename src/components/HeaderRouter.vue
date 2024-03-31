<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
<div class="header">
  <a href="#default" class="logo">Receitas Maridais</a>
  <div class="header-right">
      <RouterLink class="active" :to="{ name: 'receita' }"> Home </RouterLink>
     <RouterLink :to="{ name: 'registo' }"> Registo </RouterLink>
  </div>
</div>

</template>

<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
  </style>
