<template>
    <div>
        <form @submit.prevent="uploadImage">
            <input class="d-none"  type="file" ref="image" accept="image/*" @change="onChange"/>
            <v-row no-gutters>
                <v-col class="ma-3">
                    <v-text-field outlined disabled v-model="file.name"/>
                </v-col>
                <!-- <v-col cols="4" class="ma-3">
                    <v-text-field outlined v-model="imageName" label="UploadName"/>
                </v-col> -->
                <v-col cols="2" class="ma-3">
                    <v-btn @click="handleFileImport">Select image file</v-btn>
                </v-col>
                <v-col cols="1" class="ma-3">
                    <v-btn type="submit">Upload</v-btn>
                </v-col>
            </v-row>
        </form>

        <v-card>
            <v-row no-gutters>
                <v-col v-for="(item,index) in imagesArray" :key="index" class="d-flex child-flex mx-auto" cols="3">
                    <!-- <v-img 
                        :src="getImageUrl(item.filename)" 
                        alt="" 
                        id="ImageStyle"
                        @mouseover="hover = true"
                        @mouseleave="hover = false"
                    > -->
                    <!-- <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#036358">
                            <v-btn>See more info</v-btn>
                        </v-overlay>
                    </v-fade-transition> -->
                    <!-- </v-img> -->
                    <v-hover>
                        <template v-slot:default="{ hover }">
                        <v-card>
                            <v-img style="border:2px solid black;" height="300px" :src="getImageUrl(item.filename)" ></v-img>

                            <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                color="#036358"
                            >
                                <v-btn @click="setImageAs(item)">Set as</v-btn>
                            </v-overlay>
                            </v-fade-transition>
                        </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </v-card>

        <v-dialog v-model="SelectionDialog" persistent width="300px">
            <v-card width="300px" class="pa-3">
                <v-toolbar dense flat>
                    SET IMAGE AS
                    <v-spacer/>
                    <v-btn icon @click="closeDialog()"><v-icon>mdi-close</v-icon></v-btn>
                </v-toolbar>
                <center>
                    <img id="ImageStyle" :src="getImageUrl(imageObject.filename)" >
                    <h4>{{ imageObject.filename }}</h4>
                </center>
                <v-autocomplete
                    outlined
                    dense
                    v-model="imageObject.LocationID"
                    :items="selectionArray"
                    item-text="ImageLocName"
                    item-value="ImageLocID"
                    label="Image Location"
                    hide-details
                />
                <br>
                <v-btn @click="saveImageUpdateLocation" block color="success">SAVE</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imagesArray: [],
                selectionArray: [],
                imageObject: {},
                imageName: '',
                file: '',
                isSelecting:false,
                hover: false,
                overlay: false,
                SelectionDialog: false,


                notificationSystem:{
                    options:{
                        success: {
                            position: "topCenter",
                            timeout: 3000
                        },

                        error: {
                            position: "topCenter",
                            timeout: 3000
                        },

                        warning: {
                            position: "topCenter",
                            timeout: 3000
                        },

                        info: {
                            position: "topCenter",
                            timeout: 3000
                        },

                        infoBeforePrinting: {
                            position: "topCenter",
                            timeout: 5000
                        },
                    },
                }
            }
        },

        mounted() {
            this.getImages()
            this.getSelection()
        },

        methods: {
            setImageAs(item){
                // console.log(item);
                this.imageObject = Object.assign({},item)
                this.SelectionDialog = true
            },

            closeDialog(){
                this.imageObject = {}
                this.SelectionDialog = false
            },

            getSelection(){
                axios.get('api/getSelection').then((res) => {
                    this.selectionArray = res.data
                })
            },

            saveImageUpdateLocation(){
                if(this.imageObject.LocationID){
                    axios.post('api/updateImageLocation',{data:this.imageObject})
                    .then(() => {
                        this.imageObject = {}
                        this.getImages()
                        this.SelectionDialog = false
                    })
                }else{
                    this.$toast.error(' ','ERROR',this.notificationSystem.options.error)
                }
            },

            uploadImage() {
                if(this.$refs.image.files[0] && this.imageName){
                    const formData = new FormData();
                    formData.append('image', this.$refs.image.files[0]);
                    formData.append('imageName', this.imageName);

                    axios.post('api/upload', formData, {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    }).then(response => {
                        console.log(response.data);
                        this.imageName= '',
                        this.file= '',
                        this.isSelecting=false,
                        this.getImages();
                    }).catch(error => {
                        console.error(error);
                    });
                }else{
                    this.$toast.error('PLEASE SELECT OR INPUT NAME ON THE IMAGE FIRST!','')
                }
            },

            handleFileImport(){
                this.isSelecting = true
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, {once: true})
                this.$refs.image.click()
            },

            onChange(event){
                this.file = event.target.files ? event.target.files[0] : null
            },


            getImages(){
                axios.get('api/getAllImages').then(response => {
                    this.imagesArray = response.data
                }).catch(error => {
                    console.error(error)
                })
            },

            getImageUrl(image){
                return `images/${image}`
            },

            showID(value){
                console.log(value);
            },
        },
    }
</script>

<style scoped>
    #ImageStyle{
        width:200px;
        height:200px;
        border:2px solid black;
    }
</style>