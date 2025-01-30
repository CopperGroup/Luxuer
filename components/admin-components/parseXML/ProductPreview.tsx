'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useXmlParser } from '@/app/admin/context'
import { stages } from './XMLParser'

interface Param {
  name: string
  value: string
  type: string
}

interface Product {
  id: string
  name: string
  images: string[]
  isAvailable: boolean
  quantity: number
  url: string
  priceToShow: number
  price: number
  category: string
  vendor: string
  description: string
  params: Param[]
}

export default function ProductPreview({ setCurrentStage }: { setCurrentStage: React.Dispatch<React.SetStateAction<keyof typeof stages>> }) {
    const [product, setProduct] = useState<Product>({
        id: "",
        name: "",
        images: [],
        isAvailable: false,
        quantity: 0,
        url: "",
        priceToShow: 0,
        price: 0,
        category: "",
        vendor: "",
        description: "",
        params: []
    })

    const { sample } = useXmlParser();

    useEffect(() => {
        if (sample) {
            setProduct(JSON.parse(sample));
        }
    }, [sample])

    const handleGetItems = () => {
        setCurrentStage("get-data")
    }

    return (
        <Card className="w-full max-w-[1600px] mx-auto">
            <CardHeader>
                <CardTitle className="text-heading2-bold">Product Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                            {product.images[0] && (
                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {product.images.slice(1).map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`Product ${index + 2}`} 
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-heading3-bold">{product.name}</h2>
                        <div className="flex items-center space-x-2">
                            <Badge variant={product.isAvailable ? "default" : "secondary"}>
                                {product.isAvailable ? "Available" : "Unavailable"}
                            </Badge>
                            <span className="text-small-medium text-gray-500">ID: {product.id}</span>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-body-bold">${product.priceToShow.toFixed(2)}</span>
                            {product.price !== product.priceToShow && (
                                <span className="text-base-regular text-gray-500 line-through">${product.price.toFixed(2)}</span>
                            )}
                        </div>
                        <p className="text-base-regular text-gray-600">{product.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-small-medium">
                            <div>
                                <span className="font-semibold">Vendor:</span> {product.vendor}
                            </div>
                            <div>
                                <span className="font-semibold">Category:</span> {product.category}
                            </div>
                            <div>
                                <span className="font-semibold">Quantity:</span> {product.quantity}
                            </div>
                            <div>
                                <span className="font-semibold">URL:</span> <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{product.url.slice(0, 20)}...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-heading4-medium mb-2">Parameters</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {product.params.map((param, index) => (
                            <div key={index} className="bg-gray-50 p-2 rounded-md">
                                <span className="text-small-semibold">{param.name}:</span> <span className="text-small-regular">{param.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6">
                    <Button onClick={handleGetItems} className="w-full text-base-semibold text-white">Start Processing</Button>
                </div>
            </CardContent>
        </Card>
    )
}

