import { LoginPage } from "pages/Auth/Login";
import { SignUpPage } from "pages/Auth/SignUp";
import { RestaurantSelectPage } from "pages/Auth/RestaurantSelect";
import { RestaurantNewPage } from "pages/Auth/RestaurantForm";
import { HomePage } from "pages/Home";
import { IngredientsPage } from "pages/Ingredients";
import { IngredientsFormPage } from "pages/IngredientsForm";
import { OrdersPage } from "pages/Orders";
import { ProductsPage } from "pages/Products";
import { ProductsFormPage } from "pages/ProductsForm";
import { SectionsPage } from "pages/Sections";
import { SectionsFormPage } from "pages/SectionsForm";
import { NotFoundPage } from "pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/restaurant/select" element={<RestaurantSelectPage />} />
      <Route path="/restaurant/new" element={<RestaurantNewPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/new" element={<ProductsFormPage />} />
      <Route path="/products/:id" element={<ProductsFormPage />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/ingredients/new" element={<IngredientsFormPage />} />
      <Route path="/ingredients/:id" element={<IngredientsFormPage />} />
      <Route path="/sections" element={<SectionsPage />} />
      <Route path="/sections/new" element={<SectionsFormPage />} />
      <Route path="/sections/:id" element={<SectionsFormPage />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
