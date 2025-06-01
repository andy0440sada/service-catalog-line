export interface ConstructedApp {
  id: string // Unique ID for the constructed app instance
  templateId: string // e.g., "miniapp", "segment_message"
  displayName: string // User-friendly name, e.g., "会員証LINEミニアプリ"
  createdAt: string // ISO date string
  // Add any other relevant app details here, e.g., status, a link to the app itself
}
