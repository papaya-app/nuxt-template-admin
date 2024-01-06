<template>
  <div>
    home {{ version }} {{ website.name }}
    <Button @click='toChild'>
      child
    </Button>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const version = useVersion()

const website = useWebsiteStore()
function toChild() {
  router.push({ path: '/home/child' })
}
</script>

<style scoped>

</style>