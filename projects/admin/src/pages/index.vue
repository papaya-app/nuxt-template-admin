<template>
  <a href='user-1'> <Button>user1</Button></a>
  <a href='user-2'> <Button>user2</Button></a>
  <a href='user-3'> <Button>user3</Button></a>
  <a href='user-4'> <Button>user4</Button></a>
  <a href='home'> <Button>home</Button></a>
  {{ version }}
  <Button @click='change'>
    changes
  </Button>
  <InputText />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})

const version = useVersion()
function change() {
  version.value = '1.2.1'
}

</script>

<style scoped>

</style>