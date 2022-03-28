<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn color="primary" class="mr-4" @click="dialog = true" dark>
              Create Event
            </v-btn>
            <v-btn outlined class="mr-4" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn
                  outlined
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>

        <!-- Event dialog  -->
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-container>
              <v-form @submit.prevent="addEvent">
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      v-model="name"
                      type="text"
                      label="Event Name"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn class="mx-2" fab dark small :color="color" @click="colorPicker = !colorPicker"></v-btn>
                    <div v-if="colorPicker" class="d-flex justify-center">
                      <v-color-picker v-model="color"></v-color-picker>
                    </div>
                  </v-col>
                </v-row>

                <v-switch
                  v-model="allDay"
                  label="All day"
                ></v-switch>

                <v-row>
                  <v-col>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          label="Pick start date"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col>
                    <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="endDate"
                          label="Pick end date"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="endDate" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>

                <!-- TIME SELECTORS -->
                <v-row v-if="!allDay">
                  <v-col>
                    <v-menu
                      ref="menu"
                      v-model="timeMenu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="startTime"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="startTime"
                          label="event starts"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timeMenu"
                        v-model="startTime"
                        full-width
                        @click:minute="$refs.menu.save(startTime)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                  <v-col>
                    <v-menu
                      ref="menuEnd"
                      v-model="timeMenu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="endTime"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="endTime"
                          label="event ends"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="timeMenu2"
                        v-model="endTime"
                        full-width
                        @click:minute="$refs.menuEnd.save(endTime)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                </v-row>
<!-- 
                <v-text-field
                  v-model="color"
                  type="color"
                  label="event colour"
                ></v-text-field> -->

                <v-select
                  :items="properties"
                  label="Link property"
                ></v-select>

                <v-select
                  v-model="emptyArray"
                  :items="persons"
                  :menu-props="{ maxHeight: '400' }"
                  label="Link person"
                  multiple
                  persistent-hint
                ></v-select>

                <v-text-field
                  v-model="details"
                  type="text"
                  label="Details"
                ></v-text-field>

                <v-btn type="submit" color="success" @click.stop="dialog = false">Create Event</v-btn>

              </v-form>
            </v-container>
          </v-card>
        </v-dialog>

        <v-sheet height="600" v-touch:swipe="swipeHandler">
          <v-calendar
            
            ref="calendar"
            v-model="focus"
            color="red"
            :events="events"
            :event-color="getEventColor"
            :event-margin-bottom="3"
            :now="today"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-toolbar-title>{{selectedEvent.name}} - {{selectedEvent.id}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-if="currentlyEditing !== selectedEvent.id">
                  {{ selectedEvent.details }}
                </v-form>
                <v-form v-else>
                  <textarea 
                    v-model="selectedEvent.details"
                    type="text"
                    style="width: 100%"
                    :min-height="100"
                    placeholder="add note"
                  ></textarea>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Close
                </v-btn>
                <v-btn
                  text
                  v-if="currentlyEditing !== selectedEvent.id"
                  @click.prevent="editEvent(selectedEvent)"
                >
                  Edit
                </v-btn>
                <v-btn
                  text
                  v-else
                  @click.prevent="updateEvent(selectedEvent)"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      startTime: '08:00',
      endTime: '09:00',
      allDay: false,
      colorPicker: false,
      timeMenu: false,
      timeMenu2: false,
      menu: false,
      menu2: false,
      emptyArray: [],
      properties: [
        '15 Dogfield Rd',
        '23 Cathays Tr cf10 425',
        '112 Newport Rd'
      ],
      persons: [
        'Tony Ja',
        'Andrew North',
        'Greg Murphy',
        'James Grey',
        'Rosemary Thomson'
      ],
      today: new Date().toISOString().substring(0,10),
      focus: new Date().toISOString().substring(0,10),
      date: new Date().toISOString().substring(0,10),
      endDate: new Date().toISOString().substring(0,10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      dialog: false,
      name: null, 
      details: null,
      start: null,
      end: null,
      color: "#1976D2",
      currentlyEditing: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
        {
          name: 'Vacation',
          details: 'Going to the beach!',
          start: '2019-11-29',
          color: 'blue',
          id: '1',
        },
        {
          name: 'Doctor',
          details: 'Appointment 13:00',
          start: '2019-11-09',
          color: 'blue',
          id: '2',
        },
                {
          name: 'Shopping',
          details: '14:00',
          start: '2019-11-19',
          color: 'green',
          id: '3',
        },
        {
          name: 'Car wash',
          details: '16:00',
          start: '2019-11-19',
          color: 'yellow',
          id: '4',
        },
        {
          name: 'Groceries',
          details: '17:00',
          start: '2019-11-19',
          color: 'blue',
          id: '5',
        },
        {
          name: 'Dentist',
          details: 'Remeber to brush your teeth',
          start: '2019-11-10',
          color: 'green',
          id: '6',
        },
      ],
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    mounted () {
      this.$refs.calendar.checkChange();
      this.events.forEach(event => {
        console.log(event.id)
      })
    },
    methods: {
      swipeHandler (direction) {
        if(direction === 'left') {
          console.log('left')
          this.next()
        } else if(direction === 'right') {
          console.log('right')
            this.prev()
        }
      },
      randomID() {
        let result = ''
        let characters = 'abcdefghijklmnopqrstuvwxyz'
        let charsLength = characters.length
        for (let i =0; i < 5; i++) {
          result += characters.charAt(Math.floor(Math.random() * charsLength))
          
        }
        return result
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      editEvent(event) {
        this.currentlyEditing = event.id
      },
      updateEvent() {
        this.selectedOpen = false,
        this.currentlyEditing = null
      },
      addEvent() {
        if(this.name && this.start) {
          this.events.push({
            name: this.name,
            details: this.details,
            start: this.date,
            end: this.endDate,
            color: this.color,
            // id: this.randomID
          })
        } else {
          alert("Name, start and end are required!")
        }
        this.name = '',
        this.details = '',
        this.date = new Date().toISOString().substring(0,10),
        this.endDate = new Date().toISOString().substring(0,10),
        this.end = '',
        this.color = "#1976D2"
      },
      deleteEvent(id) {
        this.events = this.events.filter(event => {
          if(event.id !== id) {
            return event
          }
        })
        this.selectedOpen = false,
        this.currentlyEditing = null
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>
