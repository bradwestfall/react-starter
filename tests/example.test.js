import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

function Example() {
  return <div data-testid="example">0</div>
}

describe('Example', () => {
  it('should have 0', () => {
    render(<Example />)
    const div = screen.getByTestId('example')
    expect(div.innerHTML).toEqual('0')
  })
})
