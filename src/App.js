// import Accordions from "./components/Accordion/Accordions";
// import RandomColor from "./components/random-color/Random-color";
// import StarRating from "./components/star-rating/StarRating";
// import ImageSlider from "./components/image-slider/ImageSlider";
// import LoadMore from "./components/load-more/LoadMore";
// import Treeview from "./components/treeview/Treeview";
// import QRGenerator from "./components/qr-code-generator/QRGenerator";
// import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
// import CustomScroll from "./components/custom-scroll/CustomScroll";
// import Tabs from "./components/custom-tabs/Tabs";
// import ModalTest from "./components/customModalPopup/ModalTest";
// import GithubProfile from "./components/githib-user-profiles/GithubProfile";
// import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";
// import TicTacToe from "./components/tic-tac-toe/TicTacToe";

// import FeatureFlagsGlobalState from "./components/feature-flags/context";
// import FeatureFlags from "./components/feature-flags/FeatureFlags";

// import UseFetchTest from "./components/use-fetch-hook/UseFetchTest";
// import TestUseOutsideClickHook from "./components/use-outside-click-hook/TestUseOutsideClickHook";

// import TestUseWindowResize from "./components/use-window-resize/TestUseWindowResize";
// import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
// import Weather from "./components/weather-app";

// import FoodRecipe from "./components/food-recipe";
// import GlobalStateContext from "./components/food-recipe/context";

// import ShoppingCart from "./components/shopping-cart-with-redux-toolkit";
// import { Provider } from "react-redux";
// import store from "./components/shopping-cart-with-redux-toolkit/store";

// import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
// import theme from "./theme";
// import GlobalState from "./components/expense-tracker/context";
// import Main from "./components/expense-tracker/components/main";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Accordions /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={7} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={10} /> */}
      {/* <LoadMore /> */}
      {/* <Treeview /> */}
      {/* <QRGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <CustomScroll url='https://dummyjson.com/products/?limit=100' /> */}
      {/* <Tabs /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfile /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}

      {/* <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState> */}

      {/* <UseFetchTest /> */}

      {/* <TestUseOutsideClickHook /> */}

      {/* <TestUseWindowResize /> */}

      {/* <ScrollToTopAndBottom /> */}

      {/* <Weather /> */}

      {/* comment App.css text align for this file, and uncomment when this food recipe is not being used*/}
      {/* <GlobalStateContext>
        <FoodRecipe />
      </GlobalStateContext> */}

      {/* ShoppingCart with redux toolkit and spinner */}
      {/* <Provider store={store}>
        <ShoppingCart />
      </Provider> */}

      {/* <GlobalState>
        <ChakraProvider theme={theme}>
          <Container
            bg={"#f8fafd"}
            maxW={"Container.3xl"}
            height={"100vh"}
            p={"0"}
          >
            <Flex height={"full"}>
              <Box height={'full'} flex={5} w={['20%', '30%', '20%', '50%', '60%']}>
                <Main/>
              </Box>
            </Flex>
          </Container>
        </ChakraProvider>
      </GlobalState> */}
    </div>
  );
}

export default App;
