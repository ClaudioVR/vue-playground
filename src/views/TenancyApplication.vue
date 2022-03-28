<template>
  <div>
    <v-container>
      <h2>Tenancy Application</h2>
      
      <v-stepper class="mt-12" v-model="e1">
        <v-stepper-header>
          <v-stepper-step editable :complete="e1 > 1" step="1">Tenant Details</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 2" step="2">Property details</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card flat
              class="mb-12"
            >
              <v-card-title class="d-md-none">
                Tenant details
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4" sm="2">
                    <v-text-field
                    dark
                      outlined dense
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8"></v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      outlined dense
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      outlined dense
                      label="Middle name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      outlined dense
                      label="Surname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      outlined dense
                      label="Date of birth"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-none d-sm-flex" sm="9"></v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      outlined dense
                      label="Nationality"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-none d-sm-flex" sm="8"></v-col>
                  <v-col cols="12" sm="4">
                    <v-select
                      outlined dense
                      :items="workingStatus"
                      label="Status"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
           

            <v-btn
              color="primary"
              @click="e1 = 2"
            >
              Continue
            </v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              falt
            >
             <v-card-title class="d-md-none">
                Contact details
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      outlined dense
                      label="Mobile number"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-none d-sm-flex" sm="8"></v-col>
                  <v-col cols="12" sm="4" >
                    <v-text-field
                      outlined dense
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-btn
              color="primary"
              @click="e1 = 3"
            >
              Continue
            </v-btn>
            <v-btn
              class="mx-2"
              outlined
              color="primary"
              @click="e1 = 1"
            >
              Back
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="e1 = 1"
            >
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'application-form',
  data() {
    return {
      e1: 1,
      workingStatus: [
        'Employed',
        'Self employed',
        'unemployed',
        'Student',
        'Funding by own means',
        'Retired',
        'Compnay',
        'Employed by a council'
      ]
    }
  },
}
</script>

<style>

</style>