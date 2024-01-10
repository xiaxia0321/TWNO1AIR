import { defineStore } from "pinia";
export default defineStore("counter", {
    //data(){}
    state() {
        return {
            datew:"",
        }

    },
    //computed
    getters: {

    },
    //methods
    actions: {
        setDate(){
            var ddd = new Date();
            var day = ddd.getDate();
            if(ddd.getMonth()<10){
            
                var month = "0"+(ddd.getMonth()+1);
            }
            if(ddd.getDate()<10){
                day = "0" + ddd.getDate();
            }
            
            this.datew = ddd.getFullYear()+"-"+ month+"-"+day;
            this.vva = this.datew.toString();
            $("#bt").val(this.vva);
            
        }
    }
}
)
