<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const classes = computed(() => [
  'ft-btn',
  `ft-btn-${props.variant}`,
  `ft-btn-${props.size}`,
]);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="classes"
    @click="(e) => emit('click', e)"
  >
    <slot name="leading"></slot>
    <slot></slot>
    <slot name="trailing"></slot>
  </button>
</template>

<style scoped>
.ft-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-primary, 'Outfit', sans-serif);
  font-weight: var(--font-weight-bold, 700);
  border-radius: var(--radius-md, 8px);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration-fast, 150ms) var(--ease-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.ft-btn:focus-visible {
  outline: 2px solid var(--color-focus-ring, #F09320);
  outline-offset: 2px;
}

.ft-btn:disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* Invariant 1: Solar Amber MUST HAVE Midnight Obsidian (#070D18) text for 8.24:1 AAA */
.ft-btn-primary {
  background-color: var(--color-action-primary, #F09320);
  color: var(--color-slate-950, #070D18) !important;
}

.ft-btn-primary:hover {
  background-color: var(--color-action-primary-hover, #D47911);
  transform: translateY(-1px);
}

.ft-btn-secondary {
  background-color: var(--color-action-secondary, #4694B1);
  color: var(--color-white, #FFFFFF);
}

.ft-btn-secondary:hover {
  background-color: var(--color-action-secondary-hover, #377A93);
}

.ft-btn-outline {
  background-color: transparent;
  border-color: var(--color-border-primary, #1E293B);
  color: var(--color-text-primary, #F8FAFC);
}

.ft-btn-outline:hover {
  border-color: var(--color-action-primary, #F09320);
  color: var(--color-action-primary, #F09320);
}

.ft-btn-ghost {
  background-color: transparent;
  color: var(--color-text-secondary, #94A3B8);
}

.ft-btn-ghost:hover {
  color: var(--color-text-primary, #F8FAFC);
  background-color: rgba(255, 255, 255, 0.06);
}

.ft-btn-destructive {
  background-color: var(--color-action-destructive, #EF4444);
  color: var(--color-white, #FFFFFF);
}

.ft-btn-destructive:hover {
  background-color: var(--color-crimson-600, #DC2626);
}

.ft-btn-sm { height: 32px; padding: 0 var(--space-3, 12px); font-size: var(--font-size-xs, 0.75rem); }
.ft-btn-md { height: 40px; padding: 0 var(--space-4, 16px); font-size: var(--font-size-sm, 0.875rem); }
.ft-btn-lg { height: 48px; padding: 0 var(--space-6, 24px); font-size: var(--font-size-base, 1rem); }
</style>

