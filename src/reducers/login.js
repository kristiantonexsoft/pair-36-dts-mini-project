let defaultState = {
    users: [{
        username : "user",
        password : "user",
        nama : "User Bioskop",
        phone : "081000111222",
        email : "admin@nexsoft.co.id",
        role : "Admin"
    }]
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default userReducer