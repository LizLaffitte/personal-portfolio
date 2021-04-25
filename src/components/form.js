import React from "react"
export default function Form() {
    return (
<form method="post" action="#">
  <label>
    Name<br />
    <input type="text" name="name" id="name" />
  </label>
  <br />
  <label>
    Email<br />
    <input type="email" name="email" id="email" />
  </label>
  <br />
  <label>
    Message<br />
    <textarea name="message" id="message" rows="5" />
  </label>
  <br />
  <button type="submit">Send</button>
</form>
    )
}