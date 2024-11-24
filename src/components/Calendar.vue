<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue';
import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { events, calendars } from '../store';
import { formatDate } from '../utils/time'


const monthGrid = createViewMonthGrid()

const calendarApp = createCalendar({
    selectedDate: formatDate(new Date()).split(' ')[0],
    views: [monthGrid, createViewMonthAgenda(), createViewWeek(), createViewDay()],
    defaultView: monthGrid.name,
    events,
    calendars,
    isDark: true,
    firstDayOfWeek: 0,
    dayBoundaries: {
        start: '05:00',
        end: '20:00',
    },
    monthGridOptions: {
        nEventsPerDay: 8
    },

})
</script>

<template>
    <div class="legend">
        <span class="legend-item" :style="`background-color: var(--sx-color-${calendar.colorName}-container)`"
            v-for="calendar in calendars" :key="calendar.colorName">
            {{ calendar.colorName[0].toUpperCase() + calendar.colorName.slice(1) }}
        </span>
    </div>
    <ScheduleXCalendar style="height: 85vh" :calendar-app="calendarApp">
        <!-- <template #monthGridEvent="{ calendarEvent }">
            <div class="sx__month-grid-day__events">
                <div draggable="false" data-event-id="8" tabindex="0" role="button"
                    class="sx__event sx__month-grid-event sx__month-grid-cell"
                    :style="`grid-row: 1; width: calc(100% - 9px); border-left: 4px solid var(--sx-color-${calendarEvent.calendarId}); color: var(--sx-color-on-${calendarEvent.calendarId}-container); background-color: var(--sx-color-${calendarEvent.calendarId}-container);`">
                    <div class="sx__month-grid-event-time">{{ calendarEvent.start.split(' ')[1] }}</div>
                    <div class="sx__month-grid-event-title">{{ calendarEvent.title }}</div>
                </div>
            </div>
        </template> -->

    </ScheduleXCalendar>
</template>

<style>
.legend {
    margin: 20px 0;

}

.legend-item {
    padding: 10px;
    margin-right: 20px;
    border-radius: 5px;
}


.sx-vue-calendar-wrapper {
    max-height: 90vh;
}
</style>