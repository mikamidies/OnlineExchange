<script setup>
import { ref } from "vue";
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
  <div class="component desktopNavbar">
    <div class="container">
      <div class="left">
        <NuxtLink to="/" class="logo">Logo</NuxtLink>
      </div>
      <div class="right">
        <div class="lang">
          <button class="active">O'z</button>
          <p class="stick"></p>
          <button>En</button>
        </div>
        <div class="favorites">
          <button>
            <Icon icon="mdi:cards-heart-outline" />
          </button>
        </div>
        <div class="notifications">
          <button>
            <Icon icon="mdi:bell-outline" />
          </button>
        </div>
        <div class="profile">
          <button @click="toggleDropdown">
            <Icon icon="mdi:user-outline" />
            Your profile
            <Icon icon="mdi:chevron-down" />
          </button>

          <div
            class="dropdown"
            :style="{ display: showDropdown ? 'block' : 'none' }"
          >
            <div class="user">
              <img src="/assets/img/person.jpg" alt="" class="pic" />
              <p>Mirabbos</p>
            </div>
            <div class="hyperlinks">
              <p class="paragraph">Your profile:</p>
              <NuxtLink to="/">My profile</NuxtLink>
              <NuxtLink to="/">My posts</NuxtLink>
              <NuxtLink to="/">My transactions</NuxtLink>
              <NuxtLink to="/">Settings</NuxtLink>
            </div>
            <div class="likes">
              <p class="paragraph">Favorites:</p>
              <NuxtLink to="/"> Favorites <span>0</span> </NuxtLink>
              <NuxtLink to="/"> Searches <span>0</span> </NuxtLink>
            </div>
            <div class="logout">
              <NuxtLink to="/">Logout</NuxtLink>
            </div>
          </div>
        </div>
        <div class="post">
          <button>Post advert</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.desktopNavbar {
  background: var(--main-color);
  color: white;
  padding: 16px 0;
  position: relative;
  z-index: 3;
}
.desktopNavbar .container {
  max-width: 1270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.desktopNavbar button {
  color: white;
}
.logo {
  font-size: 40px;
  font-weight: 600;
  display: flex;
}
.stick {
  width: 1px;
  height: 10px;
  background: white;
}
.lang {
  display: flex;
  align-items: center;
  gap: 12px;
}
.lang button {
  opacity: 0.7;
}
.lang button.active {
  opacity: 1;
}
.desktopNavbar svg {
  width: 28px;
  height: 28px;
}
.profile button {
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 12px;
}
.post button {
  min-width: 200px;
  padding: 16px 32px;
  border-radius: 4px;
  background: white;
  color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.profile {
  position: relative;
}
.dropdown {
  position: absolute;
  top: 150%;
  right: 50%;
  transform: translateX(50%);
  width: 225px;
  background: white;
  color: var(--main-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
.user {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--light-grey);
}
.pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
}
.paragraph {
  font-weight: 700;
  line-height: 22px;
  font-size: 16px;
  color: rgb(127, 151, 153);
}
.hyperlinks,
.likes,
.logout {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--light-grey);
  padding: 12px 24px;
  gap: 12px;
}
.logout {
  border-bottom: none;
}
.hyperlinks a,
.likes a,
.logout a {
  color: var(--grey);
  text-decoration: none;
  padding: 4px 0;
}
</style>
