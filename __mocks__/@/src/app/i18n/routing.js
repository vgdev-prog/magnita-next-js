module.exports = {
  Link: ({ children, ...props }) => {
    const React = require('react')
    return React.createElement('a', props, children)
  },
  routing: {
    locales: ['ua', 'ru', 'en'],
  },
}