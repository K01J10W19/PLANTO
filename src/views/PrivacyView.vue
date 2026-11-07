<script setup>
import BaseContainer from '../components/ui/BaseContainer.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import PageHeader from '../components/PageHeader.vue'

const sections = [
  { title: 'Information we collect', body: 'When you place an order, subscribe to updates or contact us, we collect the details you provide — such as your name, email address, delivery address and order history.' },
  { title: 'How we use it', body: 'We use your information to process and deliver orders, answer your questions, and — only if you opt in — send plant care tips and product updates. We never sell your personal data.' },
  { title: 'Cookies', body: 'Planto uses only the cookies required to keep the site working, such as remembering the contents of your cart. No third-party advertising cookies are used.' },
  { title: 'Your choices', body: 'You can unsubscribe from emails at any time using the link in every message, and you may request a copy or deletion of your data by contacting hello@planto.shop.' },
]
</script>

<template>
  <div>
    <PageHeader title="Privacy Policy" intro="Last updated 26 October 2026" />
    <section class="bg-forest-850 pb-24 pt-8" aria-label="Privacy policy">
      <BaseContainer>
        <GlassCard v-reveal radius="panel" class="mx-auto flex max-w-[880px] flex-col gap-12 p-6 sm:p-12">
          <article v-for="s in sections" :key="s.title" class="flex flex-col gap-4">
            <h2 class="text-h3 text-ink">{{ s.title }}</h2>
            <p class="max-w-[64ch] text-body text-ink-muted">{{ s.body }}</p>
          </article>
        </GlassCard>
      </BaseContainer>
    </section>
  </div>
</template>
