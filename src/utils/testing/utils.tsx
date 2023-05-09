import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function withQueryClient(Component: any) {
  return function WrappedComponent(props: any) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
      </QueryClientProvider>
    );
  };
}

export const mockShopContext = {
  addItem: jest.fn(),
  cart: [],
  cartSize: 0,
  removeItem: jest.fn(),
  resetCart: jest.fn(),
  cartPrice: 0,
};

export default withQueryClient;
