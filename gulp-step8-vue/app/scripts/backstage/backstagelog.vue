<template>
  <div>
    <ul>
      <li :key="idx" v-for="(item,idx) in log2">[by computed]{{item.name}} deleted</li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      log: []
    };
  },
  watch: {
    log: function(val) {
      $("ul").append(
        `<li style='color:red'>[by watch]${this.log[this.log.length - 1].name} deleted</li>`
      );
    }
  },
  computed: {
    log2: function(val) {
      return this.log;
    }
  },
  mounted: function() {
    const that = this;
    bus.$on("delClick", obj => {
      that.log.push(obj);
    });
  }
};
</script>
