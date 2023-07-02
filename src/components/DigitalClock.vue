<template>
    <div class="flexb">
      <div
        class="w-full lg:w-1/6 m-auto p-7 shadow-lg shadow-pink-400 border-4 border-t-purple-600 border-r-pink-600 border-b-pink-600 border-l-indigo-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <p class="font-bold text-white pt-3 text-6xl">
          {{ currentTime.toLocaleTimeString() }}
        </p>
        <p class="font-bold text-white text-xl mb-1 flex justify-end mr-3">
          {{ currentTime.toLocaleDateString() }}
        </p>
      </div>
    </div>
  </template>
  <script type="module">
  import { useCurrentTime } from "../composables/useCurrentTime";
  export default {
    name: "CurrentTimeExample",
    setup() {
      const { currentTime } = useCurrentTime();
      console.log(currentTime.value);
      return { currentTime };
    },
  };
  </script>

  <style>
  .flexb{
    display: flex;
    margin-left: -1180px;

  }
  </style>
  