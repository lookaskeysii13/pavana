<template>
    <div>
        <v-card height="600px">
            <v-tabs>
                <v-tab v-for="(item,index) in textArray" :key="index" class="mx-auto">
                    {{ item.TextType }} TEXT
                </v-tab>
                <v-tab-item v-for="(item,index) in textArray" :key="index">
                    <v-card class="ma-4 pa-4" height="400px" flat style="border: 1px solid black;">
                        <p v-html="formatText(item.TextContent)"/>
                        <v-btn @click="openEditTextDialog(item)" color="primary">EDIT TEXT</v-btn>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>

        <v-dialog v-model="EditTextDialog" persistent>
            <v-card flat class="pa-3">
                <v-toolbar flat>
                    <v-card-title>EDIT TEXT</v-card-title>
                    <v-spacer/>
                    <v-btn icon @click="EditTextDialog = !EditTextDialog,textObject = {}"><v-icon>mdi-close</v-icon></v-btn>
                </v-toolbar>
                <v-textarea
                    dense
                    outlined
                    auto-grow
                    counter
                    v-model="textObject.TextContent"
                    maxlength="500"
                />
                <v-btn @click="saveText" color="success" block>SAVE</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textArray: [],
                textObject: {},
                EditTextDialog: false,

                notificationSystem:{
                    options:{
                        success: {
                            position: "bottomLeft",
                            timeout: 3000
                        },

                        error: {
                            position: "bottomLeft",
                            timeout: 3000
                        },

                        warning: {
                            position: "bottomLeft",
                            timeout: 3000
                        },

                        info: {
                            position: "bottomLeft",
                            timeout: 3000
                        },

                        infoBeforePrinting: {
                            position: "bottomLeft",
                            timeout: 5000
                        },
                },
            }
            }
        },

        created() {
            this.getText()
        },

        methods: {
            getText(){
                this.textArray = []
                axios.get(`api/master?Function=${'GETTEXT'}`).then((res) => {
                    res.data.filter((rec) => {
                        if(rec.TextTypeID == '00003' ||rec.TextTypeID == '00004' || rec.TextTypeID == '00005'){
                            this.textArray.push(rec)
                        }
                    })
                })
            },

            saveText(){
                if(this.textObject.TextContent){
                    axios.put('api/master/update',{
                        Function: 'UPDATETEXT',
                        data: this.textObject
                    }).then(() => {
                        this.getText()
                    })
                }else{
                    this.$toast.error('Please input text!','Error',this.notificationSystem.options.error)
                }
            },

            formatText(text) {
                return text.replace(/\n/g, '<br>')
            },

            openEditTextDialog(data){
                this.textObject = Object.assign({}, data)
                this.EditTextDialog = true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>