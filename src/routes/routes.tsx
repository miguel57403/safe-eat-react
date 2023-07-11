import { AdvertisementsFormPage } from "pages/AdvertisementsFormPage";
import { AdvertisementsPage } from "pages/AdvertisementsPage";
import { LoginPage } from "pages/Auth/LoginPage";
import { RestaurantNewPage } from "pages/Auth/RestaurantFormPage";
import { RestaurantSelectPage } from "pages/Auth/RestaurantSelectPage";
import { SignUpPage } from "pages/Auth/SignUpPage";
import { HomePage } from "pages/HomePage";
import { IngredientsFormPage } from "pages/IngredientsFormPage";
import { IngredientsPage } from "pages/IngredientsPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { OrdersFormPage } from "pages/OrdersFormPage";
import { OrdersPage } from "pages/OrdersPage";
import { ProductsFormPage } from "pages/ProductsFormPage";
import { ProductsPage } from "pages/ProductsPage";
import { ProfileFormPage } from "pages/ProfileFormPage";
import { SectionsFormPage } from "pages/SectionsFormPage";
import { SectionsPage } from "pages/SectionsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "routes/PrivateRouter";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/signup"
        element={
          <ProtectedRoute>
            <SignUpPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/restaurant/select"
        element={
          <ProtectedRoute>
            <RestaurantSelectPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/restaurant/new"
        element={
          <ProtectedRoute>
            <RestaurantNewPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/advertisements"
        element={
          <ProtectedRoute>
            <AdvertisementsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/advertisements/new"
        element={
          <ProtectedRoute>
            <AdvertisementsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/advertisements/:id"
        element={
          <ProtectedRoute>
            <AdvertisementsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <OrdersFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/new"
        element={
          <ProtectedRoute>
            <ProductsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ingredients"
        element={
          <ProtectedRoute>
            <IngredientsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ingredients/new"
        element={
          <ProtectedRoute>
            <IngredientsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ingredients/:id"
        element={
          <ProtectedRoute>
            <IngredientsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sections"
        element={
          <ProtectedRoute>
            <SectionsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sections/new"
        element={
          <ProtectedRoute>
            <SectionsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sections/:id"
        element={
          <ProtectedRoute>
            <SectionsFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/dashboard" />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <NotFoundPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
