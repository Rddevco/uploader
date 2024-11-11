"use client"

import { useState } from "react"


     export default function Home() {

    const [file, setFile] = useState()
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set('file',file);
        let result = await fetch("/api/upload",{
         method:"POST",
         body:data
        });
    result = await result.json();
    console.log(result);
    if(result.success){
        alert("file uploaded")
    }
  }
  return (
     <main>
    <h1 className="bg-blue-500 mt-2 text-white font-serif fontsize-4 text-center">File Upload</h1>
    <form className="bg-blue-300"onSubmit={onSubmit}>
      <input type="file"
       name="file" 
       className="px-7 bg-color-orange"
      onChange={(e) => setFile(e.target.files?.[0]) } 
      />
      <button type="submit" className="px-3 py-3 mt-2 mb-2 bg-blue-900 text-white">upload file</button>
    </form>
   
  </main>
  );

    }