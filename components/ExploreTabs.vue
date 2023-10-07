<template>
  <v-card>
    <v-tabs v-model="currentTab" color="secondary" align-tabs="center">
      <v-tab :value="'CityCard'">Miasta</v-tab>
      <v-tab :value="'PlaceCard'">Miejsca</v-tab>
      <v-tab :value="'ProfileCard'">Użytkownicy</v-tab>
    </v-tabs>
    <v-window v-model="currentTab">
      <v-window-item v-for="tab in Object.keys(tabs)" :key="tab" :value="tab">
        <CustomError>
          <v-container fluid>
            <v-row>
              <v-col v-for="i in MAX_ITEMS_PER_PAGE" :key="i" cols="12" md="4">
                <component
                  :is="tabs[currentTab]"
                  :i="i"
                  :tab="tab"
                  :user="tab === 'ProfileCard' ? data[i] : null"
                />
              </v-col>
            </v-row>
          </v-container>
        </CustomError>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { CityCard, ProfileCard, PlaceCard } from "#components";

const MAX_ITEMS_PER_PAGE = 6;

const tabs = {
  CityCard,
  PlaceCard,
  ProfileCard,
};

const currentTab = ref(null);
const client = useSupabaseClient();

const { data } = await useAsyncData("users", async () => {
  const { data, error } = await client.from("profiles").select("*");
  if (error) throw error;
  return data;
});

if (
  data.value.length < MAX_ITEMS_PER_PAGE &&
  currentTab.value == "ProfileCard"
) {
  currentTab.value = "CityCard";
}
</script>
