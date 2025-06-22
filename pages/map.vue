<template>
    <div class="container">
        <Suspense>
            <template #default>
                <CommonMap />
            </template>
            <template #fallback>
                <div class="loading">
                    <div class="loading-content">
                        <span>Loading map...</span>
                    </div>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    min-height: 500px;
    position: relative;
}

.loading {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
}

.loading-content {
    padding: 2rem;
    text-align: center;
    color: #666;
}
</style>