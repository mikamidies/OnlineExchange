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
      <AuthorsOthers />
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
</style>
