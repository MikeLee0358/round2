<template>
  <div class="mb-3">
    <h1>餐廳後台</h1>
    <router-link :to="{ name:'admin-restaurants' }">Restaurants</router-link> |
    <router-link :to="{name: 'admin-categories'}">Categories</router-link> |
    <router-link :to="{name: 'admin-user'}">Users</router-link>
  </div>
</template>