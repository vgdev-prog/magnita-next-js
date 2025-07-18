const React = require('react')

module.exports = {
  TelegramIcon: ({ className }) => 
    React.createElement('svg', { 
      'data-testid': 'telegram-icon', 
      className 
    }, React.createElement('path')),
}