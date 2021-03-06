import Utils from './../../services/Utils.js'

const getPost = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/${id}`, options)
    return await response.json()
  } catch (err) {
    console.error('Error getting documents', err)
  }
}

const PostShow = {
  render: async () => {
    const request = Utils.parseRequestURL()
    const post = await getPost(request.id)

    return `
      <section class="section">
        <h1>Post Id : ${post.id}</h1>
        <p>Post Title : ${post.title}</p>
        <p>Post Content: ${post}</p>
        <p>Post Author : ${post.name}</p>
      </section>
    `
  },

  after_render: async () => {}
}

export default PostShow
