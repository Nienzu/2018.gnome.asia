<template>
  <ul :id="id" class="dropdown-content tit1">
      <li>
        <a @click="() => switchLanguage('en')">English</a>
      </li>
      <li>
        <a @click="() => switchLanguage('zhCHS')">简体中文</a>
      </li>
      <li>
        <a @click="() => switchLanguage('zhCHT')">繁体中文</a>
      </li>
    </ul>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    switchLanguage(locale) {
      localStorage.lang = locale;
      this.$i18n.locale = locale;
      window.location.reload();
    }
  }
};
</script>
