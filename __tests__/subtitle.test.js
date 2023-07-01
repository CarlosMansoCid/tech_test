import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SubTitle  from '../src/components/homeComponents/textComponents/SubTitle'


afterEach(() => {
    cleanup
});
describe('Header component', ()=>{
    const component = render(
            <SubTitle>
                subtitle
            </SubTitle>
        )

    test('Header must be render with children', ()=>{
        expect(component.getByText('subtitle')).toBeInTheDocument()
    })

})
