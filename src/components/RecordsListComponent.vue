<template>
  <div class="container py-4">
    <div class="action-filter d-flex justify-content-end">
      <SelectGenre
        class="mx-3"
        :genres="genres"
        v-model="selectedGenre"
        @selectGenre="catchGenreSelected"
        @reset="resetGenre"
      />
      <SelectAuthor class="mx-3" :authors="authors" v-model="selectedAuthor" />
    </div>
    <div class="row row-cols-5 g-3" v-if="!loading">
      <Record
        :record="record"
        v-for="(record, index) in filterRecordsByGenre"
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
import SelectGenre from "@/components/SelectGenreComponent.vue";
import SelectAuthor from "@/components/SelectAuthorComponent.vue";

export default {
  name: "RecordsListComponent",
  components: {
    Record,
    Loading,
    SelectGenre,
    SelectAuthor,
  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      records: null,
      loading: true,
      error: null,
      genres: null,
      authors: null,
      selectedGenre: "",
      selectedAuthor: "",
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
          this.getGenreslist();
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
    getGenreslist() {
      this.genres = [];
      this.records.forEach((record) => {
        if (!this.genres.includes(record.genre)) {
          this.genres.push(record.genre);
        }
      });
      //console.log(this.genre);
    },
    getAuthorslist() {
      this.authors = [];
      this.records.forEach((record) => {
        if (!this.authors.includes(record.author)) {
          this.authors.push(record.author);
        }
      });
      //console.log(this.author);
    },

    catchGenreSelected() {
      //console.log("Seleziona Genere");
      //console.log(this);
      //console.log(event);
      this.selectedGenre = event.target.value;
    },
    resetGenre() {
      //console.log("Seleziona Genere");
      //console.log(this);
      //console.log(event);
      this.selectedGenre = "";
    },
  },
  mounted() {
    this.call_API();
  },
  computed: {
    filterRecordsByGenre() {
      return this.records.filter((record) => {
        return record.genre.includes(this.selectedGenre);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>