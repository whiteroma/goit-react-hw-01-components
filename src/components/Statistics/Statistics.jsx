import {
  StatsWrapper,
  StatsList,
  StatsListItem,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <StatsWrapper>
      <Title>{title}</Title>

      <StatsList>
        {stats.map(stat => {
          return (
            <StatsListItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatsListItem>
          );
        })}
      </StatsList>
    </StatsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
