// Photographers

export interface Photographer {
    name: string
    id: number
    city: string
    country: string
    tags: string[]
    tagline: string
    price: number
    portrait: string
}

export type Photographers = Photographer[]

// Medias

export interface Media {
    id: number
    photographerId: number
    image?: string
    video?: string
    desc: string
    tags: string[]
    likes: number
    date: string
    price: number
}

export type Medias = Media[]