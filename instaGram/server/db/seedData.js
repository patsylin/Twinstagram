// Define an array of dummy user profiles
const users = [
    {
      id: 1,
      username: 'user1',
      fullName: 'User One',
      bio: 'Welcome to my profile!',
      profileImage: 'user1.jpg',
    },
    {
      id: 2,
      username: 'user2',
      fullName: 'User Two',
      bio: 'Travel enthusiast 🌍',
      profileImage: 'user2.jpg',
    }
  ];

  // Define an array of dummy posts
  const posts = [
    {
      id: 1,
      userId: 1,
      imageUrl: 'post1.jpg',
      caption: 'Enjoying a beautiful day!',
      likes: 50,
      comments: [
        {
          id: 1,
          userId: 2,
          text: 'Looks amazing!',
        },
        // Add more comments as needed
      ],
    },
    {
      id: 2,
      userId: 2,
      imageUrl: 'post2.jpg',
      caption: 'Exploring new places.',
      likes: 75,
      comments: [
        {
          id: 2,
          userId: 1,
          text: 'Wow, breathtaking!',
        },
        // Add more comments as needed
      ],
    }
  ];

  // Export the arrays for use in other modules
  module.exports = {
    users,
    posts,
  };
