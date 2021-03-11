Vue.createApp({
    data() {
        return {
            word: null,
            result: null,
            resultUpper: null,
            resultLower: null
        }
    },
    methods: {
        show() 
        {
            this.result = this.word
            this.resultUpper = this.word.toUpperCase()
            this.resultLower = this.word.toLowerCase()
        }
        
    }
}).mount("#app")