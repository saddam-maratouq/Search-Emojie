import React, { Component } from 'react'
import EmojieList from '../../emojiList'
import Search from '../Search emoji/Search'
import SearchEmoji from '../Search emoji/SearchEmoji'



export class Emoji extends Component {
    constructor(props) {
        super(props)

        this.state = {
            EmojieList: EmojieList,
            searchField: ''

        }
    }


    EmojiType = async (e) => {

        e.preventDefault()
        await this.setState({

            EmojieList: EmojieList,
            searchField: e.target.value

        })
        console.log('from search field', this.state.searchField); 
        
        

    }


    render() {

        const { EmojieList, searchField } = this.state

        // const filterdArray = EmojieList.filter(emoji => {
        //     emoji.title.toLowerCase().includes(searchField.toLocaleLowerCase());
        // }) 
        // console.log(filterdArray); 


        return (
            <div>


                <Search EmojiType={this.EmojiType} />

                {EmojieList.filter(item => {

                    if (item === '') {
                        return item
                    }

                    else if (item.title.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())) {
                        return item 
                    }

                }) 
                .map(items => ( 

                        <SearchEmoji
                            symbol={items.symbol}
                            title={items.title} 
                        />
                    ))} 
                  
                    

            </div> 
            
        )
    }
}

export default Emoji;
