import React from 'react'

export default function Search({EmojiType}) {
    return (
        <div>
             <input 
             type ='search' 
             placeholder ='Search Emoji' 
             onChange={EmojiType} 
             
             />
        </div>
    )
}
