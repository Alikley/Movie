import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colorScheme = score > 7.0 ? "green" : score > 6.0 ? "yellow" : "red"; // Default color

  if (score > 75) {
    colorScheme = "green";
  } else if (score > 60) {
    colorScheme = "yellow";
  } 


  return (
    <Badge colorScheme={colorScheme} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  );
};

export default CriticScore;