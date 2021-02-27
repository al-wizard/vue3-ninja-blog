<template>
  <div class="container mt-4">
    <router-view/>    
  </div>
</template>

<style>
  body {
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, h3 {
    color:cadetblue;
  }
  button {
    padding: 10px;
    margin-right: 4px; 
    border: 1px solid cadetblue;
    border-radius: 5px;
    background-color: rgb(81, 117, 158);
    color: white;
    font-weight: 600;
  }
  input[type=text] {
    padding: 10px;
    margin-right: 5px;
    color: #333;
  }
  hr {
    margin-top: 20px;
  }
</style>
