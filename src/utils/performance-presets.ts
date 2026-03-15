export type NodeRendererPerformancePresetName
  = | 'virtualWindow'
    | 'typing'
    | 'memorySaver'

export interface NodeRendererPerformancePreset {
  batchRendering: boolean
  initialRenderBatchSize: number
  renderBatchSize: number
  renderBatchDelay: number
  renderBatchBudgetMs: number
  renderBatchIdleTimeoutMs: number
  deferNodesUntilVisible: boolean
  maxLiveNodes: number
  liveNodeBuffer: number
  viewportPriority: boolean
}

export const NODE_RENDERER_PERFORMANCE_PRESETS = {
  virtualWindow: {
    batchRendering: true,
    initialRenderBatchSize: 40,
    renderBatchSize: 80,
    renderBatchDelay: 16,
    renderBatchBudgetMs: 6,
    renderBatchIdleTimeoutMs: 120,
    deferNodesUntilVisible: true,
    maxLiveNodes: 320,
    liveNodeBuffer: 60,
    viewportPriority: false,
  },
  typing: {
    batchRendering: true,
    initialRenderBatchSize: 12,
    renderBatchSize: 16,
    renderBatchDelay: 8,
    renderBatchBudgetMs: 4,
    renderBatchIdleTimeoutMs: 80,
    deferNodesUntilVisible: true,
    maxLiveNodes: 0,
    liveNodeBuffer: 24,
    viewportPriority: true,
  },
  memorySaver: {
    batchRendering: true,
    initialRenderBatchSize: 24,
    renderBatchSize: 48,
    renderBatchDelay: 16,
    renderBatchBudgetMs: 5,
    renderBatchIdleTimeoutMs: 120,
    deferNodesUntilVisible: true,
    maxLiveNodes: 160,
    liveNodeBuffer: 40,
    viewportPriority: true,
  },
} as const satisfies Record<NodeRendererPerformancePresetName, Readonly<NodeRendererPerformancePreset>>

export function getNodeRendererPerformancePreset(
  name: NodeRendererPerformancePresetName,
  overrides: Partial<NodeRendererPerformancePreset> = {},
): NodeRendererPerformancePreset {
  return {
    ...NODE_RENDERER_PERFORMANCE_PRESETS[name],
    ...overrides,
  }
}
