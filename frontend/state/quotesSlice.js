// ✨ create your `quotesSlice` in this module
import { createSlice } from '@reduxjs/toolkit'

let id = 1
export const getNextId = () => id++



const quotesSlice = createSlice({

name: 'quotes',
initialState: {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}, 
reducers: {
  toggleVisibility (state) {
state.displayAllQuotes = !state.displayAllQuotes
  },
  deleteQuote(state, action) {
    state.quotes = state.quotes.filter(qt => qt.id !== action.payload)
  },
  editQuoteAuthenticity(state, action) {
const quoteToEdit = state.quotes.find(qt => qt.id === action.payload)
quoteToEdit.apocryphal = !quoteToEdit.apocryphal
  },
  setHighlightedQuot(state, action) {
if(state.highlightedQuote === action.payload){
  state.highlightedQuote = null 
} else {
  state.highlightedQuote =action.payload
}
  },
  createQuote(state, action) {
state.quotes.push(action.payload)
  },
}


})
export default quotesSlice.reducer
export const {toggleVisibility, deleteQuote,editQuoteAuthenticity, setHighlightedQuot, createQuote} = quotesSlice.actions
