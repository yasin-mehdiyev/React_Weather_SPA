import { FC } from 'react';

// Components
import Container from '../../components/Layout/Container';
import Row from '../../components/Layout/Row';
import Wrapper from '../../components/Layout/Wrapper';
import WeatherForm from '../../components/WeatherForm';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper';
import TodayForecast from '../../components/Forecast/TodayForecast/Index';
import TodayForecastDetail from '../../components/Forecast/TodayForecast/Detail';
import FutureForecast from '../../components/Forecast/FutureForecast/List';

// Styles
import classes from "../../styles/Common.module.css";
import forecastClasses from "../../styles/Forecast.module.css";

const Forecast: FC = () => {
  return (
    <Container>

      <section className="mt-3">
        <Wrapper bgColor="#fff">
          <Row>
            <div className="col-12">
              <div className={classes.text_center}>
                <h2 className={`${classes.margin_bottom} ${classes.font_weight}`}>Weather Application</h2>
                <WeatherForm />
              </div>
            </div>
          </Row>
        </Wrapper>
      </section>

      <section className={`${forecastClasses.forecast} mt-5`}>
        <Wrapper bgColor="#333">
          <Row>
            <div className="col-4">
              <TodayForecast />
            </div>

            <div className="col-8">

              <ForecastWrapper>
                <>
                  <TodayForecastDetail />
                  <FutureForecast />
                </>
              </ForecastWrapper>
            </div>
          </Row>
        </Wrapper>
      </section>

    </Container>
  )
}

export default Forecast;