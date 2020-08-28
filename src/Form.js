import React from 'react'

export default function Form({ logInUser }){

  function handleSubmit(e){
    e.preventDefault()
    let id = e.target.children[0].value
    //this would be a post request with a body of username and password
    //the return from the fetch should still be a user object IF the user authenticated correctly
    fetch("http://localhost:3000/toys/" + id)
      .then(res => res.json())
      .then(logInUser)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user-id" placeholder="Enter to your id" />
      <input type="submit" value="Login" />
    </form>
  )
}
