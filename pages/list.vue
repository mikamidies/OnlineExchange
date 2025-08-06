<script setup>
import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import ListFilter from "~/components/ListPage/ListFilter.vue";
import SimpleDropdown from "~/components/SimpleDropdown.vue";
import ListList from "~/components/ListPage/ListList.vue";
</script>

<template>
  <div class="page">
    <BigBanner />
    <div class="container">
      <div class="body">
        <HomeSearch />
        <div class="pad">
          <div class="like">
            <button>
              <Icon icon="mdi:heart-outline" />
              Add to favorites
            </button>
          </div>
          <div class="filter">
            <h4 class="title">Filters</h4>
            <ListFilter />
          </div>
          <h1 class="seoTitle">Electronics</h1>
          <div class="header">
            <ol class="breadcrumbs">
              <li>
                <NuxtLink class="prev" to="/">Main</NuxtLink>
              </li>
              <li>
                <div class="stick">/</div>
              </li>
              <li>
                <NuxtLink class="prev" to="/">Electronics</NuxtLink>
              </li>
              <li>
                <div class="stick">/</div>
              </li>
              <li>
                <p>Phones</p>
              </li>
            </ol>

            <div class="right">
              <div class="sort">
                <p class="par">Sort by:</p>
                <SimpleDropdown />
              </div>
              <div class="view">
                <button class="listView active">
                  <Icon icon="material-symbols-light:view-list" />
                </button>
                <button class="gridView">
                  <Icon icon="material-symbols-light:grid-view-rounded" />
                </button>
              </div>
              <div class="currency">
                <p class="par">Currency:</p>
                <button class="active">uzs</button>
                <button>usd</button>
              </div>
            </div>
          </div>
          <div class="fastCategories">
            <NuxtLink to="/"> Accessories <span> 1300 </span> </NuxtLink>
            <NuxtLink to="/"> Sim cards <span>900</span> </NuxtLink>
            <NuxtLink to="/"> IP-telephonia <span>245</span> </NuxtLink>
            <NuxtLink to="/"> Mobile phones <span>155</span> </NuxtLink>
          </div>
          <ListList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background: var(--light-grey);
  border-radius: 8px 8px 0 0;
}
.pad {
  padding: 0 32px;
}
.like {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}
.like button {
  border: 2px solid var(--main-color);
  border-radius: 4px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.title {
  text-align: start;
  margin-bottom: 16px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.filter {
  margin-bottom: 24px;
}
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}
.prev,
.stick {
  color: var(--light-green-2);
}
.right {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
}
.sort {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}
.view {
  display: flex;
  align-items: center;
  gap: 16px;
}
.view svg {
  width: 32px;
  height: 32px;
  color: var(--light-green-2);
}
.view .active svg {
  color: var(--main-color);
}
.currency {
  display: flex;
  align-items: center;
  gap: 16px;
}
.currency button {
  color: var(--light-green-2);
}
.currency button.active {
  color: var(--main-color);
  font-weight: 600;
}
.seoTitle {
  line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 16px;
  letter-spacing: 1px;
}
.fastCategories {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  padding-bottom: 16px;
}
.fastCategories span {
  font-weight: 600;
}
</style>
