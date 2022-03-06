<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, ref, watch, watchEffect } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const horaDoDia = ref(12)

const escuro =  computed(() => horaDoDia.value < 6 || horaDoDia.value >= 19)

watch(escuro, (escuro) => {
  $q.dark.set(escuro)
})

</script>

<template>
    <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <div class="q-gutter-md" style="max-width: 300px">
          <p>Selecione a hora do dia</p>
          <div class="flex">
            <q-slider
              v-model="horaDoDia"
              :min="0"
              :max="23.5"
              markers
              :step="0.5"
              selection-color="transparent"
              marker-labels
              switch-marker-labels-side
            >
              <template v-slot:marker-label-group="{ markerMap }">
                <div
                  :class="markerMap[horaDoDia].classes"
                  :style="markerMap[horaDoDia].style"
                  class="flex no-wrap items-center"
                >
                  {{ horaDoDia.toFixed(1)}}h
                  <q-icon
                    class="q-ml-xs"
                    :name="escuro ? 'mdi-weather-night' : 'mdi-white-balance-sunny' "
                  />
                </div>
              </template>
            </q-slider>
          </div>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<style>
</style>
