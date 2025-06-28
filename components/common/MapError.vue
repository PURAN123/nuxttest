<template>
    <div class="map-error">
        <div class="map-error__content">
            <template v-if="errorType === 'API_KEY_ERROR'">
                <h3>Google Maps API Key Error</h3>
                <p>The map failed to load due to an API key issue. This could be because:</p>
                <ul>
                    <li>The API key is missing or invalid</li>
                    <li>The API key has restrictions that prevent it from working on this domain</li>
                    <li>The API key has not been enabled for Maps JavaScript API</li>
                </ul>
                <p class="mt-4"><strong>For developers:</strong></p>
                <ol>
                    <li>Add your Google Maps API key to the .env file:</li>
                    <code>GOOGLE_MAP_API_KEY=your_api_key_here</code>
                    <li>Make sure the API key is enabled for Maps JavaScript API in the Google Cloud Console</li>
                    <li>Check that your API key's restrictions (if any) allow this domain</li>
                </ol>
            </template>

            <template v-else-if="errorType === 'BLOCKED_ERROR'">
                <h3>Map Loading Issue</h3>
                <p>The Google Maps component failed to load. This is likely due to:</p>
                <ul>
                    <li>An ad blocker preventing Google Maps from loading</li>
                    <li>A privacy extension blocking Google Maps requests</li>
                </ul>
                <p>To use the map features, please:</p>
                <ol>
                    <li>Disable your ad blocker for this site</li>
                    <li>Refresh the page</li>
                </ol>
            </template>

            <template v-else>
                <h3>Map Loading Error</h3>
                <p>The map failed to load due to an unknown error. Please try:</p>
                <ol>
                    <li>Refreshing the page</li>
                    <li>Checking your internet connection</li>
                    <li>Disabling any ad blockers or privacy extensions</li>
                </ol>
            </template>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, computed } from 'vue'

const app = getCurrentInstance()
const errorType = computed(() => app?.proxy?.$mapsError || 'UNKNOWN')
</script>

<style scoped>
.map-error {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    padding: 2rem;
}

.map-error__content {
    max-width: 500px;
    text-align: left;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.map-error__content h3 {
    color: #dc3545;
    margin-top: 0;
    margin-bottom: 1rem;
}

.map-error__content ul,
.map-error__content ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
}

.map-error__content li {
    margin-bottom: 0.5rem;
}

.map-error__content code {
    display: block;
    background-color: #f8f9fa;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 4px;
    font-family: monospace;
}

.mt-4 {
    margin-top: 1rem;
}
</style>