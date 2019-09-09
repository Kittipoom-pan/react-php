import React, { Component } from "react";
import { AppContext } from "../Context";
class GetUsers extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.get_users();
  }

  handleUpdate = id => {
    this.context.handleUpdate(
      id,
      this.firstname.value,
      this.lastname.value,
      this.gender.value,
      this.birthday.value,
      this.email.value,
      this.address.value,
      this.telephone.value
    );
  };

  render() {
    let allUsers;
    let mainData;

    allUsers = this.context.all_users.map(
      ({
        id,
        firstname,
        lastname,
        gender,
        birthday,
        email,
        address,
        telephone,
        isEditing
      }) => {
        return isEditing === true ? (
          <tr key={id}>
            <td>
              <input
                className="form-control"
                type="text"
                ref={item => (this.firstname = item)}
                defaultValue={firstname}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                ref={item => (this.lastname = item)}
                defaultValue={lastname}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                ref={item => (this.gender = item)}
                defaultValue={gender}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="date"
                ref={item => (this.birthday = item)}
                defaultValue={birthday}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="email"
                ref={item => (this.email = item)}
                defaultValue={email}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="text"
                ref={item => (this.address = item)}
                defaultValue={address}
              />
            </td>
            <td>
              <input
                className="form-control"
                type="tel"
                ref={item => (this.telephone = item)}
                defaultValue={telephone}
              />
            </td>
            <td>
              <button
                className="btn btn-success mr-2"
                onClick={() => this.handleUpdate(id)}
              >
                Save
              </button>
              <button
                onClick={() => this.context.cancelEdit(id)}
                className="btn btn-light"
              >
                Cancel
              </button>
            </td>
          </tr>
        ) : (
          <tr key={id}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{gender}</td>
            <td>{birthday}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{telephone}</td>
            <td>
              <button
                className="btn btn-dark mr-2"
                onClick={() => this.context.editMode(id)}
              >
                Edit
              </button>
              <button
                onClick={() => this.context.handleDelete(id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }
    );

    if (this.context.all_users.length > 0) {
      mainData = (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Address</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{allUsers}</tbody>
        </table>
      );
    } else {
      mainData = (
        <div className="alert alert-light" role="alert">
          <h4 className="alert-heading">No User Found!</h4>
          <hr />
          <p>Please Insert Some Users.</p>
        </div>
      );
    }
    return <>{mainData}</>;
  }
}
export default GetUsers;
