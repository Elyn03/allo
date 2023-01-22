<template>
  <nav>
    <router-link to="/journal">Journal</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/" class="fin">Clavier</router-link>
  </nav>

  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffab40;
    transition: 0.5s;
    border-right: 3px solid #bc7d2c;
  }

  nav a {
    position: relative;
    top: 25%;
    padding: 20px 50px;
    font-weight: bold;
    text-decoration: none;
    border-bottom: none;
    color: #ffffff;
  }

  nav a.router-link-exact-active {
    background-color: #ffffff;
    color: #bc7d2c;
    transition: 0.5s;
  }

  .page {
    margin: auto;
  }
  
  @media only screen and (max-width: 720px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 60px;
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #ffab40;
      transition: 0.5s;
      border-right: 3px solid #bc7d2c;
    }
    .page {
      margin-top: 100px;
    }
  }
</style>
