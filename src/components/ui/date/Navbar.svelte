<script>
	// Taken from https://github.com/6eDesign/svelte-calendar as importing as module wasn't working

  import { createEventDispatcher } from 'svelte';
  import InlineInput from './../InlineInput.svelte';

  const dispatch = createEventDispatcher();

  export let month;
  export let year = new Date().getFullYear();
  export let start;
  export let end;
  export let canIncrementMonth;
  export let canDecrementMonth;
  export let monthsOfYear;

  let monthSelectorOpen = false;
  let availableMonths;

  $: {
    let isOnLowerBoundary = start.getFullYear() === year;
    let isOnUpperBoundary = end.getFullYear() === year;
    availableMonths = monthsOfYear.map((m, i) => {
      return Object.assign({}, {
        name: m[0],
        abbrev: m[1]
      }, {
        selectable:
          (!isOnLowerBoundary && !isOnUpperBoundary)
          || (
            (!isOnLowerBoundary || i >= start.getMonth())
            && (!isOnUpperBoundary || i <= end.getMonth())
          )
      });
    });
  }

  function toggleMonthSelectorOpen() {
    monthSelectorOpen = !monthSelectorOpen;
  }

  function monthSelected(event, { m, i }) {
    event.stopPropagation();
    if (!m.selectable) return;
    dispatch('monthSelected', i);
    toggleMonthSelectorOpen();
  }
</script>

<div class="title">
  <div class="heading-section">
    <div class="control"
      class:enabled={canDecrementMonth}
      on:click={() => dispatch('incrementMonth', -1)}>
      <i class="arrow left"></i>
    </div>
    <div class="label" on:click={toggleMonthSelectorOpen}>
      {monthsOfYear[month][0]} {year}
    </div>
    <div class="control"
      class:enabled={canIncrementMonth}
      on:click={() => dispatch('incrementMonth', 1)}>
      <i class="arrow right"></i>
    </div>
  </div>
  <div class="month-selector" class:open={monthSelectorOpen}>
    {#each availableMonths as monthDefinition, index}
      <div
        class="month-selector--month"
        class:selected={index === month}
        class:selectable={monthDefinition.selectable}
        on:click={e => monthSelected(e, { m: monthDefinition, i: index })}
      >
        <span>{monthDefinition.abbrev}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .heading-section {
    font-size: 20px;
    padding: 24px 15px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .label {
    cursor: pointer;
  }

  .month-selector {
    @apply bg-gray-800;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 300ms;
    transform: scale(1.2);
    opacity: 1;
    visibility: hidden;
    z-index: 1;
    text-align: center;
  }

  .month-selector.open {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
  }

  .month-selector--month {
    @apply bg-gray-700;
    @apply border-2;
    @apply border-gray-600;
    @apply rounded-lg;
    width: 31.333%;
    margin: 1%;
    height: 23%;
    display: inline-block;
    opacity: 0.35;
  }

  .month-selector--month.selectable {
    @apply bg-gray-700;
    opacity: 1;
  }

  .month-selector--month.selectable:hover {
    @apply bg-gray-600;
    cursor: pointer;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.15);
  }

  .month-selector--month.selected {
    @apply bg-gray-600;
  }

  .month-selector--month:before {
    content: ' ';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .month-selector--month span {
    vertical-align: middle;
    display: inline-block;
  }

  .control {
    padding: 0 8px;
    opacity: 0.2;
    transform: translateY(3px);
  }

  .control.enabled {
    opacity: 1;
    cursor: pointer;
  }

  .arrow {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-style: solid;
    border-color: #a9a9a9;
    border-width: 0;
    border-bottom-width: 2px;
    border-right-width: 2px;
  }

  .arrow.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .arrow.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

</style>
