<template>
    <nav class="navbar">
      <img src="@/assets/Logo-TKambio.png" alt="Tkambio" class="navbar-logo" />
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  
  <style scoped>
  .navbar {
    background-image: linear-gradient(#02ADF1, #4563E6, #4562E6);
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 10px 0;
    width: 100%;

  }
  
  .navbar-logo {
    max-width: 100%;
    height: auto;
    padding: 15px 5px;
    /*width: 200px;*/
  }
  
  </style>
  