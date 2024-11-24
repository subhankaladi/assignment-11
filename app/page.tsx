import PostCard from "@/components/PostCard";



export interface Post{
  userId : number,
  id: number,
  title: string,
  body: string,

}
export default async function Home() {
  const response = await fetch('http://localhost:3000/api/external')

  if(!response.ok){
    return <div>something went wrong</div>
  }

const data = await response.json()
const posts : Post[] = data.data

  return (
   <div className="p-8 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
    {posts.map((post) => 
    <PostCard 
    key={post.id} 
    body={post.body}
    title={post.title}
    
    
    />
    )}
   </div>
  );
}
