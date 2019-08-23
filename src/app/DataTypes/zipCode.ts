export interface zipCode {
    key: string;
    trendsKey: string;
    brandId: string;
    maxAge: string;
    count: number;
    nextCursor: string;
    stations?: (StationsEntity)[] | null;
    location: Location;
    trends?: (TrendsEntity)[] | null;
}
export interface StationsEntity {
    id: number;
    item_type?: (string)[] | null;
    name: string;
    alias: string;
    brand_id: number;
    address: Address;
    phone: string;
    open_status: string;
    status: string;
    timezone: string;
    star_rating?: number | null;
    ratings_count?: number | null;
    amenities?: (string)[] | null;
    lookups?: (LookupsEntity | null)[] | null;
    latitude: number;
    longitude: number;
    brandings?: (BrandingsEntity)[] | null;
    enterprise: boolean;
    fuels?: (string)[] | null;
    badges?: (string | null)[] | null;
    brand_name: string;
    sort_priority?: string | null;
    pay_status?: PayStatus | null;
    opening_hours?: string | null;
}
export interface Address {
    line_1: string;
    line_2: string;
    locality: string;
    region: string;
    country: string;
    postal_code: string;
    cross_street: string;
    cross_street_alias: string;
    address_alias: string;
    at_intersection: boolean;
    nearby_street: string;
    description: string;
}
export interface LookupsEntity {
    organization_id: string;
    org_lookup_id: string;
}
export interface BrandingsEntity {
    brand_id: number;
    branding_type: string;
}
export interface PayStatus {
    is_pay_available: boolean;
}
export interface Location {
    lat: number;
    lng: number;
    county: string;
    state: string;
}
export interface TrendsEntity {
    Country: string;
    MonthAgo: number;
    Today: number;
    WeekAgo: number;
    YearAgo: number;
    Yesterday: number;
    AreaName: string;
    State: string;
    TodayHigh: number;
    TodayLow: number;
    Trend: number;
    Type: string;
}
