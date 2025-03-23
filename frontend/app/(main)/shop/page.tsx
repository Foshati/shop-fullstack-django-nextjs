"use client"

import { useState } from "react"
import Image from "next/image"
import { Filter, Search, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

// Sample product data
const products = [
  {
    id: 1,
    name: "Leather Backpack",
    category: "Bags",
    price: 89.99,
    rating: 4.5,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    rating: 4.8,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    rating: 4.2,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Footwear",
    price: 79.99,
    rating: 4.6,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.7,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
  {
    id: 6,
    name: "Denim Jeans",
    category: "Clothing",
    price: 49.99,
    rating: 4.3,
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
  },
]

// Categories for filtering
const categories = [
  { id: "all", label: "All Categories" },
  { id: "clothing", label: "Clothing" },
  { id: "footwear", label: "Footwear" },
  { id: "electronics", label: "Electronics" },
  { id: "bags", label: "Bags" },
]

export default function ProductFilterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Filter products based on search query, price range, and categories
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase())

    return matchesSearch && matchesPrice && matchesCategory
  })

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return a.price - b.price
    } else if (sortOption === "price-high") {
      return b.price - a.price
    } else if (sortOption === "rating") {
      return b.rating - a.rating
    }
    // Default: featured (no sorting)
    return 0
  })

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  // Filter component for both desktop sidebar and mobile sheet
  const FilterControls = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[0, 200]} max={200} step={1} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Rating</h3>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 lg:hidden">
        <Button className="w-full" onClick={() => setIsMobileFilterOpen(false)}>
          Apply Filters
        </Button>
      </div>
    </div>
  )

  return (
    <div className=" mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8">Shop Products</h1>

      <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block sticky top-8 h-fit">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </h2>
            <FilterControls />
          </div>
        </aside>

        {/* Mobile Filter Button */}
        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-4 lg:hidden flex items-center">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow down products to find exactly what you&apos;re looking for.</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <FilterControls />
            </div>
          </SheetContent>
        </Sheet>

        {/* Product List Section */}
        <div className="space-y-6">
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">${product.price}</span>
                      <span className="text-sm text-muted-foreground">★ {product.rating}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

