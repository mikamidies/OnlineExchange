<template>
  <div class="component search">
    <form>
      <div class="input">
        <Icon icon="mdi:search" />
        <input type="text" placeholder="Input your request" />
      </div>
      <div class="region">
        <Icon icon="mdi:map-marker-outline" />
        <p>Tashkent</p>
      </div>
      <button class="submit">Search <Icon icon="mdi:search" /></button>
    </form>
  </div>
</template>

<style scoped>
.search {
  background: var(--light-grey);
  padding: 32px;
}
.search form {
  display: grid;
  border-radius: 4px;
  overflow: hidden;
  grid-template-columns: 60% 28% 12%;
}
.search .input {
  display: flex;
  align-items: center;
  background: white;
  padding-left: 30px;
  border-right: 1px solid var(--light-grey);
}
.search input {
  padding: 20px 30px 20px 12px;
  width: 100%;
}
.search svg {
  width: 32px;
  height: 32px;
  display: flex;
}
.search button {
  background: var(--main-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 600;
}
.region {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 20px 30px;
}
</style>
