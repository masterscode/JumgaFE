import React, { useState } from "react";
import Auth from "./pages/auth/Auth";
import Header from "./pages/partials/Header";


const App = ()=>{
   return <>
   <Header/>
      <Auth/>
   </>
}

export default App;