<template>
  <div class="container">
    <div class="row row-cols-5 g-3 py-4" v-if="!loading">
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
import Record from "@/components/RecordComponent.vue";
import Loading from "@/components/LoadingComponent.vue";
import axios from "axios";

export default {
  name: "RecordsListComponent",
  components: {
    Record,
    Loading,
  },
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

<style lang="scss" scoped>
</style>