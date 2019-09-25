<template>
  <div>
    <b-navbar
      type="is-primary"
      has-shadow
      wrapper-class="container"
    >
      <template slot="brand">
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="has-background-light"
        >
          <img
            src="~assets/wordmark/turtlecoin_wordmark_color.png"
            alt="TurtleCoin"
          >
        </b-navbar-item>
      </template>

      <template slot="start" />

      <template slot="end">
        <b-navbar-item tag="nuxt-link" to="/features">
          {{ $t('links.features') }}
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/story">
          {{ $t('links.story') }}
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/download">
          {{ $t('links.download') }}
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/support">
          {{ $t('links.support') }}
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-navbar
      type="is-light"
      has-shadow
      wrapper-class="container"
    >
      <template slot="start">
        <b-navbar-item
          href="https://blog.turtlecoin.lol/archives/this-week-in-turtlecoin-september-17-2019/"
        >
          <b-tag
            type="is-warning"
          >
            This Week In TurtleCoin (September 17, 2019)
          </b-tag>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="#Item">
          Sub Item
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-navbar
      type="is-dark"
      fixed-bottom
      has-shadow
      wrapper-class="container"
    >
      <template slot="start">
        <b-navbar-dropdown
          :label="$t('resources.title')"
          hoverable
          class="has-dropdown-up"
        >
          <b-navbar-item
            v-for="(resource, key) of resources"
            :key="key"
            :href="resource.link"
          >
            {{ resource.title }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-dropdown
          :value="this.$i18n.locale"
          :label="$t('language')"
          hoverable
          class="has-dropdown-up"
        >
          <b-navbar-item
            v-for="locale of locales"
            :key="locale.code"
            tag="nuxt-link"
            :to="switchLocalePath(locale.code)"
            :value="locale.code"
          >
            {{ locale.name }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resources: [
        {
          title: this.$i18n.t('resources.blog'),
          link: 'https://blog.turtlecoin.lol'
        },
        {
          title: this.$i18n.t('resources.explorer'),
          link: 'https://explorer.turtlecoin.lol'
        },

        {
          title: this.$i18n.t('resources.docs'),
          link: 'https://docs.turtlecoin.lol'
        },
        {
          title: this.$i18n.t('resources.dev'),
          link: 'https://docs.turtlecoin.lol/developer/resources'
        }
      ]
    }
  },
  computed: {
    locales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
