import axios from 'axios';
import Head from 'next/head'

export default function Posts({ posts, context }: any) {
  console.log("context:", context);
  console.log("posts:", posts);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <main className="p-20">
        <h1 className="text-2xl">Posts</h1>
        <ul>
          {posts.map((post: any) => {
            return (
              <li key={post.id}>{post.title}</li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps(context: any) {
  const response = await axios.get("http://local-titanfx-clientcabinet.tartarus-tfx.com/posts");
  console.log("context:", context);

  return {
    props: {
      posts: response.data,
      context: JSON.stringify(context)
    },
  }
};
