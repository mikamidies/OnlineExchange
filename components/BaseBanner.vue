<template>
  <div class="section">
    <a href="#">
      <div class="tag">Advertisement</div>
      <img src="/public/assets/img/advert.jpg" alt="" />
    </a>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  height: 266px;
  border-radius: 8px;
  border: 1px solid var(--border);
  position: relative;
}
.section a {
  overflow: hidden;
  border-radius: 8px;
}
.tag {
  position: absolute;
  top: -20px;
  left: 16px;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
  background: var(--border);
  border-radius: 2px;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
