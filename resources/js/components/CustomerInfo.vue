<template>
<div class="container">

    <v-card flat style="background-color: #fff6eb">

        <!-- <router-link to="/booking"> -->
        <br>
        <button style="color:black;" @click="goToBooking">
            &nbsp;&nbsp;&nbsp;<v-icon>mdi-arrow-left</v-icon>Back
        </button>
        <br />
        <!-- </router-link> -->

        <br />
        <v-card width="1000px" style="background-color: #fff6eb;" class="mx-auto" flat>
            <h1 class="text">Fill out your details</h1>
            <v-divider color="green" />
            <p class="descriptionText">Tell us about yourself</p>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                    <v-text-field v-model="bookingObject.Name" label="Name" outlined dense :rules="requiredRule" hide-details />
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                    <v-text-field v-model="bookingObject.Email" label="Email" outlined dense :rules="requiredRule" hide-details />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                    <v-text-field v-model="bookingObject.ContactNumber" label="Phone Number" type="number" pattern="[0-9]*" outlined dense :rules="maxlength" hide-details />
                </v-col>

                <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                    <v-text-field v-model="bookingObject.NumPerson" label="Number of person" type="number" pattern="[0-9]*" outlined dense :rules="requiredRule" hide-details />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12" xl="12" xs="12">
                    <v-textarea auto-grow row-height="15" v-model="bookingObject.Message" label="Message" outlined dense hide-details />
                </v-col>
            </v-row>
            <v-row justify="center">
                <div class="my-container">
                    <v-btn class="ma-2" outlined id="ConfirmBtn" dark @click="submitBooking">Confirm</v-btn>
                </div>

            </v-row>
        </v-card>
    </v-card>
</div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            bookingObject: {},
            Name: "",
            Email: "",
            ContactNumber: "",
            Message: "",
            NumPerson: "",
            requiredRule: [v => !!v || 'This field is required'],
            maxlength: [value => (value && value.length <= 11) || 'Maximum 11 characters allowed'],

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

                    errorWeb: {
                        position: "bottomLeft",
                        timeout: 3000
                    },

                    errorPhone: {
                        position: "topCenter",
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

    methods: {
        goToBooking() {
            let data = this.$store.state.selectedDateAndTime
            data.Date = ''
            data.Time = ''
            this.$store.commit('saveDateAndTime', data)
            this.$router.push('/booking')
        },

        submitBooking() {
            if (this.bookingObject.Name && this.bookingObject.Email && this.bookingObject.ContactNumber && this.bookingObject.NumPerson && this.bookingObject.Message) {
                this.bookingObject.ServiceID = this.$store.state.ServiceID
                this.bookingObject.SelectedDate = moment(this.$store.state.selectedDateAndTime.Date).format("yyyy-MM-DD")
                this.bookingObject.SelectedTime = this.$store.state.selectedDateAndTime.Time
                axios.post('api/booking', {
                        Function: 'ADDBOOKING',
                        data: this.bookingObject
                    })
                    .then(() => {
                        if($vuetify.breakpoint.width > 900){
                            this.$toast.success('SUCCESS', 'Wait for our approval!', this.notificationSystem.options.successWeb)
                        }else{
                            this.$toast.success('SUCCESS', 'Wait for our approval!', this.notificationSystem.options.successPhone)
                        }
                        let data = this.$store.state.selectedDateAndTime
                        data.Date = ''
                        data.Time = ''
                        this.$store.commit('saveDateAndTime', data)
                        this.$store.commit('saveServiceID', '')
                        this.$router.push('/')
                    })
            }else{
                if(this.$vuetify.breakpoint.width > 900){
                    this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorWeb)
                }else{
                    this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorPhone)
                }
            }
        },
    },
    watch: {
        inputValue(newVal) {
            if (newVal.length > 11) {
                this.inputValue = newVal.slice(0, 11); // Truncate input to 11 characters
            }
        }
    },
}
</script>

<style lang="css" scoped>
/* .container {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
} */

.container {
    width: 100%;
    height: 100vh;
}

@media (max-width: 600px) {
    .container {
        background-position: top center;
    }
}

#ConfirmBtn {
    background-color: #415941;
}

@media only screen and (max-width: 600px) {
    .text {
        font-size: 25px;
        color: #324532;
    }

    .descriptionText {
        font-size: 13px;
        color: #324532;
    }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
    .text {
        font-size: 29px;
        color: #324532;
    }

    .descriptionText {
        font-size: 17px;
        color: #324532;
    }
}

@media only screen and (min-width: 1025px) {
    .text {
        font-size: 35px;
        color: #324532;
    }

    .descriptionText {
        font-size: 23px;
        color: #324532;
    }
}
</style>
