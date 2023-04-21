import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
import MyCategories from "./pages/MyCategories";
import MyOrders from "./pages/MyOrders";
import Register from "./pages/Register";
import AddNewCategory from "./pages/AddNewCategory";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/category/:id" exact element={<Category />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/message/:id" exact element={<Message />} />
        <Route path="/messages" exact element={<Messages />} />
        <Route path="/gigs" exact element={<MyCategories />} />
        <Route path="/myorders" exact element={<MyOrders />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/addnewgigs" exact element={<AddNewCategory />} />
      </Routes>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
