import React, { Component } from "react";
import { AppContext } from "../Context";

class AddUser extends Component {
  static contextType = AppContext;

  insertUser = event => {
    this.context.insertUser(
      event,
      this.firstname.value,
      this.lastname.value,
      this.gender.value,
      this.birthday.value,
      this.email.value,
      this.address.value,
      this.telephone.value,
      console.log(this.gender.value)
    );
  };

  render() {
    return (
      <form onSubmit={this.insertUser} ref={form => (this.form = form)}>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label className="font-weight-bold">Firstname</label>
            <input
              type="text"
              name="firstname"
              ref={val => (this.firstname = val)}
              className="form-control"
              placeholder="Firstname"
            />
          </div>
          <div className="form-group col-sm-6">
            <label className="font-weight-bold">Lastname</label>
            <input
              type="text"
              name="lastname"
              ref={val => (this.lastname = val)}
              className="form-control"
              placeholder="Lastname"
            />
          </div>
          <div className="form-group col-sm-4">
            <label className="font-weight-bold">Gender</label>
            <input
              type="text"
              name="gender"
              ref={val => (this.gender = val)}
              className="form-control"
              placeholder="Male, Female"
            />
          </div>
          <div className="form-group col-sm-5">
            <label className="font-weight-bold">Telephone number</label>
            <input
              type="tel"
              name="telephone"
              ref={val => (this.telephone = val)}
              className="form-control"
              placeholder="Telephone number"
            />
          </div>
          <div className="form-group col-sm-3">
            <label className="font-weight-bold">Birthday</label>
            <input
              type="date"
              name="birthday"
              ref={val => (this.birthday = val)}
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-6">
            <label className="font-weight-bold">Email</label>
            <input
              type="email"
              name="email"
              ref={val => (this.email = val)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-sm-6">
            <label className="font-weight-bold">Address</label>
            <input
              type="text"
              name="address"
              ref={val => (this.address = val)}
              className="form-control"
              placeholder="Address"
            />
          </div>
          <br />
          <br />
          <br />
          <br />

          <div className="form-group col-sm-12 text-right">
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary col-sm-12 p-2"
            >
              Add user
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default AddUser;
