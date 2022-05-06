<template>
  <form
    class="genre-filter d-flex align-items-center"
    @submit.prevent="$emit('reset')"
  >
    <select
      class="form-select my-4"
      aria-label="Default select example"
      v-on:input="$emit('selectGenre', $event.target.value)"
    >
      <option selected disabled>Select an author</option>
      <option v-for="(author, index) in authors" :key="index" :value="author">
        {{ author }}
      </option>
    </select>
    <button>
      <font-awesome-icon icon="fa-solid fa-rotate-left ms-2" />
    </button>
  </form>
</template>

<script>
export default {
  name: "GenreComponent",
  props: {
    authors: Array,
    selectedAuthor: String,
  },
};
</script>

<style lang="scss" scoped>
.genre-filter {
  gap: 1rem;
  .form-select {
    width: unset;
    background-color: white;
    color: $liteDarkColor;
    border-color: $liteDarkColor;
  }
  .fa-rotate-left {
    display: block;
    padding: 0.575rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    cursor: pointer;
  }
}
</style>