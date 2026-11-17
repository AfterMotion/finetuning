<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Button from './Button.vue';

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', payload: { name: string; org: string; venue: string }): void;
}>();

const nameInput = ref<HTMLInputElement | null>(null);
const name = ref('');
const org = ref('');
const venue = ref('ctg-radisson');

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    setTimeout(() => nameInput.value?.focus(), 50);
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit('submit', { name: name.value, org: org.value, venue: venue.value });
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="ft-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vue-modal-title"
      @click.self="emit('close')"
    >
      <div class="ft-modal-dialog">
        <div class="ft-modal-header">
          <div>
            <h2 id="vue-modal-title" class="ft-modal-title">Book Technical Briefing</h2>
            <p class="ft-modal-subtitle">
              Review CAD schematics and stage rigging parameters with senior engineering leads.
            </p>
          </div>
          <button
            type="button"
            class="ft-modal-close"
            aria-label="Close dialog"
            @click="emit('close')"
          >
            ✕
          </button>
        </div>

        <form @submit="handleSubmit" class="ft-modal-form">
          <div class="ft-field">
            <label for="vue-name" class="ft-label">
              Full Name &amp; Title <span class="ft-req">*</span>
            </label>
            <input
              ref="nameInput"
              id="vue-name"
              v-model="name"
              type="text"
              required
              placeholder="e.g. Tanvir Ahmed, Brand Director"
              class="ft-input"
            />
          </div>

          <div class="ft-field">
            <label for="vue-org" class="ft-label">
              Organization / Conglomerate <span class="ft-req">*</span>
            </label>
            <input
              id="vue-org"
              v-model="org"
              type="text"
              required
              placeholder="e.g. BSRM Group / UCB / BYD"
              class="ft-input"
            />
          </div>

          <div class="ft-field">
            <label for="vue-venue" class="ft-label">
              Target City / Venue <span class="ft-req">*</span>
            </label>
            <select id="vue-venue" v-model="venue" class="ft-select">
              <option value="ctg-radisson">Chattogram (Radisson Blu Grand Ballroom)</option>
              <option value="dhk-sheraton">Dhaka (Sheraton Banani Ballroom)</option>
              <option value="ctg-gec">Chattogram (GEC Convention Centre)</option>
            </select>
          </div>

          <div class="ft-modal-actions">
            <Button type="submit" variant="primary" size="lg" style="width: 100%">
              Submit Brief &amp; Request Stage Call
            </Button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ft-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal, 1300);
  background-color: rgba(7, 13, 24, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4, 16px);
}

.ft-modal-dialog {
  width: 100%;
  max-width: 560px;
  background-color: var(--color-bg-surface-elevated, #131D31);
  border: 1px solid var(--color-border-highlight, #334155);
  border-radius: var(--radius-xl, 16px);
  padding: var(--space-8, 32px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  font-family: var(--font-primary, 'Outfit', sans-serif);
}

.ft-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-6, 24px);
}

.ft-modal-title {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: var(--font-weight-extrabold, 800);
  color: var(--color-text-primary, #F8FAFC);
  margin: 0 0 var(--space-1, 4px) 0;
}

.ft-modal-subtitle {
  font-size: var(--font-size-sm, 0.875rem);
  color: var(--color-text-secondary, #94A3B8);
  margin: 0;
}

.ft-modal-close {
  background: transparent;
  border: none;
  color: var(--color-text-muted, #64748B);
  font-size: 1.25rem;
  cursor: pointer;
  padding: var(--space-1, 4px);
}

.ft-modal-close:hover {
  color: var(--color-text-primary, #F8FAFC);
}

.ft-modal-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
}

.ft-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5, 6px);
}

.ft-label {
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-text-secondary, #94A3B8);
}

.ft-req {
  color: var(--color-action-primary, #F09320);
}

.ft-input,
.ft-select {
  height: 44px;
  background-color: var(--color-bg-surface, #0F172A);
  border: 1px solid var(--color-border-primary, #1E293B);
  border-radius: var(--radius-md, 8px);
  color: var(--color-text-primary, #F8FAFC);
  padding: 0 var(--space-3, 12px);
  font-family: inherit;
  font-size: var(--font-size-sm, 0.875rem);
}

.ft-input:focus,
.ft-select:focus {
  outline: none;
  border-color: var(--color-action-primary, #F09320);
  box-shadow: 0 0 0 2px var(--color-focus-ring, #F09320);
}

.ft-modal-actions {
  margin-top: var(--space-2, 8px);
}
</style>

