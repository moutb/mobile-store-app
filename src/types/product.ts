export interface ProductListItem {
    id: string;
    brand: string;
    name: string;
    basePrice: number;
    imageUrl: string;
}

export type ProductsList = ProductListItem[];

export interface ProductSpecs {
    screen: string;
    resolution: string;
    processor: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    os: string;
    screenRefreshRate: string;
}

export interface ProductColorOption {
    name: string;
    hexCode: string;
    imageUrl: string;
}

export interface ProductStorageOption {
    capacity: string;
    price: number;
}

export interface SimilarProduct {
    id: string;
    brand: string;
    name: string;
    basePrice: number;
    imageUrl: string;
}

export interface Product {
    id: string;
    brand: string;
    name: string;
    description: string;
    basePrice: number;
    rating: number;
    specs: ProductSpecs;
    colorOptions: ProductColorOption[];
    storageOptions: ProductStorageOption[];
    similarProducts: SimilarProduct[];
}
