<template>
  <header class="SngBlog_Header">
    <nav>
      <ul>
        <li>
          {{$t("setting.test1")}}
        </li>
        <li @click="Setlanguage">
          语言切换
        </li>
      </ul>
    </nav>

  </header>

</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
// import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
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
    const Setlanguage = () => {
      const store = useStore();
    
      store.dispatch("ACTION_SET_LANGUAGE", "en");
    };
    return { count, student, Setlanguage };
  },
});
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .SngBlog_Header {
    height: 300px !important;
  }
}
.SngBlog_Header {
  height: 100px;
}
</style>
