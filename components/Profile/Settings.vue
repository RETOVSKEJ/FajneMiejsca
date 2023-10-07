<script setup>
const client = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_path = ref("");

loading.value = true;
const user = useSupabaseUser();

let { data } = await client
  .from("profiles")
  .select(`username, website, avatar_url`)
  .eq("id", user.value.id)
  .single();

if (data) {
  username.value = data.username;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
  console.log("AVATAR PATH VALUE", avatar_path.value);
}

loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };

    let { error } = await client.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });

    if (error) throw error;
  } catch (error) {
    console.error(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await client.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error(error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <ProfileAvatarUpload v-model:path="avatar_path" @upload="updateProfile" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <v-btn>
      <input
        type="submit"
        class=""
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </v-btn>

    <div>
      <v-btn class="button block" @click="signOut" :disabled="loading">
        Sign Out
      </v-btn>
    </div>
  </form>
</template>

<style scoped>
input {
  border: 1px solid black;
  border-radius: 8px;
}
</style>
