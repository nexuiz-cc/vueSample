<template>
    <div class="flexb">
      <div
        class="lg:w-1/4 m-auto p-7 shadow-lg shadow-pink-400 border-4 border-t-purple-600 border-r-pink-600 border-b-pink-600 border-l-indigo-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >

      <div class="clock" :style="clockStyle">
        <div class="clock-circle"></div>
        <div class="clock-hour" :style="{transform:hourRotate}"></div>
        <div class="clock-minute" :style="{transform:minuteRotate}"></div>
        <div class="clock-second" :style="{transform:secondRotate}"></div>
        <b class="hour" v-for="h in timeList" :key="h">
            <span>
                <i :style="{transform:'scale(1.5)'}">{{h}}</i>
            </span>
        </b>
    </div>
        <p class="font-bold text-white pt-3 text-xl" id="time">
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
    data() {
        return {
            timeList: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            transform: "scale(1)",
            hourRotate: "rotatez(0deg)",
            minuteRotate: "rotatez(0deg)",
            secondRotate: "rotatez(0deg)"
        };
    },
    props: ["time", "color", "border", "bg", "size"],
    computed: {
        clockStyle() {
            return {
                height: this.size,
                width: this.size,
                color: this.color,
                border: this.border,
                background: this.bg
            };
        }
    },
    watch: {
        time() {
            this.show();
        }
    },
    methods: {
        show() {
            this.showTime();
            if (this._timer) clearInterval(this._timer);
            if (!this.time) {
                this._timer = setInterval(() => {
                    this.showTime();
                }, 1000);
            }
        },
        showTime() {
            let times;
            if (this.time) {
                times = this.time.split(":");
            } else {
                const now = new Date();
                times = [now.getHours(), now.getMinutes(), now.getSeconds()];
            }

            let hour = +times[0];
            hour = hour > 11 ? hour - 12 : hour;
            let minute = +times[1];
            let second = +times[2] || 0;
            let hourAngle = hour * 30 + minute * 6 / 360 * 30;
            let minuteAngle = minute * 6;
            let secondAngle = second * 6;
            this.hourRotate = `rotatez(${hourAngle}deg)`;
            this.minuteRotate = `rotatez(${minuteAngle}deg)`;
            this.secondRotate = `rotatez(${secondAngle}deg)`;
        }
    },
    mounted() {
        let scale = this.$el.clientWidth / 120;
        scale = scale > 3 ? 3 : scale;
        this.transform = `scale(${scale})`;
        this.show();
    },
    destroyed() {
        if (this._timer) clearInterval(this._timer);
    }
  };
  </script>

  <style>
  .flexb{
    display: flex;
    margin-left: -680px;
    margin-top: 10px;

  }
  #time{
    position: relative;
    top: 80px;
    left:80px;
    font-size: 45px;
  }
  </style>

  <style lang="scss" scoped>
$angle: 30deg;

.clock {
    position: relative;
    display: inline-block;
    width: 300px;
    height: 300px;
    border: 2px white solid;
    border-radius: 100%;
    text-align: center;
    left: 50px;
    top:50px;
    color: #ffffff;
    margin-top: -50px;

    .hour {
        position: absolute;
        top: 0px;
        left: 50%;
        font-family: 'Calling Code', Courier, monospace;
        font-size: 8px;
        display: block;
        width: 20px;
        height: 50%;
        margin-left: -10px;
        padding-top: 4%;
        font-weight: 400;
        transform-origin: bottom;
        user-select: none;
        box-sizing: border-box;
        > span {
            display: block;
            > i {
                display: block;
                font-style: normal;
            }
        }
    }

    @for $i from 2 through 12 {
        .hour:nth-of-type(#{$i}) {
            transform: rotatez(#{$angle * ($i - 1)});
            > span {
                transform: rotatez(#{-$angle * ($i - 1)});
            }
        }
    }

    .clock-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        transform: translate(-50%, -50%);
        border: 2px solid #666666;
        border-radius: 100%;
        background-color: #ffffff;
        z-index: 1;
        box-sizing: border-box;

        &:before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #666666;
        }
    }

    .clock-hour,
    .clock-minute,
    .clock-second {
        position: absolute;
        top: 15%;
        left: 50%;
        display: block;
        width: 2.5px;
        height: 35%;
        margin-left: -1px;
        border-radius: 5px;
        transform-origin: bottom;
        background-color: #000000;
    }

    .clock-hour {
        top: 30%;
        width: 4px;
        height: 20%;
        margin-left: -2px;
    }

    .clock-second {
        width: 1px;
    }
}

.clock.is-small {
    width: 80px;
    height: 80px;
    border-width: 1px;
    font-size: 12px;

    .clock-circle {
        width: 10px;
        height: 10px;
        border-width: 1px;
        &:before {
            width: 2px;
            height: 2px;
        }
    }
}
</style>
  