<template>
<v-layout align-center justify-center>
    <v-card width="100%" flat>

        <v-tabs v-model="tab" fixed-tabs show-arrows>
            <v-tabs-slider />
            <v-tab v-for="item in tabItems" :key="item">{{ item }}</v-tab>
        </v-tabs>
        <v-divider />
        <v-tabs-items v-model="tab" touchless>
            <!-- SCHEDULE TAB -->

            <v-tab-item style="background-color: #fbf3ec;">
                
                <br>
                <button style="color:black;" @click="goToAdmin()">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-icon>mdi-arrow-left</v-icon>Back
                </button>
                <br><br>

                <v-row>
                    <v-col class="pa-12">
                        <v-date-picker id="DatePicker" :events="eventsArray" event-color="green" v-model="selectedDate" :min="minDate" full-width>

                            <v-row>
                                <v-col>
                                    <v-btn @click="getfilteredDate" color="#45933a" dark block>FILTER</v-btn>
                                    <br>
                                    <v-btn @click="getBooking" color="#45933a" dark block>CLEAR FILTER</v-btn>
                                </v-col>
                            </v-row>

                        </v-date-picker>
                    </v-col>
                    <v-col class="pl-12 pt-12 pr-12">
                        <v-text-field dense outlined v-model="searchValue" label="Search" hide-details />
                        <br>
                        <v-card flat style="background-color: #f6e6d2;">
                            <v-simple-table id="TableDesign" fixed-header height="381px">
                                <thead>
                                    <th v-for="(item,index) in tableHeader" :key="index" style="background-color: #f6e6d2; color: #415941;">{{ item.text }}</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in searchName" :key="index" :class="checkDate(item)"  v-on:dblclick="openInformationDialog(item)">
                                        <td>{{ item.Name }}</td>
                                        <td>{{ item.BookingDate }}</td>
                                        <td>{{ item.BookingTime }}</td>
                                        <td>{{ item.StatusName }}</td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <template>
                                <div class="text-center mx-auto">
                                    <v-pagination class="pagination mb-2" v-model="page" :length="pages" :total-visible="10" @input="updatePage" prev-icon="mdi-menu-left" next-icon="mdi-menu-right" />
                                </div>
                            </template>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row no-gutters dense>
                    <v-col class="pa-12">
                        <div>
                            <p class="time">{{ time }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>
    </v-card>

    <v-dialog persistent v-model="InformationDialog" width="500px">
        <v-card>
            <v-toolbar>
                <v-icon>mdi-book-information-variant</v-icon>
                <v-card-title>INFORMATION</v-card-title>
                <v-spacer />
                <v-btn icon @click="closeInformationDialog">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card class="pa-3">
                <v-text-field disabled label="NAME" outlined v-model="informationObject.Name" />
                <v-text-field disabled label="NUMBER OF PERSON" outlined v-model="informationObject.NumberOfPerson" />
                <v-text-field disabled label="BOOKING DATE" outlined v-model="informationObject.BookingDate" />
                <v-text-field disabled label="BOOKING TIME" outlined v-model="informationObject.BookingTime" />
                <v-text-field disabled label="CONTACT NUMBER" outlined v-model="informationObject.ContactNumber" />
                <v-text-field disabled label="EMAIL ADDRESS" outlined v-model="informationObject.EmailAddress" />
                <v-text-field disabled label="MESSAGE" outlined v-model="informationObject.Message" />
                <v-autocomplete v-model="informationObject.StatusID" :items="StatusArray" item-text="name" item-value="value" @change="updateBooking()" />
            </v-card>
        </v-card>
    </v-dialog>

    <v-overlay color="#d8ecd4" :value="overlay" style="color:black">
        <center>
            PROCESSING...
            <br>
            <v-progress-circular indeterminate size="64" color="#242424"></v-progress-circular>
        </center>
    </v-overlay>
</v-layout>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            informationObject: {},
            bookingArray: [],
            forConfirmationArray: [],
            confirmedArray: [],
            ongoingArray: [],
            finishedArray: [],
            filteredArray: [],
            eventsArray: [],
            selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

            tabItems: [
                'SCHEDULES',
                // 'CALENDAR'
            ],

            time: '',
            date: '',

            tableHeader: [{
                    text: 'NAME',
                    value: 'Name'
                },
                // { text: 'Number of person',value: 'NumberOfPerson' },
                {
                    text: 'BOOKING DATE',
                    value: 'BookingDate'
                },
                {
                    text: 'BOOKING TIME',
                    value: 'BookingTime'
                },
                // { text: 'Contact Number',value: 'ContactNumber' },
                // { text: 'Email Address',value: 'EmailAddress' },
                // { text: 'Message',value: 'Message' },
                {
                    text: 'STATUS',
                    value: 'StatusName'
                }
            ],

            week: [
                "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
            ],

            StatusArray: [{
                    name: 'FOR CONFIRMATION',
                    value: '1'
                },
                {
                    name: 'CONFIRMED',
                    value: '2'
                },
                {
                    name: 'ON-GOING',
                    value: '3'
                },
                {
                    name: 'FINISHED',
                    value: '4'
                },
                {
                    name: 'CANCELLED',
                    value: '5'
                },
            ],

            InformationDialog: false,
            overlay: false,

            listCount: 0,
            page: 1,
            pageSize: 10,
            historyList: [],
            searchValue: '',

            tab: null,
            minDate: new Date().toISOString().split('T')[0],
        }
    },

    mounted() {
        this.checkCookieValue();
        this.interval = setInterval(this.checkCookieValue, 60000);
        this.timerID = setInterval(this.updateTime, 1000);
        // this.BookingInterval = setInterval(this.getBooking, 30000);
    },

    beforeDestroy() {
        clearInterval(this.interval);
        // clearInterval(this.BookingInterval);
    },

    created() {
        this.getBooking()
        // this.isHighlighted()
    },

    methods: {
        checkCookieValue() {
            const myCookie = this.$cookies.get('myCookie');
            if (!myCookie) {
                this.$router.push("/login")
            }
        },

        checkDate(date) {
            var dateToday = new Date()
            var formattedDateToday = moment(dateToday).format("yyyy-MM-DD")
            var formattedBookingDate = moment(date.BookingDate).format("yyyy-MM-DD")
            if (formattedDateToday > formattedBookingDate) {
                return 'style-delayed'
            }
        },

        getfilteredDate() {
            let dateValue = moment(this.selectedDate).format('yyyy-MM-DD')
            this.bookingArray = []
            this.eventsArray = []
            this.overlay = true
            axios.get(`api/booking?Function=${'GETFILTEREDDATE'}&&dateValue=${dateValue}`).then((res) => {
                this.bookingArray = res.data

                this.bookingArray.filter((rec) => {
                    this.eventsArray.push(rec.BookingDate)
                })

                this.initPage()
                this.overlay = false
            })
        },

        isHighlighted() {
            axios.get(`api/booking?Function=${'GETBOOKING'}`).then((res) => {
                let data = res.data
                this.eventsArray = data.map((rec) => {
                    return moment(rec.BookingDate).format("yyyy-MM-DD")
                })
            })
        },

        getBooking() {
            axios.get(`api/booking?Function=${'GETBOOKING'}`).then((res) => {
                this.bookingArray = res.data
                this.initPage()
                this.isHighlighted()
                this.overlay = false
            })
        },

        updateBooking() {
            this.InformationDialog = false
            this.overlay = true
            axios.put('api/booking/update', {
                Function: 'UPDATEBOOKING',
                data: this.informationObject
            }).then(() => {
                this.getBooking()
                this.InformationDialog = true
            })
        },

        openInformationDialog(data) {
            this.InformationDialog = true
            this.informationObject = Object.assign({}, data)
        },

        closeInformationDialog() {
            this.InformationDialog = false
            this.informationObject = {}
        },

        initPage() {
            this.listCount = this.filteredArray.length;
            if (this.listCount < this.pageSize) {
                this.historyList = this.filteredArray;
            } else {
                this.historyList = this.filteredArray.slice(0, this.pageSize);
            }
            this.updatePage(this.page);
        },

        updatePage(pageIndex) {
            let start = (pageIndex - 1) * this.pageSize;
            let end = pageIndex * this.pageSize;
            this.historyList = this.filteredArray.slice(start, end);
            this.page = pageIndex;
        },

        goToAdmin() {
            this.$router.push('/admin');
        }

    },

    computed: {
        pages() {
            if (this.pageSize == null || this.listCount == null) return 0;
            return Math.ceil(this.listCount / this.pageSize);
        },

        searchName() {
            this.filteredArray = this.bookingArray.filter((res) => {
                if (this.searchValue) {
                    return res.Name.toUpperCase().includes(this.searchValue.toUpperCase())
                } else {
                    return res
                }
            })

            this.initPage()
            return this.historyList
        },

    },
}
</script>

<style scoped>
#TableDesign {
    text-align: center;
    white-space: nowrap;
    border: 1px solid black;
}

#TableDesign th {
    text-align: center;
}

#DatePicker {
    border: 1px solid black;
}

#TableDesign tr:hover {
    background-color: #fff4ec;
}

p {
    margin: 0;
    padding: 0;
}

.time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
}

.date {
    letter-spacing: 0.1em;
    font-size: 24px;
}

.v-date-picker .highlighted-date {
    background-color: yellow;
}

.style-delayed {
    background-color: #ff7373;
}
</style>
