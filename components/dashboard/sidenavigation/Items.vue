<template>
  <ul>
    <sidenav-item title="Dashboard" to="/">
      <font-awesome-icon icon="chart-simple" />
    </sidenav-item>
    <sidenav-item title="Alunos" to="/alunos">
      <font-awesome-icon icon="users" />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

export default {
  name: 'SidenavItems',
  components: { SidenavItem },
};
</script>
