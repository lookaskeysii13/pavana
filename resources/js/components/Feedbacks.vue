<template>
    <v-container>
        <v-card flat align="center" style="background-color:#fbf3ec;">
            <v-card class="ma-5" width="500px" v-for="(item,index) in feedbackArray" :key="index">
                <v-card-text align="left">
                   <i>" {{ item.Message }} "</i>
                </v-card-text>
                <v-card-text align="right"><b><i>{{ item.Name }}</i></b></v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                feedbackArray: [],
            }
        },

        created() {
            this.getMessage()
        },

        methods: {
            getMessage(){
                axios.get(`api/message?Function=${'GETFILTEREDMESSAGE'}`).then((res) => {
                    this.feedbackArray = res.data
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>