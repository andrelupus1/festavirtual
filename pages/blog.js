function blog({posts, users}) {
  return (
    <div>
      {users.map((user,index)=>
        <ul key={index}>{user.name} - {user.email}</ul>
      )}
      {posts.map((post, index) =>
        <li key={index}>{post.title} - {post.content}</li>
      )}
    </div>
  );
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const res = await fetch('https://.../posts')
  const res = await fetch("http://localhost:3000/api/blog");
  const usr = await fetch("http://localhost:3000/api/user");
  const posts = await res.json();
  const users = await usr.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
      posts,
    },
  };
}
export default blog;
