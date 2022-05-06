<template>
  <option
    :value="genre"
    v-on:selected="$emit('option', $event.target.value)"
    @click="$emit('filterGenre')"
  >
    {{ genre }}
  </option>
</template>

<script>
export default {
  name: " GenreComponent",
  props: {
    genre: String,
  },
};
</script>