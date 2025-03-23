import React from "react"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quate"

export const Signup = () =>{
    return <div>
       <div className="grid grid-cols-1 xl:grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
      <div className="hidden xl:block">
      <Quote/>
      </div>
       </div>
    </div>
}