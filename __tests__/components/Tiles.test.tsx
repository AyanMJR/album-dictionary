import Tiles from "@/app/components/Atoms/Tiles"
import UserIcon from "@/app/assets/user.svg";
import { render, screen } from '@testing-library/react';

describe('Tiles', () => {
  it('should render children', () => {
    render(<Tiles icon={UserIcon}><span>children</span></Tiles>);
    const span = screen.getByText('children');
    expect(span).toBeInTheDocument();
  })

  it('should render icon', () => {
    render(<Tiles icon={UserIcon}><span>children</span></Tiles>)
    const img = screen.getByAltText('logo');
    expect(img).toBeInTheDocument();
  })
})