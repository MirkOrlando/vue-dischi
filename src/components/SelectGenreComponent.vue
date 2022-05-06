<template>
  <select
    class="form-select my-4"
    aria-label="Default select example"
    v-on:input="$emit('selectGenre', $event.target.value)"
  >
    <option selected disabled>Select a Genre</option>
    <option v-for="(genre, index) in genres" :key="index" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>

<script>
export default {
  name: "GenreComponent",
  props: {
    genres: Array,
    genre: String,
    selectedGenre: String,
  },
};
</script>