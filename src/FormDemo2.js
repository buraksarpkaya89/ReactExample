import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";



class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });

    }
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " Bilgileriniz Kaydedildi ", 2);

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Email</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Email</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter description"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Şehir</Label>
                        <Input
                            type="select"
                            name="city"
                            id="city"
                            placeholder="Enter city"
                            onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>Adana</option>
                            <option>Mersin</option>
                            <option>İzmir</option>
                            <option>Antalya</option>
                            <option>Muğla</option>
                            <option>Kocaeli</option>
                            <option>Hatay</option>
                            <option>Eskişehir</option>

                        </Input>
                    </FormGroup>
                    <br></br>
                    <Button type="submit">Kaydet</Button>

                </Form>
            </div>
        );
    }
}

export default FormDemo2;