<template>
  <ul>
    <sidenav-item title="Histórico de monitoramento" to="/prepos">
      <font-awesome-icon icon="list-ul" />
    </sidenav-item>
    <sidenav-item title="grafico de monitoramento" to="/prepos/monitoringPrePos">
      <font-awesome-icon icon="list-ul" />
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
  components: {
    SidenavItem,
  },
};
</script>
