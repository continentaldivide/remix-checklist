import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../../app/_components/Header'

describe('Header.tsx', () => {
    test('renders', () => {
        const { asFragment, getByText } = render(<Header />)
        expect(getByText("Remix Checklist")).toBeInTheDocument()
    })
})