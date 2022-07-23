<script setup>
import { Calendar, DatePicker } from 'v-calendar';
</script>

<template>
<div>
  <DatePicker v-model="date" mode="dateTime"/>
</div>
</template>

<script>
export default {
data() {
  return {
    date: new Date(),
  }
}
}
</script>