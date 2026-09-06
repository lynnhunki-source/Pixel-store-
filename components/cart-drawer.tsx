"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react"
import { formatPrice } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { items, total, count, increment, decrement, removeItem, clear, checkoutLink } =
    useCart()

  return (
    <>
      <div
        className={
          "fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity duration-300 " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="سلة التسوق"
        className={
          "fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 " +
          (open ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="size-5 text-primary" />
            <h2 className="text-base font-bold text-card-foreground">
              سلة التسوق
              {count > 0 && (
                <span className="mr-1 text-sm font-normal text-muted-foreground">
                  ({count})
                </span>
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            aria-label="إغلاق السلة"
          >
            <X className="size-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-secondary/60">
              <ShoppingCart className="size-7 text-muted-foreground" />
            </span>
            <p className="text-sm font-medium text-foreground">سلتك فارغة</p>
            <p className="text-xs text-muted-foreground">
              أضف بعض القطع الإلكترونية لتبدأ طلبك.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary/40">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold leading-tight text-foreground">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                          aria-label={`حذف ${item.name}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 rounded-lg border border-border">
                          <button
                            type="button"
                            onClick={() => increment(item.id)}
                            className="flex size-7 items-center justify-center text-foreground transition-colors hover:text-primary"
                            aria-label="زيادة الكمية"
                          >
                            <Plus className="size-3.5" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-semibold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => decrement(item.id)}
                            className="flex size-7 items-center justify-center text-foreground transition-colors hover:text-primary"
                            aria-label="إنقاص الكمية"
                          >
                            <Minus className="size-3.5" />
                          </button>
                        </div>

                        <span className="text-sm font-extrabold text-primary">
                          {formatPrice(item.price * item.quantity)}
                          <span className="mr-1 text-[10px] font-normal text-muted-foreground">
                            د.ع
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clear}
                className="mt-4 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-destructive hover:underline"
              >
                إفراغ السلة
              </button>
            </div>

            <div className="border-t border-border p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">المجموع الكلي</span>
                <span className="text-xl font-extrabold text-foreground">
                  {formatPrice(total)}
                  <span className="mr-1 text-xs font-normal text-muted-foreground">
                    دينار عراقي
                  </span>
                </span>
              </div>

              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-whatsapp-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <WhatsAppIcon className="size-4" />
                إتمام الشراء عبر واتساب
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
