import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " ",
      lastName: " ",
      email: " ",
      message: " ",
    };
  }
  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  submitEmail = (e) => {
    console.log("You got this");
    document.getElementById("Contact").reset();
    fetch("https://fringuante-monsieur-85595.herokuapp.com/contact", {
      method: "post",
      //  mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        message: this.state.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Message Sent Successful");
        } else if (data.status === "fail") {
          alert("Message Failed to contact");
        }
      })
      .catch((err) => {
        console.log("Here is your err" + err);
      });
  };
  render() {
    return (
      <div>
       
        <article className="pa4 ma5 black-80 flex justify-center ">
          <form className="shadow-1 pa4" id="Contact">
            <fieldset id="contact_me" className="ba b--transparent ph0 mh0 ">
              <legend className="ph0 mh0 fw6 underline">Contact:</legend>
              <div className="mt3 ">
                <label className="db fw4 lh-copy f6" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.onFirstNameChange}
                ></input>
              </div>
              <div className="mt3 ">
                <label className="db fw4 lh-copy f6" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={this.onLastNameChange}
                ></input>
              </div>
              <div className="mt3 ">
                <label className="db fw4 lh-copy f6" htmlFor="email">
                  Email address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.onEmailChange}
                ></input>
              </div>
              <div className="mt3 ">
                <label className="db fw4 lh-copy f6 " htmlFor="message">
                  Reason For Connecting
                </label>
                <textarea
                  className="b pa2 input-reset ba bg-transparent"
                  type="textarea"
                  name="message"
                  id="message"
                  onChange={this.onMessageChange}
                ></textarea>
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent  pointer f6"
                type="button"
                value="submit"
                onClick={this.submitEmail}
                
              ></input>
            </div>
          </form>
        </article>
      </div>
    );
  }
}
export default Contact;
