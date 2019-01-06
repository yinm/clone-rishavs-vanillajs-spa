import Bottombar from '../../../src/views/components/Bottombar'

test('#render', async () => {
  document.body.innerHTML = '<div id="footer_container">'

  const footer = document.getElementById('footer_container')
  footer.innerHTML = await Bottombar.render()

  const expected = `
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            This is my foot. There are many like it, but this one is mine.
          </p>
        </div>
      </footer>
    `

  expect(footer.innerHTML).toEqual(expected)
})
