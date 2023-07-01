import React from 'react'
import { act, cleanup, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useSlide from '@/hooks/useSlide'


describe('useToogle test', ()=>{

    let results
    beforeEach(()=>{
        const {result} = renderHook((pages = 3) => useSlide(pages))
        results = result
    })
    afterEach(()=>{
        cleanup
    })    

    test('Initial value must be 0', () => {
        expect( results.current[0] ).toEqual(0)
    })
    test('handlePrec & handleNext must be instances of a function', ()=>{
        expect(results.current[1]).toBeInstanceOf(Function)
        expect(results.current[2]).toBeInstanceOf(Function)
    })
    test('Value must be 2', ()=>{
        act(()=>{results.current[2]()})
        act(()=>{results.current[2]()})
        expect(results.current[0]).toBe(2)
    })
    test('Value must be 1', ()=>{
        act(()=>{results.current[2]()})
        act(()=>{results.current[2]()})
        act(()=>{results.current[1]()})
        expect(results.current[0]).toBe(1)
    })        
})