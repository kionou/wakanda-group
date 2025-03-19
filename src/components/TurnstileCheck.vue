<template>
  <div>
    <div ref="turnstile"></div>
  </div>
</template>

<script>
export default {
  name: "Turnstile",
  props: {
    siteKey: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.initTurnstile();
  },
  methods: {
    initTurnstile() {
      if (window.turnstile) {
        window.turnstile.render(this.$refs.turnstile, {
          sitekey: this.siteKey,
          callback: (token) => {
            this.$emit("verified", token);
          },
        });
      }
    },
  },
};
</script>
