<template>
  <main>
    <div class="container">
      <div class="row row-cols-5 g-3 py-4">
        <div class="col" v-for="(record, index) in records" :key="index">
          <div class="card h-100 p-3 text-center">
            <div class="card_poster">
              <img
                class="card-img-top h-100"
                :src="record.poster"
                :alt="record.title"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ record.title }}</h4>
              <div class="card-text">
                <div class="author">{{ record.author }}</div>
                <div class="year">{{ record.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "SiteMainComponent",
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      records: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    call_API() {
      axios
        .get(this.link)
        .then((response) => {
          //console.log(this, response);
          this.records = response.data.response;
          this.loading = !response.data.success;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
  },
  mounted() {
    this.call_API();
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: $primaryColor;
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
}
</style>
