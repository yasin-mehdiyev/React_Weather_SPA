import React, { FC } from 'react';
import Container from './components/Layout/Container';
import Row from './components/Layout/Row';
import Wrapper from './components/Layout/Wrapper';
import WeatherForm from './components/WeatherForm';
import classes from "./styles/Common.module.css";

const App: FC = () => {
  return (
    <Container>

      <section className="form_weather mt-3">
        <Row>
          <div className="col-12">
            <Wrapper>
              <div className={classes.text_center}>
                <h2 className={`${classes.margin_bottom} ${classes.font_weight}`}>Weather Application</h2>
                <WeatherForm />
              </div>
            </Wrapper>
          </div>
        </Row>
      </section>

    </Container>
  )
}

export default App;