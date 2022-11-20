<template>
    <div class="fixed flex items-center h-20 w-full bottom-0 left-0 bg-gray-700">
        <el-col
            v-for="option in menu"
            :key="option.label"
            :span="6"
        >
            <el-row class="text-center">
                <font-awesome-icon
                    :icon=option.icon
                    class="text-xl"
                    :class="[ option.active ? 'text-gray-300' : 'text-gray-500' ]"
                />
            </el-row>
            <el-row class="flex justify-center">
                <span
                    class="text-sm text-center"
                    :class="[ option.active ? 'text-gray-300' : 'text-gray-500' ]"
                >
                    {{ option.label }}
                </span>
            </el-row>
        </el-col>
    </div>
</template>
<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                menu: [
                    {
                        icon: ['fas', 'user-group'],
                        label: 'Meus alunos',
                        active: true,
                    },
                    {
                        icon: ['fas', 'calendar-days'],
                        label: 'Meus calendário',
                        active: false,
                    },
                    {
                        icon: ['fas', 'user'],
                        label: 'Meus dados',
                        active: false,
                    },
                    {
                        icon: ['fas', 'headset'],
                        label: 'Suporte',
                        active: false,
                    },
                ]
            }
        }
    }
</script>