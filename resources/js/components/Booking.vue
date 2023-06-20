<template>
<div class="container">
    <v-card flat style="background-color: #fff6eb" class="transparent-card">

        <br>
        <button style="color:black;" @click="goToServices">
            &nbsp;&nbsp;&nbsp;<v-icon>mdi-arrow-left</v-icon>Back
        </button>
        <br><br>

        <h1 class="text">Massage Name</h1>
        <span class="descriptionText">Check out our availabilty and book the date that works for you</span>
        <br><br>
        <v-row>

            <v-col class="responsive-card" cols="12" sm="12" md="12" lg="6" xl="5" xs="12">

                <h3 class="descriptionText">Select Date and Time</h3>
                <v-divider color="green" />
                <br>

                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                        <v-date-picker v-model="SelectedDate" @change="getMonthandDay" :min="minDate" class="responsive-date-picker" color="primary" locale="en-us" scrollable no-title no-header>
                        </v-date-picker>
                    </v-col>

                    <v-col cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                        <span class="descriptionText"> {{ MonthandDay }}</span>
                        <div v-if="SelectedDate">
                            <v-divider color="green" />
                        </div>

                        <v-select v-model="SelectedTime" :items="options" label="Select preferred time"></v-select>
                    </v-col>

                </v-row>

            </v-col>

            <v-col class="responsive-card" cols="12" sm="12" md="12" lg="6" xl="5" xs="12">
                <span class="descriptionText">Service Details</span>
                <v-divider color="green" />
                <p>Service Name: {{ serviceObject.ServiceName }}</p>
                <p>Price : {{ this.serviceObject.ServicePrice }}</p>
                <p v-if="MonthandDay && SelectedTime">
                    Schedule : {{ MonthandDay }} at {{ SelectedTime }}
                    <v-divider color="green" />
                </p>
                <p v-if="MonthandDay && SelectedTime">
                    <center>
                        <v-btn class="ma-2" outlined id="BookingBtn" dark @click="goToNextPage">Book Now</v-btn>
                    </center>
                </p>
                <p v-else>
                    Please select preferred <b>date</b> & <b>time</b>
                </p>
            </v-col>

        </v-row>
    </v-card>

</div>
</template>

    
<script>
import moment from 'moment'
export default {
    data() {
        return {
            SelectedDate: null,
            SelectedTime: null,
            MonthandDay: null,
            options: [
                '10:00 am',
                '10:30 am',
                '11:00 am',
                '11:30 am',
                '12:00 pm',
                '12:30 pm',
                '01:00 pm',
                '01:30 pm',
                '02:00 pm'
            ],

            serviceObject: {},
            minDate: new Date().toISOString().split('T')[0],
            showDivider: true,

        }
    },

    mounted() {
        this.ServiceID = this.$store.state.ServiceID
        this.showService()
    },

    methods: {
        getMonthandDay() {

            let day = this.SelectedDate.substring(8)
            let year = this.SelectedDate.substring(0, 4)
            let monthName = ""

            switch (this.SelectedDate.substring(5, 7)) {

                case '01':
                    monthName = "January";
                    break;
                case '02':
                    monthName = "February";
                    break;
                case '03':
                    monthName = "March";
                    break;
                case '04':
                    monthName = "April";
                    break;
                case '05':
                    monthName = "May";
                    break;
                case '06':
                    monthName = "June";
                    break;
                case '07':
                    monthName = "July";
                    break;
                case '08':
                    monthName = "August";
                    break;
                case '09':
                    monthName = "September";
                    break;
                case '10':
                    monthName = "October";
                    break;
                case '11':
                    monthName = "November";
                    break;
                case '12':
                    monthName = "December";
                    break;

            }

            this.MonthandDay = monthName + " " + day + ", " + year;

        },

        goToNextPage() {
            let data = {}
            data.Date = this.MonthandDay
            data.Time = this.SelectedTime
            this.$store.commit('saveDateAndTime', data)
            this.$router.push('/customerinfo')
        },

        goToServices() {
            this.$store.commit('saveServiceID', '')
            this.$router.push('/services')
        },

        showService() {
            axios.get(`api/services/show?Function=${'SHOWSERVICE'}&&ServiceID=${this.ServiceID}`).then((res) => {
                this.serviceObject = Object.assign({}, res.data[0])
            })
        },
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
    /* background-size: cover; */
}

@media (max-width: 600px) {
    .container {
        background-position: top center;
    }
}

.transparent-card {
    background-color: transparent;
}

.responsive-card {
    width: 100%;
    /* Set the initial width to 100% */
    /* border: 1px solid #ccc;
        padding: 10px; */

    /* Media query for smaller screen sizes */
    @media screen and (max-width: 768px) {
        width: 80%;
        /* Adjust the width for smaller screens */
        font-size: 14px;
        /* Optionally adjust other styles for smaller screens */
    }
}

.responsive-date-picker {
    width: 100%;
    /* Set the initial width to 100% */
}

#BookingBtn {
    background-color: #324532;
}

@media only screen and (max-width: 600px) {
    .text {
        font-size: 25px;
        color: #324532;

    }

    .descriptionText {
        font-size: 18px;
        color: #324532;
    }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
    .text {
        font-size: 29px;
        color: #324532;
    }

    .descriptionText {
        font-size: 22px;
        color: #324532;
    }
}

@media only screen and (min-width: 1025px) {
    .text {
        font-size: 35px;
        color: #324532;
    }

    .descriptionText {
        font-size: 28px;
        color: #324532;
    }
}
</style>
