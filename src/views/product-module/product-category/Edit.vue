<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Edit Product Category</h2>
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
      <input
        type="text"
        class="px-4 py-3 pr-10 intro-y form-control box"
        v-model="form.name"
        placeholder="name"
      />

      <TabGroup class="mt-5 overflow-hidden post intro-y box">
        <TabList
          class="flex-col page__tabs nav-tabs sm:flex-row bg-slate-200 dark:bg-darkmode-800"
        >
          <Tab :fullWidth="false" class="w-full px-0 py-0 sm:w-40" tag="button">
            <Tippy
              content="Fill in the article content"
              class="flex items-center justify-center w-full py-4 tooltip"
              aria-controls="content"
              aria-selected="true"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
          </Tab>
        </TabList>
        <TabPanels class="post__content">
          <TabPanel class="p-5">
            <div
              class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
            >
              <div
                class="flex items-center pb-5 font-medium border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <ChevronDownIcon class="w-4 h-4 mr-2" /> Text Content
              </div>
              <div class="mt-5">
                <ClassicEditor v-model="form.desc"/>

              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->

    <!-- END: Post Info -->
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import router from '@/router';
import { useRoute } from 'vue-router';
import ProductCategory from "@/api/productcategory";
import { helper } from "@/utils/helper";

const route = useRoute()

const productCategories = ref([])

const form = ref({
  name: "",
  desc: "",
});


const save = async () => {
  console.log(form.value)
  await ProductCategory.update(form.value).then(response => {
    helper.showSuccess("Data updated successfuly")
    router.push({name: "product-category-list"})
  }).catch(error => {
    helper.showError(error)
  })
};

onBeforeMount( async () => {
  const ProductCategoryRes = await ProductCategory.find(route.params.id);
  form.value = ProductCategoryRes;
})


</script>
