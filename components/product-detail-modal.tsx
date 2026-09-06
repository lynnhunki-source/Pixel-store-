"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X, Zap, Activity, Cpu, Gauge, Cable, Lightbulb, Plus } from "lucide-react"
import { formatPrice, whatsappLink, type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/lib/toast-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const specRows = [
  { key: "voltage", label: "الفولتية", icon: Zap },
  { key: "power", label: "استهلاك الطاقة", icon: Activity },
  { key: "processor", label: "المعالج", icon: Cpu },
  { key: "performance", label: "الأداء", icon: Gauge },
  { key: "connection", label: "طريقة الربط", icon: Cable },
] as const

export function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const { addItem } = useCart()
  const { showToast } = useToast()
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  function handleAdd() {
    addItem(product)
    showToast(`تمت إضافة ${product.name} إلى السلة`)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute left-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="إغلاق"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-secondary/40 sm:size-40">
              <span className="absolute right-3 top-3 z-10 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                {product.category}
              </span>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 160px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2
                id="product-modal-title"
                className="text-xl font-extrabold leading-tight text-card-foreground text-balance sm:text-2xl"
              >
                {product.name}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-primary">{formatPrice(product.price)}</span>
                <span className="text-xs text-muted-foreground">دينار عراقي</span>
              </div>
            </div>
          </div>

          {/* Technical specs */}
          <div className="p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">المواصفات الفنية</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {specRows.map(({ key, label, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-3.5"
                >
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold leading-snug text-card-foreground">
                      {product.specs[key]}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Project uses */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="size-4" />
                </span>
                <h4 className="text-sm font-bold text-card-foreground">استخدامات المشاريع</h4>
              </div>
              <ul className="flex flex-col gap-2">
                {product.specs.uses.map((use) => (
                  <li key={use} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex shrink-0 gap-2 border-t border-border bg-card p-4">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <Plus className="size-4" />
            أضف للسلة
          </button>
          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-whatsapp-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <WhatsAppIcon className="size-4" />
            طلب عبر واتساب
          </a>
        </div>
      </div>
    </div>
  )
}
