"use client"

import { useState } from "react"
import { categories, products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("الكل")

  const filtered =
    active === "الكل"
      ? products
      : products.filter((p) => p.category === active)

  return (
    <section id="products" className="mx-auto w-full max-w-6xl px-4 pb-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            كل المنتجات
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} قطعة متوفرة
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const selected = cat === active
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors " +
                (selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground")
              }
              aria-pressed={selected}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
