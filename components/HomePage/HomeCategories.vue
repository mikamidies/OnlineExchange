<template>
  <div class="categories component">
    <h4 class="title">Categories</h4>
    <div class="items">
      <div class="item">
        <div class="img">
          <img src="/public/assets/img/cat-1.png" alt="" />
        </div>
        <p class="name">Cars</p>
      </div>
      <div class="item">
        <div class="img">
          <img src="/public/assets/img/cat-2.png" alt="" />
        </div>
        <p class="name">Electronics</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  padding: 32px;
}
.categories .items {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 12px;
  row-gap: 40px;
}
.categories .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
}
.categories .img {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #ffce32;
}
.categories .name {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
</style>
