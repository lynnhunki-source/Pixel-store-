"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { formatPrice, WHATSAPP_NUMBER, type Product } from "@/lib/products"

export type CartItem = Product & { quantity: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clear: () => void
  checkoutLink: string
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = "pixel-store-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore quota errors
    }
  }, [items, hydrated])

  function addItem(product: Product) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  function increment(id: string) {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    )
  }

  function decrement(id: string) {
    setItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p,
        )
        .filter((p) => p.quantity > 0),
    )
  }

  function clear() {
    setItems([])
  }

  const count = useMemo(
    () => items.reduce((sum, p) => sum + p.quantity, 0),
    [items],
  )

  const total = useMemo(
    () => items.reduce((sum, p) => sum + p.price * p.quantity, 0),
    [items],
  )

  const checkoutLink = useMemo(() => {
    const lines = items
      .map(
        (p) =>
          `• ${p.name} × ${p.quantity} = ${formatPrice(p.price * p.quantity)} د.ع`,
      )
      .join("\n")
    const message = `مرحباً، أرغب بطلب المنتجات التالية من متجر Pixel Store:\n\n${lines}\n\nالمجموع الكلي: ${formatPrice(
      total,
    )} دينار عراقي`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }, [items, total])

  const value: CartContextValue = {
    items,
    count,
    total,
    addItem,
    removeItem,
    increment,
    decrement,
    clear,
    checkoutLink,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
