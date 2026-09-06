"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { formatPrice, whatsappLink, type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/lib/toast-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { showToast } = useToast()
  const [added, setAdded] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleAdd() {
    addItem(product)
    showToast(`تمت إضافة ${product.name} إلى السلة`)
    setAdded(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setAdded(false), 1000)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        <span className="absolute right-3 top-3 z-10 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          {product.category}
        </span>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base font-bold leading-tight text-card-foreground text-balance">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-baseline gap-1.5">
          <span className="text-xl font-extrabold text-primary">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground">دينار عراقي</span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
              added
                ? "border-green-500 bg-green-500 text-white focus-visible:ring-green-500"
                : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary"
            }`}
            aria-label={`أضف ${product.name} إلى السلة`}
          >
            {added ? (
              <>
                <Check className="size-4" strokeWidth={3} />
                تمت الإضافة ✓
              </>
            ) : (
              <>
                <Plus className="size-4" />
                أضف للسلة
              </>
            )}
          </button>

          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            aria-label={`اطلب ${product.name} عبر واتساب`}
          >
            <WhatsAppIcon className="size-4" />
            طلب عبر واتساب
          </a>
        </div>
      </div>
    </article>
  )
}
