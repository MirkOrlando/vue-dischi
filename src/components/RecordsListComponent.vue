<template>
  <div class="container py-4">
    <div class="action-filter d-flex justify-content-end">
      <select class="form-select my-4" aria-label="Default select example">
        <option selected>Select a Genre</option>
        <Genre :genre="genre" v-for="(genre, index) in genres" :key="index" />
      </select>
    </div>
    <div class="row row-cols-5 g-3" v-if="!loading">
      <Record
        :record="record"
        v-for="(record, index) in records"
        :key="index"
      />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import axios from "axios";
import Record from "@/components/RecordComponent.vue";
import Loading from "@/components/LoadingComponent.vue";
import Genre from "@/components/GenreComponent.vue";

export default {
  name: "RecordsListComponent",
  components: {
    Record,
    Loading,
    Genre,
  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      records: null,
      loading: true,
      error: null,
      genres: null,
      selectedGenre: null,
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
          this.getGenres();
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
    getGenres() {
      this.genres = [];
      this.records.forEach((record) => {
        if (!this.genres.includes(record.genre)) {
          this.genres.push(record.genre);
        }
      });
      //console.log(this.genre);
    },
  },
  mounted() {
    this.call_API();
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.form-select {
  width: unset;
  background-color: $litePrimaryColor;
  background-image: unset;
  color: $liteDarkColor;
  border-color: $liteDarkColor;
}
</style>