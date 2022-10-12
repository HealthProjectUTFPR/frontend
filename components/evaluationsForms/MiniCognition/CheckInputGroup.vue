<template>
    <div class="px-4 mb-4">
        <span class="justify-center">{{text}}</span>
        <div class="px-2">
            <el-checkbox v-model="checkedGroups[checked]">Conseguiu</el-checkbox>
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