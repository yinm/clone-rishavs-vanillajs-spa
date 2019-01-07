import Register from '../../../src/views/pages/Register'

test('#render', async () => {
  document.body.innerHTML = '<div id="page_container" />'

  const page = document.getElementById('page_container')
  page.innerHTML = await Register.render()

  const expected = `
      <section class="section">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" id="email_input" type="email" placeholder="Enter your Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" id="repeat_pass_input" type="password" placeholder="Enter the same Password again">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        
        <div class="field">
          <p class="control">
            <button class="button is-primary" id="register_submit_btn">
              Register
            </button>
          </p>
        </div>
      </section>
    `

  expect(page.innerHTML).toEqual(expected)
})

test('#after_render', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {})

  document.body.innerHTML = `
    <section>
      <input id="email_input" value="foobar@example.com">
      <input id="pass_input" value="password">
      <input id="repeat_pass_input" value="password">
      <button id="register_submit_btn">Register</button>
    </section>
  `

  Register.after_render()
  document.getElementById('register_submit_btn').click()

  expect(alert).toBeCalledWith('User with email foobar@example.com was successfully submitted')
})
