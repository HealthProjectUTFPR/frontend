<template>
  <ul>
    <sidenav-item title="Dashboard" to="/">
      <font-awesome-icon icon="chart-simple" />
    </sidenav-item>
    <sidenav-item title="Avaliação" to="/avaliacao">
      <font-awesome-icon icon="dna" />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

/* ICONS */

export default {
  name: 'SidenavItems',
  components: { SidenavItem },
};
</script>
