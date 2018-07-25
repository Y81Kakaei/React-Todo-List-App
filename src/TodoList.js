import React, {Component} from 'react';

import TodoItems from './TodoItems';


import './TodoList.css';



class TodoList extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);

        
    }

    


    addItem(e){

        if(this.__inputElement !== ''){
            var newItem ={

                text: this.__inputElement.value,
                key: Date.now()

            };

            this.setState(

                (prevState) => {

                    return {
                        items: prevState.items.concat(newItem)
                    };
                }
            );

        };


        this.__inputElement.value='';

        //console.log(this.state.items);

        e.preventDefault();

    }


    deleteItems(key){

        //console.log('Key in delete items: ' + key);
        var filteredItems = this.state.items.filter(function(item){
                return (item.key !== key)
        });

        this.setState({

            items: filteredItems

        });
    }

    render(){

        return (

            <div className='todoListMain'>

                <div className='header'>

                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.__inputElement = a} placeholder='Enter text'>
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>

                <TodoItems entries={this.state.items} 
                    delete={this.deleteItems}
                />
            </div>
        )
    }
}


export default TodoList;