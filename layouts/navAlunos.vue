<template>
    <dashboard-provider>
      <dashboard-layout>
        <Nuxt />
      </dashboard-layout>
    </dashboard-provider>
  </template>
  
  <script>
  import DashboardLayout from '@/components/dashboardAluno/Layout.vue';
  import DashboardProvider from '@/components/dashboardAluno/provider/Provider.vue';
  
  export default {
    name: 'DefaultLayout',
    components: { DashboardProvider, DashboardLayout },
    middleware: ['auth'],
  };
  </script>
  