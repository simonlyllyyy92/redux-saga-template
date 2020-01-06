import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import GlobalStyled from "./globalStyled.js"
import "./i18next"
import "antd/dist/antd.css"

//redux dependence import
import { Provider } from "react-redux"

//loading animation import
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import {
  LoadingPageWrapper,
  TextWrapper,
  LoadingPageBody,
  BounceballWrapper,
  LoadingTitleWrapper,
  LoadingTitle
} from "./styled/staticPage/LoadingPageStyled"

import AxoisService from "./axios/config"

//redux persist config
import { PersistGate } from "redux-persist/integration/react"
import storeConfig from "./store/setStore"
const { persistor, store } = storeConfig()
AxoisService.setupInterceptors(store)

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        // <---------------------loading animation start------------------------->
        <Container fluid>
          <Row>
            <LoadingTitleWrapper>
              <LoadingTitle>App Title</LoadingTitle>
            </LoadingTitleWrapper>
          </Row>
          <Row>
            <LoadingPageBody>
              <LoadingPageWrapper>
                <div>
                  <BounceballWrapper></BounceballWrapper>
                  <TextWrapper>Loading</TextWrapper>
                </div>
              </LoadingPageWrapper>
            </LoadingPageBody>
          </Row>
        </Container>
        // <--------------------------loading animation end--------------------------->
      }
    >
      {/* set up the i18next and router */}
      <GlobalStyled />
      {/* set up the store persist */}
      <PersistGate loading={null} persistor={persistor}>
        <SampleRouter />
      </PersistGate>
    </Suspense>
  </Provider>,
  document.getElementById("root")
)
