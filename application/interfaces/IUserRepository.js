/**
 * Interface for User Repository
 * @interface IUserRepository
 */
class IUserRepository {
  /**
   * Find user by ID
   * @param {string} id
   * @returns {Promise<User>}
   */
  findById(id) {
    throw new Error('Method not implemented');
  }

  /**
   * Find user by email
   * @param {string} email
   * @returns {Promise<User>}
   */
  findByEmail(email) {
    throw new Error('Method not implemented');
  }

  /**
   * Create new user
   * @param {Object} userData
   * @returns {Promise<User>}
   */
  create(userData) {
    throw new Error('Method not implemented');
  }

  /**
   * Update user
   * @param {string} id
   * @param {Object} userData
   * @returns {Promise<User>}
   */
  update(id, userData) {
    throw new Error('Method not implemented');
  }

  /**
   * Delete user
   * @param {string} id
   * @returns {Promise<boolean>}
   */
  delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = IUserRepository;
