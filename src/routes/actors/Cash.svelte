<script lang="ts">
  import { cash } from '@storesbal.store';

  export let cost: number = 0;
</script>

<div class="flex">
  <div class="w-full p-2 item">
    <div>
      This slave will cost {cost.toCash()}.
    </div>
    <div>
      You have {$cash.toCash()}.
    </div>
  </div>
</div>

