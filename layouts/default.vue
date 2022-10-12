<template>
  <dashboard-provider>
    <dashboard-layout>
      <Nuxt />
    </dashboard-layout>
  </dashboard-provider>
</template>

<script>
import DashboardLayout from '@/components/dashboard/Layout.vue';
import DashboardProvider from '@/components/dashboard/provider/Provider.vue';

export default {
  name: 'DefaultLayout',
  components: { DashboardProvider, DashboardLayout },
  middleware: ['auth'],
};
</script>
