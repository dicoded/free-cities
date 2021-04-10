<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Choice from '../../../components/ui/Choice.svelte';
  import Response from '../../../components/ui/Response.svelte';
  import Section from '../../../components/ui/Section.svelte';

  import { Sex } from '../../../ts/classes/body/nonphysical/Nonphysical';
  import Penis from '../../../ts/classes/body/lower/crotch/Penis';
  import Vagina, { LabiaType } from '../../../ts/classes/body/lower/crotch/Vagina';

  import PC from '@stores/player.store';
  import see from '@stores/see.store';

  $see.sex = false;
</script>

<Section>
  <p class="my-4">
    Most slaveowners in the Free Cities are male. The preexisting power structures of the old world have mostly migrated
    to the new, and it can often be very hard to be a free woman in the Free Cities. Some manage to make their way, but
    in many arcologies, men are the owners, and women are the owned.
    <Choice>
      You'll cut a striking figure as the owner and leader of your arcology, but what's under your business
      attire?
    </Choice>
  </p>

  <div>
    <div class="flex">
      <Button
        selected={$PC.sex === Sex.MALE && $see.sex}
        handler={() => {
          $PC.sex = Sex.MALE;
          $PC.lower.crotch.penis = new Penis();
          $PC.lower.crotch.vagina = null;

          $see.sex = true;
      }}>
        Male
      </Button>
      <Button
        selected={$PC.sex ===  Sex.FEMALE && $see.sex}
        handler={() => {
          $PC.sex = Sex.FEMALE;
          $PC.lower.crotch.vagina = new Vagina();
          $PC.lower.crotch.penis = null;

          $see.sex = true;
      }}>
        Female
      </Button>
    </div>

    {#if $PC.sex && $see.sex}
      {#if $PC.sex === Sex.MALE}
        <Response>
          I am a <span class="rb">{$PC.sex}</span>
          {#if $PC.penis}
            with a <span class="rb">natural penis</span>{#if $PC.vagina}&nbsp;and an <span class="rb">artificial vagina</span>{/if}.
          {:else}
            {#if $PC.vagina}
              with an artificial <span class="rb">vagina</span>.
            {:else}
              with <span class="rb">no genitals</span>.
            {/if}
          {/if}
        </Response>
      {:else}
        <Response>
          I am a <span class="rb">{$PC.sex}</span>
          {#if $PC.penis}
            with an artificial <span class="rb">penis</span>{#if $PC.vagina}&nbsp;and a <span class="rb">natural vagina</span>{/if}.
          {:else}
            {#if $PC.vagina}
              with a natural <span class="rb">vagina</span>.
            {:else}
              with <span class="rb">no genitals</span>.
            {/if}
          {/if}
        </Response>
      {/if}

      <div class="flex">
        <Button
          selected={$PC.penis !== null }
          handler={() => {
            if (!$PC.penis) {
              $PC.lower.crotch.penis = new Penis();
            } else {
              $PC.lower.crotch.penis = null;
            }
        }}>
          Penis
        </Button>
        <Button
          selected={$PC.vagina !== null }
          handler={() => {
            if (!$PC.vagina) {
              $PC.lower.crotch.vagina = new Vagina();
            } else {
              $PC.lower.crotch.vagina = null;
            }
        }}>
          Vagina
        </Button>
      </div>

      {#if $PC.penis}
        <div>
          <div class="my-4">
            <Choice>How long is your penis?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={$PC.penis?.length.between(1, 7)}
              handler={() => { $PC.penisLength = 5 }}>
              Tiny
            </Button>
            <Button
              selected={$PC.penis?.length.between(8, 11)}
              handler={() => { $PC.penisLength = 10 }}>
              Small
            </Button>
            <Button
              selected={$PC.penis?.length.between(12, 14)}
              handler={() => { $PC.penisLength = 14 }}>
              Average
            </Button>
            <Button
              selected={$PC.penis?.length.between(15, 18)}
              handler={() => { $PC.penisLength = 18 }}>
              Big
            </Button>
            <Button
              selected={$PC.penis?.length.between(19, 24)}
              handler={() => { $PC.penisLength = 24 }}>
              Huge
            </Button>
          </div>

          <Response>
            I have a <span class="rb">{$PC.penis?.length.toInches().round(1)} inch</span> cock.
          </Response>
        </div>

        <div>
          <div class="my-4">
            <Choice>How thick is it?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={$PC.penis?.girth.between(1, 6)}
              handler={() => { $PC.penisGirth = 5 }}>
              Skinny
            </Button>
            <Button
              selected={$PC.penis?.girth.between(7, 10)}
              handler={() => { $PC.penisGirth = 10 }}>
              Thin
            </Button>
            <Button
              selected={$PC.penis?.girth.between(11, 14)}
              handler={() => { $PC.penisGirth = 12 }}>
              Average
            </Button>
            <Button
              selected={$PC.penis?.girth.between(15, 17)}
              handler={() => { $PC.penisGirth = 16 }}>
              Thick
            </Button>
            <Button
              selected={$PC.penis?.girth.between(18, 22)}
              handler={() => { $PC.penisGirth = 20 }}>
              Fat
            </Button>
          </div>

          <Response>
            My dick is <span class="rb">{$PC.penis?.girth.toInches().round(1)}
            inch{$PC.penis?.girth.toInches().round(1) !== 1 ? 'es' : ''}</span> thick.
          </Response>
        </div>
      {/if}

      {#if $PC.vagina}
        <div>
          <div class="my-4">
            <Choice>What do your labia look like?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={$PC.vagina?.labia === LabiaType.MINIMAL}
              handler={() => { $PC.labiaType = LabiaType.MINIMAL }}>
              Minimal
            </Button>
            <Button
              selected={$PC.vagina?.labia === LabiaType.BIG}
              handler={() => { $PC.labiaType = LabiaType.BIG }}>
              Big
            </Button>
            <Button
              selected={$PC.vagina?.labia === LabiaType.HUGE}
              handler={() => { $PC.labiaType = LabiaType.HUGE }}>
              Huge
            </Button>
            <Button
              selected={$PC.vagina?.labia === LabiaType.DANGLING}
              handler={() => { $PC.labiaType = LabiaType.DANGLING }}>
              Dangling
            </Button>
          </div>

          <Response>
            {#if $PC.vagina?.labia === LabiaType.MINIMAL}
              I have <span class="rb">very minimal</span> labia.
            {:else if $PC.vagina?.labia === LabiaType.BIG}
              My labia are <span class="rb">big and puffy</span>.
            {:else if $PC.vagina?.labia === LabiaType.HUGE}
              I have <span class="rb">huge, obvious</span> labia.
            {:else}
              My labia are <span class="rb">long and dangly</span>.
            {/if}
          </Response>
        </div>
      {/if}

      <div>
        <div class="my-4">
          <Choice>Are you a virgin?</Choice>
        </div>

        <div class="flex">
          <Button
            selected={$PC.isTrueVirgin}
            handler={() => {
              if ($PC.vagina) $PC.virginal = true;
              $PC.lower.crotch.anus.virgin = true;
              $PC.counter.reset();
          }}>
            Yes
          </Button>
        <Button
          selected={!$PC.isTrueVirgin}
          handler={() => {
            if ($PC.vagina) $PC.virginal = false;

            if ($PC.penis) {
              $PC.counter.vaginal.given.dick = 1;
              $PC.counter.anal.given.dick = 1;
            } else if ($PC.vagina) {
              $PC.counter.vaginal.received.dick = 1
            } else {
              $PC.counter.anal.received.dick = 1
            }
        }}>
          No
        </Button>
        </div>

        <Response>
          {#if $PC.isTrueVirgin}
            <span class="rb">Yes</span>, I've never had any kind of sex.
          {:else}
            <span class="rb">No</span>, I've had sex before.
          {/if}
        </Response>
      </div>

      {#if !$PC.isTrueVirgin}
        {#if $PC.vagina}
          <div>
            <div class="my-4">
              <Choice>Have you ever had vaginal sex?</Choice>
            </div>

            <div class="flex">
              <Button
                selected={!$PC.isVaginalVirgin}
                handler={() => {
                  if ($PC.vagina) $PC.virginal = false;
                  $PC.counter.vaginal.received.dick = 1;
              }}>
                Yes
              </Button>
              <Button
                selected={$PC.isVaginalVirgin}
                handler={() => {
                  if ($PC.vagina) $PC.virginal = true;
                  $PC.counter.vaginal.received.dick = 0;
              }}>
                No
              </Button>
            </div>


            <Response>
              {#if !$PC.isVaginalVirgin}
                <span class="rb">Yes</span>, my pussy has been fucked before.
              {:else}
                <span class="rb">No</span>, my pussy is still virginal.
              {/if}
            </Response>
          </div>
        {/if}

        <div>
          <div class="my-4">
            <Choice>Have you ever had anal sex?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={!$PC.isAnalVirgin}
              handler={() => {
                $PC.anus.virgin = false;
                $PC.counter.anal.received.dick = 1;
            }}>
              Yes
            </Button>
            <Button
              selected={$PC.isAnalVirgin}
              handler={() => {
                $PC.anus.virgin = true;
                $PC.counter.anal.received.dick = 0;
            }}>
              No
            </Button>
          </div>

          <Response>
            {#if !$PC.isAnalVirgin}
              <span class="rb">Yes</span>, I've been fucked in the ass before.
            {:else}
              <span class="rb">No</span>, I've never had a cock in my ass.
            {/if}
          </Response>
        </div>

        {#if $PC.penis || $PC.vagina}
          <div>
            <div class="my-4">
              <Choice>Have you ever recieved oral sex?</Choice>
            </div>

            <div class="flex">
              <Button
                selected={$PC.counter.oral.received.dick > 0}
                handler={() => { $PC.abstract.counter.oral.received.dick = 1 }}>
                Yes
              </Button>
              <Button
                selected={!$PC.counter.oral.received.dick}
                handler={() => { $PC.abstract.counter.oral.received.dick = 0 }}>
                No
              </Button>
            </div>

            <Response>
              {#if $PC.counter.oral.received.dick}
                <span class="rb">Yes</span>, I've had my {$PC.penis
                  ? $PC.vagina
                    ? 'dick sucked and pussy eaten'
                    : 'dick sucked'
                  : 'pussy eaten'} before.
              {:else}
                <span class="rb">No</span>, I've never had my {$PC.penis
                  ? $PC.vagina
                    ? 'dick sucked or pussy eaten'
                    : 'dick sucked'
                  : 'pussy eaten'} before.
              {/if}
            </Response>
          </div>
        {/if}

        <div>
          <div class="my-4">
            <Choice>Have you ever given oral sex to a male before?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={$PC.counter.oral.given.dick > 0}
              handler={() => { $PC.counter.oral.given.dick = 1 }}>
              Yes
            </Button>
            <Button
              selected={!$PC.counter.oral.given.dick}
              handler={() => { $PC.counter.oral.given.dick = 0 }}>
              No
            </Button>
          </div>

          <Response>
            {#if $PC.counter.oral.given.dick}
              <span class="rb">Yes</span>, I've
            {:else}
              <span class="rb">No</span>, I've never
            {/if}
            sucked cock before.
          </Response>
        </div>

        <div>
          <div class="my-4">
            <Choice>Have you ever given oral sex to a female before?</Choice>
          </div>

          <div class="flex">
            <Button
              selected={$PC.counter.oral.given.pussy > 0}
              handler={() => { $PC.counter.oral.given.pussy = 1 }}>
              Yes
            </Button>
            <Button
              selected={!$PC.counter.oral.given.pussy}
              handler={() => { $PC.counter.oral.given.pussy = 0 }}>
              No
            </Button>
          </div>

          <Response>
            {#if $PC.counter.oral.given.pussy}
              <span class="rb">Yes</span>, I've eaten pussy in the past.
            {:else}
              <span class="rb">No</span>, I've never eaten pussy.
            {/if}
          </Response>
        </div>
      {/if}
    {/if}
  </div>
</Section>
