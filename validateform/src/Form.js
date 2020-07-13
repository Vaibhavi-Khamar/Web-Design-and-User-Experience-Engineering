import React, { Component } from 'react'
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radioState1: false,
            radioState2: false,
            radioState3: false,
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            firstNameErrorFlag: true,
            lastNameErrorFlag: true,
            phoneNumberErrorFlag: true,
            emailErrorFlag: true,
            zipcodeErrorFlag: true,
            commentErrorFlag: true,
            checkboxErrorFlag: true,
            radioErrorFlag: true,
            firstName: "",
            lastName: "",
            emailId: "",
            phoneNumber: "",
            zipcode: "",
            comments: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            phoneNumberError: "",
            zipCodeError: "",
            commentError: "",
            radioError: "",
            checkboxError: ""
        }
    }

    //Title Validation
    validateRadioState = () => {
        let radioError = "";
        if (this.state.radioState1 === false &&
            this.state.radioState2 === false &&
            this.state.radioState3 === false) {
            radioError = "Please select value";
            this.radioErrorFlag = false;
        } else {
            radioError = "";
            this.radioErrorFlag = true;
        }
        this.setState({ radioError });
    }

    //First Name Validation
    validateFirstName = () => {
        let rfirstName = /^[a-zA-Z]+$/;
        let firstNameError = "";
        if (!rfirstName.test(this.state.firstName) || (this.state.firstName == '')) {
            firstNameError = 'Enter valid name';
            this.firstNameErrorFlag = false;
        } else {
            firstNameError = '';
            this.firstNameErrorFlag = true;
        }
        this.setState({ firstNameError });
    };

    //Last Name Validation
    validateLastName = () => {
        let rLastName = /^[a-zA-Z]+$/;
        let lastNameError = "";
        if (!rLastName.test(this.state.lastName) || (this.state.lastName == '')) {
            lastNameError = 'Enter valid name';
            this.lastNameErrorFlag = false;
        } else {
            lastNameError = '';
            this.lastNameErrorFlag = true;
        }
        this.setState({ lastNameError });
    };

    //Email validation
    validateEmail = () => {
        let remail = /([\w\.]+)@([\w]+)\.(\w+)/;
        let emailError = "";
        if (!remail.test(this.state.emailId || this.state.emailId == '')) {
            emailError = 'Enter valid Email Id';
            this.emailErrorFlag = false;
        } else {
            emailError = '';
            this.emailErrorFlag = true;
        }
        this.setState({ emailError });
    };

    //Phone validation
    validatePhoneNo = () => {
        let rPhoneNo = /\d{3}-?\d{3}-?\d{4}$/;
        let phoneNumberError = "";
        if (!rPhoneNo.test(this.state.phoneNumber) || (this.state.phoneNumber == '')) {
            phoneNumberError = 'Enter valid number';
            this.phoneNumberErrorFlag = false;
        } else {
            phoneNumberError = '';
            this.phoneNumberErrorFlag = true;
        }
        this.setState({ phoneNumberError });
    };

    //Zipcode validation
    validateZipCode = () => {
        let rZipCode = /^\d{5}([-\s]\d{4})?$/;
        let zipCodeError = "";
        if ((!rZipCode.test(this.state.zipcode)) || (this.state.zipcode == '')) {
            zipCodeError = 'Enter valid zipcode';
            this.zipcodeErrorFlag = false;
        } else {
            zipCodeError = '';
            this.zipcodeErrorFlag = true;
        }
        this.setState({ zipCodeError });
    };

    //Source Validation
    validateCheckBox = () => {
        let checkboxError = "";
        if (this.state.checkbox1 === false &&
            this.state.checkbox2 === false &&
            this.state.checkbox3 === false) {
            checkboxError = "Select a checkbox";
            this.checkboxErrorFlag = false;
        } else {
            checkboxError = "";
            this.checkboxErrorFlag = true;
        }
        this.setState({ checkboxError });
    }

    //Comments validation
    validateComments = () => {
        let commentError = "";
        if (this.state.comments == '') {
            commentError = 'Enter comments';
            this.commentErrorFlag = false;
        } else {
            commentError = '';
            this.commentErrorFlag = true;
        }
        this.setState({ commentError });
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailIdChange = (event) => {
        this.setState({
            emailId: event.target.value
        })
    }

    handlePhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleZipCodeChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleRadio1Change = (event) => {
        this.setState({
            radioState1: event.target.checked
        })
    }

    handleRadio2Change = (event) => {
        this.setState({
            radioState2: event.target.checked
        })
    }

    handleRadio3Change = (event) => {
        this.setState({
            radioState3: event.target.checked
        })
    }

    handleCheckBox1 = (event) => {
        this.setState({
            checkbox1: event.target.checked
        })
    }

    handleCheckBox2 = (event) => {
        this.setState({
            checkbox2: event.target.checked
        })
    }

    handleCheckBox3 = (event) => {
        this.setState({
            checkbox3: event.target.checked
        })
    }

    handleSubmitChange = (event) => {
        event.preventDefault();
        this.validateFirstName();
        this.validateLastName();
        this.validatePhoneNo();
        this.validateZipCode();
        this.validateEmail();
        this.validateComments();
        this.validateRadioState();
        this.validateCheckBox();
        if (this.firstNameErrorFlag && this.lastNameErrorFlag
            && this.phoneNumberErrorFlag && this.zipcodeErrorFlag
            && this.commentErrorFlag && this.radioErrorFlag
            && this.checkboxErrorFlag && this.emailErrorFlag) {
            alert('The form has been submitted successfully');
        }
    }

    render() {
        return (
            <div id="container">
                <main>
                    <h2>Feedback</h2>
                    <h3>Love something? Hate something? Let us know!</h3>
                    Note : Fields marked with an asterisk(*) are mandatory
                    <br /><br />

                    <form onSubmit={this.handleSubmitChange}>

                        <label>Title*:</label>
                        <input type="radio" name="title" id="miss" value={this.state.radioState1} onClick={this.handleRadio1Change} />Miss
			            <input type="radio" name="title" id="mr" value={this.state.radioState2} onClick={this.handleRadio2Change} />Mr.
			            <input type="radio" name="title" id="mrs" value={this.state.radioState3} onClick={this.handleRadio3Change} />Mrs.
                        <label id="radio-error-label">{this.state.radioError}</label>
                        <br /><br />

                        <label>First Name*:</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                        <label id="fname-error-label">{this.state.firstNameError}</label>
                        <br /><br />

                        <label>Last Name*:</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
                        <label id="lname-error-label">{this.state.lastNameError}</label>
                        <br /><br />

                        <label>Email Id*:</label>
                        <input type="text" name="emailId" id="emailId" placeholder="yourname@domain.com" value={this.state.emailId} onChange={this.handleEmailIdChange} />
                        <label id="email-error-label">{this.state.emailError}</label>
                        <br /><br />

                        <label>Phone Number*:</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="xxx-xxx-xxxx" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                        <label id="phone-error-label">{this.state.phoneNumberError}</label>
                        <br /><br />

                        <label>ZipCode*:</label>
                        <input type="text" name="zipcode" id="zipcode" placeholder="xxxxxx" value={this.state.zipcode} onChange={this.handleZipCodeChange} />
                        <label id="zipcode-error-label">{this.state.zipCodeError}</label>
                        <br /><br />

                        <label>How did you hear*:</label>
                        <input type='checkbox' name="source" value={this.state.checkbox1} onClick={this.handleCheckBox1} /> Facebook
                        <input type='checkbox' name="source" value={this.state.checkbox2} onClick={this.handleCheckBox2} /> Google
                        <input type='checkbox' name="source" value={this.state.checkbox3} onClick={this.handleCheckBox3} /> Yelp &nbsp;&nbsp;
                        <span id="source"></span>
                        <label id="checkbox-error-label">{this.state.checkboxError}</label>
                        <br /><br />

                        <label>Comments*:</label>
                        <textarea name="text" id="comments" placeholder="Your comments" rows="5" cols="25" value={this.state.comments} onChange={this.handleCommentsChange}></textarea> &nbsp;&nbsp;&nbsp;
                        <label id="comments-error-label">{this.state.commentError}</label>
                        <br /><br />

                        <input type="submit" name="submit" id="submit" />
                    </form>
                </main>
            </div>
        )
    }
}

export default Form