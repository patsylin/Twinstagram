// Define an array of dummy user profiles
const users = [
    {
      username: 'user1',
      email: 'poh0@gmail.com',
      password: 'Puppies',
      profileImage: 'user1.jpg',
      fullName: 'User One',
      bio: 'Welcome to my profile!',
    },
    {
      username: 'user2',
      email: 'kat@gmail.com',
      password: 'Kitties',
      profileImage: 'user2.jpg',
      fullName: 'User Two',
      bio: 'Hello!',
    },
  ];

  // Define an array of dummy posts
  const posts = [
    {
      user_id: 1,
      imageUrl: 'post1.jpg',
      caption: 'Enjoying a beautiful day!',
    },
    {
      user_id: 2,
      imageUrl: 'post2.jpg',
      caption: 'Exploring new places.',
    }
  ];

  const comments = [
    {
      user_id: 1,
      post_id: 1,
      text: "I like this.",
      timestamp: new Date(),
    },
    {
      user_id: 2,
      post_id: 1,
      text: "This is perfect!",
      timestamp: new Date(),
    }
  ];

  const likes = [
    {
      user_id: 1,
      post_id: 1,
      timestamp: new Date(),
    },
    {
      user_id: 2,
      post_id: 2,
      timestamp: new Date(),
    },

  ]

  // Export the arrays for use in other modules
  module.exports = {
    users,
    posts,
    comments,
    likes
  };
