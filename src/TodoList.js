import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state={
            item: [],
            inputElement: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        var newItem = {
            text: this.inputElement.value,
            key: Date.now()
        };

        this.setState(( prevState) => {
            return {
                inputElement: prevState.inputElement.concat(newItem)
            };
        });

        console.log(this.state.inputElement);
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this.inputElement = a}
                            placeholder="enter the test"></input>
                    <button type="submit">send</button>
                    <TodoItem entries={this.state.inputElement}/>
                </form>
            </div>
        )
    }
}

export default TodoList;