import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Title  from '../src/components/homeComponents/textComponents/Title'


describe('Header component', ()=>{
    const component = render(
            <Title>
                title
            </Title>
        )
    afterEach(() => {
        cleanup
    });

    test('Header must be render with children', ()=>{
        expect(component.getByText('title')).toBeInTheDocument()
    })

})
