<template>
  <ul>
    <sidenav-item title="Dashboard" to="/">
      <font-awesome-icon icon="chart-simple" />
    </sidenav-item>
    <sidenav-item title="Histórico de monitoramento" to="/prepos">
      <font-awesome-icon icon="list-ul" />
    </sidenav-item>
    <sidenav-item title="grafico de monitoramento" to="/prepos/monitoringPrePos">
      <font-awesome-icon icon="list-ul" />
    </sidenav-item>
    <sidenav-item title="grafico de test" to="/prepos/test">
      <font-awesome-icon icon="list-ul" />
    </sidenav-item>
    <sidenav-item title="Categoria" to="/category">
      <font-awesome-icon icon="list-ul" />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

/* ICONS */

export default {
  name: 'SidenavItems',
  components: {
    SidenavItem,
  },
};
</script>
