<template>
  <footer>
    尾巴部分
  </footer>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
interface stu {
  name: String;
  className?: String;
  age: Number;
  birthdate: String;
}
export default defineComponent({
  name: "Footer",
  setup: () => {
    const count = ref(0);
    const student: stu = reactive({
      name: "苦逼前端",
      className: "1610",
      age: 19,
      birthdate: "2001.11.21",
    });
    return { count, student };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
