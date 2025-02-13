"use client";
import Link from "next/link"
import {use} from "react";
export default async function NewsArticle({
    params,
    searchParams,
}:{
    params: Promise<{articleId:string}>;
    searchParams:Promise<{lang?:"en"|"es"|"fr"}>;
}){
    const {articleId} =  use(params);
    const {lang="en"} = use(searchParams);
    return (
    <div>
        <h1>News article id</h1>
        <p>Reading in language</p>

     <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>

     </div>
        
    </div>
    )
}