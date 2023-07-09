import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/Auth/LoginPage";
import { SignUpPage } from "pages/Auth/SignUpPage";
import { RestaurantSelectPage } from "pages/Auth/RestaurantSelectPage";
import { RestaurantNewPage } from "pages/Auth/RestaurantFormPage";
import { HomePage } from "pages/HomePage";
import { IngredientsPage } from "pages/IngredientsPage";
import { IngredientsFormPage } from "pages/IngredientsFormPage";
import { AdvertisementsPage } from "pages/AdvertisementsPage";
import { AdvertisementsFormPage } from "pages/AdvertisementsFormPage";
import { OrdersPage } from "pages/OrdersPage";
import { ProductsPage } from "pages/ProductsPage";
import { ProductsFormPage } from "pages/ProductsFormPage";
import { SectionsPage } from "pages/SectionsPage";
import { SectionsFormPage } from "pages/SectionsFormPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfileFormPage } from "pages/ProfileFormPage";
import { OrdersFormPage } from "pages/OrdersFormPage";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/restaurant/select" element={<RestaurantSelectPage />} />
      <Route path="/restaurant/new" element={<RestaurantNewPage />} />
      <Route path="/advertisements" element={<AdvertisementsPage />} />
      <Route path="/advertisements/new" element={<AdvertisementsFormPage />} />
      <Route path="/advertisements/:id" element={<AdvertisementsFormPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/:id" element={<OrdersFormPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/new" element={<ProductsFormPage />} />
      <Route path="/products/:id" element={<ProductsFormPage />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/ingredients/new" element={<IngredientsFormPage />} />
      <Route path="/ingredients/:id" element={<IngredientsFormPage />} />
      <Route path="/sections" element={<SectionsPage />} />
      <Route path="/sections/new" element={<SectionsFormPage />} />
      <Route path="/sections/:id" element={<SectionsFormPage />} />
      <Route path="/profile" element={<ProfileFormPage />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
