import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const PostCard = ({body,title} : {body:string , title: string}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{body}</CardDescription>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default PostCard