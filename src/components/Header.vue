<template >
    <div>header:{{useSort.count}}</div>
    <div style="width: 500px;">
        <el-input v-model="input" placeholder="Please input" />
    </div>
    <el-button type="primary" @click="setData(input)" >提交</el-button>
    <div>{{ddd}}</div>
</template> 
<script setup>
    import {useCounterStore} from "@/sort/sort" 
    import {ref,reactive,watch} from "vue"
    const useSort=useCounterStore()

    const props=defineProps({
        ddd:{
            type:String,
            default:1
        }
    })

    const countIncrement=ref(useSort.increment) 
    const countDecrement=ref(useSort.decrement) 
    const setData=useSort.setData
    const setInput=useSort.setInput
    const input=ref(useSort.input)
    watch(input,()=>{
        console.log(input);
        setInput(input.value)
    })

</script>
<style lang="scss">
    
</style>