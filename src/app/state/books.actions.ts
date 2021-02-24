import { createAction, props } from "@ngrx/store";

export const addBook = createAction(
  "[book list] Add Book",
  props<{ bookId }>()
);

export removeBook = createAction(
  "[book collection] Removo Book",
  props<{ bookId }>() 
);
