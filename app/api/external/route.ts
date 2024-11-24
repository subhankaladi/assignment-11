import { NextResponse } from "next/server";

const API_URL = "https://jsonplaceholder.typicode.com/posts"


export const GET = async () => {
    const response = await fetch(API_URL);
    
    
    
    if(!response.ok){
        return NextResponse.json({success: false}, {status : 501})
        
    }
    const data = await response.json();
    console.log(data);

    return NextResponse.json ({
        data: data
    }, {status : 200}

    )
    
}
