export interface Product {
    brand_id:string;
    info: Info;
    logo: string;
    play_url: string;
    position: number;
    terms_and_conditions: string;
}

export interface Info {
    bonus: string;
    features: string[];
    rating: number;
}
