<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { data, signOut } = useSession();
const handleLogOut = async () => {
  await signOut();
  navigateTo("/login")
};
</script>
<template>
  <div class="grid-layout min-h-screen">
    <div class="text-white space-y-3">
      <p class="text-center" @click="handleLogOut">I am protected</p>
      <p> Name: {{ data?.user?.name }}</p>
      <p>Email: {{ data?.user?.email }}</p>
     <div class="grid-layout">
      <button @click="handleLogOut" class="py-2 px-4 text-white border border-green-500 rounded-md transition duration-200 ease-in hover:border-green-600">Sign Out</button>
     </div>
    </div>
  </div>
</template>