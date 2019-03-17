import React, { Component } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import "simplemde/dist/simplemde.min.css"
import Nav from '../components/nav'
import axios from 'axios'
import qs from 'qs'

export default class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      imgUrl: '',
      content: 'Edit your content here!',
      tags: '',
    }
  }

  titleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  imgUrlChange = e => {
    this.setState({
      imgUrl: e.target.value
    })
  }

  tagsChange = e => {
    this.setState({
      tags: e.target.value
    })
  }

  contentChange = value => {
    this.setState({
      content: value
    })
  }

  submit = e => {
    e.preventDefault()
    console.log(this.state)
    console.log(qs.stringify(this.state))
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(this.state),
      url: 'http://45.76.181.50/new'
    }
    axios(options).then(res => console.log(res)).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Nav />
        <Container className="mt-5">
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input id="title" name="title" value={this.state.title} onChange={this.titleChange} />
            </FormGroup>
            <FormGroup>
              <Label>ImageUrl</Label>
              <Input id="imgUrl" name="imgUrl" value={this.state.imgUrl} onChange={this.imgUrlChange} />
            </FormGroup>
            <SimpleMDE id="content" name="content" onChange={this.contentChange} />
            <FormGroup>
              <Label>Tags</Label>
              <Input id="tags" name="tags" onChange={this.tagsChange} />
            </FormGroup>
            <Button onClick={this.submit}>Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}