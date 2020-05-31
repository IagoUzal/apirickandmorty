<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,700;0,900;1,400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
p,
a {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
}

body {
  margin-bottom: 2rem;
  max-width: 80%;
  margin: auto;
}

#app {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app h1,
h2,
h3 {
  color: #161617;
  font-weight: 700;
  line-height: 1.4rem;
}

#app p {
  color: #505050;
}

#nav {
  padding: 2rem;
  background: #f0f0f0;
  margin: 0 -20% 3rem -20%;
}

#nav a {
  font-weight: bold;
  color: #161617;
  padding-right: 1rem;
  font-weight: 900;
}

#nav a.router-link-exact-active {
  color: #594fff;
}
</style>
