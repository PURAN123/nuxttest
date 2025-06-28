import { GoogleMap } from 'vue3-google-map';

// Vue.use(GoogleMap, {
//   load: {
//     key: 'AIzaSyDV6uvUKMxRn5LvSc1ueGXN4m33Durvs9A',
//     libraries: 'places',
//   },
// });

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const apiKey = config.public.googleMapApiKey || process.env.GOOGLE_MAP_API_KEY
    
    // More detailed API key validation
    if (!apiKey) {
        console.error('Google Maps API key is not configured. Please add GOOGLE_MAP_API_KEY to your .env file')
        return
    }

    if (apiKey === 'YOUR_API_KEY' || apiKey.includes('your') || apiKey.includes('api') || apiKey.includes('key')) {
        console.error('Invalid Google Maps API key. Please replace the placeholder with your actual API key')
        return
    }

    // Add error handler for Maps loading issues
    window.gm_authFailure = () => {
        console.error('Google Maps authentication failed. This usually means your API key is invalid or has restrictions.')
        nuxtApp.vueApp.config.globalProperties.$mapsError = 'API_KEY_ERROR'
    }

    // Add error handler for blocked requests
    window.addEventListener('error', (e) => {
        if (e.target?.src?.includes('maps.googleapis.com')) {
            console.warn('Google Maps loading failed. This may be due to an ad blocker or privacy extension blocking Google Maps requests. Please disable your ad blocker for this site if you want to use the map features.')
            nuxtApp.vueApp.config.globalProperties.$mapsError = 'BLOCKED_ERROR'
        }
    }, true)

    // Register the GoogleMap component globally
    nuxtApp.vueApp.component('GoogleMap', GoogleMap)
    
    // Return the plugin configuration
    return {
        provide: {
            googleMapsApiKey: apiKey,
            googleMapsLibraries: ['all']
        }
    }
})