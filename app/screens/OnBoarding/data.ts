import { OnBoardingProps } from "@/interfaces/template/OnBoarding";
import AirPlane from "../../../assets/images/illustrations/airplane.svg"

export const onBoardingData: OnBoardingProps[] = [
    {
        title: "Bem vindo ao Quick Travel",
        description: "A QuickTravel é muito mais do que uma agência de viagens, é o futuro misturado com rapidez na palma da sua mão.",
        lineDirection: "left",
        image: AirPlane,
        buttonText: "Próximo",
        buttonAction: () => {
            console.log("Próximo passo")
        }
    }
]