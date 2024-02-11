import { render, screen } from '@testing-library/react';
import Button from '@/app/components/Atoms/Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  })
})
