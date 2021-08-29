<template>
  <form action="">
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <slot>No form to render</slot>
  </form>
</template>

<script>
export default {};
</script>
