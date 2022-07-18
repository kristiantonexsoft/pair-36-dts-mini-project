import React, { Component } from 'react';
import { connect } from "react-redux"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content-page">
            {/* Start content */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <h3 className="page-title"><b><i className="fas fa-folder-open" />&nbsp; Register - Sistem Informasi Bioskop</b></h3>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active">DTS Pair 36 Kristianto - Riki Purnama</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="page-content-wrapper">
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <div className="card bg-primary mini-stat position-relative">
                        <div className="card-body">
                          <div className="mini-stat-desc">
                            <h6 className="verti-label text-white-50">Bioskop</h6>
                            <div className="text-white">
                              <h6 className="mt-0 text-white-50">Menu</h6>
                              <h4 className="mb-3 mt-0"><b>Login</b></h4>
                            </div>
                            <div className="mini-stat-icon">
                              <i className="fas fa-clock  display-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);