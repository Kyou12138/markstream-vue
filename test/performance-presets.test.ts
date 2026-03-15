import { describe, expect, it } from 'vitest'
import {
  getNodeRendererPerformancePreset,
  NODE_RENDERER_PERFORMANCE_PRESETS,
} from '../src/utils/performance-presets'

describe('node renderer performance presets', () => {
  it('exposes expected preset defaults', () => {
    expect(NODE_RENDERER_PERFORMANCE_PRESETS.virtualWindow.maxLiveNodes).toBe(320)
    expect(NODE_RENDERER_PERFORMANCE_PRESETS.typing.maxLiveNodes).toBe(0)
    expect(NODE_RENDERER_PERFORMANCE_PRESETS.typing.renderBatchSize).toBe(16)
    expect(NODE_RENDERER_PERFORMANCE_PRESETS.memorySaver.maxLiveNodes).toBe(160)
  })

  it('returns a copy when resolving a preset', () => {
    const preset = getNodeRendererPerformancePreset('typing')
    expect(preset).not.toBe(NODE_RENDERER_PERFORMANCE_PRESETS.typing)
    expect(preset).toEqual(NODE_RENDERER_PERFORMANCE_PRESETS.typing)
  })

  it('supports overriding partial fields', () => {
    const preset = getNodeRendererPerformancePreset('typing', {
      renderBatchSize: 20,
      viewportPriority: false,
    })

    expect(preset.renderBatchSize).toBe(20)
    expect(preset.viewportPriority).toBe(false)
    expect(preset.maxLiveNodes).toBe(0)
    expect(preset.renderBatchDelay).toBe(8)
  })
})
