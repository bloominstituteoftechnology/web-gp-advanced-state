import React from 'react'

export default class Form extends React.Component {
  render() {
    const {
      value,
      onSubmit,
      onChange,
      toggleShouldShow,
      displayCompleteds,
      disabled,
    } = this.props
    return (
      <>
        <form id="todoForm" onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Type todo"
          />
          <input type="submit" disabled={disabled} />
        </form>

        <button onClick={toggleShouldShow}>
          {displayCompleteds ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}
