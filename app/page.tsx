import { StoreHeader } from "@/components/store-header"
import { ProductGrid } from "@/components/product-grid"
import { CartProvider } from "@/lib/cart-context"
import { ToastProvider } from "@/lib/toast-context"
import { WHATSAPP_NUMBER } from "@/lib/products"

export default function Page() {
  return (
    <CartProvider>
    <ToastProvider>
    <main className="min-h-dvh">
      <StoreHeader />
      <ProductGrid />
      <footer className="mt-8 border-t border-border bg-card">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
          <p className="text-lg font-bold text-foreground">
            Pixel<span className="text-primary"> Store</span>
          </p>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            متجر القطع والمتحكمات الإلكترونية · للطلب والاستفسار عبر واتساب:{" "}
            <span dir="ltr">+{WHATSAPP_NUMBER}</span>
          </p>

          <div className="flex w-full max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-background px-6 py-3.5">
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground">
              تطوير وإدارة المنصّة
            </span>
            <span className="text-sm font-bold text-primary">المهندس عبدالله سعد</span>
          </div>

          <p className="text-[11px] text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()} · متجر Pixel Store
          </p>
        </div>
      </footer>
    </main>
    </ToastProvider>
    </CartProvider>
  )
}
