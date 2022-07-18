import React, { Component } from 'react';
import { connect } from "react-redux"
import logo from '../../img.png';
import { Button,
   Input,
  FormLogin,
  Fieldset,
  Select,
  Option } from "../../component"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            role : ""
        }
    }

    setValueInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      doLogin = userObj => {
        const { username, password, role } = userObj
        console.log("user", username)
        console.log("pass", password)
        console.log("role", role)

        if(username == "" || password == "" || role == ""){
             alert("Data login harus diisi secara lengkap !!")
        }else{

          let validLogin = this.props.dataUser.filter(user => {
            return user.username === username && user.password === password && user.role === role
          })
  
          let dataLogin = this.props.dataUser.filter(user => {
              return user.username === username 
          })
      
          if(validLogin.length > 0){
              this.props.submitLogin({userData: dataLogin[0]})
              this.props.history.push("/")
          }else{
               alert("Username atau Password atau Role Salah !!")
               this.props.history.push("/p403")
          }

        }
        
      }

    render() {
        const { username, password, role } = this.state
        return (
            <>

    <FormLogin>
                <center><img src={logo} height="200" alt="Logo"/><br/></center>
                <h2><center>LOGIN<br/>
                APLIKASI MANAGEMEN RUANGAN</center></h2>
                <Input type="text" placeholder="Masukan Username" name="username" onChange={this.setValueInput}/><br/>
                <Input type="password"  placeholder="Masukan Password" name="password" onChange={this.setValueInput}/><br/>
                <Fieldset>
                  <Select name="role" onChange={this.setValueInput} className="custom-select">
                  <Option value="">-- Pilih Role Login--</Option>
                  <Option value="Admin">Admin</Option>
                  <Option value="Pimpinan">Pimpinan</Option>
                  </Select>
                </Fieldset>
            <Button className="btn btn-primary waves-effect waves-light form-control" onClick={() => this.doLogin({username, password, role})}><i className="fas fa-sign-in-alt" /> Login</Button>
    </FormLogin>
            </>
        );
    }
}

const mapStateToProps = state => ({
    checkLogin: state.AReducer.isLogin,
    dataUser: state.UReducer.users
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS", payload: data })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);