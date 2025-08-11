<template>
  <div class="component">
    <div class="left">
      <h4 class="par">Contact seller</h4>
      <div class="person">
        <div class="img">
          <img src="/public/assets/img/person.jpg" alt="" />
        </div>
        <div class="info">
          <p class="name">Ja'far To'lamaganov</p>
          <p class="since">With Logo from 2018 August</p>
          <p class="lastSeen">Last seen 20:18</p>
        </div>
      </div>
    </div>
    <div class="right">
      <button class="message">Send message</button>
      <div class="phoneNumber">
        <div class="logo">
          <Icon icon="mdi:phone"></Icon>
        </div>
        <p class="number">+998 90 140 00 00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.person {
  display: flex;
  align-items: center;
  gap: 16px;
}
.img img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.name {
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  margin: 0 0 3px;
  margin-bottom: 6px;
}
.since,
.lastSeen {
  font-weight: 400;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  margin-block-end: unset;
  margin-block-start: unset;
  margin: 2px 0;
  color: #406367;
}
.message {
  background: var(--main-color);
  color: white;
  width: 300px;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 24px;
  font-weight: 600;
}
.phoneNumber {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
.phoneNumber .logo {
  background: var(--light-blue);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phoneNumber svg {
  width: 24px;
  height: 24px;
}
</style>
