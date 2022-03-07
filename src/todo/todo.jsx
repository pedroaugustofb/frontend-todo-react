import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList'
import apiBase from '../ApiBase'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
        this.markAsPending = this.markAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/i` : '' 
        apiBase.Refresh(search)
            .then(res => this.setState({
                ...this.state, 
                description,
                list: res.data
            }))
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })

    }
    handleClear() {
        this.refresh()
    }

    handleAdd() {
        const description = this.state.description
        apiBase.AddToDo(description)
            .then(res => this.refresh())
    }

    handleRemove(todo) {
        apiBase.Remove(todo._id)
            .then(res => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    markAsDone(todo) {
        apiBase.MarkAsDone(todo._id, {...todo, done:true})
            .then(res => this.refresh(this.state.description))
    }

    markAsPending(todo) {
        apiBase.MarkAsPending(todo._id, {...todo, done:false})
        .then(res => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="To do's" small="Cadastro"></PageHeader>
                <Form 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}
                description={this.state.description}
                />
                <List 
                list={this.state.list}
                handleRemove={this.handleRemove}
                markAsDone={this.markAsDone}
                markAsPending={this.markAsPending}
                />
            </div>
        )
    }
}
