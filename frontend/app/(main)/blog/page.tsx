/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Check, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "March 15, 2025",
    category: "Development",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Discover advanced techniques for building beautiful UIs with Tailwind CSS.",
    date: "March 10, 2025",
    category: "Design",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "March 5, 2025",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating inclusive and accessible web experiences.",
    date: "February 28, 2025",
    category: "Accessibility",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "State Management in React",
    excerpt: "Comparing different state management solutions for React applications.",
    date: "February 20, 2025",
    category: "Development",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Optimizing Website Performance",
    excerpt: "Techniques to improve loading times and overall performance of your website.",
    date: "February 15, 2025",
    category: "Performance",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
]

// Get unique categories from blog posts
const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 8

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div className=" bg-background mt-20">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1) // Reset to first page on search
                }}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  {selectedCategory} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1) // Reset to first page on category change
                    }}
                  >
                    {category}
                    {category === selectedCategory && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {currentPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">No articles found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {currentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-base font-bold line-clamp-2">{post.title}</h2>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="ghost" size="sm" className="w-full text-sm">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {filteredPosts.length > postsPerPage && (
          <Pagination className="mt-6">
            <PaginationContent className="flex-wrap">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current page
                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                  return (
                    <PaginationItem key={page} className="hidden sm:inline-block">
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage(page)
                        }}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                }

                // Show ellipsis for gaps
                if (page === 2 && currentPage > 3) {
                  return (
                    <PaginationItem key="ellipsis-start" className="hidden sm:inline-block">
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }

                if (page === totalPages - 1 && currentPage < totalPages - 2) {
                  return (
                    <PaginationItem key="ellipsis-end" className="hidden sm:inline-block">
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }

                return null
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  )
}

