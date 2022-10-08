import {
  StatsWrapper,
  StatsList,
  StatsListItem,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';

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

export default Statistics;
