<template>
    <div>
        <v-navigation-drawer temporary v-model="drawer" right app style="background-color:#ced6ce;">
            <v-list dense>
                <v-subheader>LIST COMPONENTS:</v-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item-icon>
                        <v-icon> {{ item.icon }} </v-icon>
                    </v-list-item-icon>
                <v-list-item-content>
                        <v-list-item-title> {{ item.text }} </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app id="AdminNavbar" height="50px" flat v-if="!$router.history.current.path.includes('/login')">
            <!-- {{ time }} -->
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon large color="black">mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                <v-list id="changeHover">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="$router.push('/admin')"> ADMIN </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="$router.push('/maintenance')"> MAINTENANCE </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="logout"> LOGOUT </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                items:[
                    {text:'HOME', icon:'mdi-home', to:'/'},
                    {text:'CONTACT', icon:'mdi-contacts-outline', to:''}
                ],

                time: '',
            }
        },

        // mounted() {
        //     this.timerID = setInterval(this.updateTime,1000);
        // },

        methods: {
            logout(){
                this.$cookies.remove('myCookie');
                this.$router.push("/login")
            },

            // updateTime(){
            //     var cd = new Date();
            //     var AMPM = ''
            //     var Hours = cd.getHours()
            //     var Minutes = cd.getMinutes()
            //     var Seconds = cd.getSeconds()

            //     AMPM = Hours >= 12 ? 'PM' : 'AM';

            //     Hours = Hours % 12;
            //     Hours = Hours ? Hours : 12;

            //     Hours = Hours < 10 ? '0'+Hours : Hours;
            //     Minutes = Minutes < 10 ? '0'+Minutes : Minutes;
            //     Seconds = Seconds < 10 ? '0'+Seconds : Seconds

            //     this.time = Hours + ':' + Minutes + ':' + Seconds + ' ' + AMPM;
            //     console.log(this.time);
            // },
        },
    }
</script>

<style scoped>
    #AdminNavbar{
        background-color:#ced6ce;
    }

    #changeHover:hover{
        cursor: pointer;
    }
</style>