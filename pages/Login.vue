<script setup lang="ts">
const { status, signIn } = useSession();
const handleLogin = async () => {
    await signIn();
    if (status.value === 'authenticated') {
        navigateTo("/")
    }
};
</script>
<template>
    <div class="w-full min-h-screen grid-layout">
        <button @click="handleLogin" class="flex-center space-x-2 border-2 border-green-500 py-2 px-4 rounded-md hover:border-3 hover:border-green-600 hover:bg-white hover:text-black transition duration-200 ease-in">
            <Icon name="ri:github-fill" class="text-xl"/>
            <span>Login With Github</span>
        </button>
    </div>
</template>