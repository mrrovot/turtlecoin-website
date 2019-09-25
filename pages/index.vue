<template>
  <section class="section">
    <Map />
  </section>
</template>

<script>
import Map from '~/components/Map'

export default {
  name: 'HomePage',
  layout: 'default_fullwidth',
  components: {
    Map
  }
}
</script>
