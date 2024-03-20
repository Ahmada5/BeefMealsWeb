<template>
    <v-responsive class="Hero align-center justify-center h-screen">
        <div class="Hero-banner">
            <div class="banner-overlay"></div>
        </div>
        <h1 class="font-Hero font-italic text-center text-white ml-12 mr-12">Rahasia Dapur untuk Daging Lezat! Temukan Tutorial
            Terbaik untuk Membuat Hidangan Daging yang Memikat. Ayo Mulai Memasak dengan Kreativitas dan Kepuasan</h1>
        <h1 class="font-italic text-white text-center text-h6 mt-n1">~beefy.com~</h1>
    </v-responsive>
    <Listbeef/>
</template>

<script>
// import listbeef untuk menampilkan kedalam hero
import Listbeef from '../pages/Listbeef.vue'
export default{ 
    components:{
        Listbeef
    }
}
</script>

<style scoped>
/* css untuk mengatur bagian background hero */
.Hero {
    background: url('https://img.hotimg.com/photo-1607623814075-e51df1bdc82f6351eebb19b9e44b.jpeg');
    background-position-x: center;
}
/* mengubah font ke times new roman */
.font-Hero {
    font-family: 'Times New Roman', Times-New-Roman;
}
</style>