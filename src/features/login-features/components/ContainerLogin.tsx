import { IonItem, IonIcon, IonInput, IonButton } from "@ionic/react";
import { personOutline, lockClosedOutline } from "ionicons/icons";
import { useState } from "react";
import { AuthenticationFormInterface } from "../../../types/authentication-type";
import { useAuthentication } from "../hooks/useAuthentication";

const ContainerLogin: React.FC = () => {
    const [formData, setFormData] = useState<AuthenticationFormInterface>({ badgeId: "", password: "" });
    const { mutate } = useAuthentication();

    const handleInput = (key: keyof AuthenticationFormInterface, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLIonInputElement>) => {
        if (e.key === "Enter") {
            handleLogin()
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {
        mutate(formData);
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="w-11/12 p-5 rounded shadow-lg md:w-1/2 lg:w-1/3 dark:bg-[#181818]">
                <div className="mb-4 text-center">
                    <span className="text-xl font-bold">IT Application</span>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <IonItem>
                            <IonIcon icon={personOutline} slot="start" />
                            <IonInput type="text" label="Username" labelPlacement="floating" value={formData.badgeId} onIonInput={(e) => handleInput("badgeId", e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={lockClosedOutline} slot="start" />
                            <IonInput type="password" label="Password" labelPlacement="floating" value={formData.password} onIonInput={(e) => handleInput("password", e.detail.value!)} onKeyUp={handleKeyUp} />
                        </IonItem>
                        <IonButton type="submit" expand="block">Submit</IonButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContainerLogin;