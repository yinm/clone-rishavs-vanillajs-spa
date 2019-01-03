const getPostsList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch('https://5bb634f6695f8d001496c082.mockapi.io/api/posts', options)
    return await response.json()
  } catch (err) {
    console.error('Error getting documents', err)
  }
}

const Home = {
  render: async () => {
    const posts = await getPostsList()

    return /*html*/`
      <section class="section">
        <h1>Home</h1>
        <ul>
          ${ posts.map(post =>
               `<li><a href="#/p/${post.id}">${post.title}</a></li>`
             ).join('\n ')
          }
        </ul>
      </section>
    `
  },

  after_render: async () => {}
}

export default Home
