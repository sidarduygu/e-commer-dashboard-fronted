<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Add New Discount</h2>
    <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
      <button
        @click="$router.back()"
        type="button"
        class="flex items-center ml-auto mr-2 btn btn-dark sm:ml-0"
      >
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back
      </button>
      <button
        @click="save"
        type="button"
        class="flex items-center ml-auto mr-2 btn btn-primary sm:ml-0"
      >
        <SaveIcon class="w-4 h-4 mr-2" /> Save
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-5 mt-5 pos intro-y">
    <!-- BEGIN: Post Content -->
    <div class="col-span-12 intro-y lg:col-span">


      <TabGroup class="mt-5 overflow-hidden post intro-y box">
        <TabList
          class="flex-col page__tabs nav-tabs sm:flex-row bg-slate-200 dark:bg-darkmode-800"
        >

          <Tab :fullWidth="false" class="w-full px-0 py-0 sm:w-40" tag="button">
            <Tippy
              content="Adjust the meta info"
              class="flex items-center justify-center w-full py-4 tooltip"
              aria-selected="false"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Info
            </Tippy>
          </Tab>
        </TabList>
          <TabPanel class="p-5">
            <div class="mt-3">
              <label for="regular-form-1" class="form-label">Name</label>
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.name"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="regular-form-1" class="form-label"
                >Discount-Percent</label
              >
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.discount_percent"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="regular-form-1" class="form-label"
                >Description</label
              >
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.desc"
                placeholder="Input text"
              />
            </div>
            <div class="flex flex-col items-start mt-3 form-check form-switch">
          <label for="post-form-5" class="mb-2 ml-0 form-check-label"
            >Published</label
          >
          <input
            id="post-form-5"
            class="form-check-input"
            type="checkbox"
            :checked="form.status"
            v-model="form.status"
          />
        </div>
          </TabPanel>
      </TabGroup>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->

    <!-- END: Post Info -->
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import router from "@/router";
import Discount from "@/api/Discount";
import { helper } from "@/utils/helper";
const form = ref({
  name: "",
  discount_percent: "",
  desc: "",
  status: true,
});

const categories = ref([])

const save = async () => {
await Discount.create(form.value).then(response => {
  helper.showSuccess('Data Created Successfuly')
  router.push({name: 'discount-list'});
}).catch(error => {
  helper.showError(error)
})
};


</script>
