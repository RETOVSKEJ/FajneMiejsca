<script setup>
const props = defineProps(["path"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const client = useSupabaseClient();

const uploading = ref(false);
const src = ref("");
const files = ref();

const downloadImage = async () => {
  try {
    console.log("SCIEZKA", path.value);
    const { data, error } = await client.storage
      .from("avatars")
      .download(path.value);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    console.error("Error downloading image: ", error.message);
  }
};

const uploadAvatar = async (evt) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;

    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    let { data, error } = await client.storage
      .from("avatars")
      .upload(filePath, file);

    console.log("UPLOAD", data, error);
    // console.log(error, uploadError);

    if (error) throw uploadError;

    emit("update:path", filePath);
    emit("upload");
  } catch (error) {
    console.log(error);
  } finally {
    uploading.value = false;
  }
};

downloadImage();

// aktualizuje avatar
watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>

<template>
  <div>
    <v-progress-circular v-if="uploading" indeterminate></v-progress-circular>
    <ProfileAvatar v-else :src="src" />
    <!-- <div v-else class="avatar no-image" :style="{ height: 64, width: 64 }" /> -->

    <div>
      <v-file-input
        label="Upload Avatar"
        id="single"
        variant="solo-filled"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>

<style scoped></style>
