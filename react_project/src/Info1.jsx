import React from 'react'

const Info1 = () => {
   let name = 'shank'
   let age = '21'
   let isMarried = false
   let b = <p>Hello</p>
   let ar1 = [<p>shank1</p>, <p>shank2</p>, <p>shank3</p>]
       
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>1 + 1 = {1+ 1}</p>
      <p>isMarried = {isMarried}</p>
      {b}
      {ar1}  
      {/* all the element of the array are rendered 
          in the dom. And as the <p> tag are 
          block each element start in newline. */}
    </div>
  )
}

export default Info1

