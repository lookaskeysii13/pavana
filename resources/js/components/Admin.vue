<template>
<div>
    <router-view name="header"></router-view>
    <v-card id="MainCard" :height="$vuetify.breakpoint.height - 50">
        <v-card style="padding-top:10%; background-color: #fbf3ec" v-if="$vuetify.breakpoint.width > 1200" flat>
            <v-row no-gutters>
                <v-col>
                    <v-card id="Card1" class="mx-auto text-center">
                        <v-layout align-center justify-center>
                            <v-card-title class="text-center">SCHEDULES</v-card-title>
                        </v-layout>
                        <v-card height="300px" width="300px" class="mx-auto mb-5" flat>
                            <center>
                                <v-img style="height:100%; background-color:#f6e6d2;" src="images/schedule.png"></v-img>
                            </center>
                        </v-card>
                        <v-btn @click="$router.push('/schedules')" color="#45933a" dark>VIEW HERE</v-btn>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card id="Card2" class="mx-auto text-center">
                        <v-layout align-center justify-center>
                            <v-card-title class="text-center">MANAGE SERVICES</v-card-title>
                        </v-layout>
                        <v-card height="300px" width="300px" class="mx-auto mb-5" flat>
                            <center>
                                <v-img style="height:100%; background-color:#f6e6d2;" src="images/services.png"></v-img>
                            </center>
                        </v-card>
                        <v-btn @click="$router.push('/adminservices')" color="#45933a" dark>VIEW HERE</v-btn>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card id="Card3" class="mx-auto text-center">
                        <v-layout align-center justify-center>
                            <v-card-title class="text-center">CUSTOMIZE HOME PAGE</v-card-title>
                        </v-layout>
                        <v-card v-if="!switchView" height="300px" width="300px" class="mx-auto mb-5" flat>
                            <center>
                                <v-img style="height:100%; background-color:#f6e6d2;" src="images/customize.png"></v-img>
                            </center>
                        </v-card>
                        <v-card v-else height="300px" width="300px" style="background-color:#f6e6d2;" flat class="mx-auto mb-5">
                            <v-row no-gutters>
                                <v-col class="mt-12">
                                    <v-btn width="200px" @click="$router.push('/customizehomepage')">CUSTOMIZE IMAGES</v-btn>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col class="mt-12">
                                    <v-btn width="200px" @click="$router.push('/customizefeedback')">CUSTOMIZE FEEDBACK</v-btn>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col class="mt-12">
                                    <v-btn width="200px" @click="$router.push('/customizeabout')">CUSTOMIZE ABOUT</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-btn @click="switchView = !switchView" color="#45933a" dark>VIEW HERE</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        <v-card v-else>
            <v-card id="Card1" class="mx-auto text-center">
                <v-layout align-center justify-center>
                    <v-card-title class="text-center">SCHEDULES</v-card-title>
                </v-layout>
                <v-card height="300px" width="300px" class="mx-auto mb-5" flat>
                    <center>
                        <v-img style="height:100%; background-color:#f6e6d2;" src="images/schedule.png"></v-img>
                    </center>
                </v-card>
                <v-btn @click="$router.push('/schedules')" color="#45933a" dark>VIEW HERE</v-btn>
            </v-card>
            <v-card id="Card2" class="mx-auto text-center ma-3" flat>
                <v-layout align-center justify-center>
                    <v-card-title class="text-center">MANAGE SERVICES</v-card-title>
                </v-layout>
                <v-card height="300px" width="300px" class="mx-auto mb-5" flat>
                    <center>
                        <v-img style="height:100%; background-color:#f6e6d2;" src="images/services.png"></v-img>
                    </center>
                </v-card>
                <v-btn @click="$router.push('/adminservices')" color="#45933a" dark>VIEW HERE</v-btn>
            </v-card>
            <v-card id="Card3" class="mx-auto text-center ma-3" flat>
                <v-layout align-center justify-center>
                            <v-card-title class="text-center">CUSTOMIZE HOME PAGE</v-card-title>
                        </v-layout>
                        <v-card v-if="!switchView" style="background-color:#f6e6d2;background-image: url('./images/customize.png')" height="300px" width="300px" class="mx-auto mb-5" flat>
                            <center>
                                <!-- <v-img style="height:100%; background-color:#f6e6d2;" src="images/customize.png"></v-img> -->
                            </center>
                        </v-card>
                        <v-card v-else height="300px" flat width="300px" class="mx-auto mb-5" style="background-color:#f6e6d2;background-image: url('./images/customize.png')">
                            <v-row no-gutters>
                                <v-col>
                                    <v-btn width="200px" @click="$router.push('/customizehomepage')">CUSTOMIZE IMAGES</v-btn>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col>
                                    <v-btn width="200px" @click="$router.push('/customizefeedback')">CUSTOMIZE FEEDBACK</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-btn @click="switchView = !switchView" color="#45933a" dark>VIEW HERE</v-btn>
            </v-card>
        </v-card>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            switchView: false,
        }
    },
    mounted() {
        this.checkCookieValue();
        this.interval = setInterval(this.checkCookieValue, 60000);
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },

    methods: {
        checkCookieValue() {
            const myCookie = this.$cookies.get('myCookie');
            if (!myCookie) {
                this.$router.push("/login")
            }
        }
    },
}
</script>

<style scoped>
#MainCard {
    /* border:3px solid black; */
    border-radius: 0;
    padding-top: auto;
    background-color: #fbf3ec;
}

#Card1 {
    border: 1px solid #7e7974;
    background-color: #f6e6d2;
    border-radius: 0;
    width: 400px;
    height: 500px;
}

#Card2 {
    border: 1px solid #7e7974;
    background-color: #f6e6d2;
    border-radius: 0;
    width: 400px;
    height: 500px;
}

#Card3 {
    border: 1px solid #7e7974;
    background-color: #f6e6d2;
    border-radius: 0;
    width: 400px;
    height: 500px;
}
</style>
