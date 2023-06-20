<template>
<v-container fill-height>
    <!-- LANDSCAPE ORIENTATION -->
    <v-card class="mx-auto" height="400px" width="600px" id="MainCard1" v-if="$vuetify.breakpoint.width > 414">
        <v-card class="mx-auto" height="100%" width="50%" id="LeftCard">
            <v-container fill-height>
                <v-card class="mx-auto" width="200px" height="200px" style="background-color: #f6e6d2;" flat>
                    <center>
                        <v-img style="height:190px;"  src="images/LOGO4LOGIN.png"/>
                    </center>
                </v-card>
                <!-- <h2 class="mx-auto">ADMINISTRATION</h2> -->
            </v-container>
        </v-card>
        <v-card class="mx-auto" height="100%" width="50%" id="RightCard">
            <v-container fill-height>
                <v-text-field v-model="Username" hide-details outlined label="Username" append-icon="mdi-account-lock-open" class="bordered-icon" validate-on-blur/>
                <v-text-field v-model="Password" hide-details outlined @keypress.enter="login()" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append="show = !show" label="Password" />
                <v-btn block x-large @click="login()" color="#45933a" dark>LOGIN</v-btn>
            </v-container>
        </v-card>
    </v-card>
    <!-- PORTRAIT ORIENTATION -->
    <v-card height="500px" width="600px" id="MainCard2" v-else>
        <v-card height="50%" width="100%" id="LeftCard">
            <v-container fill-height>
                <v-card class="mx-auto" width="100%" height="80%" style="background-color: #f6e6d2;" flat>
                    <center>
                        <v-img style="height:190px;"  src="images/LOGO4LOGIN.png"/>
                    </center>
                </v-card>
                <h2 class="mx-auto">ADMINISTRATION</h2>
            </v-container>
        </v-card>
        <v-card height="50%" width="100%" id="RightCard">
            <v-container fill-height>
                <v-text-field v-model="Username" hide-details outlined label="Username" append-icon="mdi-account-lock-open" />
                <v-text-field v-model="Password" hide-details outlined :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append="show = !show" label="Password" />
                <v-btn block x-large color="#45933a" dark>LOGIN</v-btn>
            </v-container>
        </v-card>
    </v-card>
</v-container>
</template>

<script>
// import { AES, enc } from 'crypto-js/core';
// import sjcl from 'sjcl';
export default {
    data() {
        return {
            Username: null,
            Password: null,
            show: false,
            UserArray: [],
        }
    },

    created() {
        this.checkCookies()
    },

    methods: {
        checkCookies() {
            const myCookie = JSON.parse(this.$cookies.get('myCookie'))

            if (myCookie) {
                this.$router.push("/admin")
            }
        },

        login() {
            axios.get(`api/login?Function=${'CHECKCREDENTIALS'}&&Username=${this.Username}&&Password=${this.Password}`).then((res) => {
                console.log(res.data);
                if (res.data == 'ERROR') {
                    console.log('Credential Error');
                } else {
                    console.log('Welcome ' + res.data[0].Name);
                    const ID = JSON.stringify(res.data[0].ID)
                    const expirationTime = 43200
                    this.$cookies.set('myCookie', ID, expirationTime)
                    this.$router.push("/admin")
                }
            })
        },
    },
}
</script>

<style scoped>
#MainCard1 {
    /* border: 1px solid black; */
    display: flex;
    border-radius: 0;
}

#MainCard2 {
    /* border: 1px solid black; */
    border-radius: 0;
}

#LeftCard {
    border-radius: 0;
    background-color: #f6e6d2;
    border: 2px solid #f6e6d2;
}

#RightCard {
    padding: 10px;
    border-radius: 0;
    text-align: center;
    background-color: #f6e6d2;
    border: 2px solid #f6e6d2;
}


</style>
