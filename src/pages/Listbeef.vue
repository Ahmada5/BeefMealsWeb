<template>
    <!-- bagian gradient -->
    <v-row>
        <v-col class="h-50vh">
            <v-col class="gradient mb-n4">
            </v-col>
        </v-col>
    </v-row>

    <!-- container dibawah merupakan container utama penampilan pagenation
    meals==alias, meal==data json, data di simpan dalam raw -->
    <v-container fluid class="color-cor d-flex flex-column justify-center h-100">
        <v-data-iterator class="color-cor mt-16 d-flex flex-column align-center justify-center" :items="this.meals"
            :items-per-page="5">
            <template v-slot:default="{ items }" class="d-flex align-center">
                <v-row class=" d-flex justify-center align-center mt-0">
                    <v-col class="d-flex justify-center" v-for="item in items" :key="item.idMeals">
                        <v-card width="250" elevation="16" class="border" style="background-color: #7c3209;">
                            <router-link :to="'/Detailbeef/' + item.raw.idMeal">
                                <v-img :src="item.raw.strMealThumb" cover aspect-ratio="1/1" height='getImageHeight()'>
                                </v-img>
                            </router-link>
                            <v-list-item>
                                <template v-slot:title>
                                    <p
                                        class="no-decoration text-h10 mb-1 text-white d-flex justify-center text-justify">
                                        {{ item.raw.strMeal }}</p>
                                </template>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </template>

            <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                <div class="d-flex align-center justify-center mt-5" style="background-color: #7c3209;">
                    <v-btn :disabled="page === 1" icon="mdi-arrow-left" density="comfortable" variant="tonal" rounded
                        @click="prevPage"><span class="custom-icon mdi mdi-arrow-left"></span></v-btn>

                    <div class="mx-2 text-h6 text-white">
                        Page {{ page }} of {{ pageCount }}
                    </div>

                    <v-btn :disabled="page >= pageCount" icon='mdi-arrow-right' density="comfortable" variant="tonal"
                        rounded @click="nextPage"><span class="custom-icon mdi mdi-arrow-right"></span></v-btn>
                </div>
            </template>
        </v-data-iterator>
    </v-container>

    <!-- bagian gradient -->
    <v-row>
        <v-col class="h-50vh">
            <v-col class="gradientreverse mb-n4">

            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            meals: [],
            arowL: 'mdi-arrow-right'
        };
    },
    mounted() {
        this.fetchMeals();
    },
    methods: {
        fetchMeals() {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
                .then(response => {
                    this.meals = response.data.meals;
                    //console test browser
                    console.log(response.data);
                    console.log(this.meals[0]);

                })
                .catch(error => {
                    console.error('Error fetching meals:', error);
                });
        }
    }
};
</script>

<style scoped>
/* style css yang di khususkan untuk page ini */
.gradient {
    background: linear-gradient(to bottom, #7c3209, transparent);
}
.gradientreverse {
    background: linear-gradient(to top, #7c3209, transparent);
}
</style>