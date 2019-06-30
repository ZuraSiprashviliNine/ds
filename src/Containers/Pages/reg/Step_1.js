
import React from 'react';

import {
    Redirect
} from 'react-router-dom'
import {connect} from 'react-redux';
import { INIT_REG_STEP , FILL_REG_STEP} from '../../../Actions/Steps';

class FieldItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            broken: true
        };
        
        this.input = this.input.bind(this);
    }
    
    input(e){
        switch(this.props.field){
            case 'firstName':
            case 'lastName': {
                if(e.target.value.length === 0){
                    this.setState({
                        broken: true
                    })
                }else{
                    this.setState({
                        broken: false
                    })
                }
                break;
            }
            case 'email': {
                // if()
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(e.target.value.toLowerCase())){
                    this.setState({
                        broken: true
                    })
                }else{
                    this.setState({
                        broken: false
                    })
                }
                break;
            }
            case 'date': {
                if((new Date(e.target.value) < (new Date()))){
                    this.setState({
                        broken: false
                    })
                }else[
                    this.setState({
                        broken: true
                    })
                ]
                break;
            }
            default: {
                break;
            }
        }

    }
    
    render(){
        return (
            <div className="reg-field-item-wrap">
                <label htmlFor={this.props.field}>
                    {this.props.field}
                </label>
                <input
                    onBlur={(e) => {
                        if(!this.state.broken){
                            this.props.fill(this.props.field, e.target.value)
                        }else{
                            e.target.focus()
                        }
                    }}
                    onInput={this.input}
                    id={this.props.field} name={this.props.field} type={
                    this.props.field == 'email' ? 'email': this.props.field === 'date' ? 'date' : 'text'
                } className={
                    `reg-field-item ${this.state.broken ? 'broken' : ''}`
                }/>
            </div>
        )
    }
}

class RegistrationRenderer extends React.Component{
    render(){
        return this.props.fields.map((field, index) => 
            <FieldItem fill={this.props.fill} key={index} field={field}/>
        )
    }
}

class Step_1 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: {},
            valid: false,
            re: false
        };

        this.go = this.go.bind(this);

        this.fill = this.fill.bind(this);

    }

    fill(name, value){ 
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });
        
        if(Object.keys(this.state.data).length == this.props.Steps.reg.fields.length - 1){
            this.setState({
                valid: true
            })
        }else{
            this.setState({
                valid: false
            })
        }
    }

    go(){
        this.props.fillData(this.state.data);
        this.setState({
            re: true
        })
    }

    componentDidMount(){
        if(this.props.Steps.reg.fields.length === 0){
            this.props.initRegStep();
        }
    }
    
    render(){
        if(this.props.Steps.reg.fields.length !== 0){
            return (
                <main className="step reg">
                    <div className="container">
                        <div className="row">
                            <div className="col-desktop-8 offset-desktop-2 col-laptop-10 offset-laptop-1 col-phone-12">
                                <div className="step-wrap">
                                    <h3>
                                        Registration
                                    </h3>
                                    <div className="reg-form">
                                        <RegistrationRenderer fill={this.fill} fields={this.props.Steps.reg.fields}/>
                                        <div className="reg-form-button-wrap">
                                            <button onClick={this.go} className={`reg-form-button ${this.state.valid == true ? '': 'disabled'}`}>
                                                Next
                                            </button>
                                            {this.state.re ? (
                                                <Redirect to={'/step_2'}/> 
                                            ): null}
                                        </div>
                                        {JSON.stringify(this.state.data)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }else{
            return null;
        }
    }
}

const Actions = dispatch => {
    return {
        initRegStep: () => {
            dispatch(INIT_REG_STEP());
        },
        fillData: data => {
            dispatch(FILL_REG_STEP(data));
        }
    }
}
const States = store => {
    return {
        Steps: store.Steps
    }
}

export default connect(States, Actions)(Step_1);