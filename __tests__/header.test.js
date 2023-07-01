import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../src/components/homeComponents/textComponents/Header'
import Title  from '../src/components/homeComponents/textComponents/Title'


describe('Header component', ()=>{
    const component = render(
            <Header>
                header
            </Header>
        )
    afterEach(() => {
        cleanup
    });

    test('Header must be render with children', ()=>{
        expect(component.getByText('header')).toBeInTheDocument()
    })

})
