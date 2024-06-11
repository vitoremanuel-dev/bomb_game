import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import {
  Container,
  TextTimer,
  Timer,
  TipContainer,
  TipText,
  TipTitle,
  Title,
} from "./styled";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PlayAlone() {
  const navigation = useNavigation();

  const handleStartGame = () => {
    Alert.alert("Jogo iniciado");
  };

  const handleNavToStart = () => {
    navigation.navigate("Start");
  };

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      {/* <ImageBackground></ImageBackground> Colocar a imagem da bomb aqui*/}
      <View
        style={{
          minHeight: 130,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timer>
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </View>
      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Sua dica vai estar aqui</TipText>
      </TipContainer>

      <PasswordInput />

      <ButtonComponent buttonText={"Iniciar"} handlePress={handleStartGame} />

      <ButtonComponent buttonText={"Página inicial"} handlePress={handleNavToStart} />
    </Container>
  );
}
