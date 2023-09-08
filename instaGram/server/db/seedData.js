// Define an array of dummy user profiles
const users = [
    {
      username: 'user1',
      fullName: 'User One',
      bio: 'Welcome to my profile!',
      profileImage: 'user1.jpg',
    },
    {
      username: 'user2',
      fullName: 'User Two',
      bio: 'Travel freak 🌍',
      profileImage: 'user2.jpg',
    }
  ];

  // Define an array of dummy posts
  const posts = [
    {
      user_id: 1,
      imageUrl: 'post1.jpg',
      caption: 'Enjoying a beautiful day!',
      likes: 50,
    },
    {
      user_id: 2,
      imageUrl: 'post2.jpg',
      caption: 'Exploring new places.',
      likes: 75,
    }
  ];

  const comments = [
    {
      user_id: 1,
      post_id: 1,
      text: "I like this.",
      timestamp: Date.now(),
    },
    {
      user_id: 2,
      post_id: 1,
      text: "This is perfect!",
      timestamp: Date.now(),
    }
  ];

  const likes = [
    {
      user_id: 1,
      post_id: 1,
      timestamp: Date.now(),
    },
    {
      user_id: 2,
      post_id: 2,
      timestamp: Date.now(),
    },

  ]

  // Export the arrays for use in other modules
  module.exports = {
    users,
    posts,
    comments,
    likes
  };
