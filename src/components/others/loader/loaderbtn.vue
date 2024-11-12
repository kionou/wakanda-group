<template >
    <div>
        <i class="bi bi-arrow-clockwise fs-4"></i>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
.bi-arrow-clockwise {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    
</style>