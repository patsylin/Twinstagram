/**
 * @jest-environment jsdom
 */


import ItemList from '../components/ItemList'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

//WHERE are we testing---describe
describe('ItemList Component', () => {
    //WHAT are we testing--test
    test('displays user in the browser', () => {
        //renders itemlist component in the testing environment
        render(<ItemList/>)

        //checking the jest environment browser window for the string 'user1'
        const user1 = screen.getAllByTextId('user1')

        //how are we testing/we do we expect to see
        expect(user1).toBeInTheDocument()
    })
})
