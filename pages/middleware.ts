import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const middleware = (req: NextRequest) => {
    return new NextResponse('hello world');
};

export const config = {
    matcher : '/about/:path',
};

// export default middleware;