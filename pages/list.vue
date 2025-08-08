<script setup>
import BigBanner from "~/components/BigBanner.vue";
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import ListFilter from "~/components/ListPage/ListFilter.vue";
import SimpleDropdown from "~/components/SimpleDropdown.vue";
import ListList from "~/components/ListPage/ListList.vue";
import BaseBanner from "~/components/BaseBanner.vue";

import { ref } from "vue";
const current = ref(1);

const categories = [
  {
    question: "Question 1",
    answer:
      "Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer",
  },
  {
    question: "Question 2",
    answer: "Answer, Answer, Answer, Answer, Answer, Answer, Answer, Answer",
  },
  {
    question: "Question 3",
    answer: "Answer, Answer, Answer, Answer, Answer, Answer",
  },
];
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
          <a-pagination v-model:current="current" :total="100" />

          <BaseBanner />
          <div class="searchOptions">
            <div class="card">
              <div class="img">
                <img src="/public/assets/img/search.svg" alt="" />
              </div>
              <div class="l">
                <h4>Popular options:</h4>
                <ul>
                  <li>
                    <NuxtLink to="/">Iphone 13 pro</NuxtLink>
                  </li>
                  <ul>
                    <NuxtLink to="/">Samsung A15</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Iphone</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Iphone 11</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Samsung Galaxy</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Samsung Galaxy Z Fold</NuxtLink>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="/public/assets/img/search.svg" alt="" />
              </div>
              <div class="l">
                <h4>Trending options:</h4>
                <ul>
                  <li>
                    <NuxtLink to="/">Iphone 13 pro</NuxtLink>
                  </li>
                  <ul>
                    <NuxtLink to="/">Samsung A15</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Iphone</NuxtLink>
                  </ul>
                  <ul>
                    <NuxtLink to="/">Iphone 11</NuxtLink>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordionCategories">
            <a-collapse v-model:activeKey="activeKey">
              <a-collapse-panel
                v-for="(mainCat, index) in categories"
                :key="index"
                :header="mainCat.question"
              >
                <p>{{ mainCat.answer }}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <div class="about">
            <p>
              OLX.uz — широкий выбор бу телефонов, а также последних моделей от
              популярных брендов.
            </p>
            <p>
              На нашем сервисе люди со всего Узбекистана продают и покупают
              телефоны, поэтому только на OLX вы найдете широкий ассортимент
              телефонов на любой вкус — с нами у вас есть возможность купить
              недорогие телефоны по лучшей цене в интернете. Вы также можете
              продать собственное устройство и прилично заработать, вместо того,
              чтобы оставить ваш старый телефон просто пылиться на полке.
            </p>
            <p>
              Большой выбор и отличная стоимость телефона — только на OLX.uz!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(/public/assets/css/list.css);
</style>
