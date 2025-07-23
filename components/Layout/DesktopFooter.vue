<template>
  <div class="component">
    <div class="container">
      <div class="top">
        <div class="section">
          <div class="links">
            <NuxtLink to="/">Mobile app</NuxtLink>
            <NuxtLink to="/">Get in touch</NuxtLink>
            <NuxtLink to="/">Paid services</NuxtLink>
            <NuxtLink to="/">Terms of use</NuxtLink>
            <NuxtLink to="/">Privacy policy</NuxtLink>
          </div>
        </div>

        <div class="section">
          <div class="links">
            <NuxtLink to="/">Safety rules</NuxtLink>
            <NuxtLink to="/">Sitemap</NuxtLink>
            <NuxtLink to="/">Regions map</NuxtLink>
            <NuxtLink to="/">Popular requests</NuxtLink>
            <NuxtLink to="/">How to sell in Logo?</NuxtLink>
            <NuxtLink to="/">Contact us</NuxtLink>
          </div>
        </div>

        <div class="section">
          <div class="images">
            <a href="#" target="_blank">
              <img
                src="/public/assets/img/google-play.png"
                alt=""
                class="pic"
              />
            </a>
            <a href="#" target="_blank">
              <img src="/public/assets/img/appstore.png" alt="" class="pic" />
            </a>
          </div>
          <p class="txt">Free app for Android and iOS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  background: var(--light-grey);
  z-index: 2;
  position: relative;
  border-top: 1px solid var(--light-green-2);
  padding: 72px 0;
}
.top {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.links {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.links a {
  font-size: 16px;
  font-weight: 600;
}
.images {
  display: flex;
  gap: 16px;
}
.pic {
  height: 40px;
  width: 136px;
  object-fit: contain;
}
.txt {
  font-size: 12px;
  color: var(--light-green-2);
  margin-top: 8px;
  margin-top: 24px;
}
</style>
