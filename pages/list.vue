<script setup>
import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import ListFilter from "~/components/ListFilter.vue";
import SimpleDropdown from "~/components/SimpleDropdown.vue";
</script>

<template>
  <div class="page">
    <BigBanner />
    <div class="container">
      <div class="body">
        <HomeSearch />
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
              <NuxtLink class="current" to="/">Phones</NuxtLink>
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
              <button class="active">UZS</button>
              <button>USD</button>
            </div>
          </div>
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
.like {
  display: flex;
  justify-content: flex-end;
  padding: 0 32px;
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
.filter {
  padding: 32px;
}
.title {
  text-align: start;
  margin-bottom: 16px;
}
.header {
  padding: 0 32px 232px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
}
.prev,
.stick {
  color: var(--light-green-2);
}
.right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.sort {
  display: flex;
  align-items: center;
  gap: 8px;
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
}
</style>
