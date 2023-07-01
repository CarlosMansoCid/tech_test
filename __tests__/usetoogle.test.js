import React from 'react'
import { act, cleanup, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useToogle from '@/hooks/useToogle'


describe('useToogle test', ()=>{

    let results
    beforeEach(()=>{
        const {result} = renderHook(() => useToogle())
        results = result
    })
    afterEach(()=>{
        cleanup
    })    

    test('Initial value must be false', () => {
        expect( results.current[0] ).toBe(false)
    })
    test('setTrue, setFalse & toogle must be instances of a function', ()=>{
        expect(results.current[1]).toBeInstanceOf(Function)
        expect(results.current[2]).toBeInstanceOf(Function)
        expect(results.current[3]).toBeInstanceOf(Function)
    })
    test('Value must be true', ()=>{
        act(()=>{results.current[1]()})
        expect(results.current[0]).toBe(true)
    })
    test('Value must be false', ()=>{
        act(()=>{results.current[1]()})
        act(()=>{results.current[2]()})
        expect(results.current[0]).toBe(false)
    })
    test('Value must toogle', ()=>{
        expect(results.current[0]).toBe(false)
        act(()=>{results.current[3]()})
        expect(results.current[0]).toBe(true)
        act(()=>{results.current[3]()})
        expect(results.current[0]).toBe(false)
    })
        
})