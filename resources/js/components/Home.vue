<template>
<v-container fluid class="mainContainer">
    <v-card class="transparent-card">

        <br><br>

        <div class="cover-photo" v-if="coverImage">
            <picture>

                <source media="(max-width: 768px)" :srcset="checkImage()">
                <source media="(min-width: 769px)" :srcset="checkImage()">
                <img :src="checkImage()" alt="Cover Photo">

            </picture>

            <center>
                <v-btn color="#415941" class="servicesBtn" x-large width="200px" height="70px" dark @click="goToServices()">
                    VIEW SERVICES
                </v-btn>
            </center>

        </div>

        <v-card id="AboutContainer" class="mb-3" fluid flat>

            <v-card v-if="$vuetify.breakpoint.width > 900" flat>
                <v-row class="image-row" no-gutters>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column">
                        <div>
                            <h1 class="text">About</h1>
                            <p class="text-content" v-html="formatText(AboutText)"></p>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column mr-3">
                        <div class="image-container">
                            <v-img v-if="aboutImage" tile contain :src="getImageUrl(aboutImage)" class="fixed-image"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-card>

            <v-card v-else flat>
                <v-row class="image-row" no-gutters>
                    <v-col class="column">
                        <div>
                            <h1 class="text">About</h1>
                            <br>
                            <p class="text-content" v-html="formatText(AboutText)"></p>
                        </div>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col class="column">
                        <div class="image-container">
                            <v-img v-if="aboutImage" tile contain :src="getImageUrl(aboutImage)" class="fixed-image"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-card>

        </v-card>

        <v-container id="ServicesContainer" fluid>
            <center>
                <h1 class="text">Services</h1>
            </center>

            <v-carousel cycle>
                <v-carousel-item v-for="(item,index) in servicesArray" :key="index">
                    <v-card class="carousel-image-container" flat>
                        <img :src="getImageUrl(item.ImageName)" alt="Carousel Item" contain height="auto" width="100%" />
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-container>

        <v-card flat style="background-color:#fff6eb;">
            <center>
                <h1 class="text">Feedbacks</h1>
            </center>
            <br>
            <v-row no-gutters style="text-align: justified;">
                <v-col v-for="(items,index) in messageArray" :key="index" cols="12" sm="12" md="6" lg="4" xl="6" xs="12">
                    <p>{{ items.Message }}</p>
                    <p>- {{ items.Name }}</p>
                </v-col>
            </v-row>
        </v-card>

        <v-container id="ContactContainer" fluid>
            <v-card flat class="ContactvCard">
                <center>
                    <br>
                    <h1 class="text">CONTACT US TODAY</h1>
                    <br>
                </center>
            </v-card>

            <v-card flat class="ContactvCard">

                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12">
                        <v-text-field v-model="messageObject.Firstname" label="Given Name" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12">
                        <v-text-field v-model="messageObject.Lastname" label="Last Name" hide-details></v-text-field>
                    </v-col>

                </v-row>

                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12">
                        <v-text-field v-model="messageObject.Email" label="Email" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12">
                        <v-text-field v-model="messageObject.ContactNumber" label="Contact Number" hide-details></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12" xl="12" xs="12">
                        <v-textarea v-model="messageObject.Message" label="Questions or Comment" auto-grow row-height="24"></v-textarea>
                        <center>
                            <v-btn color="#415941" x-large width="300px" height="100px" dark @click="submitMessage">
                                SUBMIT
                            </v-btn>
                        </center>
                    </v-col>
                </v-row>

                <v-row>

                    <v-col cols="12" sm="12" md="12" lg="12" xl="12" xs="12">
                        <center>

                            <h1 class="text">Business Hours:</h1>
                            <p>Monday-Sunday: 8:00am - 2:00am</p>
                            <h1 class="text">Pavana Massage and Spa</h1>
                            <p>Cellphone No: {{ PhoneNumber }}<br>
                                Landline No: {{ TelephoneNumber }}<br>
                                Email: {{ Email }}</p>
                        </center>

                    </v-col>
                    <!-- <v-col cols="12" sm="12" md="6" lg="6" xl="12" xs="12">

                    </v-col> -->

                    <!-- <v-card fluid>
                                <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1684680365676!5m2!1sen!2sph!6m8!1m7!1s4nUA2yWut8xac5iuFujrtA!2m2!1d14.57354118383845!2d120.9850434119445!3f231.54446840182646!4f-3.047945205479465!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </v-card> -->
                </v-row>

            </v-card>
        </v-container>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {

            WelcomeText: '',
            SubWelcomeText: '',
            coverImage: '',
            aboutImage: '',
            AboutText: '',
            PhoneNumber: '',
            TelephoneNumber: '',
            Email: '',
            Address: '',

            messageObject: {},

            imagesArray: [],
            messageArray: [],
            servicesArray: [],

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
    methods: {
        goToServices() {
            this.$router.push('/services')
        },

        getText() {
            axios.get(`api/master?Function=${'GETTEXT'}`).then((res) => {
                res.data.filter((rec) => {
                    if (rec.TextTypeID == '00003') {
                        this.AboutText = rec.TextContent
                    }
                })
            })
        },

        getImages() {
            axios.get('api/getImages').then(response => {
                response.data.filter((rec) => {
                    if (rec.ImageLocID == 1) {
                        this.coverImage = rec.ImageName
                    } else if (rec.ImageLocID == 2) {
                        this.aboutImage = rec.ImageName
                    }

                })
            }).catch(error => {
                console.error(error)
            })
        },
        formatText(text) {
            return text.replace(/\n/g, '<br>')
        },
        getImageUrl(image) {
            return `images/${image}`
        },
        // getMessage() {
        //     axios.get(`api/message?Function=${'GETMESSAGE'}`).then((res) => {
        //         this.messageArray = res.data
        //     })
        // },

        getContact() {
            axios.get(`api/master?Function=${'GETCONTACT'}`).then((res) => {
                res.data.filter((rec) => {
                    if (rec.ContactTypeID == '00001') {
                        this.PhoneNumber = rec.ContactDetail
                    } else if (rec.ContactTypeID == '00002') {
                        this.TelephoneNumber = rec.ContactDetail
                    } else if (rec.ContactTypeID == '00003') {
                        this.Email = rec.ContactDetail
                    } else if (rec.ContactTypeID == '00004') {
                        this.Address = rec.ContactDetail
                    }
                })
            })
        },

        getServices() {
            axios.get(`api/services?Function=${'GETSERVICES'}`).then((res) => {
                this.servicesArray = res.data
            })
        },

        checkImage() {
            return require(`/images/${this.coverImage}`)
        },

        submitMessage() {

            if (this.messageObject.Firstname && this.messageObject.Lastname && this.messageObject.Email && this.messageObject.ContactNumber) {
                axios.post('api/message', {
                    Function: 'SENDMESSAGE',
                    data: this.messageObject
                }).then(() => {
                    this.messageObject = {}
                    if($vuetify.breakpoint.width > 900){
                        this.$toast.success(' ', 'MESSAGE SENT!', this.notificationSystem.options.successWeb)
                    }else{
                        this.$toast.success(' ', 'MESSAGE SENT!', this.notificationSystem.options.successPhone)
                    }
                })
            } else {
                if(this.$vuetify.breakpoint.width > 900){
                    this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorWeb)
                }else{
                    this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorPhone)
                }
            }

        },

    },

    mounted() {

        this.getImages();
        this.getServices();
        // this.getMessage();
        this.getContact();
        this.getText();

        this.Servicesinterval = setInterval(this.getServices, 600000)
        // this.MessageInterval = setInterval(this.getMessage, 600000)
        this.Contactinterval = setInterval(this.getContact, 60000)
        this.Imagesinterval = setInterval(this.getImages, 60000)
        this.Textinterval = setInterval(this.getText, 60000)
    }

}
</script>

<style scoped>
.mainContainer {
    /* background-color: #e5fbf1; */
    height: 100%;
    padding: 0;
}

.transparent-card {
    background-color: transparent !important;
    height: 100%;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
}

.image-row {
    display: flex;
    flex-wrap: wrap;
}

.column {
    flex: 1;
    display: flex;
    justify-content: center;
}

.image-container {
    width: 100%;
    /* Set the desired width */
    height: 0;
    padding-bottom: 75%;
    /* Set the desired aspect ratio (e.g., 4:3) */
    position: relative;
    overflow: hidden;
    /* Ensure the image doesn't exceed the container size */
}

.fixed-image {
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* Fill the entire container horizontally */
    height: 100%;
    /* Fill the entire container vertically */
    object-fit: cover;
    /* Maintain aspect ratio and cover the container */
}

.text-content {
    padding: 1rem;
}

.text-content p {
    font-size: 16px;
    line-height: 1.5;
}

@media (max-width: 600px) {
    .text-content p {
        font-size: 14px;
    }
}

@media (min-width: 601px) and (max-width: 960px) {

    /* Adjust font size for resizing Chrome browser */
    .text-content {
        font-size: 18px;
    }
}

.cover-photo {
    max-width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
}

.cover-photo .servicesBtn {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
}

@media (max-width: 1200px) {
    .cover-photo .servicesBtn {
        font-size: 12px;
        padding: 10px 20px;
        top: 80%;
    }
}

.cover-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#Aboutcontainer {
    /* border: 1px solid black; */
    background-color: #ced6ce;
}

#ServicesContainer {
    background-color: #f8e4d4;
}

.carousel-image-container {
    height: 100%;
    /* or adjust the desired height */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#ContactContainer {
    background-color: #f8e4d4;
}

.ContactvCard {
    background-color: #fff4ec;
    padding: 2%;
    /* border: 1px solid black; */
}

.overlay-button {
    position: absolute;
    bottom: 10px;
    text-align: center;
}

@media(max-width: 768px) {
    .overlay-button {
        bottom: 50px;
        left: 20px;
    }
}

/* For all */

.text {

    font-weight: 400;
    margin-left: 20px;

}

p {
    margin-left: 20px;
    margin-right: 20px;
}

/* .my-container {

        display: flex;
        justify-content: center; */
/* Center items horizontally */
/* align-items: center; */
/* Center items vertically */
/* height: 10vh;
        font-family: Copperplate, Papyrus, fantasy;

    } */
</style>
