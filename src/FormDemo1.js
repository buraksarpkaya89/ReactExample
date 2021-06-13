import React, { Component } from 'react';

class FormDemo1 extends Component {
    state= {username:'',city:""}
    onChangeHandler=(event)=>{
        // this.setState({username:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Kullanıcı Adı</h3>
                    <input name="username" onChange={this.onChangeHandler} type="text" />
                    <h3>Kullanıcı Adı {this.state.username}</h3>

                    <h3>Şehir</h3>
                    <input name="city" onChange={this.onChangeHandler} type="text" />
                    <h3>Şehrinizin Adı {this.state.city}</h3>

                    <input type='submit' value="Save"></input>
                </form>
            </div>
        );
    }
}

export default FormDemo1;