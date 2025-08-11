<template>
  <div class="component">
    <div class="buttons">
      <button class="advert">
        <Icon icon="ic:outline-bookmark-border"></Icon> Advert
      </button>
      <button class="up"><Icon icon="ic:round-replay"></Icon> Up</button>
    </div>
    <div class="tags">
      <div class="tag">Laptop model: Apple</div>
      <div class="tag">Status: New</div>
      <div class="tag">Country of origin: China</div>
      <div class="tag">OC: Macintosh</div>
      <div class="tag">Memory: 512 GB</div>
      <div class="tag">CPU: Apple Silicon M2</div>
      <div class="tag">3.5mm: Yes</div>
      <div class="tag">DVD Drive: No</div>
    </div>
    <div class="descBody">
      <h2 class="title">Description</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        cum, dicta reprehenderit alias rerum a. Ea, vero! Hic, sed tempore?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam est
        maiores, asperiores repellendus voluptatem nemo porro ea hic nesciunt
        eveniet quisquam mollitia repudiandae ipsam assumenda. Voluptas maxime
        nobis ipsum. Porro, commodi esse?
      </p>
      <p>16 Pro Max</p>
      <ul>
        <li>
          <p>Variantga beriladi</p>
        </li>
        <li>
          <p>LIMIT asosida</p>
        </li>
        <li>
          <p>Boshlangich tolov Yoq</p>
        </li>
        <li>
          <p>6 oyga - 327$</p>
        </li>
      </ul>
      <p>Telegram: Telefonchi_43</p>
      <p>
        se 2020 -16 Pro Max gacha telefonlarimiz bor Samsung, Honor, Redmi,
        Tecno Spark modelari ham bor
      </p>
    </div>
    <div class="bottom">
      <p class="id">ID: 60984861</p>
      <button class="report">
        <Icon icon="mdi:flag"></Icon>
        Report
      </button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.buttons button {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.buttons svg {
  width: 28px;
  height: 28px;
  color: var(--light-green-2);
  display: flex;
  align-items: flex-start;
}
.tags {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.tag {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
  line-height: 18px;
}
.title {
  color: rgb(2, 40, 44);
  font-weight: 700;
  margin: 4px 0px 16px;
  font-size: 24px;
  line-height: 26px;
  text-align: left;
}
.descBody p {
  word-break: break-word;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  max-width: 90%;
  display: flex;
  margin-bottom: 16px;
}
.descBody {
  border-bottom: 1px solid var(--light-green-2);
  margin-bottom: 24px;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
}
.id {
  font-size: 14px;
  font-weight: 600;
}
.report {
  font-size: 14px;
  font-weight: 600;
  color: red;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
}
</style>
