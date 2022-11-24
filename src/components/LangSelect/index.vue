<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
    style="margin-right: 10px"
  >
    <div>
      <svg-icon class-name="international-icon" icon-class="multiLanguage" style="vertical-align:-0.4em"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language === 'zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language === 'en'" command="en">
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("app/setLanguage", lang);
      if (lang === "zh") {
        this.$message({
          message: "切换语言成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "Switch Language Success",
          type: "success",
        });
      }
    },
  },
};
</script>
