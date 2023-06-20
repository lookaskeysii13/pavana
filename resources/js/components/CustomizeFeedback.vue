<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="messageArray"
            height="50vh"
            fixed-header
        >

        <template v-slot:[`item.action`]="{item}">
            <v-btn 
                outlined 
                small 
                @click="updateMessageStatus(item)"
                :color="item.Status == '1' ? 'error' : 'success'"
            >
                {{ buttonText(item) }}
            </v-btn>
        </template>

        </v-data-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {text:'Message',value:'Message'},
                    {text:'Name',value:'Name'},
                    {text:'Email',value:'EmailAddress'},
                    {text:'Contact Number',value:'ContactNumber'},
                    {text:' ',value:'action'}
                ],

                messageArray: [],
                buttonColor: '',
            }
        },

        created() {
            this.getMessage()
        },

        methods: {
            getMessage() {
                axios.get(`api/message?Function=${'GETMESSAGE'}`).then((res) => {
                    this.messageArray = res.data
                })
            },

            updateMessageStatus(value){
                axios.put('api/message/update',{
                    Function: 'UPDATEMESSAGESTATUS',
                    data: value
                }).then(() => {
                    this.getMessage()
                })
            },

            buttonText(value){
                if(value.Status == '1'){
                    return 'HIDE MESSAGE IN PUBLIC'
                }else{
                    return 'SHOW MESSAGE IN PUBLIC'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>