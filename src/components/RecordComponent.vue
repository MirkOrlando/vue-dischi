<template>
  <div class="col">
    <div class="card h-100 p-3 text-center">
      <div class="card_poster">
        <img
          class="card-img-top img-fluid h-100"
          :src="record.poster"
          :alt="record.title"
        />
      </div>
      <div class="card-body p-0 pt-4">
        <h4 class="card-title text-uppercase fw-bold">{{ record.title }}</h4>
        <div class="card-text">
          <div class="author">{{ record.author }}</div>
          <div class="year">{{ record.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordComponent",
  props: {
    record: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $litePrimaryColor;
  .card_poster {
    aspect-ratio: 1 / 1;
  }
  .card-title {
    color: $lightestColor;
  }
  .card-text {
    color: $liteDarkColor;
  }
}
</style>