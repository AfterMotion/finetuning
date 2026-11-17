<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string;
  value: string | number;
  unit?: string;
  statusText?: string;
  statusLevel?: 'nominal' | 'elevated' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
  statusLevel: 'nominal',
});

const beaconClass = computed(() => `beacon-${props.statusLevel}`);
const statusTextClass = computed(() => `status-${props.statusLevel}`);
</script>

<template>
  <div class="ft-telemetry-card">
    <div class="ft-telemetry-header">
      <span class="ft-telemetry-label">{{ label }}</span>
      <span :class="['ft-beacon', beaconClass]" aria-hidden="true"></span>
    </div>

    <div class="ft-telemetry-value">
      <span>{{ value }}</span>
      <span v-if="unit" class="ft-telemetry-unit">{{ unit }}</span>
    </div>

    <div v-if="statusText" :class="['ft-telemetry-status', statusTextClass]">
      {{ statusText }}
    </div>
  </div>
</template>

<style scoped>
.ft-telemetry-card {
  background-color: var(--color-bg-surface-elevated, #131D31);
  border: 1px solid var(--color-border-primary, #1E293B);
  border-radius: var(--radius-xl, 16px);
  padding: var(--space-6, 24px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  font-family: var(--font-primary, 'Outfit', sans-serif);
}

.ft-telemetry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2, 8px);
}

.ft-telemetry-label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: var(--font-size-xs, 0.75rem);
  text-transform: uppercase;
  color: var(--color-text-muted, #64748B);
  letter-spacing: 0.05em;
}

.ft-beacon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.beacon-nominal { background-color: var(--color-emerald-500, #10B981); box-shadow: 0 0 8px #10B981; }
.beacon-elevated { background-color: var(--color-amber-500, #F09320); box-shadow: 0 0 8px #F09320; }
.beacon-danger { background-color: var(--color-crimson-500, #EF4444); box-shadow: 0 0 8px #EF4444; }

.ft-telemetry-value {
  font-family: var(--font-display, 'Syne', sans-serif);
  font-size: var(--font-size-3xl, 1.875rem);
  font-weight: var(--font-weight-extrabold, 800);
  color: var(--color-text-primary, #F8FAFC);
  margin-bottom: var(--space-2, 8px);
}

.ft-telemetry-unit {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  color: var(--color-text-muted, #64748B);
  margin-left: var(--space-1, 4px);
}

.ft-telemetry-status {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: var(--font-size-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
}

.status-nominal { color: var(--color-emerald-400, #34D399); }
.status-elevated { color: var(--color-amber-400, #F4AB44); }
.status-danger { color: var(--color-crimson-400, #F87171); }
</style>

