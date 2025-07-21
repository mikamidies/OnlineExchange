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
          <button>
            <Icon icon="mdi:user-outline" />
            Your profile
            <Icon icon="mdi:chevron-down" />
          </button>
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
</style>
