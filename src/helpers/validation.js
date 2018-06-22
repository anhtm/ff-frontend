const constraints = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },

  first_name: {
    presence: {
      message: '^Please enter your first name'
    }
  },

  last_name: {
    presence: {
      message: '^Please enter your last name'
    }
  },

  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 8,
      message: '^Your password must have at least 8 characters'
    }
  },

  confirm_pw: {
    presence: {
      message: '^Please confirm your password'
    }
    // TODO: isMatched()
  }
};
