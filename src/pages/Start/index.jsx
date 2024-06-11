import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Rules, Subtitle, Title } from "./styles";

export default function Start() {
  const navigation = useNavigation();

  const handleNavToPlayAlone = () => {
    navigation.navigate("PlayAlone");
  };
  const handleNavToPlayTogether = () => {
    console.log("Teste de play together");
  };

  const handleNavToRules = () => {
    navigation.navigate("Rules");
  };

  return (
    <Container>
      <Logo source={require("../../assets/logo.jpg")} />
      <Title>Bem-vindo ao {"\n"} Bomb Game</Title>
      <Subtitle>Esolha um modo de jogo</Subtitle>
      <ButtonComponent
        buttonText={"Jogar sozinho"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"Jogar em dupla"}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}
