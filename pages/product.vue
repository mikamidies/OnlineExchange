<script setup>
import HomeSearch from "~/components/HomePage/HomeSearch.vue";
import BaseBanner from "~/components/BaseBanner.vue";
import BreadCrumbs from "~/components/BreadCrumbs.vue";
import ImageSlider from "~/components/ProductPage/ImageSlider.vue";
import ProductDesc from "~/components/ProductPage/ProductDesc.vue";
import LeftContact from "~/components/ProductPage/LeftContact.vue";
import RightPrice from "~/components/ProductPage/RightPrice.vue";
import RightContact from "~/components/ProductPage/RightContact.vue";
import RightLocation from "~/components/ProductPage/RightLocation.vue";
import AboutAuthor from "~/components/ProductPage/AboutAuthor.vue";
import AuthorsOthers from "~/components/ProductPage/AuthorsOthers.vue";
import SimilarPosts from "~/components/ProductPage/SimilarPosts.vue";
</script>

<template>
  <div class="page">
    <div class="container">
      <HomeSearch class="innerSearch" />
      <BaseBanner />
      <div class="crumbs">
        <NuxtLink class="back" to="/">
          <Icon icon="ic:round-chevron-left"></Icon> Back
        </NuxtLink>
        <BreadCrumbs />
      </div>
      <div class="grid">
        <div class="left">
          <div class="image">
            <ImageSlider />
          </div>
          <div class="description">
            <ProductDesc />
          </div>
          <div class="contact">
            <LeftContact />
          </div>
        </div>
        <div class="right">
          <div class="price">
            <RightPrice />
          </div>
          <div class="contact">
            <RightContact />
          </div>
          <div class="location">
            <RightLocation />
          </div>
          <div class="about">
            <AboutAuthor />
          </div>
        </div>
      </div>
      <AuthorsOthers class="others" />
      <SimilarPosts />
    </div>
  </div>
</template>

<style scoped>
.page {
  background: var(--light-grey);
  padding: 24px 0 80px 0;
}
.innerSearch {
  padding: 0 0 32px 0;
  background: transparent;
}
.crumbs {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
}
.back {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 600;
}
.back svg {
  width: 32px;
  height: 32px;
}
.grid {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 24px;
  min-width: 0;
}
.left {
  min-width: 0;
}
.image,
.description,
.contact,
.price,
.location,
.about {
  background: white;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
}
:deep(.par) {
  font-weight: 700;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
}
</style>
