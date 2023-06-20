<template>
    <div>
        <v-navigation-drawer temporary v-model="drawer" right app>
            <v-list dense>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item-icon>
                        <v-icon> {{ item.icon }} </v-icon>
                    </v-list-item-icon>
                <v-list-item-content>
                        <v-list-item-title class="text"> {{ item.text }} </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app height="120" id="AppBarStyle" flat style="background-color: #d0d4cc;">
        
            <v-img class="LogoStyle" src="images/PAVANA.png"/>
            <v-spacer></v-spacer>
            

            <div class="horizontal-list" v-if="$vuetify.breakpoint.width > 853">
                <ul class="list-container">
                    <li class="sub-text" v-for="(item,index) in items" :key="index" @click="routerLink(item.to)">{{ item.text }}</li>
                </ul>
            </div>

            <div class="horizontal-list" v-else>
                <v-app-bar-nav-icon @click="drawer = !drawer"/>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            items:[
                {text:'HOME', icon:'mdi-home', to:'/'},
                {text:'SERVICES', icon:'mdi-hand-heart', to:'services'},
                {text:'ABOUT', icon:'mdi-information-variant', to:'about'},
                {text:'FAQ', icon:'mdi-help', to:'faqs'}
            ],

        }),
        methods: {
            routerLink(item) {
                // console.log(item);
                item == '/' ? this.$router.push('/') : this.$router.push('/' + item)
            }
        }
    }
</script>

<style scoped>
    .LogoStyle{
        max-height: 150px;
        max-width: 300px;

    }


    .horizontal-list{
        display:flex;
        justify-content: flex-start;
    }

    .list-container{
        display: flex;
        list-style-type: none;
        padding: 0;
    }

    li{
        margin-right: 10px;
    }

    .text{

        font-family: "Trebuchet MS", Helvetica, sans-serif;
        

    }

    .sub-text{
        font-size: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        color: #414c41;
    }

    .sub-text:hover{
        cursor: pointer;
    }

    .sub-text:hover{
        /* color: #10693c; */
        color: #a28446;
    }
</style>