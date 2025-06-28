<template>
    <div class="map-container">
        <GoogleMap v-if="!hasError" :api-key="apiKey" :map-id="mapId"
            :libraries="$googleMapsLibraries" style="width: 100%; height: 100%" :center="center" :zoom="zoom"
            @error="handleError" :map-options="{
                mapId: mapId
            }">
            <Marker :position="center" :options="{
                icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }" />
            <Marker :position="{ lat: center.lat + 0.001, lng: center.lng + 0.001 }" :options="{
                icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            }" />
            <slot></slot>
        </GoogleMap>
        <MapError v-else />
    </div>
    <!-- // mapId: '3bd9ba26b9f9ed7225a2b84c'
:api-key="AIzaSyDV6uvUKMxRn5LvSc1ueGXN4m33Durvs9A" -->
</template>

<script setup>
import { ref } from 'vue'
import MapError from './MapError.vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import { useRuntimeConfig } from '#app'
const hasError = ref(false)
const zoom = ref(15)
const center = ref({ lat: 40.689247, lng: -74.044502 })
const config = useRuntimeConfig()
const handleError = () => {
    hasError.value = true
}

const apiKey = config.public.googleMapApiKey
const mapId = config.public.googleMapMapId
</script>

<style scoped>
.map-container {
    width: 100%;
    height: 500px;
    position: relative;
}
</style>
