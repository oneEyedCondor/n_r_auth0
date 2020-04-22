import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth';

class FormCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            title: '',
            description: '',
        };
    }

    updateDescription(value) {
        this.setState({
            description: value,
        });
    }

    updateTitle(value) {
        this.setState({
            title: value,
        });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        const body = {
            title: this.state.title,
            description: this.state.description,
            author: 'testAuthor',
            image: 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/1/6/1695e2d6ed5345d1e988e6971703afd0.jpg',
            price: 2001,      
            count: 1,
            categoryId: 3
        };

        console.log(body);

        await fetch('http://localhost:8085/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${auth0Client.getIdToken()}`
            },
            body: JSON.stringify(body)
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-header">New Book</div>
                    <div className="card-body text-left">
                        <div className="form-group">
                            <label>Title:</label>
                            <input
                                disabled={this.state.disabled}
                                type="text"
                                onBlur={(e) => {this.updateTitle(e.target.value)}}
                                className="form-control"
                                placeholder="Give your question a title."
                            />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input
                                disabled={this.state.disabled}
                                type="text"
                                onBlur={(e) => {this.updateDescription(e.target.value)}}
                                placeholder="Give more context to your question."
                            />
                        </div>
                        <button
                            disabled={this.state.disabled}
                            onClick={() => {this.submit()}}
                        >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FormCreate);
