import React from "react";
import Axios from "axios";

class Actions extends React.Component {
  state = {
    users: []
  };

  // FETCH USERS FROM DATABASE
  fetchUsers = () => {
    Axios.get("http://192.168.64.2/user-management/all-user.php")
      .then(({ data }) => {
        if (data.success === 1) {
          this.setState({
            users: data.users.reverse()
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  // ON EDIT MODE
  editMode = id => {
    let users = this.state.users.map(user => {
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });

    this.setState({
      users
    });
  };

  //CANCEL EDIT MODE
  cancelEdit = id => {
    let users = this.state.users.map(user => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    this.setState({
      users
    });
  };
  // UPDATE USER
  handleUpdate = (
    id,
    firstname,
    lastname,
    gender,
    birthday,
    email,
    address,
    telephone
  ) => {
    Axios.post("http://192.168.64.2/user-management/update-user.php", {
      id: id,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      birthday: birthday,
      email: email,
      address: address,
      telephone: telephone
    })
      .then(({ data }) => {
        if (data.success === 1) {
          let users = this.state.users.map(user => {
            if (user.id === id) {
              user.firstname = firstname;
              user.lastname = lastname;
              user.gender = gender;
              user.birthday = birthday;
              user.email = email;
              user.address = address;
              user.telephone = telephone;
              user.isEditing = false;
              return user;
            }
            return user;
          });
          this.setState({
            users
          });
        } else {
          alert(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // DELETE USER
  handleDelete = id => {
    let deleteUser = this.state.users.filter(user => {
      return user.id !== id;
    });

    Axios.post("http://192.168.64.2/user-management/delete-user.php", {
      id: id
    })
      .then(({ data }) => {
        if (data.success === 1) {
          this.setState({
            users: deleteUser
          });
        } else {
          alert(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // INSERT USER
  insertUser = (
    event,
    firstname,
    lastname,
    gender,
    birthday,
    email,
    address,
    telephone
  ) => {
    event.preventDefault();
    event.persist();
    Axios.post("http://192.168.64.2/user-management/add-user.php", {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      birthday: birthday,
      email: email,
      address: address,
      telephone: telephone
    })
      .then(
        function({ data }) {
          if (data.success === 1) {
            this.setState({
              users: [
                {
                  id: data.id,
                  firstname: firstname,
                  lastname: lastname,
                  gender: gender,
                  birthday: birthday,
                  email: email,
                  address: address,
                  telephone: telephone
                },
                ...this.state.users
              ]
            });
            event.target.reset();
          } else {
            alert(data.msg);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default Actions;
