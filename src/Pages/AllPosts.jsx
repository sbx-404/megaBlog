import React , {useState, useEffect}from 'react'
import appwriteservice from "../appwrite/config"
import { Container, PostCard } from '../components'

function AllPosts() {
    const [post, setPosts] = useState([])

    useEffect(() => {
        appwriteservice.getPosts([]).then((posts) => {
            console.log(posts)
            if(posts){
                setPosts(posts.documents)
            }
        } )
    }, [])


  return (
    <div className='w-full py-8'>
        <Container >
            <div className='flex flex-wrap'>
            {post.map((post) => (
                <div key={post.id} className='p-2 w-1'>
                   <PostCard post={post}/> 
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts