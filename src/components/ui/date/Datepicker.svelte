<script lang="ts">
	// Taken from https://github.com/6eDesign/svelte-calendar as importing as module wasn't working

	import Month from "./Month.svelte";
	import NavBar from "./Navbar.svelte";
	import Popover from "./Popover.svelte";
	import { getMonths } from "@util/date";
	import { formatDate, internationalize } from "timeUtils";
	import { keyCodes, keyCodesArray } from "@util/keycodes";
	import { onMount, createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	const today = new Date();
	const oneYear = 1000 * 60 * 60 * 24 * 365;

	let popover;

	export let format: string|((arg0: any) => any) = "#{m}/#{d}/#{Y}";
	export let start = new Date(Date.now() - oneYear);
	export let end = new Date(Date.now() + oneYear);
	export let selected = today;
	export let dateChosen = false;
	export let trigger = null;
	export let selectableCallback = null;
	export let weekStart = 0;

	export let daysOfWeek = [
		["Sunday", "Sun"],
		["Monday", "Mon"],
		["Tuesday", "Tue"],
		["Wednesday", "Wed"],
		["Thursday", "Thu"],
		["Friday", "Fri"],
		["Saturday", "Sat"],
	];

	export let monthsOfYear = [
		["January", "Jan"],
		["February", "Feb"],
		["March", "Mar"],
		["April", "Apr"],
		["May", "May"],
		["June", "Jun"],
		["July", "Jul"],
		["August", "Aug"],
		["September", "Sep"],
		["October", "Oct"],
		["November", "Nov"],
		["December", "Dec"],
	];

	selected =
		selected.getTime() < start.getTime() || selected.getTime() > end.getTime()
			? start
			: selected;

	let highlighted = today;
	let shouldShakeDate = false;
	let shakeHighlightTimeout;
	let month = today.getMonth();
	let year = today.getFullYear();
	let isOpen = false;
	let isClosing = false;

	internationalize({ daysOfWeek, monthsOfYear });

	let sortedDaysOfWeek =
		weekStart === 0
			? daysOfWeek
			: (() => {
					let dow = daysOfWeek.slice();
					dow.push(dow.shift());
					return dow;
			  })();

	today.setHours(0, 0, 0, 0);

	function assignmentHandler(formatted) {
		if (!trigger) return;
		trigger.innerHTML = formatted;
	}
	$: months = getMonths(start, end, selectableCallback, weekStart);
	let monthIndex = 0;

	$: {
		monthIndex = 0;
		for (let i = 0; i < months.length; i += 1) {
			if (months[i].month === month && months[i].year === year) {
				monthIndex = i;
			}
		}
	}
	$: visibleMonth = months[monthIndex];
	$: visibleMonthId = year + month / 100;
	$: lastVisibleDate =
		visibleMonth.weeks[visibleMonth.weeks.length - 1].days[6].date;
	$: firstVisibleDate = visibleMonth.weeks[0].days[0].date;
	$: canIncrementMonth = monthIndex < months.length - 1;
	$: canDecrementMonth = monthIndex > 0;

	export let formattedSelected;
	$: {
		formattedSelected =
			typeof format === "function"
				? format(selected)
				: formatDate(selected, format);
	}
	onMount(() => {
		month = selected.getMonth();
		year = selected.getFullYear();
	});

	function changeMonth(selectedMonth) {
		month = selectedMonth;
		highlighted = new Date(year, month, 1);
	}

	function incrementMonth(direction: number, day = 1) {
		if (direction === 1 && !canIncrementMonth) return;
		if (direction === -1 && !canDecrementMonth) return;
		let current = new Date(year, month, 1);

		current.setMonth(current.getMonth() + direction);
		month = current.getMonth();
		year = current.getFullYear();
		highlighted = new Date(year, month, day);
	}

	function getDefaultHighlighted() {
		return new Date(selected);
	}
	const getDay = (m, d, y) => {
		let theMonth = months.find(
			(aMonth) => aMonth.month === m && aMonth.year === y
		);

		if (!theMonth) return null;

		for (let i = 0; i < theMonth.weeks.length; ++i) {
			for (let j = 0; j < theMonth.weeks[i].days.length; ++j) {
				let aDay = theMonth.weeks[i].days[j];
				if (aDay.month === m && aDay.day === d && aDay.year === y) return aDay;
			}
		}
		return null;
	};

	function incrementDayHighlighted(amount) {
		let proposedDate = new Date(highlighted);

		proposedDate.setDate(highlighted.getDate() + amount);

		let correspondingDayObj = getDay(
			proposedDate.getMonth(),
			proposedDate.getDate(),
			proposedDate.getFullYear()
		);

		if (!correspondingDayObj || !correspondingDayObj.isInRange) return;

		highlighted = proposedDate;

		if (amount > 0 && highlighted > lastVisibleDate) {
			incrementMonth(1, highlighted.getDate());
		}

		if (amount < 0 && highlighted < firstVisibleDate) {
			incrementMonth(-1, highlighted.getDate());
		}
	}

	function checkIfVisibleDateIsSelectable(date) {
		const proposedDay = getDay(
			date.getMonth(),
			date.getDate(),
			date.getFullYear()
		);

		return proposedDay && proposedDay.selectable;
	}

	function shakeDate(date) {
		clearTimeout(shakeHighlightTimeout);
		shouldShakeDate = date;
		shakeHighlightTimeout = setTimeout(() => {
			shouldShakeDate = false;
		}, 700);
	}

	function assignValueToTrigger(formatted) {
		assignmentHandler(formatted);
	}

	function registerSelection(chosen) {
		if (!checkIfVisibleDateIsSelectable(chosen)) return shakeDate(chosen);
		close();
		selected = chosen;
		dateChosen = true;
		assignValueToTrigger(formattedSelected);
		return dispatch("dateSelected", { date: chosen });
	}

	function handleKeyPress(evt) {
		if (keyCodesArray.indexOf(evt.keyCode) === -1) return;
		evt.preventDefault();

		switch (evt.keyCode) {
			case keyCodes.left:
				incrementDayHighlighted(-1);
				break;
			case keyCodes.up:
				incrementDayHighlighted(-7);
				break;
			case keyCodes.right:
				incrementDayHighlighted(1);
				break;
			case keyCodes.down:
				incrementDayHighlighted(7);
				break;
			case keyCodes.pgup:
				incrementMonth(-1);
				break;
			case keyCodes.pgdown:
				incrementMonth(1);
				break;
			case keyCodes.escape:
				close();
				break;
			case keyCodes.enter:
				registerSelection(highlighted);
				break;
			default:
				break;
		}
	}

	function registerClose() {
		document.removeEventListener("keydown", handleKeyPress);
		dispatch("close");
	}

	function close() {
		popover.close();
		registerClose();
	}

	function registerOpen() {
		highlighted = getDefaultHighlighted();
		month = selected.getMonth();
		year = selected.getFullYear();
		document.addEventListener("keydown", handleKeyPress);
		dispatch("open");
	}
</script>

<div
  class="datepicker item hover"
  class:open="{isOpen}"
  class:closing="{isClosing}"
>
  <Popover
    bind:this="{popover}"
    bind:open="{isOpen}"
    bind:shrink="{isClosing}"
    {trigger}
    on:opened="{registerOpen}"
    on:closed="{registerClose}"
  >
    <div slot="trigger">
      <slot {selected} {formattedSelected}>
        {#if !trigger}
        <button class="calendar-button" type="button">
          {formattedSelected}
        </button>
        {/if}
      </slot>
    </div>
    <div slot="contents">
      <div class="calendar">
        <NavBar
          {month}
          {year}
          {canIncrementMonth}
          {canDecrementMonth}
          {start}
          {end}
          {monthsOfYear}
          on:monthSelected={e => changeMonth(e.detail)}
          on:incrementMonth={e => incrementMonth(e.detail)}
        />
        <div class="legend">
          {#each sortedDaysOfWeek as day}
          <span>{day[1]}</span>
          {/each}
        </div>
        <Month
          {visibleMonth}
          {selected}
          {highlighted}
          {shouldShakeDate}
          id={visibleMonthId}
          on:dateSelected={e => registerSelection(e.detail)}
        />
      </div>
    </div>
  </Popover>
</div>

<style>
  .datepicker {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    overflow: visible;
  }

  .calendar-button {
    text-align: center;
    text-decoration: none;
		cursor: pointer;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .calendar {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    user-select: none;
    width: 100vw;
    padding: 10px;
    padding-top: 0;
  }

  @media (min-width: 480px) {
    .calendar {
      height: auto;
      width: 340px;
      max-width: 100%;
    }
  }

  .legend {
    padding: 10px 0;
    margin-bottom: 5px;
  }

  .legend span {
    width: 14.285714%;
    display: inline-block;
    text-align: center;
  }
</style>
