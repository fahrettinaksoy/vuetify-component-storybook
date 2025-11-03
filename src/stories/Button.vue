<template>
    <v-btn
        :variant="variant"
        :color="color"
        :size="size"
        :elevation="elevation"
        :disabled="disabled"
        @click="onClick"
    >
        {{ label }}
    </v-btn>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    label: string
    variant?: 'flat' | 'text' | 'outlined' | 'tonal' | 'elevated' | 'plain'
    color?: string
    size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
    elevation?: number
    disabled?: boolean
    onClick?: () => void
}>()
</script>
