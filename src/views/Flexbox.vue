<template>
  <div>
    <!-- <div class="container">
      <div class="box" v-for="x in 6" :key="x">
        <div class="display-1">Title</div>
        <p class="wsubtitle-1">Subtitle header</p>
      </div>
    </div> -->
  <div class="container-wrapper">
    <div class="container">
      <v-card class="box pt-0" v-for="category in categories" :key="category.name" :style="{'border-left': category.borderStyle}">

        <v-card-text>
          <div class="mt-3 mb-10">
            <div class="title-row">
              <div class="d-flex align-center">
                <v-icon x-large :color="category.color" class="d-block mr-2">{{ category.icon}}</v-icon>
                <span class="title">{{category.name}}</span>
              </div>
            </div>
          </div>

          <span class="text">Button1 / Button2</span>

          <div>
            <v-btn @click="toggleAmountData(category, index)" class="px-0 mr-3" text color="grey" v-for="(link, index) in category.secondaryNavigation" :key="index">
              <span class="text-capitalize green--text" :class="{'font-weight-light grey--text': !link.selected}">{{ link.name }}</span>
            </v-btn>
          </div>

          <div class="my-3" v-for="(subcat, index) in category.subCategories" :key="index"> 
            <div class="d-flex body-1" >
              <span class="ml-5">{{ subcat.name }}</span>
              <span v-if="!category.showAmountA" class="ml-auto">{{ subcat.amount }}</span>
              <span v-else class="ml-auto">{{ subcat.amountA }}</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div></div> 

  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: 'Overview',
          primaryNavigation: [
            {name: 'buyer',},
            {name: 'applicant'}
          ],
          secondaryNavigation: [
            {name: 'Assigned', selected: true},
            {name: 'Branch Company', selected: false}
          ],
          borderStyle: '8px solid blue',
          color: 'blue',
          icon: 'mdi-format-list-bulleted-type',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          subCategories: [
            { name: 'Unconverted internet leads', amountA: 4, amount: 5, icon: 'mdi-account'},
            { name: 'Calls & emails to make', amountA: 12, amount: 10, icon: 'mdi-account'},
            { name: 'Post-it notes', amountA: 2, amount: 5, icon: 'mdi-account'},
            { name: 'Jointly listed properties', amountA: 3, amount: 4, icon: 'mdi-account'},
            { name: 'Active buyers', amountA: 122, amount: 129, icon: 'mdi-account'},
            { name: 'Active applicants', amountA: 52, amount: 67, icon: 'mdi-account'},
            { name: 'Data accuracy', amountA: 8, amount: 5, icon: 'mdi-account'},
          ]
        },
        { name: 'Sales & lets activity',
          primaryNavigation: [
            {name: 'seller',},
            {name: 'landlord'}
          ],
          secondaryNavigation: [
            {name: 'Assigned', selected: true},
            {name: 'Branch Company', selected: false}
          ],
          borderStyle: '5px solid red',
          color: 'red',
          icon: 'mdi-bank-transfer',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          subCategories: [
            { name: 'Market appraisals', amountA: 3, amount: 5, icon: 'mdi-account'},
            { name: 'New instructions', amountA: 8, amount: 6, icon: 'mdi-account'},
            { name: 'Properties for sale', amountA: 44, amount: 45, icon: 'mdi-account'},
            { name: 'Properties for let', amountA: 33, amount: 32, icon: 'mdi-account'},
            { name: 'Under offer', amountA: 3, amount: 4, icon: 'mdi-account'},
            { name: 'Let agreed', amountA: 9, amount: 7, icon: 'mdi-account'},
            { name: 'Tenancies ending/renewing', amountA: 11, amount: 3, icon: 'mdi-account'},
            { name: 'Withdrawn', amountA: 12, amount: 6, icon: 'mdi-account'},
          ]
        },
        { name: 'Sales Progression',
          primaryNavigation: [],
          secondaryNavigation: [
            {name: 'Assigned', selected: true},
            {name: 'Branch Company', selected: false}
          ],
          borderStyle: '5px solid grey',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: 'grey',
          icon: 'mdi-finance',
          subCategories: [
            { name: 'Progression to do', amountA: 5, amount:22, icon: 'mdi-account'},
            { name: 'Current offers', amountA: 3, amount: 8, icon: 'mdi-account'},
            { name: 'Progression & chaind', amountA: 8, amount: 5, icon: 'mdi-account'},
            { name: 'Properties exchanged', amountA: 7, amount: 4, icon: 'mdi-account'},
            { name: 'Properties sold', amountA: 12, amount: 10, icon: 'mdi-account'},
            { name: 'Fees pipeline', amountA: 12, amount: 5, icon: 'mdi-account'},
          ]
        },
        { name: 'Prospecting',
          primaryNavigation: [],
          secondaryNavigation: [
            {name: 'Branch', selected: true},
            {name: 'Company', selected: false}
          ],
          borderStyle: '5px solid green',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: 'green',
          icon: 'mdi-phone',
          subCategories: [
            { name: 'Prospect calls to make', amountA: 4, amount: 5, icon: 'mdi-account'},
            { name: 'Calls completed', amountA: 6, amount: 4, icon: 'mdi-account'},
            { name: 'Calls skipped', amountA: 2, amount: 3, icon: 'mdi-account'},
            { name: 'agentWatch opportunities', amountA: 8, amount: 13, icon: 'mdi-account'},
            { name: 'agentWatch letters sent', amountA: 9, amount: 10, icon: 'mdi-account'},
          ]
        },
        { name: 'Online request',
          primaryNavigation: [],
          secondaryNavigation: [
            {name: 'Assigned', selected: true},
            {name: 'Branch Company', selected: false}
          ],
          borderStyle: '5px solid orange',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: 'orange',
          icon: 'mdi-weather-cloudy',
          subCategories: [
            { name: 'Sales instructions', amountA: 7, amount: 1, icon: 'mdi-account'},
            { name: 'Lettings instructions', amountA: 6, amount: 0, icon: 'mdi-account'},
            { name: 'Login request', amountA: 4, amount: 1, icon: 'mdi-account'},
            { name: 'Tenancy application', amountA: 6, amount: 4, icon: 'mdi-account'},
            { name: 'Maintenance request', amountA: 6, amount: 6, icon: 'mdi-account'},
          ]
        },
        { name: 'Property management',
          primaryNavigation: [
            {name: 'cert'},
            {name: 'maintenance'}
          ],
          secondaryNavigation: [
            {name: 'Assigned', selected: true},
            {name: 'Branch Company', selected: false}
          ],
          borderStyle: '5px solid purple',
          numberOfCategoriesToShow: 3,
          showAmountA: false,
          color: 'purple',
          icon: 'mdi-home-city',
          subCategories: [
            { name: 'Progression to do', amountA: 17, amount: 15, icon: 'mdi-account'},
            { name: 'Maintenance requests', amountA: 7, amount: 6, icon: 'mdi-account'},
            { name: 'Certificates', amountA: 9, amount: 8, icon: 'mdi-account'},
            { name: 'Move ins', amountA: 3, amount: 1, icon: 'mdi-account'},
            { name: 'Inspections due', amountA: 6, amount: 4, icon: 'mdi-account'},
          ]
        },
      ]
    }
  },
  methods: {
    toggleAmountData(category, index) {
      if(index === 0) {
        category.showAmountA = false
        category.secondaryNavigation[0].selected = true
        category.secondaryNavigation[1].selected = false
      } else {
        category.showAmountA = true
        category.secondaryNavigation[0].selected = false
        category.secondaryNavigation[1].selected = true
      }
    },
  }
}
</script>

<style scoped>
  .container-wrapper {
    width: 100%;
    height: 100vh;
    background: rgba(236, 236, 236, 0.212);
    /* display: flex; */
    /* flex-wrap: wrap; */
    background-image: url('../assets/agentos-logo.webp');
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    background-size: 33%;
    background-attachment: fixed;
    background-position: center bottom;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    background: rgba(236, 236, 236, 0.212);

  }

  .box {
    flex: 1 1 300px;
    height: 100px;
    padding: .5rem;
    transition: .4s ease;
    overflow: hidden;
    margin: 5px 5px;
  }

  .box:hover {
    flex: 1 1 500px;
    height: 500px;
  }

  .title-row {

    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>