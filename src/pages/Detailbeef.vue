<template>
    <navbar />
    <div class="d-flex flex-column align-center justify-center" style="background-color: #de872b;;">
        <!-- <h1>DETAIL MEALS {{ $route.params.id }}</h1> -->
        <v-div class="d-flex flex-column justify-center">
            <h1>{{ meal.strMeal }}</h1>
        </v-div>
        <v-container fluid>
            <v-row class="d-flex justify-center mt-n5">
                <v-col class="d-flex justify-end mt-n3">
                    <a :href="meal.strYoutube" target="_blank" class="text-black">YouTube Source</a>
                    <v-icon>mdi-youtube</v-icon>
                </v-col>
                <v-col class="d-flex justify-start mt-n3">
                    <v-icon>mdi-paperclip</v-icon>
                    <a :href="meal.strSource" target="_blank" class="text-black">Source material</a>
                </v-col>
            </v-row>
        </v-container>
        <!-- container dibawah merupakan container utama penampilan pagenation meals==alias, meal==data json, data di simpan dalam raw -->
        <v-container fluid>
            <v-row> <!-- baris utama penampilan data -->
                <v-col>
                    <v-row> <!--baris ini akan menyesuaikan ukuran layar -->
                        <v-col class="d-flex ">
                            <img :src="meal.strMealThumb" class="meals-image elevation-5" alt="Meals Thumbnail">
                        </v-col>
                        <v-col>
                            <!-- pemanggilan index ingredient -->
                            <v-div class="ma-1 pa-1 text-right">
                                <div v-for="(ingredient, index) in getIngredientsList(meal)" :key="index">
                                    {{ ingredient }}
                                </div>
                            </v-div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="d-flex">
                    <p class="d-flex justify-center align-center text-start font-weight-bold">{{ meal.strInstructions }}
                    </p>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center mt-10">
                <v-icon>mdi-chevron-right</v-icon>
                <button @click="shareToWhatsApp">Share This page</button>
                <v-icon>mdi-chevron-left</v-icon>
            </v-row>
        </v-container>


    </div>
    <v-row>
        <v-col class="h-100vh">
            <v-col class="gradient ">

            </v-col>
        </v-col>
    </v-row>
</template>


<script>
import '@mdi/font/css/materialdesignicons.min.css'
import axios from 'axios'
//pemanggilan navbar hanya ada di page detail untuk keperluan tombol kembali
import navbar from "../components/Navbar.vue"

export default {
    components: {
        navbar
    },
    data() {
        return {
            meal: {}
        };
    },
    async mounted() {
        //mengambil value id yang di kirim dari page list
        const id = this.$route.params.id.replace(':id', '');
        console.log(id);

        //mengambil data sesuai dengan value id
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        console.log(url);

        try {
            const response = await axios.get(url);
            const result = response.data;
            if (result.meals && result.meals.length > 0) {
                this.meal = result.meals[0];
                console.log(result);

                //code agar page berada di posisi awal yang sesuai
                window.scrollTo(0, 0);
            } else {
                console.log("tidak ada data dengan ID:", id);
            }
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        //metod untuk mengambil value dari data ingredient dan measure yang merupakan array dengan jumlah tertentu
        //ingredient dan measure disatukan dalam 1 array ingredients
        getIngredientsList(mealsIng) {
            const ingredients = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = mealsIng[`strIngredient${i}`];
                const measure = mealsIng[`strMeasure${i}`];
                if (ingredient && measure) {
                    ingredients.push(`${measure} ${ingredient}`);
                } else if (ingredient) {
                    ingredients.push(ingredient);
                }
            }
            return ingredients;
        },
        //metod untuk melakukan share ke whatsup dengan pesan dan link menuju page resep yang sedang dibuka
        shareToWhatsApp() {
            const message = encodeURIComponent(`Hey, take a look at this recipe for ${this.meal.strMeal} ${window.location.href}`);
            const shareUrl = `https://api.whatsapp.com/send?text=${message}`;
            window.open(shareUrl, '_blank');
        }
    }

};
</script>

<style scoped>
/* style css yang di khususkan untuk page ini */
.meals-image {
    /* untuk mengatur gambar makanan agar sesuai */
    height: auto;
    width: 340px;
    display: block;
    margin: 0 auto;
}

.gradient {
    background: linear-gradient(to bottom, #de872b, transparent);
}
</style>