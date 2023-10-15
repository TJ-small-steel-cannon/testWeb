import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const input = ref("");
  function increment() {
    this.count++;
    console.log("++");
  }
  function decrement() {
    this.count--;
  }
  function setData(value) {
    this.count = value;
  }
  function setInput(value){
    this.input=value
  }
  return {count,input,increment,decrement,setData,setInput}
},{
  persist:{
    enabled:true,
    strategies:[
      {
        key:"counter",
        paths:["input"], //存储部分变量
        storage:localStorage
      }
    ]
  }
});

