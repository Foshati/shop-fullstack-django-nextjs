import Image from "next/image"
import { Star, Heart, Share2, ShoppingCart, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductPage() {
  return (
    <div className="mt-20 mx-auto px-8 py-8 ">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="w-full lg:w-3/5">
          <div className="relative  rounded-xl overflow-hidden border">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="PlayStation 5 Slim Console"
              width={400}
              height={400}
              className="w-full object-contain "
              priority
            />
          </div>

          <div className="mt-4 overflow-x-auto pb-2">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={`border rounded-lg overflow-hidden min-w-[80px] cursor-pointer ${item === 1 ? "ring-2 ring-primary" : ""}`}
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=80`}
                    alt={`PlayStation 5 view ${item}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Sony</span>
                <ChevronRight className="h-3 w-3" />
                <span>Gaming Consoles</span>
              </div>
              <h1 className="text-2xl font-bold mt-2">Sony PlayStation 5 Slim Console 1TB Region 2016A Europe</h1>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.4</span>
              <span className="text-sm text-muted-foreground">(1,372 reviews)</span>
              <span className="text-sm text-muted-foreground">|</span>
              <Button variant="link" className="text-sm p-0 h-auto">
                918 Questions
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold">$499.99</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      5% OFF
                    </Badge>
                    <p className="text-sm text-muted-foreground line-through">$529.99</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                  Only 4 left in stock!
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground border rounded-md px-3 py-1.5">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Seller logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Official Sony Store</span>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                98.3% Satisfaction
              </Badge>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Checkbox id="warranty" />
                <div>
                  <label htmlFor="warranty" className="font-medium cursor-pointer">
                    Extended Warranty Protection
                  </label>
                  <p className="text-sm text-muted-foreground">12 months additional coverage</p>
                  <p className="text-sm font-medium mt-1">$49.99</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Key Features</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 border rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Console Type</span>
                  <span className="font-medium">Standard (Disc Edition)</span>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Generation</span>
                  <span className="font-medium">9th Generation</span>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Storage</span>
                  <span className="font-medium">1TB SSD</span>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Connectivity</span>
                  <span className="font-medium">Wi-Fi, Bluetooth 5.1</span>
                </div>
              </div>

              <Button variant="link" className="px-0 flex items-center">
                View all specifications
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
            >
              Reviews (1,372)
            </TabsTrigger>
            <TabsTrigger
              value="questions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
            >
              Questions (918)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="pt-6">
            <div className="prose max-w-none">
              <p>
                Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic
                feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games with
                the PlayStation 5 Slim console.
              </p>

              <h3>Lightning Speed</h3>
              <p>
                Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a
                PlayStation console can do.
              </p>

              <h3>Breathtaking Immersion</h3>
              <p>
                Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio
                technology.
              </p>

              <h3>Stunning Games</h3>
              <p>Marvel at incredible graphics and experience new PS5 features in blockbuster PS5 games.</p>

              <h3>What&apos;s in the box</h3>
              <ul>
                <li>PlayStation 5 Slim console</li>
                <li>DualSense wireless controller</li>
                <li>HDMI cable</li>
                <li>AC power cord</li>
                <li>USB cable</li>
                <li>Base</li>
                <li>Printed materials</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="pt-6">
              <p className="text-muted-foreground">Specifications content would go here</p>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="pt-6">
              <p className="text-muted-foreground">Reviews content would go here</p>
            </div>
          </TabsContent>

          <TabsContent value="questions">
            <div className="pt-6">
              <p className="text-muted-foreground">Questions content would go here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

