Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 0;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copy() {
      // create a new html element
      const el = document.createElement("textarea");
      // prevent browser change
      el.setAttribute("readonly", "");
      // hide element from view
      el.style.position = "absolute";
      el.style.left = "-9999px";
      // set value to copy
      el.value = `transform: ${this.box.transform}`;
      // add element into the body
      document.body.appendChild(el);
      // select and copy value
      el.select();
      document.execCommand("copy");
      // remove element
      document.body.removeChild(el);
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
}).mount("#app");
