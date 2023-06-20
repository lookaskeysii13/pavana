<template>
    <div>
        <v-layout align-center justify-center>
            <v-card width="100%">
                <v-tabs v-model="tab" fixed-tabs show-arrows="">
                    <v-tabs-slider/>
                    <v-tab v-for="item in tabItems" :key="item">{{ item }}</v-tab>
                </v-tabs>
                <v-divider/>
                <v-tabs-items v-model="tab" touchless>
                    <!-- PASSWORD SETTING -->
                    <v-tab-item>
                        <v-card>
                            <v-container>
                                <v-layout wrap>
                                    <v-flex sm12 md6 offset-md3>
                                        <v-card elevation="4" light>
                                            <v-card-title>
                                                <v-layout align-center justify-space-between v-if="$vuetify.breakpoint.width > 1200">
                                                    <h4>
                                                        <v-icon large color="black" class="mr-3">mdi-shield-key-outline</v-icon>
                                                        Change Username and Password
                                                    </h4>
                                                </v-layout>
                                                <v-layout align-center justify-center v-else>
                                                    <center>
                                                        <v-icon large color="black" class="mr-3">mdi-shield-key-outline</v-icon>
                                                        <h4>Change Username <br> and Password</h4>
                                                    </center>
                                                </v-layout>
                                            </v-card-title>
                                            <v-divider/>
                                            <v-card class="pa-3">
                                                <v-text-field
                                                    :disabled="!trigger"
                                                    outlined
                                                    label="Username"
                                                    type="text"
                                                    v-model="accountObject.Username"
                                                />
                                                <v-text-field
                                                    :disabled="!trigger"
                                                    outlined
                                                    label="Password"
                                                    type="text"
                                                    v-model="accountObject.Password"
                                                />
                                                <v-btn
                                                    width="30%"
                                                    :color="trigger ? 'success' : 'primary' "
                                                    @click="executeFunction()"
                                                >{{ buttonText }}</v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-tab-item>
                    <!-- FAQ SETTING -->
                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <v-toolbar flat>
                                    <v-spacer/>
                                    <v-btn @click="openDialog(null,'ADD')">ADD FAQ <v-icon>mdi-plus-circle</v-icon></v-btn>
                                </v-toolbar>
                            </v-card-text>
                            <v-simple-table class="mb-2" style="border:1px solid black;">
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in faqArray" :key="index" v-on:dblclick="openDialog(item,'EDIT')">
                                        <td :width="$vuetify.breakpoint.width > 360 ? '300px' : '50%'">{{ item.Question }}</td>
                                        <td :width="$vuetify.breakpoint.width > 360 ? '500px' : '50%'">{{ item.Answer }}</td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-layout>

        <v-dialog v-model="AddEditFaqDialog" width="400px" persistent>
            <v-card>
                <v-toolbar flat>
                    {{ AddEditText }}
                    <V-spacer/>
                    <v-btn icon @click="closeDialog()">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider/>
                <v-card class="pa-2" flat>
                    <v-text-field
                        outlined
                        dense
                        label="Question"
                        v-model="faqObject.Question"
                    />
                    <v-textarea
                        auto-grow
                        outlined
                        dense
                        row-height="15"
                        label="Answer"
                        v-model="faqObject.Answer"
                    />
                    <v-btn class="mb-1" @click="save()" block color="success">{{ AddEditText }}</v-btn>
                    <v-btn class="mt-1" @click="deleteFaq()" block color="error">DELETE</v-btn>
                </v-card>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabItems: [
                    'PASSWORD SETTING',
                    'FAQ'
                ],

                tab: null,
                accountArray: [],
                faqArray: [],
                accountObject: {},
                faqObject: {},
                trigger: false,
                buttonText: 'CHANGE',

                AddEditFaqDialog: false,
                AddEditText: '',
            }
        },

        created() {
            this.getFaq()
            this.getAccount()
        },

        methods: {
            getFaq(){
                axios.get(`api/faq?Function=${'GETFAQ'}`).then((res) => { this.faqArray = res.data })
            },

            getAccount(){
                let ID = this.$cookies.get('myCookie');
                axios.get(`api/login?Function=${'GETACCOUNT'}&&ID=${ID}`).then((res) => { 
                    this.accountArray = res.data 
                    this.accountObject = Object.assign({}, this.accountArray[0])
                })
            },

            executeFunction(){
                if(this.trigger){
                    axios.put('api/login/update',{
                        Function: 'UPDATEUSER',
                        data: this.accountObject
                    }).then(() => {
                        const ID = JSON.stringify(this.accountObject.ID)
                        const expirationTime = 43200
                        this.$cookies.set('myCookie', ID, expirationTime)
                        this.buttonText = "CHANGE"
                        this.trigger = false
                        this.getAccount()
                    })
                }else{
                    this.buttonText = "SAVE"
                    this.trigger = true
                }
            },

            save(){
                if(this.AddEditText == 'ADD FAQ'){
                    axios.post('api/faq',{
                        Function: 'ADDFAQ',
                        data: this.faqObject
                    }).then(() => {
                        this.getFaq()
                        this.closeDialog()
                    })
                }else{
                    axios.put('api/faq/update',{
                        Function: 'UPDATEFAQ',
                        data: this.faqObject
                    }).then(() => {
                        this.getFaq()
                        this.closeDialog()
                    })
                }
            },

            deleteFaq(){
                axios.put('api/faq/update',{
                    Function: 'DELETEFAQ',
                    data: this.faqObject
                }).then(() => {
                    this.getFaq()
                    this.closeDialog()
                })
            },

            openDialog(item,value){
                if(value == 'ADD'){
                    this.AddEditText = 'ADD FAQ'
                    this.AddEditFaqDialog = true
                }else{
                    this.AddEditText = 'SAVE'
                    this.faqObject = Object.assign({},item)
                    this.AddEditFaqDialog = true
                }
            },

            closeDialog(){
                this.faqObject = {}
                this.AddEditText = ''
                this.AddEditFaqDialog = false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>