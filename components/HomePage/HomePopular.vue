<template>
  <div class="component">
    <div class="wrapper container">
      <div class="left">
        <div class="img">
          <img src="/public/assets/img/pop-cats.svg" alt="" />
        </div>
        <p class="name">Popular Categories</p>
        <div class="links">
          <a href="#" target="_blank" class="link">For kids, </a>
          <a href="#" target="_blank" class="link">Pets, </a>
          <a href="#" target="_blank" class="link">For home, </a>
          <a href="#" target="_blank" class="link">Business, </a>
          <a href="#" target="_blank" class="link">Cars, </a>
          <a href="#" target="_blank" class="link">Electronics, </a>
          <a href="#" target="_blank" class="link">Real estate, </a>
          <a href="#" target="_blank" class="link">Services, </a>
          <a href="#" target="_blank" class="link">For kids, </a>
          <a href="#" target="_blank" class="link">Pets, </a>
          <a href="#" target="_blank" class="link">For home, </a>
          <a href="#" target="_blank" class="link">Business, </a>
          <a href="#" target="_blank" class="link">Cars, </a>
          <a href="#" target="_blank" class="link">Electronics, </a>
          <a href="#" target="_blank" class="link">Real estate, </a>
          <a href="#" target="_blank" class="link">Services, </a>
        </div>
      </div>
      <div class="right">
        <div class="img">
          <img src="/public/assets/img/pop-reqs.svg" alt="" />
        </div>
        <p class="name">Popular Requests</p>
        <div class="links">
          <a href="#" target="_blank" class="link">Air conditioner, </a>
          <a href="#" target="_blank" class="link">Iphone 15, </a>
          <a href="#" target="_blank" class="link">Mackbook Air M1, </a>
          <a href="#" target="_blank" class="link">Kangal, </a>
          <a href="#" target="_blank" class="link">Chevrolet Gentra, </a>
          <a href="#" target="_blank" class="link">XBOX Series S, </a>
          <a href="#" target="_blank" class="link">Yurta, </a>
          <a href="#" target="_blank" class="link">Plumbers, </a>
          <a href="#" target="_blank" class="link">Air conditioner, </a>
          <a href="#" target="_blank" class="link">Iphone 15, </a>
          <a href="#" target="_blank" class="link">Mackbook Air M1, </a>
          <a href="#" target="_blank" class="link">Kangal, </a>
          <a href="#" target="_blank" class="link">Chevrolet Gentra, </a>
          <a href="#" target="_blank" class="link">XBOX Series S, </a>
          <a href="#" target="_blank" class="link">Yurta, </a>
          <a href="#" target="_blank" class="link">Plumbers, </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  padding: 64px 0;
  background: var(--light-grey);
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  gap: 64px;
}
.img {
  margin-bottom: 24px;
}
.name {
  font-weight: 600;
  margin-bottom: 8px;
}
.links {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.link {
  display: inline-flex;
  white-space: nowrap;
}
</style>
