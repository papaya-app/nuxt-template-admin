<template>
  <div class='flex items-center justify-center h-screen'>
    <div class='flex flex-col'>
      <InputText class='mb-2' />
      <InputText class='mb-2' />
      <Button
        class='justify-center'
        @click='ok'
      >
        登录
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
async function ok() {

  const { data: count } = await useFetch('/ss/abc')
}
</script>
