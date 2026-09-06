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

          <div
            dir="ltr"
            className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background px-5 py-3"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Developed &amp; Managed by
            </span>
            <span className="font-mono text-sm font-semibold text-primary">Eng. Abdullah Saad</span>
          </div>

          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Pixel Store
          </p>
        </div>
      </footer>
    </main>
    </ToastProvider>
    </CartProvider>
  )
}
