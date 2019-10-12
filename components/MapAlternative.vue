<template>
  <div>
    <d3-network :net-nodes="nodes" :net-links="[]" :options="options" />
  </div>
</template>

<script>
import D3Network from 'vue-d3-network'

export default {
  components: {
    D3Network
  },
  data () {
    return {
      force: 100,
      fX: 1,
      fY: 1,
      fMb: true,
      fC: false,
      nNodes: 500
    }
  },
  computed: {
    nodes () {
      return this.makeNodes()
    },
    options () {
      return {
        force: this.force,
        forces: {
          X: this.fX,
          Y: this.fY,
          ManyBody: this.fMb,
          Center: this.fC
        },
        nodeSize: 20,
        nodeLabels: false
      }
    }
  },
  methods: {
    makeNodes () {
      return Array.apply(null, { length: this.nNodes }).map((value, index) => { return { id: index, _color: this.randomColor(), _size: Math.random() * 30 } })
    },
    reset () {
      this.nNodes++
    },
    randomColor () {
      return 'rgb(' + parseInt(Math.random() * 4) + 0 + ',' + parseInt(Math.random() * 10) + 1 + ',' + 30 + ')'
    }
  }
}
</script>
