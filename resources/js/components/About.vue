<template>
<v-container fluid class="parent">
    <!-- <v-card flat class="mainCard" style="margin-left:5%;margin-right:5%;">
        <center>

        </center>
    </v-card> -->

    <v-card flat style="margin-left:5%;margin-right:5%;" elevation="5">

        <v-card v-if="$vuetify.breakpoint.width > 900" flat>
            <v-row>
                <v-col>
                    <center>
                        <h2 class="text">My Background</h2>
                    </center>
                </v-col>

            </v-row>
            <v-row class="image-row" no-gutters>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column">
                    <div class="pa-3">
                        <p class="text-content" v-html="formatText(MyBackground)"></p>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column mr-3">
                    <div class="image-container">
                        <v-img v-if="MyBackgroundImage" tile contain :src="getImageUrl(MyBackgroundImage)" class="fixed-image"></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-card>

        <v-card v-else flat elevation="5">
            <v-row>
                <v-col>
                    <center>
                        <h2 class="text">My Background</h2>
                    </center>
                </v-col>

            </v-row>
            <v-row class="image-row" no-gutters>
                <v-col class="column">
                    <div class="pa-3">
                        <p class="text-content" v-html="formatText(MyBackground)"></p>
                    </div>
                </v-col>

            </v-row>
            <v-row>
                <v-col class="column">
                    <div class="image-container">
                        <v-img v-if="MyBackgroundImage" tile contain :src="getImageUrl(MyBackgroundImage)" class="fixed-image"></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
    <br><br>

    <v-card flat style="margin-left:5%;margin-right:5%" elevation="5">

        <v-card v-if="$vuetify.breakpoint.width > 900" flat>

            <v-row>
                <v-col>
                    <center>
                        <h2 class="text">My Approach</h2>
                    </center>
                </v-col>

            </v-row>

            <v-row class="image-row" no-gutters>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column">

                    <div class="image-container">
                        <v-img v-if="MyApproachImage" tile contain :src="getImageUrl(MyApproachImage)" class="fixed-image"></v-img>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xs="12" class="column mr-3">
                    <div class="pa-3">
                        <p class="text-content" v-html="formatText(MyApproach)"></p>
                    </div>
                </v-col>
            </v-row>
        </v-card>

        <v-card v-else flat elevation="5">

            <v-row>
                <v-col>
                    <center>
                        <h2 class="text">My Approach</h2>
                    </center>
                </v-col>

            </v-row>

            <v-row class="image-row" no-gutters>
                <v-col class="column">

                    <div class="image-container">
                        <v-img v-if="MyApproachImage" tile contain :src="getImageUrl(MyApproachImage)" class="fixed-image"></v-img>
                    </div>
                </v-col>

            </v-row>
            <v-row>
                <v-col class="column">
                    <div class="pa-3">
                        <p class="text-content" v-html="formatText(MyApproach)"></p>
                    </div>
                </v-col>
            </v-row>
        </v-card>
        <!-- <v-row no-gutters>
            <v-col>
                <v-card flat style="background-color:#CED6CE; color:#324532; padding: 2px;">
                    <p class="descriptionText" v-html="formatText(MyApproach)">
                    </p>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="d-flex fill-height" flat height="600px">
                    <v-img v-if="MyApproachImage" tile contain :src="getImageUrl(MyApproachImage)"></v-img>
                </v-card>
            </v-col>
        </v-row> -->
    </v-card>
    <br>
    <center>
        <v-btn style="border-radius:0;background-color:#415941;color:white" @click="goToServices()">View Services</v-btn>
    </center>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            MyBackground: '',
            MyApproach: '',
            MyBackgroundImage: '',
            MyApproachImage: '',
        }
    },
    methods: {
        goToServices() {
            this.$router.push('/services')
        },

        getText() {
            axios.get(`api/master?Function=${'GETTEXT'}`).then((res) => {
                res.data.filter((rec) => {
                    if (rec.TextTypeID == '00004') {
                        this.MyBackground = rec.TextContent
                    } else if (rec.TextTypeID == '00005') {
                        this.MyApproach = rec.TextContent
                    }
                })
            })
        },

        getImages() {
            axios.get('api/getImages').then(response => {
                response.data.filter((rec) => {
                    if (rec.ImageLocID == 3) {
                        this.MyBackgroundImage = rec.ImageName
                    } else if (rec.ImageLocID == 4) {
                        this.MyApproachImage = rec.ImageName
                    }

                })
            }).catch(error => {
                console.error(error)
            })
        },

        getImageUrl(image) {
            return `images/${image}`
        },

        formatText(text) {
            return text.replace(/\n/g, '<br>')
        },
    },

    mounted() {

        this.getImages();
        this.getText();

        this.Imagesinterval = setInterval(this.getImages, 60000)
        this.Textinterval = setInterval(this.getText, 60000)

    }

}
</script>

<style scoped>
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

.image-row {
    display: flex;
    flex-wrap: wrap;
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
</style>
