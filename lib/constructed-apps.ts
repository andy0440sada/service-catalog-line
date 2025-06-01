import type { ConstructedApp } from "@/types/app"

const LOCAL_STORAGE_KEY_PREFIX = "constructed_apps_"

export function getConstructedApps(userId: string): ConstructedApp[] {
  if (typeof window === "undefined") {
    return []
  }
  const key = `${LOCAL_STORAGE_KEY_PREFIX}${userId}`
  const storedApps = localStorage.getItem(key)
  return storedApps ? JSON.parse(storedApps) : []
}

export function addConstructedApp(
  userId: string,
  appData: { templateId: string; displayName: string },
): ConstructedApp {
  if (typeof window === "undefined") {
    // This case should ideally not happen if called from client-side logic
    console.warn("addConstructedApp called on server side")
    // Return a dummy app or throw error, depending on desired handling
    const dummyApp: ConstructedApp = {
      id: `server-dummy-${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...appData,
    }
    return dummyApp
  }

  const currentApps = getConstructedApps(userId)
  const newApp: ConstructedApp = {
    id: `${appData.templateId}-${Date.now()}`, // Simple unique ID
    createdAt: new Date().toISOString(),
    ...appData,
  }

  // Optional: Prevent adding exact duplicates if needed, based on templateId for simplicity
  // For this example, we'll allow multiple constructions of the same template.
  // If you want to avoid duplicates:
  // const existingApp = currentApps.find(app => app.templateId === newApp.templateId && app.displayName === newApp.displayName);
  // if (existingApp) return existingApp;

  const updatedApps = [...currentApps, newApp]
  const key = `${LOCAL_STORAGE_KEY_PREFIX}${userId}`
  localStorage.setItem(key, JSON.stringify(updatedApps))
  return newApp
}

// Optional: function to clear apps for a user (for testing)
export function clearConstructedApps(userId: string): void {
  if (typeof window === "undefined") {
    return
  }
  const key = `${LOCAL_STORAGE_KEY_PREFIX}${userId}`
  localStorage.removeItem(key)
}
