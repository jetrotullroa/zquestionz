import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import data from '../json/data.json';

const { title, questionnaire } = data; 
describe('Home', () => {
  it('renders a title', () => {
		render(<Home />)
		expect(screen.getByText("D&D Character Sheet")).toBeInTheDocument()
  })
})
