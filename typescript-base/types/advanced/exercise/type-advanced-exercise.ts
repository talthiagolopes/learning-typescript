type PersonType = {
    name: string,
    lastName: string,
    role: [number, string]
}

const ADMIN: PersonType = {
    name: 'Amadeu',
    lastName: 'Rodrigues',
    role: [1, 'Admin']
}

const DEVELOPER: PersonType = {
    name: 'Max',
    lastName: 'Rodrigues',
    role: [2, 'Developer']
}

const EDITOR: PersonType = {
    name: 'Meg',
    lastName: 'Rodrigues',
    role: [2, 'Editor']
}

interface Post {
    id: number,
    title: string,
    createdAt: string;
    author: PersonType
}

const POSTS: Post[] = [
    {
      id: 1,
      title: 'Aprender TypeScript',
      createdAt: '03/03/2020',
      author: DEVELOPER,
    },
    {
      id: 2,
      title: 'Aprender JavaScript',
      createdAt: '18/03/2020',
      author: EDITOR,
    },
    {
      id: 3,
      title: 'Aprender NodeJs',
      createdAt: '18/05/2020',
      author: ADMIN,
    },
  ];

  type PostLogType = {
    oldPost: Post,
    edittedBy: PersonType,
    edittedAt: number,
    newPost: Post
  }

  let postLog: Record<number, PostLogType> = {};

  function isAdmin(person: PersonType): boolean {

    const [role, roleName, ...rest] = person.role;

    return role === 1 && roleName === 'Admin';
  }

  function notHasPermissionLog({ name, role }: PersonType, { title }: Post): void {
    console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
  }

  for (let index = 0; index < POSTS.length; index++) {
    
    const post:Post = POSTS[index];

    if (isAdmin(post.author)) {

      if (!(post.id in postLog)) {


        const copyPost = {...post};
        copyPost.title = '¿Es realmente TypeScript útil?';
        copyPost.author = ADMIN;

        const postLogType: PostLogType = {
          oldPost: post,
          edittedBy: ADMIN,
          edittedAt: Date.now(),
          newPost: copyPost,
          //newPost: Object.assign({}, post, { title: '¿Es realmente TypeScript útil?', author: ADMIN })
        }

        postLog[post.id] = postLogType;       
      }
    } else {
      notHasPermissionLog(post.author, post);
    }
  }

  console.log(postLog);