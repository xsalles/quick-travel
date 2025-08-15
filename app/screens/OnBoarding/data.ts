import { OnBoardingProps } from "@/interfaces/template/OnBoarding";
import AirPlane from "../../../assets/images/illustrations/airplane.svg"
import Buildings from "../../../assets/images/illustrations/buildings.svg"

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
    },
    {
        title: "Hóteis e voos de ótima qualidade!",
        description: "Os melhores Hóteis e Voos com ótimos atendimentos.",
        buttonText: "Próximo",
        image: Buildings,
        lineDirection: "center",
    },
    {
        title: "Hóteis e voos de ótima qualidade!",
        description: "Os melhores Hóteis e Voos com ótimos atendimentos.",
        buttonText: "Próximo",
        image: Buildings,
        lineDirection: "center",
    }
]