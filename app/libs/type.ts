export interface unsplash 
  {
    id: string,
    slug: string,
    created_at: string
    updated_at: string,
    promoted_at: null,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: null,
    alt_description: string,
    breadcrumbs: [],
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string,
        small_s3: string
    },
    links: {
        self: string,
        html: string,
        download: string,
        download_location: string
    },
    likes: Number,
    liked_by_user: boolean,
    current_user_collections: [],
    sponsorship: {
        impression_urls: [
          string,
          string,
          string,
          string
        ],
        tagline: string,
        tagline_url: string,
        sponsor: {
            id: string,
            updated_at: string,
            username:string,
            name: string,
            first_name: string,
            last_name: null,
            twitter_username: string,
            portfolio_url: string,
            bio: string,
            location: null,
            links: {
                self: string,
                html: string,
                photos: string,
                likes: string,
                portfolio: string,
                following: string,
                followers: string
            },
            profile_image: {
                small: string,
                medium: string,
                large: string
            },
            instagram_username: string,
            total_collections: Number,
            total_likes: number,
            total_photos: number,
            accepted_tos: Boolean,
            for_hire: Boolean,
            social: {
                instagram_username: string,
                portfolio_url: string,
                twitter_username: string,
                paypal_email: null
            }
        }
    },
    topic_submissions: {},
    user: {
        id: string,
        updated_at: string,
        username: string,
        name: string,
        first_name: string,
        last_name: null,
        twitter_username: string,
        portfolio_url: string,
        bio: string,
        location: null,
        links: {
            self: string,
            html: string,
            photos: string,
            likes: string,
            portfolio: string,
            following: string,
            followers: string
        },
        profile_image: {
            small: string,
            medium: string,
            large: string
        },
        instagram_username: string,
        total_collections: number,
        total_likes: Number,
        total_photos: Number,
        accepted_tos: Boolean,
        for_hire: Boolean,
        social: {
            instagram_username: string,
            portfolio_url: string,
            twitter_username: string,
            paypal_email: null
        }
    }
}


export interface picture {
    views: number,
    downloads: number,
    id: string,
    slug: string,
    created_at: string,
    updated_at: string,
    promoted_at: null,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: string,
    alt_description: string,
    breadcrumbs: [],
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb:string,
        small_s3: string
    },
    links: {
        self: string,
        html: string,
        download: string,
        download_location: string
    },
    likes: number,
    liked_by_user: boolean,
    current_user_collections: [],
    sponsorship: {
        impression_urls: [
            string,
            string
        ],
        tagline: string,
        tagline_url: string,
    },user: {
        id: string,
        updated_at: string,
        username: string,
        name: string,
        first_name: string,
        last_name: null,
        twitter_username: string,
        portfolio_url: string,
        bio: string,
        location: string,
        links: {
            self: string,
            html: string,
            photos: string,
            likes: string,
            portfolio: string,
            following: string,
            followers: string
        },
        profile_image: {
            small: string,
            medium: string,
            large: string
        },
        instagram_username: string,
        total_collections: number,
        total_likes: Number,
        total_photos: Number,
        accepted_tos: Boolean,
        for_hire: boolean,
        social: {
            instagram_username: string,
            portfolio_url: string,
            twitter_username: string,
            paypal_email: null
        }
    }
    
}

export interface search {
    total: number,
    total_pages: number,
    results: unsplash[]
}