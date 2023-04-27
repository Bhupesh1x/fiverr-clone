import React, { Suspense } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Home = React.lazy(() => import("./pages/Home"));
const Categories = React.lazy(() => import("./pages/Categories"));
const Category = React.lazy(() => import("./pages/Category"));
const Login = React.lazy(() => import("./pages/Login"));
const Message = React.lazy(() => import("./pages/Message"));
const Messages = React.lazy(() => import("./pages/Messages"));
const MyCategories = React.lazy(() => import("./pages/MyCategories"));
const MyOrders = React.lazy(() => import("./pages/MyOrders"));
const Register = React.lazy(() => import("./pages/Register"));
const AddNewCategory = React.lazy(() => import("./pages/AddNewCategory"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Pay = React.lazy(() => import("./pages/Pay/Pay"));
const Success = React.lazy(() => import("./pages/Success/Success"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/categories"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="/category/:id"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/message/:id"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Message />
            </Suspense>
          }
        />
        <Route
          path="/messages"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Messages />
            </Suspense>
          }
        />
        <Route
          path="/gigs"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <MyCategories />
            </Suspense>
          }
        />
        <Route
          path="/myorders"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <MyOrders />
            </Suspense>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/addnewgigs"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <AddNewCategory />
            </Suspense>
          }
        />
        <Route
          path="/pay/:id"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Pay />
            </Suspense>
          }
        />
        <Route
          path="/success"
          exact
          element={
            <Suspense fallback={"Loading..."}>
              <Success />
            </Suspense>
          }
        />
      </Routes>
      <Suspense fallback={"Loading..."}>
        <Footer />
      </Suspense>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
