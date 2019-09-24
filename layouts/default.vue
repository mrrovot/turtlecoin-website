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
        <b-navbar-item href="#Features">
          Features
        </b-navbar-item>
        <b-navbar-item href="#Story">
          Story
        </b-navbar-item>
        <b-navbar-item href="#Download">
          Download
        </b-navbar-item>
        <b-navbar-item href="#Support">
          Support
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
            type="is-info"
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
          label="Resources"
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
          label="EN"
          hoverable
          class="has-dropdown-up"
        >
          <b-navbar-item>EN</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <section
      class="main-content container"
    >
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      languages: [],
      resources: [
        {
          title: 'Explorer',
          link: 'https://explorer.turtlecoin.lol',
          icon: 'home'
        },
        {
          title: 'Documentation',
          link: 'https://docs.turtlecoin.lol',
          icon: 'home'
        },
        {
          title: 'Developer Blog',
          link: 'https://blog.turtlecoin.lol',
          icon: 'home'
        },
        {
          title: 'Developer Resources',
          link: 'https://docs.turtlecoin.lol/developer/resources',
          icon: 'home'
        }
      ]
    }
  }
}
</script>
