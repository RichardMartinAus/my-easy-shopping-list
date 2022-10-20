const { AuthenticationError } = require('apollo-server-express');
const { User, List } = require('../models');
const { signToken } = require('../utils/auth');
