import React, {Component} from 'react';
import style from './example.module.scss'
export class Example extends Component {
    render() {
        return (
            <div className={style.example}>
                Scoped Styling by CSS Modules
            </div>
        )
    }
}
