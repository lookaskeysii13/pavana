<template>
    <v-app id="inspire">
        <!-- <v-navigation-drawer temporary v-model="drawer" right app>
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
                    <li class="sub-text" v-for="(item,index) in items" :key="index">{{ item.text }}</li>
                </ul>
            </div>

            <div class="horizontal-list" v-else>
                <v-app-bar-nav-icon @click="drawer = !drawer"/>
            </div>
        </v-app-bar> -->
        <router-view name="header"></router-view>
        <v-main>
            <router-view></router-view>
            <!-- <router-view name="footer"></router-view> -->
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        items:[
            {text:'HOME', icon:'mdi-home', to:'/'},
            {text:'ABOUT', icon:'mdi-information-variant', to:'about'},
            {text:'SERVICES', icon:'mdi-hand-heart', to:'services'},
            {text:'PACKAGE', icon:'mdi-package-variant', to:''},
            {text:'BOOK NOW', icon:'mdi-bookmark-multiple-outline', to:''},
        ]
    }),

}
</script>

<style>


    #inspire{
        background-color:#fbf3ec;
    }
/*
    #FooterStyle{
        background-color:#e5fbf1;
    } */

    
</style>