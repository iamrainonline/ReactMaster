import { configureStore } from "@reduxjs/toolkit";
import cacat from "./counter";

export default configureStore({
  reducer: {
    counter: cacat,
  },
});
