

export interface PRODUCT {
        _id:string;
        name: string;
        description: string,
        price: number,
        dimensions: {
            length: number,
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
        }
   
    // slug: string;
    // imageUrl: string;
  }