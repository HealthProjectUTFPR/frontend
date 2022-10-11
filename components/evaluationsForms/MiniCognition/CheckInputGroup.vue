<template>
    <div class="px-5 mb-2">
        <span>
            <span class="justify-center">{{text}}</span>
            <div class="px-5">
                <el-checkbox v-model="checkedGroups[checked]">Conseguiu</el-checkbox>
            </div>
        </span>
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