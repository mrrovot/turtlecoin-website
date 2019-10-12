<template>
  <div>
    <Menus />
    <section
      class="main-content"
    >
      <nuxt />
    </section>
  </div>
</template>

<script>
import Menus from '~/components/Menus'

export default {
  components: {
    Menus
  }
}
</script>
