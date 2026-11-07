<script setup>
import { reactive, ref } from 'vue'
import BaseContainer from '../components/ui/BaseContainer.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import PageHeader from '../components/PageHeader.vue'

const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | loading | done
const submit = () => {
  status.value = 'loading'
  setTimeout(() => {
    status.value = 'done'
    Object.assign(form, { name: '', email: '', message: '' })
  }, 1200)
}

const details = [
  { label: 'Email', value: 'hello@planto.shop', href: 'mailto:hello@planto.shop' },
  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'Studio', value: '12 Green Lane, Ahmedabad, India' },
  { label: 'Hours', value: 'Mon – Sat · 9:00 – 18:00' },
]
const field =
  'h-12 rounded-lg border border-ink/70 bg-transparent px-4 text-body text-ink placeholder:text-ink-subtle ' +
  'transition-colors duration-200 focus:border-leaf-300 focus:outline-hidden'
</script>

<template>
  <div>
    <PageHeader title="Get In Touch" intro="Questions about plant care, an order, or a bulk green makeover for your office? Send us a note." />

    <section class="bg-forest-850 pb-24 pt-8" aria-label="Contact Planto">
      <BaseContainer>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <GlassCard v-reveal radius="panel" class="p-6 sm:p-12 lg:col-span-7">
            <form class="flex flex-col gap-6" @submit.prevent="submit">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="flex flex-col gap-2">
                  <label for="contact-name" class="text-caption font-semibold text-ink">Name</label>
                  <input id="contact-name" v-model="form.name" type="text" autocomplete="name" placeholder="Your name" required :class="field" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="contact-email" class="text-caption font-semibold text-ink">Email</label>
                  <input id="contact-email" v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com" required :class="field" />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label for="contact-message" class="text-caption font-semibold text-ink">Message</label>
                <textarea id="contact-message" v-model="form.message" rows="6" placeholder="How can we help?" required :class="[field, 'h-auto resize-y py-4']"></textarea>
              </div>
              <div class="flex flex-wrap items-center gap-4">
                <button type="submit" :disabled="status === 'loading'"
                  class="inline-flex h-10 min-w-36 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-body font-medium text-forest-900 transition-[background-color,transform,scale] duration-200 ease-out-expo hover:bg-leaf-300 active:scale-[0.96] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-850 disabled:cursor-wait">
                  <span v-if="status === 'loading'" class="h-4 w-4 animate-spin rounded-full border-2 border-forest-900/30 border-t-forest-900" role="status" aria-label="Sending"></span>
                  <span v-else>Send message</span>
                </button>
                <p v-if="status === 'done'" class="text-caption text-leaf-300" role="status">Thanks! We’ll get back to you within one business day.</p>
              </div>
            </form>
          </GlassCard>

          <GlassCard v-reveal="120" radius="panel" class="flex flex-col gap-6 p-6 sm:p-12 lg:col-span-5">
            <h2 class="text-h3 text-ink">Visit or reach us</h2>
            <dl class="flex flex-col gap-6">
              <div v-for="d in details" :key="d.label" class="flex flex-col gap-1">
                <dt class="text-overline uppercase text-ink-muted">{{ d.label }}</dt>
                <dd class="m-0 text-body text-ink">
                  <a v-if="d.href" :href="d.href" class="rounded-sm transition-colors duration-200 hover:text-leaf-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300">{{ d.value }}</a>
                  <template v-else>{{ d.value }}</template>
                </dd>
              </div>
            </dl>
          </GlassCard>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>
