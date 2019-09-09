import React from "react";
import { Provider } from "./Context";
import AllUsers from "./components/GetUser";
import AddUser from "./components/AddUser";
import Actions from "./Actions/Actions";

class App extends Actions {
  render() {
    const contextValue = {
      all_users: this.state.users,
      get_users: this.fetchUsers,
      editMode: this.editMode,
      cancelEdit: this.cancelEdit,
      handleUpdate: this.handleUpdate,
      handleDelete: this.handleDelete,
      insertUser: this.insertUser
    };
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-white">
          <div className="p-5">
            <div className="card shadow-sm">
              <h1 className="card-header text-center bg-white">
                User Management
              </h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <AddUser />
                  </div>
                  <h1 className="AllUser">
                    <style jsx>{`
                      .AllUser {
                        margin: 5px 5px 25px 15px;
                      }
                      .card-header {
                        background-color: red;
                      }
                    `}</style>
                    All Users
                  </h1>
                  <div className="col-md-12 table-responsive">
                    <AllUsers />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
