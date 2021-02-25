import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App/>)
  const header = screen.getByText(
    /Magic: The Gathering Five Color Disposition/
  )
  expect(header).toBeInTheDocument()
})
