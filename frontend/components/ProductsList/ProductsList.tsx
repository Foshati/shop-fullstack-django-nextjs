/* eslint-disable @next/next/no-img-element */
"use client"; // Add this if using the App Router

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    title: "Product One",
    description: "Description for the first product with high-quality materials and premium finish.",
    price: "$19.99",
    originalPrice: "$24.99",
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
    discount: true,
    tag: "New",
    rating: 4.5,
    reviews: 12
  },
  {
    id: 2,
    title: "Product Two",
    description: "Description for the second product with unique features and elegant design.",
    price: "$29.99",
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
    discount: false,
    rating: 4.0,
    reviews: 8
  },
  {
    id: 3,
    title: "Product Three",
    description: "Description for the third product with outstanding performance and durability.",
    price: "$34.99",
    originalPrice: "$44.99",
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
    discount: true,
    tag: "Sale",
    rating: 4.8,
    reviews: 24
  },
  {
    id: 4,
    title: "Product Four",
    description: "Description for the fourth product with compact size and versatile functionality.",
    price: "$14.99",
    image: "https://foshati.storage.c2.liara.space/Nextpress.png",
    discount: false,
    rating: 3.9,
    reviews: 6
  },
];

const ProductsList = () => {
  return (
    <div className="mx-8 px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Our Products</h1>
      <p className="text-center mb-10 max-w-2xl mx-auto">
        Discover our premium selection of high-quality products designed for your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product, index) => (
          // در حالت موبایل (پایه) فقط دو کارت (اندیس 0 و 1) نمایش داده شود
          <Card
            key={product.id}
            className={`${index > 1 ? "hidden sm:block" : ""} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-0`}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm" className="mr-2">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button variant="secondary" size="sm">
                  Quick View
                </Button>
              </div>
              {product.tag && (
                <Badge className="absolute top-3 left-3 bg-primary font-semibold px-3 py-1">
                  {product.tag}
                </Badge>
              )}
              {product.discount && !product.tag && (
                <Badge className="absolute top-3 left-3 bg-red-500 font-semibold px-3 py-1">
                  Sale
                </Badge>
              )}
            </div>

            <CardHeader className="pb-2 pt-4">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm ml-1">{product.rating}</span>
                </div>
              </div>
              <div className="text-xs">{product.reviews} reviews</div>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-sm mb-4 line-clamp-2">
                {product.description}
              </CardDescription>
              <div className="flex items-end gap-2 mt-2">
                <span className="font-bold text-xl">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </CardContent>

            <CardFooter className="pt-2 pb-4">
              <Button className="w-full bg-primary hover:bg-primary/90 font-medium rounded-md transition-all duration-200 flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
