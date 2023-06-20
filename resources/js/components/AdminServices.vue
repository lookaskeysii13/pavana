<template>
<v-container fluid>
    <v-card class="pa-3" style="background-color: #fbf3ec;" flat>
        <v-toolbar elevation="5" style="background-color: #f6e6d2;">
            <!-- <h3>SERVICES</h3> -->
            <br>
            <button style="color:black;" @click="goToAdmin()">
                <v-icon>mdi-arrow-left</v-icon>Backs
            </button>
            <br><br>

            <v-spacer />
            <v-btn icon @click="AddEditServiceDialog = !AddEditServiceDialog,AddEditText = 'ADD SERVICE'">
                <v-icon style="color: #45933a;" large>mdi-plus-circle</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card elevation="5">
            <v-simple-table id="TableDesign" style="background-color: #f6e6d2;">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in servicesArray" :key="index">
                        <td class="responsive-cell">{{ item.ServiceName }}</td>
                        <td class="responsive-cell">{{ item.ServicePrice }}</td>
                        <td class="responsive-cell">{{ item.ServiceDescription }}</td>
                        <td class="responsive-cell">
                            <img class="responsive-img" :src="getImageUrl(item.ImageName)" alt="Picture" />
                        </td>
                        <td>
                            <v-btn color="#45933a" @click="editData(item)">
                                <v-icon color="white">mdi-pencil</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
    </v-card>

    <v-dialog v-model="AddEditServiceDialog" persistent width="500px">
        <v-card height="500px">
            <v-toolbar style="background-color: #f6e6d2;">
                {{ AddEditText }}
                <v-spacer />
                <v-btn color="#45933a" icon @click="closeDialog()">
                    <v-icon large>mdi-close-circle</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card flat class="pa-2" style="background-color: #f6e6d2;">
                <v-text-field v-model="serviceObject.ServiceName" label="SERVICE NAME" outlined />
                <v-text-field v-model="serviceObject.ServicePrice" label="PRICE" outlined />
                <v-textarea v-model="serviceObject.ServiceDescription" label="DESCRIPTION" outlined auto-grow row-height="15" />
                <v-text-field v-model="serviceObject.Duration" label="DURATION" outlined />

                <v-card flat style="background-color: #f6e6d2;">
                    <v-row no-gutters>
                        <v-col>
                            <h3>SELECT COVER IMAGE:</h3>
                            <br>
                            <v-btn color="#45933a" dark @click="getImage()" v-if="!serviceObject.ImageName">SELECT IMAGE</v-btn>
                            <v-btn color="#45933a" dark @click="getImage()" v-else>{{ serviceObject.ImageName }}</v-btn>
                        </v-col>
                        <!-- <v-col>
                            <v-btn @click="getImage()" v-if="!serviceObject.ImageName"><br>SELECT IMAGE<br></v-btn>
                            <v-btn @click="getImage()" v-else>{{ serviceObject.ImageName }}</v-btn>
                        </v-col> -->
                    </v-row>
                    <br>
                </v-card>
                <v-card v-if="serviceObject.ImageName">
                    <img :src="getImageUrl(serviceObject.ImageName)" id="ImageStyle" />
                </v-card>
                <v-btn block color="#45933a" dark @click="addUpdateService()" v-if="AddEditText == 'ADD'">ADD</v-btn>
                <v-btn block color="#45933a" dark @click="addUpdateService()" v-else>SAVE</v-btn>
            </v-card>
        </v-card>
    </v-dialog>

    <v-dialog v-model="SelectImageDialog" persistent width="500px">
        <v-card>
            <v-toolbar flat>
                <v-spacer />
                <v-btn icon @click="SelectImageDialog = !SelectImageDialog">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-row no-gutters>
                <v-col v-for="(item,index) in imagesArray" :key="index" class="d-flex child-flex ma-3" cols="3">
                    <img :src="getImageUrl(item.filename)" @click="SelectedImage(item)" alt="" id="ImageStyle" />
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            servicesArray: [],
            imagesArray: [],
            serviceObject: {},
            AddEditServiceDialog: false,
            SelectImageDialog: false,
            EditServiceDialog: false,
            ImageName: '',
            AddEditText: '',

            notificationSystem: {
                options: {
                    successWeb: {
                        position: "bottomLeft",
                        timeout: 3000
                    },

                    successPhone: {
                        position: "topCenter",
                        timeout: 3000
                    },

                    errorPhone: {
                        position: "topCenter",
                        timeout: 3000
                    },

                    errorWeb: {
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
            },
        }
    },

    mounted() {
        this.checkCookieValue();
        this.interval = setInterval(this.checkCookieValue, 60000);
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },

    created() {
        this.getServices()
    },

    methods: {
        checkCookieValue() {
            const myCookie = this.$cookies.get('myCookie');
            if (!myCookie) {
                this.$router.push("/login")
            }
        },

        getServices() {
            axios.get(`api/services?Function=${'GETSERVICES'}`).then((res) => {
                this.servicesArray = res.data
            })
        },

        getImage() {
            axios.get('api/getAllImages').then(response => {
                this.imagesArray = response.data
                this.SelectImageDialog = true
            }).catch(error => {
                console.error(error)
            })
        },

        getImageUrl(image) {
            return `images/${image}`
        },

        SelectedImage(value) {
            this.serviceObject.ImageName = value.filename
            this.SelectImageDialog = false
        },

        addUpdateService() {
            if (this.AddEditText == 'ADD SERVICE') {
                if (this.serviceObject.ImageName && this.serviceObject.ServiceName && this.serviceObject.ServicePrice && this.serviceObject.ServiceDescription && this.serviceObject.Duration) {
                    axios.post('api/services', {
                        Function: 'ADDSERVICE',
                        data: this.serviceObject
                    }).then(() => {
                        this.closeDialog()
                    })
                    if (this.$vuetify.breakpoint.width > 900) {
                        this.$toast.success(' ', 'ADDED SUCCESSFULLY!', this.notificationSystem.options.successWeb)
                    } else {
                        this.$toast.success(' ', 'ADDED SUCCESSFULLY!', this.notificationSystem.options.successPhone)
                    }
                } else {
                    if(this.$vuetify.breakpoint.width > 900){
                        this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorWeb)
                    }else{
                        this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorPhone)
                    }
                }
            } else {
                if (this.serviceObject.ImageName && this.serviceObject.ServiceName && this.serviceObject.ServicePrice && this.serviceObject.ServiceDescription && this.serviceObject.Duration) {
                    axios.put('api/services/update', {
                        Function: 'UPDATESERVICE',
                        data: this.serviceObject
                    }).then(() => {
                        this.closeDialog()
                    })
                    if (this.$vuetify.breakpoint.width > 900) {
                        this.$toast.success(' ', 'DONE!', this.notificationSystem.options.successWeb)
                    } else {
                        this.$toast.success(' ', 'DONE!', this.notificationSystem.options.successPhone)
                    }
                }else{
                    if(this.$vuetify.breakpoint.width > 900){
                        this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorWeb)
                    }else{
                        this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorPhone)
                    }
                }
            }

        },

        editData(item) {
            this.serviceObject = Object.assign({}, item)
            this.AddEditText = 'EDIT SERVICE'
            this.AddEditServiceDialog = true
        },

        closeDialog() {
            this.getServices()
            this.serviceObject = {}
            this.AddEditServiceDialog = false
        },

        goToAdmin() {
            this.$router.push('/admin');
        }
    },
}
</script>

<style scoped>
#TableDesign th {
    text-align: center;
}

#TableDesign {
    text-align: center;
}

#ImageStyle {
    width: 200px;
    height: 100px;
    margin: 3px;
    border: 2px solid black;
}

.responsive-cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 600px) {
    .responsive-cell {
        white-space: normal;
        word-break: break-word;
    }
}

.responsive-img {
    width: 50%;
    height: auto;
    border: 1px solid black;
}

@media (max-width: 600px) {
    .responsive-img {
        width: 100%;
        height: auto;
    }
}
</style>
