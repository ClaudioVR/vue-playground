<template>
  <div class="dashboard">
    <v-container>
      <div class="mt-n10 d-flex justify-space-between align-center">
        <div>
          <v-img
            class="px-0 ml-n5 mb-n8"
            width="300"
            src="../assets/logo-12.svg"
            alt="Logo ipsum"
          ></v-img>
        </div>
        <div id="agent-logo">
          <v-img
            class="mt-10"
            width="75"
            src="../assets/agentos-logo.webp"
            alt="Logo ipsum"
          ></v-img>
        </div>
      </div>
      <!-- My version of the dashboard -->
      <v-row v-if="!fullView">
        <v-col
          v-for="(category, index) in categories"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card :style="{ 'border-left': category.borderStyle }">
            <v-card-title class="py-0">
              <v-row>
                <v-col cols="9">
                  <v-icon :color="category.color" class="mr-2">{{
                    category.icon
                  }}</v-icon>
                  <span class="title">{{ category.name }}</span>
                </v-col>
                <v-col cols="2"> </v-col>
              </v-row>
            </v-card-title>
            <v-card-subtitle>
              <v-btn
                @click="toggleAmountData(category, index)"
                class="px-0 mr-3"
                text
                color="grey"
                v-for="(link, index) in category.secondaryNavigation"
                :key="index"
              >
                <span
                  class="text-capitalize"
                  :class="{ 'font-weight-light': !link.selected }"
                  >{{ link.name }}</span
                >
              </v-btn>
            </v-card-subtitle>
            <v-card-text>
              <!-- only rendering 3 rows of data unles the show more btn is clicked -->
              <div
                class="my-3"
                v-for="(subcat, index) in category.subCategories"
                :key="index"
              >
                <div
                  class="d-flex body-1"
                  v-if="showMoreCategories(category, index)"
                >
                  <span class="ml-5">{{ subcat.name }}</span>
                  <span v-if="!category.showAmountA" class="ml-auto">{{
                    subcat.amount
                  }}</span>
                  <span v-else class="ml-auto">{{ subcat.amountA }}</span>
                </div>
              </div>
              <v-divider class="my-3"></v-divider>
              <div
                @click.stop="toggleShowCategories(category)"
                class="d-flex justify-space-between"
              >
                <div>
                  <v-btn
                    class="px-0 mx-0"
                    text
                    v-if="category.primaryNavigation.length"
                  >
                    <span class="grey--text caption text-capitalize">{{
                      category.primaryNavigation[0].name
                    }}</span>
                  </v-btn>
                  <v-btn
                    class="px-0 mx-0"
                    text
                    v-if="category.primaryNavigation.length"
                  >
                    <span class="grey--text caption text-capitalize">{{
                      category.primaryNavigation[1].name
                    }}</span>
                  </v-btn>
                </div>
                <v-btn v-if="category.numberOfCategoriesToShow <= 3" text
                  >show more...</v-btn
                >
                <v-btn v-else text>hide..</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- The full version of the dashboard witll all the icons etc  -->
      <v-row v-if="fullView">
        <v-col
          v-for="(category, index) in categories"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card :style="{ 'border-left': category.borderStyle }">
            <v-card-title class="headline">
              <v-icon :color="category.color" class="mr-2">{{
                category.icon
              }}</v-icon>
              {{ category.name }}
            </v-card-title>
            <v-card-text>
              <div
                class="my-3"
                v-for="(subcat, index) in category.subCategories"
                :key="index"
              >
                <div class="d-flex body-1">
                  <v-icon>{{ subcat.icon }}</v-icon>
                  <span class="ml-5">{{ subcat.name }}</span>
                  <span v-if="!category.showAmountA" class="ml-auto">{{
                    subcat.amount
                  }}</span>
                  <span v-else class="ml-auto">{{ subcat.amount }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-switch v-model="fullView" label="Change card view"></v-switch>
    </v-container>
  </div>
</template>

<script>
// import VueFlip from 'vue-flip';
export default {
  components: {
    // 'vue-flip': VueFlip
  },
  data() {
    return {
      flipped: false,
      testBoolean: true,
      fullView: false,
      categories: [
        {
          name: "Overview",
          primaryNavigation: [{ name: "buyer" }, { name: "applicant" }],
          secondaryNavigation: [
            { name: "Assigned", selected: true },
            { name: "Branch Company", selected: false },
          ],
          borderStyle: "8px solid blue",
          color: "blue",
          icon: "mdi-format-list-bulleted-type",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          subCategories: [
            {
              name: "Unconverted internet leads",
              amountA: 4,
              amount: 5,
              icon: "mdi-account",
            },
            {
              name: "Calls & emails to make",
              amountA: 12,
              amount: 10,
              icon: "mdi-account",
            },
            {
              name: "Post-it notes",
              amountA: 2,
              amount: 5,
              icon: "mdi-account",
            },
            {
              name: "Jointly listed properties",
              amountA: 3,
              amount: 4,
              icon: "mdi-account",
            },
            {
              name: "Active buyers",
              amountA: 122,
              amount: 129,
              icon: "mdi-account",
            },
            {
              name: "Active applicants",
              amountA: 52,
              amount: 67,
              icon: "mdi-account",
            },
            {
              name: "Data accuracy",
              amountA: 8,
              amount: 5,
              icon: "mdi-account",
            },
          ],
        },
        {
          name: "Sales & lets activity",
          primaryNavigation: [{ name: "seller" }, { name: "landlord" }],
          secondaryNavigation: [
            { name: "Assigned", selected: true },
            { name: "Branch Company", selected: false },
          ],
          borderStyle: "5px solid red",
          color: "red",
          icon: "mdi-bank-transfer",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          subCategories: [
            {
              name: "Market appraisals",
              amountA: 3,
              amount: 5,
              icon: "mdi-account",
            },
            {
              name: "New instructions",
              amountA: 8,
              amount: 6,
              icon: "mdi-account",
            },
            {
              name: "Properties for sale",
              amountA: 44,
              amount: 45,
              icon: "mdi-account",
            },
            {
              name: "Properties for let",
              amountA: 33,
              amount: 32,
              icon: "mdi-account",
            },
            { name: "Under offer", amountA: 3, amount: 4, icon: "mdi-account" },
            { name: "Let agreed", amountA: 9, amount: 7, icon: "mdi-account" },
            {
              name: "Tenancies ending/renewing",
              amountA: 11,
              amount: 3,
              icon: "mdi-account",
            },
            { name: "Withdrawn", amountA: 12, amount: 6, icon: "mdi-account" },
          ],
        },
        {
          name: "Sales Progression",
          primaryNavigation: [],
          secondaryNavigation: [
            { name: "Assigned", selected: true },
            { name: "Branch Company", selected: false },
          ],
          borderStyle: "5px solid grey",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: "grey",
          icon: "mdi-finance",
          subCategories: [
            {
              name: "Progression to do",
              amountA: 5,
              amount: 22,
              icon: "mdi-account",
            },
            {
              name: "Current offers",
              amountA: 3,
              amount: 8,
              icon: "mdi-account",
            },
            {
              name: "Progression & chaind",
              amountA: 8,
              amount: 5,
              icon: "mdi-account",
            },
            {
              name: "Properties exchanged",
              amountA: 7,
              amount: 4,
              icon: "mdi-account",
            },
            {
              name: "Properties sold",
              amountA: 12,
              amount: 10,
              icon: "mdi-account",
            },
            {
              name: "Fees pipeline",
              amountA: 12,
              amount: 5,
              icon: "mdi-account",
            },
          ],
        },
        {
          name: "Prospecting",
          primaryNavigation: [],
          secondaryNavigation: [
            { name: "Branch", selected: true },
            { name: "Company", selected: false },
          ],
          borderStyle: "5px solid green",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: "green",
          icon: "mdi-phone",
          subCategories: [
            {
              name: "Prospect calls to make",
              amountA: 4,
              amount: 5,
              icon: "mdi-account",
            },
            {
              name: "Calls completed",
              amountA: 6,
              amount: 4,
              icon: "mdi-account",
            },
            {
              name: "Calls skipped",
              amountA: 2,
              amount: 3,
              icon: "mdi-account",
            },
            {
              name: "agentWatch opportunities",
              amountA: 8,
              amount: 13,
              icon: "mdi-account",
            },
            {
              name: "agentWatch letters sent",
              amountA: 9,
              amount: 10,
              icon: "mdi-account",
            },
          ],
        },
        {
          name: "Online request",
          primaryNavigation: [],
          secondaryNavigation: [
            { name: "Assigned", selected: true },
            { name: "Branch Company", selected: false },
          ],
          borderStyle: "5px solid orange",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: "orange",
          icon: "mdi-weather-cloudy",
          subCategories: [
            {
              name: "Sales instructions",
              amountA: 7,
              amount: 1,
              icon: "mdi-account",
            },
            {
              name: "Lettings instructions",
              amountA: 6,
              amount: 0,
              icon: "mdi-account",
            },
            {
              name: "Login request",
              amountA: 4,
              amount: 1,
              icon: "mdi-account",
            },
            {
              name: "Tenancy application",
              amountA: 6,
              amount: 4,
              icon: "mdi-account",
            },
            {
              name: "Maintenance request",
              amountA: 6,
              amount: 6,
              icon: "mdi-account",
            },
          ],
        },
        {
          name: "Property management",
          primaryNavigation: [{ name: "cert" }, { name: "maintenance" }],
          secondaryNavigation: [
            { name: "Assigned", selected: true },
            { name: "Branch Company", selected: false },
          ],
          borderStyle: "5px solid purple",
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: "purple",
          icon: "mdi-home-city",
          subCategories: [
            {
              name: "Progression to do",
              amountA: 17,
              amount: 15,
              icon: "mdi-account",
            },
            {
              name: "Maintenance requests",
              amountA: 7,
              amount: 6,
              icon: "mdi-account",
            },
            {
              name: "Certificates",
              amountA: 9,
              amount: 8,
              icon: "mdi-account",
            },
            { name: "Move ins", amountA: 3, amount: 1, icon: "mdi-account" },
            {
              name: "Inspections due",
              amountA: 6,
              amount: 4,
              icon: "mdi-account",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleAmountData(category, index) {
      if (index === 0) {
        category.showAmountA = false;
        category.secondaryNavigation[0].selected = true;
        category.secondaryNavigation[1].selected = false;
      } else {
        category.showAmountA = true;
        category.secondaryNavigation[0].selected = false;
        category.secondaryNavigation[1].selected = true;
      }
    },
    showMoreCategories(category, index) {
      if (index < category.numberOfCategoriesToShow) return true;
    },
    toggleShowCategories(category) {
      if (category.numberOfCategoriesToShow == 3) {
        category.numberOfCategoriesToShow = 20;
      } else {
        category.numberOfCategoriesToShow = 3;
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
/* #border {
  border-left: 3px solid red !important;
} */
.dashboard {
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(125, 192, 232, 1) 60%,
    rgba(184, 237, 241, 1) 100%
  );
}
.v-card__text div {
  cursor: pointer !important;
}

.v-card__text div:hover {
  background: rgba(231, 231, 231, 0.575);
}
</style>