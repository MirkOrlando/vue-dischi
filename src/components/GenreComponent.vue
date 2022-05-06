<template>
  <option :value="genre" v-on:imput="$emit('selectGenre', $event.target.value)">
    {{ genre }}
  </option>
</template>

<script>
export default {
  name: "GenreComponent",
  props: {
    genre: String,
  },
};
</script>