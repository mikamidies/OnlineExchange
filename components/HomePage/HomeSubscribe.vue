<template>
  <div class="component">
    <div class="container small wrapper">
      <div class="left">
        <img src="/public/assets/img/graph.svg" alt="" class="pic" />
      </div>
      <div class="mid">
        <p class="sup">Посмотрите предложение Logo для бизнеса</p>
        <h4 class="paragraph">Начните бизнес в интернете с Logo!</h4>
      </div>
      <div class="right">
        <NuxtLink to="/">Learn more</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component {
  background: var(--main-color);
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.mid {
  text-align: center;
}
.sup {
  font-size: 16px;
  line-height: 20px;
  color: var(--light-green-2);
  margin-bottom: 4px;
}
.paragraph {
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
}
.right a {
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
