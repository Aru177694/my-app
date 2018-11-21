import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoItem extends Component {

    createTask(item) {
        return(
            <ul>
                <li key={item.key}>{item.text}</li>
            </ul>
        )
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default TodoItem;