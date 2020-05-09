<template>
  <div>
    <h1>{{ question.question }}</h1>
    <div v-html="question.answer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {},
    };
  },
  async mounted() {
    // fetch data from api
    const res = await fetch(
      `https://www.khmernokor.com/api/v1/qa/question-answers/${this.$route.params.id}`
    );
    const { data } = await res.json();
    this.question = data;
  },
};
</script>

<style></style>
