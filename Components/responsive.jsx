import React from "react";
import ReactDOM from "react-dom/client";


export default function Responsive(){

    return(
            <>
            
                <div className="h-screen w-screen bg-neutral-100 flex items-center justify-center gap-1 flex-col screen:flex-row  md:flex-col 3xl:bg-neutral-600">
                    <div className="bg-red-200 h-20 w-20 rounded-2xl"></div>
                    <div className="bg-blue-200 h-20 w-20 rounded-2xl"></div>
                    <div className="bg-green-200 h-20 w-20 rounded-2xl"></div>

                </div>

            </>
    )

}













