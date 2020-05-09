<template>
  <div>
    <h1>Question answers</h1>
    <ul>
      <li v-for="question in questions" :key="question.id">
        <router-link :to="`/question/${question.id}`">
          {{ question.question }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({ questions: [] }),
  async mounted() {
    const res = await fetch(
      "https://www.khmernokor.com/api/v1/qa/question-answers"
    );
    const { data } = await res.json();
    this.questions = data;
  },
};
</script>

<style></style>
