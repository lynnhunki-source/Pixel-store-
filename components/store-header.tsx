"use client"

import { useState } from "react"
import { Cpu, ShoppingCart, Zap } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

export function StoreHeader() {
  const [cartOpen, setCartOpen] = useState(false)
  const { count } = useCart()

  const contactLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "مرحباً، لدي استفسار عن منتجات متجر Pixel Store",
  )}`

  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--color-border),transparent_20%)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--color-border),transparent_20%)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 size-72 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="size-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Pixel<span className="text-primary"> Store</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
          >
            تواصل معنا
          </a>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/40"
            aria-label={`فتح السلة، ${count} منتج`}
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:pt-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Zap className="size-3.5" />
          قطع ومتحكمات إلكترونية
        </span>
        <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-foreground text-balance sm:text-4xl">
          كل ما تحتاجه لمشاريع الإلكترونيات في مكان واحد
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          تصفّح مجموعتنا من لوحات التحكم، الحساسات، المحركات والمكونات
          الإلكترونية، واطلب ما تريد مباشرة عبر واتساب بضغطة زر.
        </p>

        <div className="mt-6 flex flex-wrap gap-6">
          <div>
            <p className="text-2xl font-extrabold text-primary">+13</p>
            <p className="text-xs text-muted-foreground">قطعة متوفرة</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-primary">واتساب</p>
            <p className="text-xs text-muted-foreground">طلب فوري ومباشر</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-primary">أسعار</p>
            <p className="text-xs text-muted-foreground">بالدينار العراقي</p>
          </div>
        </div>
      </div>
    </header>
  )
}
