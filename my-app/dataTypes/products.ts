

export interface PRODUCT {
        _id:string;
        name: string;
        description: string,
        price: number,
        dimensions: {
            depth: number,
            width: number,
            height: number
        },
        category: string,
        slug: {
            current: string
        },
        
        image: {
            asset: {
                url: string,
                _type: "image",
            }
        },
        quantity: number;
   
    // slug: string;
    // imageUrl: string;
  }