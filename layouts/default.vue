<template>
  <div>
    <Menus />
    <section
      class="main-content container"
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
