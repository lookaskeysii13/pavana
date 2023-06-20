<template>
<v-app id="my-container">
    <v-container>
        <br>
        <span class="text">Services</span>
        <br><br>
        <span class="descriptionText">Short description</span>

        <v-container id="my-container">
            <v-row wrap>

                <v-col 
                    cols="12" sm="12" md="12" lg="6" xl="5" xs="12"
                    class="d-flex child-flex mx-auto"
                    v-for="(item,index) in servicesArray" :key="index"
                >
                    <v-card style="border: 1px solid #415941;width:100px;">
                        <v-img :src="getImageUrl(item.ImageName)" height="250" class="grey darken-4"></v-img>

                        <v-card flat>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0" id="MassageName">{{ item.ServiceName }}</h3>
                                    <div>{{ item.Duration }} mins</div>
                                </div>
                            </v-card-title>
                        </v-card>
                        <v-card height="100px" flat>
                            <v-card-text>
                                {{ item.ServiceDescription }}
                            </v-card-text>
                        </v-card>
                        <br>
                        <v-row justify="center" class="mb-3">
                            <div class="my-container">
                                <v-btn class="ma-2" outlined id="ServicesBtn" dark @click="goToNextPage(item.ServiceID)">Book Now</v-btn>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-container>
</v-app>
</template>

<script>
export default {

    data() {
        return {
            servicesArray: [],
        }
    },

    created() {
        this.getServices()
    },

    methods: {
        goToNextPage(ServiceID) {
            this.$store.commit('saveServiceID',ServiceID)
            this.$router.push('/booking')
        },

        getImageUrl(image){
            return `images/${image}`
        },

        getServices(){
            axios.get(`api/services?Function=${'GETSERVICES'}`).then((res) => {
                this.servicesArray = res.data
            })
        }
    }
}
</script>

<style>
#my-container {
    background-color: #fff4ec;
    font-family: Nunito;
}

#MassageName {
    color: #415941;
    font-weight: bolder;

}

#ServicesBtn{
    background-color: #415941;
}

@media only screen and (max-width: 600px) {
    .text {
        font-size: 25px;
    }

    .descriptionText {
        font-size: 18px;
    }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
    .text {
        font-size: 29px;
    }

    .descriptionText {
        font-size: 22px;
    }
}

@media only screen and (min-width: 1025px) {
    .text {
        font-size: 35px;
    }

    .descriptionText {
        font-size: 28px;
    }
}

.my-container {

    /* display: flex; */
    justify-content: center;
    /* Center items horizontally */
    align-items: center;
    /* Center items vertically */
    height: 10vh;
}


</style>
