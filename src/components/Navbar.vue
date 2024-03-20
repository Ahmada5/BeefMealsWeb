<template>
  <!-- bagian navbar hanya berisi tombol kembali dengan penyesuaian gradient style -->
  <div class="gradient d-flex align-center justify-left" style="background-color:#de872b;">
      <div class="ml-5 d-flex flex-row align-center">
          <RouterLink to="/" tag="button">
              <v-btn class="font-weight-bold font-italic text-black text-h6 font-times"
                  prepend-icon='mdi-arrow-left' variant="plain">
                  Back to the list
              </v-btn>
          </RouterLink>
      </div>
  </div>
</template>

<style scoped>
/* style css yang di khususkan untuk page ini */
.gradient {
  background: linear-gradient(to bottom, #b75e11, transparent);
}
</style>