<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card width="500px" height="500px" class="pa-3" style="border:1px solid black;">
                <v-card-title>FAQs</v-card-title>
                <v-expansion-panels accordion>
                    <v-expansion-panel v-for="(item,index) in faqArray" :key="index" style="border:1px solid black;">
                        <v-expansion-panel-header>
                            <b>{{ item.Question }}</b>
                            
                            <template v-slot:actions>
                                <v-icon>mdi-plus</v-icon>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>{{ item.Answer }}</v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                faqArray: [],
            }
        },

        created() {
            this.getFaqs()
        },

        methods: {
            getFaqs(){
                axios.get(`api/faq?Function=${'GETFAQ'}`).then((res) => { this.faqArray = res.data })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>