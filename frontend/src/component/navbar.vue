<template>
  <nav class = "container">
    <router-link class="main-text" to="/">ТОС 91 квартал</router-link>
    <ul class = "menu">
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/tos-live">Жизнь тоса</router-link></li>
      <li><router-link to="/cooperation">Сотрудничество</router-link></li>
      <li><router-link to="/projects">Проекты</router-link></li>
      <li><router-link to="/documents">Документы</router-link></li>
      <li><router-link to="/uk-interaction">Взаимодействие с УК</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:60px;
  background-color: bisque;
  width: 100%;
}
a {
  color: black;
  text-decoration: none;
}
.menu{
  display: flex;
  gap:25px;
  list-style: none;
}
.menu a{
  font-weight: 500;
  font-size: 20px;
}
.main-text{
  font-size: 30px;
}
.router-link-exact-active {
  color:blue;
}
</style>
