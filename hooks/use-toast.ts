import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])
  const toast = ({ title, description }: { title?: string; description?: string }) => {
    // For now, this just logs to the console and alerts you
    console.log("Toast:", title, description)
    alert(`${title}: ${description}`)
  }
  return { toast, toasts }
}