import { useState, useEffect, Suspense } from 'react';
import fetchData from './api';

function App() {
  return (
    <>
      <NotUseSuspense id={1} />
      <br />
      <br />
      <Suspense fallback={<p>사용자 정보를 로딩 중 입니다.</p>}>
        <UseSuspense resource={fetchData('1')}/>
      </Suspense>
    </>
  );
}

function UseSuspense({ resource }) {
  const user = resource.user.read();
  return (
    <div>
      <p>
        {user.name}({user.email}) 님이 작성한 글
      </p>
      {/* <Suspense fallback={<p>글목록 로딩중...</p>}> */}
        <PostSuspense resource={resource} />
      {/* </Suspense> */}
    </div>
  );
}

function PostSuspense({ resource }) {
  const posts = resource.posts.read();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

function NotUseSuspense() {
  return (
    <>
      <h2>NOT USE SUSPENSE</h2>
      <CommonUserInfo id={1} />
    </>
  )
}

function CommonUserInfo({ id }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  }, [id]);

  if (loading) {
    return <>사용자 정보 로딩중 ....</>
  }

  return (
    <div>
      <p>{user.name} 님이 작성한 글</p>
      <Posts userId={id} />
    </div>
  );
}

function Posts({ userId }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts);
          setLoading(false);
        }, 3000);
      });
  }, [userId]);

  if (loading) return <p>글목록 로딩중...</p>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}


export default App;