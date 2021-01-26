import React, {Component} from 'react';

// Parts
import ToDo from "../components/List";


// Style
import style from './App.module.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {list: [ ]}
    }

    render() {
        return (
            <main>
                <div className={style.main}>
                    <div className={style.name}>
                        <h1>To Do List</h1>
                    </div>
                    <ToDo list={this.state.list} onChangeList={(newItems) => this.setState({list: newItems})}/>
                </div>
            </main>
        )
    }
}
