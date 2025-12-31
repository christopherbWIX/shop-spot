import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';

// Import Wix Stores routes and loaders
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import {
  ProductDetailsRoute,
  productRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/product-details';
import {
  StoreCollectionRoute,
  storeCollectionRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Import pages
import HomePage from '@/components/pages/HomePage';
import CategoriesPage from '@/components/pages/CategoriesPage';
import TestPage from '@/components/pages/TestPage';

// Import layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Main layout component with header and footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout component that includes ScrollToTop and WixServicesProvider
function Layout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <MainLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: 'products/:slug',
        element: (
          <div className="bg-background py-12 px-8">
            <div className="max-w-[120rem] mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl uppercase text-primary mb-8">Product Details</h1>
              <ProductDetailsRoute />
            </div>
          </div>
        ),
        loader: productRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.product",
          identifiers: {
            slug: "STORES.PRODUCT.SLUG"
          }
        },
      },
      {
        path: 'store',
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: 'store/:categorySlug',
        element: (
          <div className="bg-background py-12 px-8">
            <div className="max-w-[120rem] mx-auto">
              <StoreCollectionRoute productPageRoute="/products" />
            </div>
          </div>
        ),
        loader: storeCollectionRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.category",
          identifiers: {
            categorySlug: "STORES.CATEGORY.SLUG"
          }
        }
      },
      {
        path: 'cart',
        element: (
          <div className="bg-background py-12 px-8">
            <div className="max-w-[120rem] mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl uppercase text-primary mb-8">Shopping Cart</h1>
              <Cart />
            </div>
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
