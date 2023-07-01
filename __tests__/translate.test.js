import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Translate from '@/components/homeComponents/navbarComponents/Translate'


describe('Translate component test', ()=>{

    let component = render(<Translate/>)   
    
    test('', ()=>{
        expect(component.getByRole('link')).toBeInTheDocument()
        expect(component.getByRole('flag')).toBeInTheDocument()
    })
})