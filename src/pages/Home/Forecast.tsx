import { FC } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { selectForecasts } from '../../redux/features/forecast/forecastSlice';

// Components
import Container from '../../components/Layout/Container';
import Row from '../../components/Layout/Row';
import Wrapper from '../../components/Layout/Wrapper';
import WeatherForm from '../../components/WeatherForm';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper';
import TodayForecast from '../../components/Forecast/TodayForecast/Index';
import TodayForecastDetail from '../../components/Forecast/TodayForecast/Detail';
import FutureForecastList from '../../components/Forecast/FutureForecast/List';
import BestdaySeller from '../../components/Forecast/BestdaySeller/Index';

// Styles
import classes from "../../styles/Common.module.css";
import forecastClasses from "../../styles/Forecast.module.css";

const Forecast: FC = () => {

  const forecasts: any = useSelector(selectForecasts);

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

      {
        forecasts && forecasts.data && forecasts.data.length > 0 ? (
          <>
            <section className={`${forecastClasses.forecast} mt-5`}>
              <Wrapper bgColor="#333">
                <Row>
                  <div className="col-4">
                    <TodayForecast forecasts={forecasts} />
                  </div>

                  <div className="col-8">

                    <ForecastWrapper>
                      <>
                        <TodayForecastDetail forecasts={forecasts} />
                        <FutureForecastList forecasts={forecasts} />
                      </>
                    </ForecastWrapper>
                  </div>
                </Row>
              </Wrapper>
            </section>

            <section className="mt-4 mb-4">
              <Wrapper bgColor="#fff">
                <Row>
                  <BestdaySeller forecasts={forecasts} />
                </Row>
              </Wrapper>
            </section>
          </>
        ) : null
      }

    </Container>
  )
}

export default Forecast;