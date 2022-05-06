<template>
  <div class="container py-4">
    <div class="action-filter d-flex justify-content-end">
      <select
        class="form-select my-4"
        aria-label="Default select example"
        v-model="selectedGenre"
      >
        <option selected>Select a Genre</option>
        <Genre
          :genre="genre"
          v-for="(genre, index) in genres"
          :key="index"
          @selectGenre="catchGenreSelected"
        />
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
      selectedGenre: "",
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
    catchGenreSelected() {
      console.log("Seleziona Genere", this.selectedGenre);
    },
  },
  mounted() {
    this.call_API();
  },
  /*   computed: {
     filterRecordsByGenre() {
      return this.records.filter((record) => {
        //console.log(record);
        return record.genre === this.selectedGenre;
      }); 
    },
  },
 */
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