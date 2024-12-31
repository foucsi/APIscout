class UserDTO {
  constructor(data) {
    this.id = data.id || data._id;
    this.username = data.username;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
    this.isActive = data.isActive;
    this.profilePicture = data.profilePicture;
    this.lastLogin = data.lastLogin;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static fromEntity(user) {
    return new UserDTO(user);
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      isActive: this.isActive,
      profilePicture: this.profilePicture,
      lastLogin: this.lastLogin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = UserDTO;
