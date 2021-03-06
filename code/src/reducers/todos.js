import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: "Test list",
    items: [
      {
        description: "Yes, this is done!",
        done: true
      },
      {
        description: "No, this is not done. Yet.",
        done: false
      },
      {
        description: "Do this. Just do it.",
        done: false
      }
    ]
  }
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload
      state.list.items.push(itemInfo)
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      )
    }
  }
})
