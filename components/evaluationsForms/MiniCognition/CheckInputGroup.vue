<template>
    <div class="px-4 mb-4">
        <span class="justify-center">{{text}}</span>
        <div class="px-2">
            <el-switch
                v-model="checkedGroups[checked]"
                active-text="Conseguiu"
                inactive-text="Não Conseguiu">
            </el-switch>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ChechInputGroup',
    inject: ['checkedGroups'],
    props: {
        checked: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
    },
    method: {
        
    },
};
</script>