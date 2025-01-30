export const TypeScriptPrimitiveTypes = ["bigint", "boolean", "function", "number", "object", "string", "symbol", "undefined"] as const;

export type ReadOnly<T> = {
    readonly [P in keyof T] : T[P]
}


export type ProductType = {
    _id: string,
    id: string,
    name: string,
    images: string[],
    isAvailable: boolean,
    quantity: number,
    url: string,
    priceToShow: number,
    price: number,
    category: string,
    vendor: string,
    description: string,
    params: {
        name: string,
        value: string
    }[],
    isFetched: boolean,
    likedBy: string[],
    addedToCart: Date[],
    orderedBy: string[]
}

export type CategoryType = {
    _id: string,
    name: string,
    products: string[],
    totalValue: number
}

export type Category = {
    category: { 
        name: string, 
        _id: string
    },
    values: {
      totalProducts: number,
      totalValue: number,
      averageProductPrice: number,
      stringifiedProducts: string
    }
}

export enum EventNames {
    PageView = "pageView",
    ViewContent = "viewContent",
    AddToCart = "addToCart",
    AddToWishlist = "addToWishlist",
    InitiateCheckout = "initiateCheckout",
    AddPaymentInfo = "addPaymentInfo",
    Purchase = "purchase",
    Search = "search",
    Lead = "lead",
    CompleteRegistration = "completeRegistration",
}

export type PixelEvents = {
    [key in EventNames]: boolean;
};

export type PixelData = {
    _id: string;
    name: string;
    id: string;
    status: "Active" | "Deactivated";
    type: "Meta" | "TikTok";
    createdAt: string;
    activatedAt: string | null;
    deactivatedAt: string | null;
    events: PixelEvents;
};

export type Connection = {
    start: string;
    end: string;
    color: string;
}

type ConfigPathValue = {
    value: string,
    attributeOf?: string
}
export type Config = {
    cards: Record<string, string>
    paths: {
        Categories: {
            category_id: ConfigPathValue,
            name: ConfigPathValue,
            reference_by: ConfigPathValue
        },
        Products: {
            id: ConfigPathValue,
            name: ConfigPathValue,
            price: ConfigPathValue,
            discount_price: ConfigPathValue,
            images: ConfigPathValue,
            available: ConfigPathValue,
            category: ConfigPathValue,
            description: ConfigPathValue,
            quantity: ConfigPathValue,
            url: ConfigPathValue,
            vendor: ConfigPathValue,
            params: ConfigPathValue,
        },
        Params: {
            name: ConfigPathValue,
            value: ConfigPathValue
        },
        Start: {
            categories: ConfigPathValue,
            products: ConfigPathValue,
        }
    }
}

export type CreateUrlParams = {
    _id?: string,
    id: string | null,
    name: string | null,
    isAvailable: boolean,
    quantity: number,
    url: string | null,
    priceToShow: number,
    price: number,
    images: (string | null)[],
    vendor: string | null,
    description: string | null,
    params: {
        name: string | null,
        value: string | null
    }[],
    isFetched: boolean
    category:string
}